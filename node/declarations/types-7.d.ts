import type { Invoice } from './types-31.js';
import type { InvoicePaymentAttempt } from './types-32.js';
import type { AcceptFulfillmentRequestInput, APIKeyWithSecret } from './types-0.js';
import type { GetReturnResponse } from './types-26.js';
import type { ReaderPaymentSourceTip, ReaderPaymentSourceTipInput } from './types-52.js';
import type { PaymentIntentWithAction } from './types-45.js';
import type { ResponseMeta } from './types-54.js';
import type { GetReturnResolutionResponse } from './types-25.js';
import type { SellerTaxAttestationRequest, SellerTaxAttestationRequestInput } from './types-59.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type { MetadataMap } from './types-37.js';
import type { MoneyValue, MetadataRequestInput, MoneyValueInput } from './types-38.js';
import type { CallerSuppliedDeliveryMethodResultRequest, CallerSuppliedDeliveryMethodResultRequestInput } from './types-4.js';
import type { DeliveryAddressRequest, DeliveryAddressRequestInput } from './types-16.js';
import type {
    DeliveryBuyerLocationRequest,
    DeliveryInventoryAssignmentRequest,
    DeliveryBuyerLocationRequestInput,
    DeliveryInventoryAssignmentRequestInput
} from './types-17.js';
import type {
    CreateCheckoutSessionSavePaymentMethodVerificationRequest,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCheckoutSessionReturnResolution,
    CreateCheckoutSessionSubscriptionPlan
} from './types-8.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-51.js';
import type {
    CheckoutRedirects,
    CheckoutRedirectsRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPrefillRequest,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequest,
    CheckoutQuickPayItemRequestInput
} from './types-5.js';
import type {
    CheckoutTipConfig,
    CheckoutTipConfigRequestInput,
    CheckoutTaxConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutSubscriptionTermsRequest
} from './types-6.js';
import type { LegalSettings } from './types-34.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { ThemeConfig, ThemeConfigRequestInput } from './types-65.js';
/**
 * The invoice is the primary resource and expected_version target; invoice_payment_attempt records
 * the collection outcome.
 */
export type CollectInvoiceResult = {
    /** A bill issued to a customer. */
    "invoice": Invoice;
    /**
     *  anyOf[1] (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice. anyOf[2] (Value): null.
     */
    "invoice_payment_attempt": ((InvoicePaymentAttempt) | (null));
};
/**
 * Commits held quantity, usually once the buyer pays. Commit before expires_at: after the
 * deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status.
 */
export type CommitInventoryReservationRequest = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Reservation line this action changes. minLength: 1. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5". [].target_committed_quantity (Required): integer.
     * Cumulative whole-number quantity that should have reached this target. Format: int64.
     * minimum: 0.
     */
    "lines": Array<{
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_committed_quantity": number;
    }>;
};
/**
 * Commits held quantity, usually once the buyer pays. Commit before expires_at: after the
 * deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status.
 */
export type CommitInventoryReservationRequestInput = CommitInventoryReservationRequest;
/** Completes the fulfillment and records its completion time. */
export type CompleteFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Complete return. */
export type CompleteReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you are completing the Return by hand. Value enum: "manual_completion",
     * "exception_waived", "other".
     */
    "reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Complete return. */
export type CompleteReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you are completing the Return by hand. Value enum: "manual_completion",
     * "exception_waived", "other".
     */
    "reason"?: "manual_completion" | "exception_waived" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CompleteReturnResponse = GetReturnResponse;
