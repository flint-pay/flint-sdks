import type { ResponseMeta } from './types-42.js';
import type { Invoice, InvoicePaymentAttempt } from './types-28.js';
import type { PaymentIntentWithAction } from './types-37.js';
import type { SellerTaxAttestationRequest, SellerTaxAttestationRequestInput } from './types-47.js';
import type { APIKeyWithSecret } from './types-0.js';
import type { ImageRequest, ImageRequestInput } from './types-21.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { CallerSuppliedDeliveryMethodResultRequest, CallerSuppliedDeliveryMethodResultRequestInput } from './types-3.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput
} from './types-12.js';
import type { DeliveryInventoryAssignmentRequest, DeliveryInventoryAssignmentRequestInput } from './types-13.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPrefillRequest,
    CheckoutPromotionConfig,
    CheckoutQuickPayItemRequest,
    CheckoutRedirects,
    CheckoutSubscriptionTermsRequest,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutBuyerFieldsRequestRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestRequestInput,
    CheckoutTipConfigRequestRequestInput
} from './types-4.js';
import type { LegalSettings } from './types-30.js';
import type { ThemeConfig, ThemeConfigRequestInput } from './types-50.js';
/**
 * Shape $ (Value): {@link CloseCheckoutSessionRequest}. The request body for: Close checkout
 * session.
 */
export type CloseCheckoutSessionRequest = {
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Your note explaining why you are closing the checkout session. It
     * is not shown to the buyer. minLength: 1.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CloseCheckoutSessionRequestInput}. The request body for: Close checkout
 * session.
 */
export type CloseCheckoutSessionRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Your note explaining why you are closing the checkout session. It
     * is not shown to the buyer. minLength: 1.
     */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CloseOrderRequest}. The request body for: Close order. */
export type CloseOrderRequest = {
    /**
     * Shape $ (Value): string. Send keep to close while keeping collected money. Required when
     * collected money remains refundable to its original tenders, after pending refunds. Closing
     * does not refund money, and the order remains refundable. Accepted when nothing was
     * collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Your note explaining why you are closing the order. It is not shown
     * to the buyer. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CloseOrderRequestInput}. The request body for: Close order. */
export type CloseOrderRequestInput = {
    /**
     * Shape $ (Value): string. Send keep to close while keeping collected money. Required when
     * collected money remains refundable to its original tenders, after pending refunds. Closing
     * does not refund money, and the order remains refundable. Accepted when nothing was
     * collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep";
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Your note explaining why you are closing the order. It is not shown
     * to the buyer. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CollectInvoiceRequest}. The request body for: Collect invoice. */
export type CollectInvoiceRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_schedule_entry_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
};
/** Shape $ (Value): {@link CollectInvoiceRequestInput}. The request body for: Collect invoice. */
export type CollectInvoiceRequestInput = CollectInvoiceRequest;
/**
 * Shape $ (Value): {@link CollectInvoiceResponse}. A response containing `CollectInvoiceResult`
 * data.
 */
export type CollectInvoiceResponse = {
    /**
     * Shape $ (Value): {@link CollectInvoiceResult}. The invoice is the primary resource and
     * expected_version target; invoice_payment_attempt records the collection outcome.
     */
    "data": CollectInvoiceResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CollectInvoiceResult}. The invoice is the primary resource and
 * expected_version target; invoice_payment_attempt records the collection outcome.
 */
export type CollectInvoiceResult = {
    /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt} or null. Shape $.anyOf[1] (Value): {@link
     * InvoicePaymentAttempt}. An attempt to collect payment for an invoice. Shape $.anyOf[2]
     * (Value): null.
     */
    "invoice_payment_attempt": ((InvoicePaymentAttempt) | (null));
};
/** Shape $ (Value): {@link CompleteReturnRequest}. The request body for: Complete return. */
export type CompleteReturnRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "manual_completion", "exception_waived", "other". */
    "reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link CompleteReturnRequestInput}. The request body for: Complete return. */
export type CompleteReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string.  Value enum: "manual_completion", "exception_waived", "other". */
    "reason"?: "manual_completion" | "exception_waived" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ConfigurationVersionRequestInput}. The request body for: Revoke an API
 * key.
 */
export type ConfigurationVersionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link ConfirmCheckoutSessionCustomerVerificationRequestInput}. The code the
 * buyer typed.
 */
export type ConfirmCheckoutSessionCustomerVerificationRequestInput = {
    /**
     * Shape $ (Value): string. The six-digit code from the email or the text. minLength: 6.
     * maxLength: 6. pattern: ^[0-9]{6}$.
     */
    "code": string;
};
/**
 * Shape $ (Value): {@link ConfirmCustomerVerificationRequestInput}. The request body for: Confirm
 * a customer email verification.
 */
export type ConfirmCustomerVerificationRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "code": string;
};
/**
 * Shape $ (Value): {@link ConfirmEmailChangeRequest}. The request body for: Confirm an email
 * change.
 */
export type ConfirmEmailChangeRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "current_email_code"?: string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^[0-9]{6}$. */
    "new_email_code": string;
};
/**
 * Shape $ (Value): {@link ConfirmEmailChangeRequestInput}. The request body for: Confirm an email
 * change.
 */
export type ConfirmEmailChangeRequestInput = ConfirmEmailChangeRequest;
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequest}. The request body for: Confirm payment
 * intent.
 */
export type ConfirmPaymentIntentRequest = ((ConfirmPaymentIntentRequestToken)
    | (ConfirmPaymentIntentRequestPaymentMethod)
    | (ConfirmPaymentIntentRequestStripeConfirmationToken)
    | (ConfirmPaymentIntentRequestAttached)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestAttached}. Confirm using the payment source
 * already attached.
 */
export type ConfirmPaymentIntentRequestAttached = {
    /** Shape $ (Value): string.  Value enum: "attached". */
    "credential_type": "attached" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: boolean;
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestAttachedInput}. Confirm using the payment
 * source already attached.
 */
export type ConfirmPaymentIntentRequestAttachedInput = {
    /** Shape $ (Value): string.  Value enum: "attached". */
    "credential_type": "attached";
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: (false) & (false);
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestInput}. The request body for: Confirm payment
 * intent.
 */
export type ConfirmPaymentIntentRequestInput = ((ConfirmPaymentIntentRequestTokenInput)
    | (ConfirmPaymentIntentRequestPaymentMethodInput)
    | (ConfirmPaymentIntentRequestStripeConfirmationTokenInput)
    | (ConfirmPaymentIntentRequestAttachedInput));
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestPaymentMethod}. The `payment_method` variant
 * of `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestPaymentMethod = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: boolean;
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestPaymentMethodInput}. The `payment_method`
 * variant of `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestPaymentMethodInput = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false. Value enum: false.
     */
    "save_payment_method"?: (false) & (false);
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestStripeConfirmationToken}. The
 * `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestStripeConfirmationToken = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestStripeConfirmationTokenInput}. The
 * `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestStripeConfirmationTokenInput = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestToken}. The `token` variant of
 * `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestToken = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentRequestTokenInput}. The `token` variant of
 * `ConfirmPaymentIntentRequest`.
 */
export type ConfirmPaymentIntentRequestTokenInput = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token";
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * Shape $ (Value): boolean. On /confirm, saves cards only for standalone payment intents.
     * Saves the card this confirmation collects for the payment intent's customer, with usage
     * off_session, so you can charge it later without the buyer: subscriptions, automatic
     * invoices, or the customer's default. Send true only when the buyer agreed to that on your
     * page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay
     * credential in stripe.confirmation_token (created with setup_future_usage off_session) or
     * payment_source_token, and payments.payment_methods.write. Flint saves the card once the
     * payment is approved, sends payment_method.activated, and sets
     * payment_source.card.payment_method_id. If the bank asks the buyer to authenticate,
     * current_payment_action carries it; that one authentication also covers the saved card. For
     * order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards
     * using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
};
/**
 * Shape $ (Value): {@link ConfirmPaymentIntentResponse}. A response containing
 * `PaymentIntentWithAction` data.
 */
export type ConfirmPaymentIntentResponse = {
    /**
     * Shape $ (Value): {@link PaymentIntentWithAction}. One payment from a buyer, standalone or as
     * a leg of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": PaymentIntentWithAction;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link ConfirmReturnResolutionRequestInput}. The request body for: Confirm
 * return resolution.
 */
export type ConfirmReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link ConnectTaxConnectionRequest}. The request body for: Connect automatic
 * tax.
 */
export type ConnectTaxConnectionRequest = {
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Omit to apply the
     * change to the current resource. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SellerTaxAttestationRequest}. Presence records the seller's
     * agreement to the named disclosure version. The seller's agreement to the current automatic
     * sales tax disclosure, recorded when connect succeeds.
     */
    "seller_attestation": SellerTaxAttestationRequest;
};
/**
 * Shape $ (Value): {@link ConnectTaxConnectionRequestInput}. The request body for: Connect
 * automatic tax.
 */
export type ConnectTaxConnectionRequestInput = {
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Omit to apply the
     * change to the current resource. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SellerTaxAttestationRequestInput}. Presence records the seller's
     * agreement to the named disclosure version. The seller's agreement to the current automatic
     * sales tax disclosure, recorded when connect succeeds.
     */
    "seller_attestation": SellerTaxAttestationRequestInput;
};
/** Shape $ (Value): {@link CreateAPIKeyRequest}. The request body for: Create an API key. */
export type CreateAPIKeyRequest = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
})
    & ((Exclude<CreateAPIKeyRequestFull & object, readonly unknown[]>)
    | (Exclude<CreateAPIKeyRequestReadOnly & object, readonly unknown[]>)
    | (Exclude<CreateAPIKeyRequestRestricted & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestFull}. The `full` variant of `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestFull = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full".
     */
    "access": "full" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
});
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestFullInput}. The `full` variant of
 * `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestFullInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full".
     */
    "access": "full";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & (({
    "scopes"?: never;
}));
/** Shape $ (Value): {@link CreateAPIKeyRequestInput}. The request body for: Create an API key. */
export type CreateAPIKeyRequestInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & ((Exclude<CreateAPIKeyRequestFullInput & object, readonly unknown[]>)
    | (Exclude<CreateAPIKeyRequestReadOnlyInput & object, readonly unknown[]>)
    | (Exclude<CreateAPIKeyRequestRestrictedInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestReadOnly}. The `read_only` variant of
 * `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestReadOnly = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "read_only".
     */
    "access": "read_only" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
});
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestReadOnlyInput}. The `read_only` variant of
 * `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestReadOnlyInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "read_only".
     */
    "access": "read_only";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & (({
    "scopes"?: never;
}));
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestRestricted}. The `restricted` variant of
 * `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestRestricted = {
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "restricted".
     */
    "access": "restricted" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
};
/**
 * Shape $ (Value): {@link CreateAPIKeyRequestRestrictedInput}. The `restricted` variant of
 * `CreateAPIKeyRequest`.
 */