/** The request body for: Revoke an API key. */
export type ConfigurationVersionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The code the buyer typed. */
export type ConfirmCheckoutSessionCustomerVerificationRequestInput = {
    /**
     * The six-digit code from the email or the text. minLength: 6. maxLength: 6. pattern:
     * ^[0-9]{6}$.
     */
    "code": string;
};
/** The request body for: Confirm a customer email verification. */
export type ConfirmCustomerVerificationRequestInput = {
    /** The six-digit code Flint sent to the customer's email. minLength: 1. pattern: ^[0-9]{6}$. */
    "code": string;
};
/** The request body for: Confirm an email change. */
export type ConfirmEmailChangeRequest = {
    /**
     * The six-digit code emailed to the current address. Required when
     * `current_email_confirmation_required` is `true`. minLength: 1. pattern: ^[0-9]{6}$.
     */
    "current_email_code"?: string;
    /**
     * Also move cards saved with Flint from the previous email to the new email. Defaults to
     * false. Accepted only from customer sessions that can access GET /v1/me/flint-wallet/cards: a
     * live email-code sign-in at a Flint-hosted account. Other sessions may not send this field,
     * even as false. Default: false.
     */
    "move_flint_wallet"?: boolean;
    /** The six-digit code emailed to the new address. minLength: 1. pattern: ^[0-9]{6}$. */
    "new_email_code": string;
};
/** The request body for: Confirm an email change. */
export type ConfirmEmailChangeRequestInput = ConfirmEmailChangeRequest;
/** The request body for: Confirm payment intent. */
export type ConfirmPaymentIntentRequest = ((ConfirmPaymentIntentRequestToken)
    | (ConfirmPaymentIntentRequestPaymentMethod)
    | (ConfirmPaymentIntentRequestStripeConfirmationToken)
    | (ConfirmPaymentIntentRequestAttached)
    | (ConfirmPaymentIntentRequestReader)
    | (Record<string, unknown>));
/** Confirm using the payment source already attached. */
export type ConfirmPaymentIntentRequestAttached = {
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /** Value enum: "attached". */
    "credential_type": "attached" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false. Value
     * enum: false.
     */
    "save_payment_method"?: boolean;
};
/** Confirm using the payment source already attached. */
export type ConfirmPaymentIntentRequestAttachedInput = {
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /** Value enum: "attached". */
    "credential_type": "attached";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false. Value
     * enum: false.
     */
    "save_payment_method"?: (false) & (false);
};
/** The request body for: Confirm payment intent. */
export type ConfirmPaymentIntentRequestInput = ((ConfirmPaymentIntentRequestTokenInput)
    | (ConfirmPaymentIntentRequestPaymentMethodInput)
    | (ConfirmPaymentIntentRequestStripeConfirmationTokenInput)
    | (ConfirmPaymentIntentRequestAttachedInput)
    | (ConfirmPaymentIntentRequestReaderInput));
/** The `payment_method` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestPaymentMethod = {
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false. Value
     * enum: false.
     */
    "save_payment_method"?: boolean;
};
/** The `payment_method` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestPaymentMethodInput = {
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false. Value
     * enum: false.
     */
    "save_payment_method"?: (false) & (false);
};
/** The `reader` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestReader = ({
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /** Send false or omit it. A card read on a reader isn't saved. Default: false. */
    "save_payment_method"?: boolean;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTip;
});
/** The `reader` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestReaderInput = ({
    /** Not accepted for a payment presented on a reader. minLength: 1. maxLength: 64. */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /** Send false or omit it. A card read on a reader isn't saved. Default: false. */
    "save_payment_method"?: boolean;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTipInput;
})
    & (({
    "buyer_ip_address"?: never;
}));
/** The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestStripeConfirmationToken = {
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestStripeConfirmationTokenInput = {
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `token` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestToken = {
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /** Value enum: "token". */
    "credential_type": "token" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
};
/** The `token` variant of `ConfirmPaymentIntentRequest`. */
export type ConfirmPaymentIntentRequestTokenInput = {
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /** Value enum: "token". */
    "credential_type": "token";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "payment_source_token": string;
    /**
     * On /confirm, saves cards only for standalone payment intents. Saves the card this
     * confirmation collects for the payment intent's customer, with usage off_session, so you can
     * charge it later without the buyer: subscriptions, automatic invoices, or the customer's
     * default. Send true only when the buyer agreed to that on your page. Requires customer_id on
     * the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token
     * (created with setup_future_usage off_session) or payment_source_token, and
     * payments.payment_methods.write. Flint saves the card once the payment is approved, sends
     * payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks
     * the buyer to authenticate, current_payment_action carries it; that one authentication also
     * covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves
     * only on_session cards using the checkout session's own credential. Default: false.
     */
    "save_payment_method"?: boolean;
};
/** A response containing `PaymentIntentWithAction` data. */
export type ConfirmPaymentIntentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One payment from a
     * buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money (on a payment intent canceled
     * with cancellation_reason payment_returned, the authorization Flint released) and splits into
     * captured_money (collected), capturable_money (still on hold), and released_money (returned
     * without being charged), so authorized_money equals the sum of those three whenever the
     * capture is at most the authorization. An overcapture (see request_overcapture) has
     * capturable_money and released_money zero and captured_money above authorized_money.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntentWithAction;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The request body for: Confirm return resolution. */