export type CreateAPIKeyRequestRestrictedInput = {
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "restricted".
     */
    "access": "restricted";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
};
/** Shape $ (Value): {@link CreateAPIKeyResponse}. A response containing `APIKeyWithSecret` data. */
export type CreateAPIKeyResponse = {
    /**
     * Shape $ (Value): {@link APIKeyWithSecret}. An API key including its `secret_key`, returned
     * by the calls that create or issue a key. A credential used to authenticate API requests.
     */
    "data": APIKeyWithSecret;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CreateBundleComponentRequest}. A component to include when creating a
 * bundle: a variant, its quantity and position, and an optional delivery profile override.
 */
export type CreateBundleComponentRequest = {
    /**
     * Shape $ (Value): string or null. Component delivery profile override. Omit to inherit the
     * variant's profile. Send null to clear it. minLength: 1.
     */
    "delivery_profile_id"?: string | null;
    /**
     * Shape $ (Value): integer. Display order among the bundle's components, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. Identifier of the product variant included in the bundle.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link CreateBundleComponentRequestInput}. A component to include when creating
 * a bundle: a variant, its quantity and position, and an optional delivery profile override.
 */
export type CreateBundleComponentRequestInput = CreateBundleComponentRequest;
/** Shape $ (Value): {@link CreateBundleRequest}. The request body for: Create bundle. */
export type CreateBundleRequest = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link CreateBundleComponentRequest}. Variants included in the
     * bundle and their quantities. Required when status is active; send status: inactive to create
     * a draft without components. Shape $[] (Value): {@link CreateBundleComponentRequest}. A
     * component to include when creating a bundle: a variant, its quantity and position, and an
     * optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequest>;
    /**
     * Shape $ (Value): string. Description of the bundle shown to buyers. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. Defaults to active; an
     * active bundle requires components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/** Shape $ (Value): {@link CreateBundleRequestInput}. The request body for: Create bundle. */
export type CreateBundleRequestInput = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link CreateBundleComponentRequestInput}. Variants included in
     * the bundle and their quantities. Required when status is active; send status: inactive to
     * create a draft without components. Shape $[] (Value): {@link
     * CreateBundleComponentRequestInput}. A component to include when creating a bundle: a
     * variant, its quantity and position, and an optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequestInput>;
    /**
     * Shape $ (Value): string. Description of the bundle shown to buyers. minLength: 1. maxLength:
     * 2048.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. Defaults to active; an
     * active bundle requires components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money": MoneyValueInput;
};
/** Shape $ (Value): {@link CreateCategoryRequest}. The request body for: Create category. */
export type CreateCategoryRequest = {
    /** Shape $ (Value): string. Description of the category. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Unique category handle, using lowercase letters, digits, and single
     * hyphens between words. Cannot be changed after creation. minLength: 1. maxLength: 100.
     * pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name": string;
};
/** Shape $ (Value): {@link CreateCategoryRequestInput}. The request body for: Create category. */
export type CreateCategoryRequestInput = {
    /** Shape $ (Value): string. Description of the category. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Unique category handle, using lowercase letters, digits, and single
     * hyphens between words. Cannot be changed after creation. minLength: 1. maxLength: 100.
     * pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateCheckoutDeliveryQuoteRequest}. The request body for: Create
 * delivery quote.
 */
export type CreateCheckoutDeliveryQuoteRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "basis_delivery_quote_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. Partial is fine when quoting: send what the
     * buyer has entered, at least country. A destination_address sent with a selection must be
     * complete; a selection that omits it uses the quote's destination, which may be partial. A
     * partial address for delivery quotes, previews, and buyer locations. Country is required when
     * any member is present.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): string or null. Optional assertion on
     * CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to
     * assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link DeliveryInventoryAssignmentRequest}. maxItems: 1000. Shape
     * $[] (Value): {@link DeliveryInventoryAssignmentRequest}. Assigns a quantity of an inventory
     * item at a location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequest>;
    /**
     * Shape $ (Value): Array of {@link CallerSuppliedDeliveryMethodResultRequest}. Shape $[]
     * (Value): {@link CallerSuppliedDeliveryMethodResultRequest}. The rate result you supply for
     * one delivery method and choice group when creating a delivery quote with caller-supplied
     * pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Caller-defined nonnegative lookup key used by methods whose
     * tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "tier_key"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreateCheckoutDeliveryQuoteRequestInput}. The request body for: Create
 * delivery quote.
 */
export type CreateCheckoutDeliveryQuoteRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "basis_delivery_quote_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. Partial is fine when quoting: send
     * what the buyer has entered, at least country. A destination_address sent with a selection
     * must be complete; a selection that omits it uses the quote's destination, which may be
     * partial. A partial address for delivery quotes, previews, and buyer locations. Country is
     * required when any member is present.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Shape $ (Value): string or null. Optional assertion on
     * CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to
     * assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link DeliveryInventoryAssignmentRequestInput}. maxItems: 1000.
     * Shape $[] (Value): {@link DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an
     * inventory item at a location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>;
    /**
     * Shape $ (Value): Array of {@link CallerSuppliedDeliveryMethodResultRequestInput}. Shape $[]
     * (Value): {@link CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you supply
     * for one delivery method and choice group when creating a delivery quote with caller-supplied
     * pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "pickup_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Caller-defined nonnegative lookup key used by methods whose
     * tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "tier_key"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest}.
 * After a payment that sent save_payment_method_phone, the buyer confirms the card it saved.
 * Channel sms texts the number given with the payment; channel email emails the customer's email
 * only when it matches the payment's email, otherwise returning 409. The response masks the email.
 * Send no email. Available on the paid session, or an open session whose payment is approved for
 * later capture, while payment_method_save.status is pending. A texted code saves the card with
 * the number when the payment created the customer, the buyer confirmed their email in this
 * checkout, or the number already opens their saved details; otherwise
 * payment_method_save.email_confirmation_required becomes true and an emailed code finishes the
 * save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest = {
    /** Shape $ (Value): string.  Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /** Shape $ (Value): string.  Value enum: "confirm_saved_payment_method". */
    "purpose": "confirm_saved_payment_method" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput}.
 * After a payment that sent save_payment_method_phone, the buyer confirms the card it saved.
 * Channel sms texts the number given with the payment; channel email emails the customer's email
 * only when it matches the payment's email, otherwise returning 409. The response masks the email.
 * Send no email. Available on the paid session, or an open session whose payment is approved for
 * later capture, while payment_method_save.status is pending. A texted code saves the card with
 * the number when the payment created the customer, the buyer confirmed their email in this
 * checkout, or the number already opens their saved details; otherwise
 * payment_method_save.email_confirmation_required becomes true and an emailed code finishes the
 * save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput = {
    /** Shape $ (Value): string.  Value enum: "email", "sms". */
    "channel": "email" | "sms";
    /** Shape $ (Value): string.  Value enum: "confirm_saved_payment_method". */
    "purpose": "confirm_saved_payment_method";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionCustomerVerificationRequest}. A checkout
 * verification request selected by purpose.
 */