export type ConfirmReturnResolutionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
export type ConfirmReturnResolutionResponse = GetReturnResolutionResponse;
/** The request body for: Connect automatic tax. */
export type ConnectTaxConnectionRequest = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Presence records the seller's agreement to the named disclosure version. The seller's
     * agreement to the current automatic sales tax disclosure, recorded when connect succeeds.
     */
    "seller_attestation": SellerTaxAttestationRequest;
};
/** The request body for: Connect automatic tax. */
export type ConnectTaxConnectionRequestInput = {
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Presence records the seller's agreement to the named disclosure version. The seller's
     * agreement to the current automatic sales tax disclosure, recorded when connect succeeds.
     */
    "seller_attestation": SellerTaxAttestationRequestInput;
};
/**
 * Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts
 * provenance describing the handoff.
 */
export type ConsumeInventoryReservationRequest = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Reservation line this action changes. minLength: 1. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5". [].target_consumed_quantity (Required): integer.
     * Cumulative whole-number quantity that should have reached this target. Format: int64.
     * minimum: 0.
     */
    "lines": Array<{
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_consumed_quantity": number;
    }>;
    /**
     * When and where the physical handoff happened. When omitted, occurred_at is the command
     * receipt time and source_system is null. Where and when an inventory event happened: the
     * source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts
 * provenance describing the handoff.
 */
export type ConsumeInventoryReservationRequestInput = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Reservation line this action changes. minLength: 1. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5". [].target_consumed_quantity (Required): integer.
     * Cumulative whole-number quantity that should have reached this target. Format: int64.
     * minimum: 0.
     */
    "lines": Array<{
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_consumed_quantity": number;
    }>;
    /**
     * When and where the physical handoff happened. When omitted, occurred_at is the command
     * receipt time and source_system is null. Where and when an inventory event happened: the
     * source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and
 * name.
 */
export type ContextSummary = ({
    /**
     * Deprecated: use mode. sandbox corresponds to test, and live corresponds to live. Value enum:
     * "sandbox", "live".
     */
    "environment": "sandbox" | "live" | (string & {});
    /** ID of the context. Name it as `context_id` when you refresh a token. */
    "id": string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether this context uses test or live data. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Name of the context. */
    "name": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
});
/** The request body for: Create an API key. */
export type CreateAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `full` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestFull = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full".
     */
    "access": "full" | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `full` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestFullInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full".
     */
    "access": "full";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The request body for: Create an API key. */
export type CreateAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `read_only` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestReadOnly = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "read_only".
     */
    "access": "read_only" | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `read_only` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestReadOnlyInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "read_only".
     */
    "access": "read_only";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `restricted` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestRestricted = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "restricted".
     */
    "access": "restricted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The `restricted` variant of `CreateAPIKeyRequest`. */
export type CreateAPIKeyRequestRestrictedInput = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "restricted".
     */
    "access": "restricted";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Links this key to a connected app's install. Revoking the install or its grant for this
     * key's environment revokes the key. The install must be active and authorized for that
     * environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created
     * by a linked key inherit its link. Each install can have up to 25 linked keys that have not
     * been revoked per environment. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * Public ID of the sandbox the new test key is bound to. A live credential or a user session
     * sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound
     * credential, such as a test key, may name only its own sandbox and gets a test key there
     * either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of
     * the merchant's active sandboxes, and an onboarding session must send it: its first key goes
     * to default_sandbox_id. Storage generation IDs are never accepted. minLength: 1. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The
     * developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys;
     * developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1.
     * uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** A response containing `APIKeyWithSecret` data. */
export type CreateAPIKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An API key including its
     * `secret_key`, returned by the calls that create or issue a key. A credential used to
     * authenticate API requests.
     */
    "data": APIKeyWithSecret;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A component to include when creating a bundle: a variant, its quantity and position, and an
 * optional delivery profile override.
 */