export type CreateCheckoutSessionCustomerVerificationRequest = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequest)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequest)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionCustomerVerificationRequestInput}. A checkout
 * verification request selected by purpose.
 */
export type CreateCheckoutSessionCustomerVerificationRequestInput = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequestInput)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionGiftCardPurchaseVerificationRequest}. The buyer
 * confirms their email before funding a gift card purchase. Flint emails a code without saving a
 * payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequest = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput}. The
 * buyer confirms their email before funding a gift card purchase. Flint emails a code without
 * saving a payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionOrder}. The `order` variant of
 * `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionOrder = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom checkout text you supply when
     * creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings you supply when creating a checkout
     * session: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings you supply when creating a
     * checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in
     * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
     * address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
     * checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title to apply to a checkout session's
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order".
     */
    "type": "order" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
}));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionOrderInput}. The `order` variant of
 * `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionOrderInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the
     * buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
     * when creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
     * creating a checkout session: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
     * creating a checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill
     * in for the buyer, who can change them. For a customer with saved addresses, Flint fills in
     * any address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set
     * on a checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Automatic tax settings for
     * the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax
     * on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax
     * for the resulting tax settings and status. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
     * session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order".
     */
    "type": "order";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order";
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id": string;
})
    & (({
    "quick_pay_item"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "customer_id"?: never;
})
    & ({
    "tax"?: never;
})));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionQuickPay}. The `quick_pay` variant of
 * `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionQuickPay = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom checkout text you supply when
     * creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings you supply when creating a checkout
     * session: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings you supply when creating a
     * checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in
     * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
     * address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
     * checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title to apply to a checkout session's
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "quick_pay".
     */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
}));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionQuickPayInput}. The `quick_pay` variant of
 * `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionQuickPayInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the
     * buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
     * when creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
     * creating a checkout session: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
     * creating a checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill
     * in for the buyer, who can change them. For a customer with saved addresses, Flint fills in
     * any address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set
     * on a checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Automatic tax settings for
     * the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax
     * on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax
     * for the resulting tax settings and status. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
     * session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "quick_pay".
     */
    "type": "quick_pay";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "quick_pay". */
    "type": "quick_pay";
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionRequest}. The request body for: Create checkout
 * session.
 */
export type CreateCheckoutSessionRequest = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom checkout text you supply when
     * creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings you supply when creating a checkout
     * session: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings you supply when creating a
     * checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in
     * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
     * address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
     * checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title to apply to a checkout session's
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order",
     * "quick_pay", "subscription_plan".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | (string & {});
})
    & ((Exclude<CreateCheckoutSessionOrder & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionQuickPay & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionSubscriptionPlan & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionRequestInput}. The request body for: Create
 * checkout session.
 */
export type CreateCheckoutSessionRequestInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the
     * buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
     * when creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
     * creating a checkout session: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
     * creating a checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill
     * in for the buyer, who can change them. For a customer with saved addresses, Flint fills in
     * any address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set
     * on a checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Automatic tax settings for
     * the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax
     * on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax
     * for the resulting tax settings and status. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
     * session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum: "order",
     * "quick_pay", "subscription_plan".
     */
    "type": "order" | "quick_pay" | "subscription_plan";
})
    & ((Exclude<CreateCheckoutSessionOrderInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionQuickPayInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionSubscriptionPlanInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSavePaymentMethodVerificationRequest}. The buyer
 * asked to save the card they are paying with. Flint emails a code to any valid address while the
 * session is open and save_payment_method_requires_verification is true.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequest = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "save_payment_method". */
    "purpose": "save_payment_method" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSavePaymentMethodVerificationRequestInput}. The
 * buyer asked to save the card they are paying with. Flint emails a code to any valid address
 * while the session is open and save_payment_method_requires_verification is true.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "email". Value enum: "email". */
    "channel"?: "email";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "save_payment_method". */
    "purpose": "save_payment_method";
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSubscriptionPlan}. The `subscription_plan` variant
 * of `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionSubscriptionPlan = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom checkout text you supply when
     * creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings you supply when creating a checkout
     * session: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings you supply when creating a
     * checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in
     * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
     * address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
     * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
     * checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Automatic tax settings for the order Flint
     * creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order;
     * sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the
     * resulting tax settings and status. Whether tax is collected for a checkout session or
     * payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title to apply to a checkout session's
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum:
     * "subscription_plan".
     */
    "type": "subscription_plan" | (string & {});
})
    & (({
    /** Shape $ (Value): any. Shape $.require_email (Optional): any.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: true. */
        "require_email"?: unknown;
    });
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
}));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionSubscriptionPlanInput}. The `subscription_plan`
 * variant of `CreateCheckoutSessionRequest`.
 */
export type CreateCheckoutSessionSubscriptionPlanInput = ({
    /**
     * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the
     * buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFieldsRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
     * when creating a checkout session: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Shape $ (Value): string. Existing customer to link to the order Flint creates. Not allowed
     * with type: order: the session uses the order's customer, so set customer_id on the order
     * first. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment for this checkout, 1
     * to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the
     * order has items to deliver; otherwise no methods are assigned. Empty arrays and null are
     * rejected. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Seconds the session stays open, from 60 to 86,400. Omit it
     * to use settings.checkout.default_expires_in_seconds, or 24 hours. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
     * creating a checkout session: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. The order to collect. It must be open and not collected by an
     * invoice or a return resolution. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
     * creating a checkout session: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill
     * in for the buyer, who can change them. For a customer with saved addresses, Flint fills in
     * any address you leave out, and reads include it. With quick_pay or subscription_plan and
     * automatic tax on, a prefilled address sets the order's tax location. Not changed by what the
     * buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential
     * reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for
     * a checkout: whether automatic promotions apply and whether the buyer can apply promotion
     * codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on
     * a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax
     * settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Expected checkout session for an atomic replacement. Allowed only
     * with type: order. The named session must belong to the same merchant, environment, and
     * order. Active payment work returns PAYMENT_IN_PROGRESS. minLength: 1.
     */
    "replace_checkout_session_id"?: string;
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set
     * on a checkout session: billing interval, interval count, and quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Defaults to hosted when omitted. Use embedded for a merchant-owned
     * presentation. Default: "hosted". Value enum: "hosted", "embedded".
     */
    "surface"?: "hosted" | "embedded";
    /**
     * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Automatic tax settings for
     * the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax
     * on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax
     * for the resulting tax settings and status. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestRequestInput;
    /**
     * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
     * session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
     * whether tips are enabled, the percent or fixed amount options, the default tip, and custom
     * tips.
     */
    "tip"?: CheckoutTipConfigRequestRequestInput;
    /**
     * Shape $ (Value): string. What the checkout collects payment for. order: an order you
     * created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates
     * the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and
     * Flint creates the order and, once the buyer pays, the subscription. Value enum:
     * "subscription_plan".
     */
    "type": "subscription_plan";
})
    & (({
    /** Shape $ (Value): any. Shape $.require_email (Optional): any.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: true. */
        "require_email"?: (true) & (true);
    });
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan";
    /** Shape $ (Value): string. An active plan. minLength: 1. */
    "subscription_plan_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "quick_pay_item"?: never;
})));
/**
 * Shape $ (Value): {@link CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest}. The
 * buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number
 * saved with the email's details, or emails a code when they have cards saved by email and no
 * number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered.
 * The response's channel says which. By email, Flint sends a code only when the email has saved
 * details and an active card saved by email or with a number; the response is the same either way.
 * By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered
 * and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the
 * number's last two digits. Always offer email alongside sms. A texted code opens only cards saved
 * with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest = {
    /** Shape $ (Value): string. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto" | (string & {});
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "use_saved_payment_methods". */
    "purpose": "use_saved_payment_methods" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput}.
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput = {
    /** Shape $ (Value): string. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto";
    /**
     * Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are
     * matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     */
    "email": string;
    /** Shape $ (Value): string.  Value enum: "use_saved_payment_methods". */
    "purpose": "use_saved_payment_methods";
};