export type CreateBundleComponentRequest = {
    /**
     * Delivery profile for this component. Omit it to copy the variant's current profile when the
     * component is saved; later changes to the variant's profile don't follow. On update, omitting
     * it on a retained component replaces any override with the variant's current profile, so
     * resend it to keep it. Send null to leave the component without a profile, which makes a
     * physical component `action_required` and a digital or service component `not_applicable`
     * with no delivery requirement. Digital and service components never use defaults; explicit
     * and inherited profiles must be required/manual with allowed_types exactly [digital] or
     * [service], matching the component product type. Existing order delivery snapshots do not
     * change. minLength: 1. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string | null;
    /** Display order among the bundle's components, starting at zero. Format: int32. minimum: 0. */
    "position"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Identifier of the product variant included in the bundle. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/**
 * A component to include when creating a bundle: a variant, its quantity and position, and an
 * optional delivery profile override.
 */
export type CreateBundleComponentRequestInput = CreateBundleComponentRequest;
/** The request body for: Create bundle. */
export type CreateBundleRequest = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Variants included in the bundle and their quantities. All must share taxable and
     * line_item_tax_category; an unset category equals only another unset category. Components are
     * compared with the first input component, with a NOT_ALLOWED detail at each differing
     * components[index].variant_id. Required when status is active; send status: inactive to
     * create a draft without components. [] (Value): {@link CreateBundleComponentRequest}. A
     * component to include when creating a bundle: a variant, its quantity and position, and an
     * optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequest>;
    /** Description of the bundle shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the bundle is active or inactive. Defaults to active; an active bundle requires
     * components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/** The request body for: Create bundle. */
export type CreateBundleRequestInput = {
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100. */
    "barcode"?: string;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Variants included in the bundle and their quantities. All must share taxable and
     * line_item_tax_category; an unset category equals only another unset category. Components are
     * compared with the first input component, with a NOT_ALLOWED detail at each differing
     * components[index].variant_id. Required when status is active; send status: inactive to
     * create a draft without components. [] (Value): {@link CreateBundleComponentRequestInput}. A
     * component to include when creating a bundle: a variant, its quantity and position, and an
     * optional delivery profile override.
     */
    "components"?: Array<CreateBundleComponentRequestInput>;
    /** Description of the bundle shown to buyers. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Attached modifier set. Send null on update to remove it. minLength: 1. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100. */
    "sku"?: string;
    /**
     * Whether the bundle is active or inactive. Defaults to active; an active bundle requires
     * components. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
};
/** The request body for: Create category. */
export type CreateCategoryRequest = {
    /** Description of the category. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Unique category handle, using lowercase letters, digits, and single hyphens between words.
     * Cannot be changed after creation. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name": string;
};
/** The request body for: Create category. */
export type CreateCategoryRequestInput = {
    /** Description of the category. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Unique category handle, using lowercase letters, digits, and single hyphens between words.
     * Cannot be changed after creation. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name": string;
};
/** The request body for: Create delivery quote. */
export type CreateCheckoutDeliveryQuoteRequest = {
    /**
     * ID of an earlier delivery quote for this checkout session to price from again, such as to
     * add caller-supplied rates. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "basis_delivery_quote_id"?: string;
    /**
     * Buyer location used to evaluate pickup and local delivery. Send it when a method needs it.
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Checkout session to quote. With a checkout credential, this must be the credential's own
     * checkout session; any other ID is refused as not found. minLength: 1. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * Address used to price shipment or local delivery. Partial is fine: send what the buyer has
     * entered, at least country. A selection that sends destination_address must send a complete
     * address; a selection that omits it keeps this partial address, and its input_requirements
     * lists missing members that must be supplied before payment. A partial address for delivery
     * quotes, previews, and buyer locations. Country is required when any member is present.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Locations your integration assigns stock from. The assignments for an inventory demand
     * together cover its quantity, and a demand can have several. maxItems: 1000. [] (Value):
     * {@link DeliveryInventoryAssignmentRequest}. Assigns a quantity of an inventory item at a
     * location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequest>;
    /**
     * Requires a merchant credential with delivery-write scope. Merchant-created cart reservations
     * to credit when routing this quote, without changing their holds. Pass the same IDs when
     * creating the delivery selection to adopt matching held units. At most 100 unique IDs.
     * Explicit IDs, including an empty array, replace the session binding for this request. When
     * omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound
     * holds are silently skipped. First adopter wins when sessions share a hold. Ineligible
     * explicit IDs are refused as not found. maxItems: 100. [] (Value): string. minLength: 1.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Rates your integration supplies for methods with caller-supplied pricing. [] (Value): {@link
     * CallerSuppliedDeliveryMethodResultRequest}. The rate result you supply for one delivery
     * method and choice group when creating a delivery quote with caller-supplied pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequest>;
    /**
     * ID of the Location at which to price pickup methods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
    /**
     * Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is
     * caller.tier_key. Merchant authentication is required. Format: int64. minimum: 0.
     */
    "tier_key"?: number;
};
/** The request body for: Create delivery quote. */
export type CreateCheckoutDeliveryQuoteRequestInput = {
    /**
     * ID of an earlier delivery quote for this checkout session to price from again, such as to
     * add caller-supplied rates. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "basis_delivery_quote_id"?: string;
    /**
     * Buyer location used to evaluate pickup and local delivery. Send it when a method needs it.
     * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
     * chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Checkout session to quote. With a checkout credential, this must be the credential's own
     * checkout session; any other ID is refused as not found. minLength: 1. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * Address used to price shipment or local delivery. Partial is fine: send what the buyer has
     * entered, at least country. A selection that sends destination_address must send a complete
     * address; a selection that omits it keeps this partial address, and its input_requirements
     * lists missing members that must be supplied before payment. A partial address for delivery
     * quotes, previews, and buyer locations. Country is required when any member is present.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Locations your integration assigns stock from. The assignments for an inventory demand
     * together cover its quantity, and a demand can have several. maxItems: 1000. [] (Value):
     * {@link DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an inventory item at
     * a location to a demand when creating a delivery quote.
     */
    "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>;
    /**
     * Requires a merchant credential with delivery-write scope. Merchant-created cart reservations
     * to credit when routing this quote, without changing their holds. Pass the same IDs when
     * creating the delivery selection to adopt matching held units. At most 100 unique IDs.
     * Explicit IDs, including an empty array, replace the session binding for this request. When
     * omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound
     * holds are silently skipped. First adopter wins when sessions share a hold. Ineligible
     * explicit IDs are refused as not found. maxItems: 100. [] (Value): string. minLength: 1.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Rates your integration supplies for methods with caller-supplied pricing. [] (Value): {@link
     * CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you supply for one delivery
     * method and choice group when creating a delivery quote with caller-supplied pricing.
     */
    "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>;
    /**
     * ID of the Location at which to price pickup methods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
    /**
     * Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is
     * caller.tier_key. Merchant authentication is required. Format: int64. minimum: 0.
     */
    "tier_key"?: number;
};
/**
 * After a payment that saved a card pending, the buyer confirms it. Without a number, only channel
 * email can finish the save. Channel sms texts the number given with the payment; channel email
 * emails the customer's email only when it matches the payment's email, otherwise returning 409.
 * The response masks the email. Send no email. Available on the paid session, or an open session
 * whose payment is approved for later capture, while payment_method_save.status is pending. A
 * texted code saves the card with the number when the payment created the customer, the buyer
 * confirmed their email in this checkout, or the number already opens their saved details;
 * otherwise payment_method_save.email_confirmation_required becomes true and an emailed code
 * finishes the save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest = {
    /** How Flint delivers the code. Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "confirm_saved_payment_method".
     */
    "purpose": "confirm_saved_payment_method" | (string & {});
};
/**
 * After a payment that saved a card pending, the buyer confirms it. Without a number, only channel
 * email can finish the save. Channel sms texts the number given with the payment; channel email
 * emails the customer's email only when it matches the payment's email, otherwise returning 409.
 * The response masks the email. Send no email. Available on the paid session, or an open session
 * whose payment is approved for later capture, while payment_method_save.status is pending. A
 * texted code saves the card with the number when the payment created the customer, the buyer
 * confirmed their email in this checkout, or the number already opens their saved details;
 * otherwise payment_method_save.email_confirmation_required becomes true and an emailed code
 * finishes the save. An emailed code alone saves the card by email.
 */
export type CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput = {
    /** How Flint delivers the code. Value enum: "email", "sms". */
    "channel": "email" | "sms";
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "confirm_saved_payment_method".
     */
    "purpose": "confirm_saved_payment_method";
};
/** A checkout verification request selected by purpose. */
export type CreateCheckoutSessionCustomerVerificationRequest = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequest)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequest)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest)
    | (Record<string, unknown>));
/** A checkout verification request selected by purpose. */
export type CreateCheckoutSessionCustomerVerificationRequestInput = ((CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput)
    | (CreateCheckoutSessionSavePaymentMethodVerificationRequestInput)
    | (CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput)
    | (CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput));
/** A promotion to apply to the order Flint creates for a checkout session. */
export type CreateCheckoutSessionDiscount = {
    /**
     * The promotion selected by ID or code, subject to your account promotion settings. Identifies
     * the promotion to apply, by promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequest;
};
/** A promotion to apply to the order Flint creates for a checkout session. */
export type CreateCheckoutSessionDiscountInput = {
    /**
     * The promotion selected by ID or code, subject to your account promotion settings. Identifies
     * the promotion to apply, by promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
};
/**
 * The buyer confirms their email before funding a gift card purchase. Flint emails a code without
 * saving a payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequest = {
    /** How Flint delivers the code. Default: "email". Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /** What the buyer is confirming their email or number for. Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase" | (string & {});
};
/**
 * The buyer confirms their email before funding a gift card purchase. Flint emails a code without
 * saving a payment method.
 */
export type CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput = {
    /** How Flint delivers the code. Default: "email". Value enum: "email". */
    "channel"?: "email";
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /** What the buyer is confirming their email or number for. Value enum: "gift_card_purchase". */
    "purpose": "gift_card_purchase";
};
/** The `invoice` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionInvoice = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "invoice".
     */
    "type": "invoice" | (string & {});
})
    & (({
    /** Value enum: "invoice". */
    "type": "invoice" | (string & {});
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
}));
/** The `invoice` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionInvoiceInput = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "invoice".
     */
    "type": "invoice";
})
    & (({
    /** Value enum: "invoice". */
    "type": "invoice";
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
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
})
    & ({
    "discounts"?: never;
})
    & ({
    "theme"?: never;
})
    & ({
    "payments"?: never;
})
    & ({
    "tip"?: never;
})
    & ({
    "buyer_fields"?: never;
})
    & ({
    "prefill"?: never;
})
    & ({
    "metadata"?: never;
})
    & ({
    "external_reference_id"?: never;
})
    & ({
    "legal"?: never;
})
    & ({
    "expires_in_seconds"?: never;
})
    & ({
    "custom_text"?: never;
})
    & ({
    "promotion_config"?: never;
})
    & ({
    "delivery_method_ids"?: never;
})
    & ({
    "platform_fee"?: never;
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "return_resolution_id"?: never;
})));
/** The `order` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionOrder = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order".
     */
    "type": "order" | (string & {});
})
    & (({
    /** Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
}));
/** The `order` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionOrderInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order".
     */
    "type": "order";
})
    & (({
    /** Value enum: "order". */
    "type": "order";
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
})
    & ({
    "discounts"?: never;
})
    & ({
    "return_resolution_id"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})
    & ({
    "return_url"?: never;
})));
/** The `quick_pay` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionQuickPay = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscount}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscount>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "quick_pay".
     */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
}));
/** The `quick_pay` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionQuickPayInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscountInput}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscountInput>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "quick_pay".
     */
    "type": "quick_pay";
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay";
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
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
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "return_resolution_id"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})
    & ({
    "return_url"?: never;
})));
/** The request body for: Create checkout session. */
export type CreateCheckoutSessionRequest = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscount}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscount>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /**
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order", "quick_pay", "subscription_plan", "return_resolution", "invoice".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "return_resolution" | "invoice" | (string & {});
})
    & ((Exclude<CreateCheckoutSessionOrder & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionQuickPay & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionSubscriptionPlan & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionReturnResolution & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionInvoice & object, readonly unknown[]>)
    | (Record<string, unknown>));
