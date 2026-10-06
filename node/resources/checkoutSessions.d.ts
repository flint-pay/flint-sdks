export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { CallerSuppliedDeliveryMethodResultRequestInput } from '../declarations/CallerSuppliedDeliveryMethodResultRequestInput.js';
import type { CheckoutCustomTextWriteConfigInput } from '../declarations/CheckoutCustomTextWriteConfigInput.js';
import type { CheckoutCustomerConfigInput } from '../declarations/CheckoutCustomerConfigInput.js';
import type { CheckoutCustomerVerificationConfirmationResponse } from '../declarations/CheckoutCustomerVerificationConfirmationResponse.js';
import type { CheckoutCustomerVerificationResponse } from '../declarations/CheckoutCustomerVerificationResponse.js';
import type { CheckoutDeliveryQuoteResponse } from '../declarations/CheckoutDeliveryQuoteResponse.js';
import type { CheckoutDeliverySelectionResultResponse } from '../declarations/CheckoutDeliverySelectionResultResponse.js';
import type { CheckoutEffectiveDeliverySelectionResponse } from '../declarations/CheckoutEffectiveDeliverySelectionResponse.js';
import type { CheckoutExpirationConfigInput } from '../declarations/CheckoutExpirationConfigInput.js';
import type { CheckoutPaymentConfigInput } from '../declarations/CheckoutPaymentConfigInput.js';
import type { CheckoutPromotionConfigInput } from '../declarations/CheckoutPromotionConfigInput.js';
import type { CheckoutQuickPayItemRequestInput } from '../declarations/CheckoutQuickPayItemRequestInput.js';
import type { CheckoutRedirectsConfigInput } from '../declarations/CheckoutRedirectsConfigInput.js';
import type { CheckoutSession } from '../declarations/CheckoutSession.js';
import type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
import type { CheckoutSessionListResponse } from '../declarations/CheckoutSessionListResponse.js';
import type { CheckoutSessionResponse } from '../declarations/CheckoutSessionResponse.js';
import type { CheckoutSessionsCloseSessionInput } from '../declarations/CheckoutSessionsCloseSessionInput.js';
import type { CheckoutSessionsCloseSessionResponse } from '../declarations/CheckoutSessionsCloseSessionResponse.js';
import type { CheckoutSessionsConfirmCustomerVerificationInput } from '../declarations/CheckoutSessionsConfirmCustomerVerificationInput.js';
import type { CheckoutSessionsConfirmCustomerVerificationResponse } from '../declarations/CheckoutSessionsConfirmCustomerVerificationResponse.js';
import type { CheckoutSessionsCreateCustomerVerificationInput } from '../declarations/CheckoutSessionsCreateCustomerVerificationInput.js';
import type { CheckoutSessionsCreateCustomerVerificationResponse } from '../declarations/CheckoutSessionsCreateCustomerVerificationResponse.js';
import type { CheckoutSessionsCreateDeliveryQuoteInput } from '../declarations/CheckoutSessionsCreateDeliveryQuoteInput.js';
import type { CheckoutSessionsCreateDeliveryQuoteResponse } from '../declarations/CheckoutSessionsCreateDeliveryQuoteResponse.js';
import type { CheckoutSessionsCreateDeliverySelectionInput } from '../declarations/CheckoutSessionsCreateDeliverySelectionInput.js';
import type { CheckoutSessionsCreateDeliverySelectionResponse } from '../declarations/CheckoutSessionsCreateDeliverySelectionResponse.js';
import type { CheckoutSessionsCreateInput } from '../declarations/CheckoutSessionsCreateInput.js';
import type { CheckoutSessionsCreateResponse } from '../declarations/CheckoutSessionsCreateResponse.js';
import type { CheckoutSessionsDeleteCurrentDeliverySelectionInput } from '../declarations/CheckoutSessionsDeleteCurrentDeliverySelectionInput.js';
import type { CheckoutSessionsDeleteCurrentDeliverySelectionResponse } from '../declarations/CheckoutSessionsDeleteCurrentDeliverySelectionResponse.js';
import type { CheckoutSessionsGetCurrentDeliverySelectionInput } from '../declarations/CheckoutSessionsGetCurrentDeliverySelectionInput.js';
import type { CheckoutSessionsGetCurrentDeliverySelectionResponse } from '../declarations/CheckoutSessionsGetCurrentDeliverySelectionResponse.js';
import type { CheckoutSessionsGetDeliveryQuoteInput } from '../declarations/CheckoutSessionsGetDeliveryQuoteInput.js';
import type { CheckoutSessionsGetDeliveryQuoteResponse } from '../declarations/CheckoutSessionsGetDeliveryQuoteResponse.js';
import type { CheckoutSessionsGetDeliverySelectionHistoryInput } from '../declarations/CheckoutSessionsGetDeliverySelectionHistoryInput.js';
import type { CheckoutSessionsGetDeliverySelectionHistoryResponse } from '../declarations/CheckoutSessionsGetDeliverySelectionHistoryResponse.js';
import type { CheckoutSessionsGetInput } from '../declarations/CheckoutSessionsGetInput.js';
import type { CheckoutSessionsGetResponse } from '../declarations/CheckoutSessionsGetResponse.js';
import type { CheckoutSessionsListInput } from '../declarations/CheckoutSessionsListInput.js';
import type { CheckoutSessionsListResponse } from '../declarations/CheckoutSessionsListResponse.js';
import type { CheckoutSessionsUpdateInput } from '../declarations/CheckoutSessionsUpdateInput.js';
import type { CheckoutSessionsUpdateResponse } from '../declarations/CheckoutSessionsUpdateResponse.js';
import type { CheckoutTaxConfigInput } from '../declarations/CheckoutTaxConfigInput.js';
import type { CheckoutTipConfigInput } from '../declarations/CheckoutTipConfigInput.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateDeliverySelectionChoiceRequestInput } from '../declarations/CreateDeliverySelectionChoiceRequestInput.js';
import type { DeliveryAddressRequestInput } from '../declarations/DeliveryAddressRequestInput.js';
import type { DeliveryBuyerLocationRequestInput } from '../declarations/DeliveryBuyerLocationRequestInput.js';
import type { DeliveryInventoryAssignmentRequestInput } from '../declarations/DeliveryInventoryAssignmentRequestInput.js';
import type { DeliverySelectionRecipientRequestInput } from '../declarations/DeliverySelectionRecipientRequestInput.js';
import type { DeliverySelectionResponse } from '../declarations/DeliverySelectionResponse.js';
import type { LegalSettingsInput } from '../declarations/LegalSettingsInput.js';
import type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { ThemeConfigInput } from '../declarations/ThemeConfigInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CheckoutSessionsResource {
    /**
 * Closes an open checkout session before it naturally expires.
 * POST /v1/checkout-sessions/{checkout_session_id}/close
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.closeSession("example", {}, { idempotencyKey: idempotencyKey })
 */
    closeSession(checkout_session_id: InputValue<string>, params: (InputValue<{ "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    closeSessionWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<{ "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsCloseSessionResponse>>;
    /**
 * Checks the code the buyer typed. A right code makes the checkout act for the customer with that email, and creates the customer, with a customer.created event, when none exists. The checkout can then save the buyer's card with save_payment_method on POST /v1/orders/{order_id}/pay, and list and pay with that customer's saved cards. The order's customer does not change until the payment succeeds. Only the checkout_auth_token in the response acts for that customer. Send it as X-Checkout-Session-Secret from then on. Every other credential for the session, including earlier checkout_auth_token values and hosted checkout links, keeps working for the checkout and acts for no customer, so it lists no saved cards and pays with none. A buyer who opens the link on another device confirms an email there to use them, and from then on only that device's new credential acts for a customer. If the response is lost after the code was accepted, the credential you sent still works. Send the same code again with it while the code is valid, which counts as another try and returns a new credential for the same customer, or request a new code. A wrong, expired, or replaced code returns CUSTOMER_VERIFICATION_CODE_INVALID, and so does a used code once the checkout was confirmed again, any code after its 5th try, any code for an email past its limit on wrong tries, or a code whose email's customer changed its email or was deleted after the code was sent. If the checkout stops offering saved payment details before the code is confirmed, such as when the merchant turns them off, the request returns CUSTOMER_VERIFICATION_NOT_OFFERED. A credential that already acts for a customer gets CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED, and confirming never replaces a customer the merchant named. Once the customer whose email the buyer confirmed changes that email or is deleted, the checkout acts for no customer, and the buyer can confirm the customer's new email or another one. A checkout opened from a checkout reminder link acts for no customer the buyer confirmed earlier, so its buyer confirms an email again. A texted code for saved details binds the checkout the same way, but the new credential opens only the cards saved with that number: it lists and pays with no card saved by email, and reads no customer details. A texted code checks once, so after a lost answer request a new code. A code for purpose confirm_saved_payment_method keeps the session's credential, so the response has no checkout_access, and its checkout_session carries payment_method_save. A texted code saves the card with the number when the number already opens the customer's saved details or the customer has none yet; otherwise payment_method_save.email_confirmation_required turns true, and an emailed code finishes the save. An emailed code alone saves the card by email.
 * POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications/{customer_verification_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.confirmCustomerVerification("cs_example", "cscv_example", {code: "123456", "X-Checkout-Session-ID": "cs_example", "X-Checkout-Session-Secret": "checkout_secret_example"}, { idempotencyKey: idempotencyKey })
 */
    confirmCustomerVerification(checkout_session_id: InputValue<string>, customer_verification_id: InputValue<string>, params: (InputValue<{ "code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout">): Promise<_SdkPayloadAt<CheckoutCustomerVerificationConfirmationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    confirmCustomerVerificationWithResponse(checkout_session_id: InputValue<string>, customer_verification_id: InputValue<string>, params: (InputValue<{ "code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout">): Promise<SdkResponse<CheckoutSessionsConfirmCustomerVerificationResponse>>;
    /**
 * Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.
 * POST /v1/checkout-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.create({order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<({ "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: CheckoutCustomerConfigInput; "delivery_method_ids"?: Array<string>; "expiration"?: CheckoutExpirationConfigInput; "external_reference_id"?: string; "legal"?: LegalSettingsInput; "metadata"?: Record<string, string>; "order_id"?: string; "payments"?: CheckoutPaymentConfigInput; "promotion_config"?: CheckoutPromotionConfigInput; "quick_pay_item"?: CheckoutQuickPayItemRequestInput; "redirects"?: CheckoutRedirectsConfigInput; "replace_checkout_session_id"?: string; "subscription_plan_id"?: string; "surface"?: "hosted" | "embedded"; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; }) & ((({ "order_id": unknown; }) & (({ "quick_pay_item"?: never }) & ({ "subscription_plan_id"?: never }))) | (({ "quick_pay_item": unknown; }) & (({ "order_id"?: never }) & ({ "subscription_plan_id"?: never }) & ({ "replace_checkout_session_id"?: never }))) | (({ "subscription_plan_id": unknown; }) & (({ "order_id"?: never }) & ({ "quick_pay_item"?: never }) & ({ "replace_checkout_session_id"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutSessionLaunchResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: CheckoutCustomerConfigInput; "delivery_method_ids"?: Array<string>; "expiration"?: CheckoutExpirationConfigInput; "external_reference_id"?: string; "legal"?: LegalSettingsInput; "metadata"?: Record<string, string>; "order_id"?: string; "payments"?: CheckoutPaymentConfigInput; "promotion_config"?: CheckoutPromotionConfigInput; "quick_pay_item"?: CheckoutQuickPayItemRequestInput; "redirects"?: CheckoutRedirectsConfigInput; "replace_checkout_session_id"?: string; "subscription_plan_id"?: string; "surface"?: "hosted" | "embedded"; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; }) & ((({ "order_id": unknown; }) & (({ "quick_pay_item"?: never }) & ({ "subscription_plan_id"?: never }))) | (({ "quick_pay_item": unknown; }) & (({ "order_id"?: never }) & ({ "subscription_plan_id"?: never }) & ({ "replace_checkout_session_id"?: never }))) | (({ "subscription_plan_id": unknown; }) & (({ "order_id"?: never }) & ({ "quick_pay_item"?: never }) & ({ "replace_checkout_session_id"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsCreateResponse>>;
    /**
 * Sends the buyer a six-digit code that confirms they control an email address or a mobile phone number, so the checkout can save their card or use the details they saved at this merchant before. Only the session's own checkout credential can call it, and no payment attempt may be in progress. With channel email, Flint emails the code, while the session is open and save_payment_method_requires_verification is true. With purpose save_payment_method, whose default channel is email, Flint sends a code to any valid address. With purpose use_saved_payment_methods and channel email, Flint sends one only when a customer with that email has saved details, cards saved by email or with a mobile phone number, and the response is the same either way, so it never reveals whether the email shops at the merchant. The emailed code opens only the cards saved by email; confirming it when there are none still binds the checkout to the customer, so the buyer can save a card with their own number, which replaces the customer's saved number. With channel sms and purpose use_saved_payment_methods, Flint texts the code to the mobile phone number saved with that email's details at the merchant, and returns channel sms and phone_last_digits. Always offer the emailed code beside it. When the email has no details saved with a number, or Flint cannot text now, it texts nothing and returns CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE; offer the emailed code instead. This answer tells anyone who types the email whether it has details saved with a number at the merchant, and the number's last two digits. A texted code opens only the cards saved with that number, and an emailed code opens only the cards saved by email. Every text reads "Your Flint Pay verification code is: " and the code, and names Flint Pay rather than the merchant, so the prompt for the code should say it comes from Flint Pay. A new text to a number ends the code any other checkout, at any merchant, texted to it, so only the latest texted code for a number works. With purpose use_saved_payment_methods and channel auto, its default, a checkout asks as the buyer leaves the email field, and Flint sends the code the way the email's details were saved: it texts the mobile phone number they carry, as channel sms does, or, when they carry none, emails a code when the email has cards saved by email. The response's channel says which. For an email with neither, or past a cap, it sends nothing and returns CUSTOMER_VERIFICATION_NOT_SENT; show nothing about saved details then. So this answer tells anyone who types the email whether it has saved details at the merchant; name channel email for an answer that doesn't. While an emailed code a checkout sent this way still works, another auto request for the same email answers with that code and sends nothing; request channel email to send another. With purpose confirm_saved_payment_method, after a payment that sent save_payment_method_phone, Flint sends the code that confirms the saved card: channel sms texts the number given with the payment, and channel email emails the customer's email, only when it is the email the payment was made with; otherwise it refuses the request with a 409, and the texted code confirms the card. The response shows that email masked, such as a•••@example.com. Send no email with it. It works on the paid session, or the open one whose payment is approved for the merchant to capture later, until payment_method_save.status leaves pending. A texted code saves the card with the number when the payment created the customer, when the buyer confirmed the customer's email in this checkout, or when the number is already the customer's saved number and a card saved with it is active. Otherwise payment_method_save.email_confirmation_required becomes true, and an emailed code finishes the save. A card saved with a number makes it the customer's saved number: the cards saved with the number it replaces are removed, with payment_method.removed. An emailed code works for 15 minutes and a texted code for 10, each for 5 tries, and a new request replaces the checkout's earlier codes. A checkout can request 5 emailed codes and 6 text lookups with 3 texts before paying, and 3 of each channel to confirm a saved card; codes can be requested for one email 3 times in 15 minutes and 10 times in 24 hours at the merchant; one number gets 3 texts in 10 minutes and 10 in 24 hours; one network can have 10 texts sent and 10 codes emailed by channel auto, and make 30 text and auto requests together, an hour, and 20 requests of any kind a minute. A text request over a cap on texts, the checkout's, the network's, or the number's, returns CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE, like an email with no number to text; over a cap on text requests, it returns CUSTOMER_VERIFICATION_LIMIT_REACHED for the checkout and CUSTOMER_VERIFICATION_RATE_LIMITED for the network. A merchant's checkouts can send 1,000 texts in 24 hours; past that, text requests return CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE. After 10 wrong tries in 24 hours, or 30 in 7 days, across the codes for one email at the merchant or texted to one number, Flint sends that email or number no codes and accepts none of its codes. In a sandbox, Flint sends no texts: a texted code's request answers as if it texted the number, and to confirm it, 000000 is a wrong code, 999999 returns CUSTOMER_VERIFICATION_UNAVAILABLE, and any other six digits confirm it. Emailed codes arrive as in live mode.
 * POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createCustomerVerification("example", {purpose: "gift_card_purchase", "X-Checkout-Session-ID": "example", "X-Checkout-Session-Secret": "example"}, { idempotencyKey: idempotencyKey })
 */
    createCustomerVerification(checkout_session_id: InputValue<string>, params: (InputValue<{ "channel"?: "email" | "sms" | "auto"; "email"?: string; "purpose": "gift_card_purchase" | "save_payment_method" | "use_saved_payment_methods" | "confirm_saved_payment_method"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout">): Promise<_SdkPayloadAt<CheckoutCustomerVerificationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createCustomerVerificationWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<{ "channel"?: "email" | "sms" | "auto"; "email"?: string; "purpose": "gift_card_purchase" | "save_payment_method" | "use_saved_payment_methods" | "confirm_saved_payment_method"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout">): Promise<SdkResponse<CheckoutSessionsCreateCustomerVerificationResponse>>;
    /**
 * Creates an exact checkout-bound delivery quote without holding inventory.
 * POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliveryQuote("example", {expected_delivery_selection_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createDeliveryQuote(checkout_session_id: InputValue<string>, params: (InputValue<{ "basis_delivery_quote_id"?: string; "buyer_location"?: DeliveryBuyerLocationRequestInput; "destination_address"?: DeliveryAddressRequestInput; "expected_delivery_selection_id": string | null; "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>; "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>; "pickup_location_id"?: string; "tier_key"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutDeliveryQuoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createDeliveryQuoteWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<{ "basis_delivery_quote_id"?: string; "buyer_location"?: DeliveryBuyerLocationRequestInput; "destination_address"?: DeliveryAddressRequestInput; "expected_delivery_selection_id": string | null; "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>; "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>; "pickup_location_id"?: string; "tier_key"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsCreateDeliveryQuoteResponse>>;
    /**
 * Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.
 * POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.createDeliverySelection("example", {choices: [], delivery_quote_id: "example", expected_delivery_selection_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createDeliverySelection(checkout_session_id: InputValue<string>, params: (InputValue<{ "choices": Array<CreateDeliverySelectionChoiceRequestInput>; "delivery_quote_id": string; "destination_address"?: PostalAddressInput; "expected_delivery_selection_id": string | null; "external_reference_id"?: string; "external_system"?: string; "recipient"?: DeliverySelectionRecipientRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutDeliverySelectionResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<{ "choices": Array<CreateDeliverySelectionChoiceRequestInput>; "delivery_quote_id": string; "destination_address"?: PostalAddressInput; "expected_delivery_selection_id": string | null; "external_reference_id"?: string; "external_system"?: string; "recipient"?: DeliverySelectionRecipientRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsCreateDeliverySelectionResponse>>;
    /**
 * Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.
 * DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.deleteCurrentDeliverySelection("example", {expected_delivery_selection_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    deleteCurrentDeliverySelection(checkout_session_id: InputValue<string>, params: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expected_delivery_selection_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutDeliverySelectionResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteCurrentDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expected_delivery_selection_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsDeleteCurrentDeliverySelectionResponse>>;
    /**
 * Returns a single checkout session by ID.
 * GET /v1/checkout-sessions/{checkout_session_id}
 * @example
 * client.checkoutSessions.get("example")
 */
    get(checkout_session_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CheckoutSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(checkout_session_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<CheckoutSessionsGetResponse>>;
    /**
 * Returns the provisional selection or the order-level committed selection effective for this checkout.
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current
 * @example
 * client.checkoutSessions.getCurrentDeliverySelection("example")
 */
    getCurrentDeliverySelection(checkout_session_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CheckoutEffectiveDeliverySelectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getCurrentDeliverySelectionWithResponse(checkout_session_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<CheckoutSessionsGetCurrentDeliverySelectionResponse>>;
    /**
 * Returns a delivery quote for this checkout session. Checkout credentials receive the buyer view.
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}
 * @example
 * client.checkoutSessions.getDeliveryQuote("example", "example")
 */
    getDeliveryQuote(checkout_session_id: InputValue<string>, delivery_quote_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CheckoutDeliveryQuoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getDeliveryQuoteWithResponse(checkout_session_id: InputValue<string>, delivery_quote_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<CheckoutSessionsGetDeliveryQuoteResponse>>;
    /**
 * Returns one checkout selection with its economics, lifecycle events, and retention-aware private data. While the selection is selected, the tax on its delivery charges follows the order's tax.
 * GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}
 * @example
 * client.checkoutSessions.getDeliverySelectionHistory("example", "example")
 */
    getDeliverySelectionHistory(checkout_session_id: InputValue<string>, delivery_selection_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliverySelectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getDeliverySelectionHistoryWithResponse(checkout_session_id: InputValue<string>, delivery_selection_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CheckoutSessionsGetDeliverySelectionHistoryResponse>>;
    /**
 * Returns a paginated list of checkout sessions for the authenticated merchant.
 * GET /v1/checkout-sessions
 * @example
 * client.checkoutSessions.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">; "order_id"?: InputValue<string>; "payment_link_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expires_after"?: InputValue<string | globalThis.Date>; "expires_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CheckoutSessionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">; "order_id"?: InputValue<string>; "payment_link_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expires_after"?: InputValue<string | globalThis.Date>; "expires_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CheckoutSessionsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">; "order_id"?: InputValue<string>; "payment_link_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expires_after"?: InputValue<string | globalThis.Date>; "expires_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CheckoutSessionListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">; "order_id"?: InputValue<string>; "payment_link_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expires_after"?: InputValue<string | globalThis.Date>; "expires_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CheckoutSessionsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">; "order_id"?: InputValue<string>; "payment_link_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expires_after"?: InputValue<string | globalThis.Date>; "expires_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CheckoutSession>;
    /**
 * Updates the mutable fields of a checkout session. A merchant credential can update metadata and external_reference_id, including after the session ends. The session's own checkout credential can send buyer_contact and timezone while the session is open. The buyer_contact field saves the email and phone the buyer entered; send a contact field as null to clear it. The timezone field records the buyer's IANA time zone, which Flint uses for times in the emails it sends the buyer. Saving the same values again changes nothing.
 * PATCH /v1/checkout-sessions/{checkout_session_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.checkoutSessions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(checkout_session_id: InputValue<string>, params: (InputValue<{ "buyer_contact"?: { "email"?: string | null; "phone"?: string | null; }; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CheckoutSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(checkout_session_id: InputValue<string>, params: (InputValue<{ "buyer_contact"?: { "email"?: string | null; "phone"?: string | null; }; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "timezone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<CheckoutSessionsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly checkoutSessions: CheckoutSessionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CheckoutSessionResponse } from '../declarations/CheckoutSessionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CheckoutSessionsCloseSessionResponse } from '../declarations/CheckoutSessionsCloseSessionResponse.js';
export type { CheckoutCustomerVerificationConfirmationResponse } from '../declarations/CheckoutCustomerVerificationConfirmationResponse.js';
export type { CheckoutSessionsConfirmCustomerVerificationResponse } from '../declarations/CheckoutSessionsConfirmCustomerVerificationResponse.js';
export type { CheckoutCustomTextWriteConfigInput } from '../declarations/CheckoutCustomTextWriteConfigInput.js';
export type { CheckoutCustomerConfigInput } from '../declarations/CheckoutCustomerConfigInput.js';
export type { CheckoutExpirationConfigInput } from '../declarations/CheckoutExpirationConfigInput.js';
export type { LegalSettingsInput } from '../declarations/LegalSettingsInput.js';
export type { CheckoutPaymentConfigInput } from '../declarations/CheckoutPaymentConfigInput.js';
export type { CheckoutPromotionConfigInput } from '../declarations/CheckoutPromotionConfigInput.js';
export type { CheckoutQuickPayItemRequestInput } from '../declarations/CheckoutQuickPayItemRequestInput.js';
export type { CheckoutRedirectsConfigInput } from '../declarations/CheckoutRedirectsConfigInput.js';
export type { CheckoutTaxConfigInput } from '../declarations/CheckoutTaxConfigInput.js';
export type { ThemeConfigInput } from '../declarations/ThemeConfigInput.js';
export type { CheckoutTipConfigInput } from '../declarations/CheckoutTipConfigInput.js';
export type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
export type { CheckoutSessionsCreateResponse } from '../declarations/CheckoutSessionsCreateResponse.js';
export type { CheckoutCustomerVerificationResponse } from '../declarations/CheckoutCustomerVerificationResponse.js';
export type { CheckoutSessionsCreateCustomerVerificationResponse } from '../declarations/CheckoutSessionsCreateCustomerVerificationResponse.js';
export type { DeliveryBuyerLocationRequestInput } from '../declarations/DeliveryBuyerLocationRequestInput.js';
export type { DeliveryAddressRequestInput } from '../declarations/DeliveryAddressRequestInput.js';
export type { DeliveryInventoryAssignmentRequestInput } from '../declarations/DeliveryInventoryAssignmentRequestInput.js';
export type { CallerSuppliedDeliveryMethodResultRequestInput } from '../declarations/CallerSuppliedDeliveryMethodResultRequestInput.js';
export type { CheckoutDeliveryQuoteResponse } from '../declarations/CheckoutDeliveryQuoteResponse.js';
export type { CheckoutSessionsCreateDeliveryQuoteResponse } from '../declarations/CheckoutSessionsCreateDeliveryQuoteResponse.js';
export type { CreateDeliverySelectionChoiceRequestInput } from '../declarations/CreateDeliverySelectionChoiceRequestInput.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { DeliverySelectionRecipientRequestInput } from '../declarations/DeliverySelectionRecipientRequestInput.js';
export type { CheckoutDeliverySelectionResultResponse } from '../declarations/CheckoutDeliverySelectionResultResponse.js';
export type { CheckoutSessionsCreateDeliverySelectionResponse } from '../declarations/CheckoutSessionsCreateDeliverySelectionResponse.js';
export type { CheckoutSessionsDeleteCurrentDeliverySelectionResponse } from '../declarations/CheckoutSessionsDeleteCurrentDeliverySelectionResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { CheckoutSessionsGetResponse } from '../declarations/CheckoutSessionsGetResponse.js';
export type { CheckoutEffectiveDeliverySelectionResponse } from '../declarations/CheckoutEffectiveDeliverySelectionResponse.js';
export type { CheckoutSessionsGetCurrentDeliverySelectionResponse } from '../declarations/CheckoutSessionsGetCurrentDeliverySelectionResponse.js';
export type { CheckoutSessionsGetDeliveryQuoteResponse } from '../declarations/CheckoutSessionsGetDeliveryQuoteResponse.js';
export type { DeliverySelectionResponse } from '../declarations/DeliverySelectionResponse.js';
export type { CheckoutSessionsGetDeliverySelectionHistoryResponse } from '../declarations/CheckoutSessionsGetDeliverySelectionHistoryResponse.js';
export type { CheckoutSessionListResponse } from '../declarations/CheckoutSessionListResponse.js';
export type { CheckoutSessionsListResponse } from '../declarations/CheckoutSessionsListResponse.js';
export type { CheckoutSession } from '../declarations/CheckoutSession.js';
export type { CheckoutSessionsUpdateResponse } from '../declarations/CheckoutSessionsUpdateResponse.js';
export type { CheckoutSessionsCloseSessionInput } from '../declarations/CheckoutSessionsCloseSessionInput.js';
export type { CheckoutSessionsConfirmCustomerVerificationInput } from '../declarations/CheckoutSessionsConfirmCustomerVerificationInput.js';
export type { CheckoutSessionsCreateInput } from '../declarations/CheckoutSessionsCreateInput.js';
export type { CheckoutSessionsCreateCustomerVerificationInput } from '../declarations/CheckoutSessionsCreateCustomerVerificationInput.js';
export type { CheckoutSessionsCreateDeliveryQuoteInput } from '../declarations/CheckoutSessionsCreateDeliveryQuoteInput.js';
export type { CheckoutSessionsCreateDeliverySelectionInput } from '../declarations/CheckoutSessionsCreateDeliverySelectionInput.js';
export type { CheckoutSessionsDeleteCurrentDeliverySelectionInput } from '../declarations/CheckoutSessionsDeleteCurrentDeliverySelectionInput.js';
export type { CheckoutSessionsGetInput } from '../declarations/CheckoutSessionsGetInput.js';
export type { CheckoutSessionsGetCurrentDeliverySelectionInput } from '../declarations/CheckoutSessionsGetCurrentDeliverySelectionInput.js';
export type { CheckoutSessionsGetDeliveryQuoteInput } from '../declarations/CheckoutSessionsGetDeliveryQuoteInput.js';
export type { CheckoutSessionsGetDeliverySelectionHistoryInput } from '../declarations/CheckoutSessionsGetDeliverySelectionHistoryInput.js';
export type { CheckoutSessionsListInput } from '../declarations/CheckoutSessionsListInput.js';
export type { CheckoutSessionsUpdateInput } from '../declarations/CheckoutSessionsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CheckoutCustomerVerificationConfirmation } from '../declarations/CheckoutCustomerVerificationConfirmation.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PaymentAttemptGiftCardRedemption } from '../declarations/PaymentAttemptGiftCardRedemption.js';
export type { PaymentAttemptPaymentIntent } from '../declarations/PaymentAttemptPaymentIntent.js';
export type { PaymentErrorSummary } from '../declarations/PaymentErrorSummary.js';
export type { ErrorRemediation } from '../declarations/ErrorRemediation.js';
export type { PendingPaymentAction } from '../declarations/PendingPaymentAction.js';
export type { StripePaymentClientAction } from '../declarations/StripePaymentClientAction.js';
export type { CheckoutCustomTextWriteConfig } from '../declarations/CheckoutCustomTextWriteConfig.js';
export type { CheckoutCustomerConfig } from '../declarations/CheckoutCustomerConfig.js';
export type { PrefilledCustomerInfo } from '../declarations/PrefilledCustomerInfo.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
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
export type { PrefilledCustomerInfoInput } from '../declarations/PrefilledCustomerInfoInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { OrderLineItemTaxInput } from '../declarations/OrderLineItemTaxInput.js';
export type { CheckoutSessionLaunchResult } from '../declarations/CheckoutSessionLaunchResult.js';
export type { CheckoutCustomerVerification } from '../declarations/CheckoutCustomerVerification.js';
export type { DeliveryCoordinateRequestInput } from '../declarations/DeliveryCoordinateRequestInput.js';
export type { CallerSuppliedDeliveryOutcomeRequestInput } from '../declarations/CallerSuppliedDeliveryOutcomeRequestInput.js';
export type { DeliveryWindowRequestInput } from '../declarations/DeliveryWindowRequestInput.js';
export type { DeliveryBuyerLocationResource } from '../declarations/DeliveryBuyerLocationResource.js';
export type { DeliveryCoordinateRequest } from '../declarations/DeliveryCoordinateRequest.js';
export type { DeliveryQuoteMethodResource } from '../declarations/DeliveryQuoteMethodResource.js';
export type { DeliveryPendingCallerRateRequest } from '../declarations/DeliveryPendingCallerRateRequest.js';
export type { DeliverySelectionInstructionsRequestInput } from '../declarations/DeliverySelectionInstructionsRequestInput.js';
export type { DeliverySelection } from '../declarations/DeliverySelection.js';
export type { DeliverySelectionChoiceResource } from '../declarations/DeliverySelectionChoiceResource.js';
export type { DeliverySelectionInstructionsRequest } from '../declarations/DeliverySelectionInstructionsRequest.js';
export type { DeliverySelectionLifecycleEventResource } from '../declarations/DeliverySelectionLifecycleEventResource.js';
export type { DeliveryInventoryReservationSummary } from '../declarations/DeliveryInventoryReservationSummary.js';
export type { Order } from '../declarations/Order.js';
export type { AppliedDiscount } from '../declarations/AppliedDiscount.js';
export type { BuyerAction } from '../declarations/BuyerAction.js';
export type { OrderCharge } from '../declarations/OrderCharge.js';
export type { OrderCalculatedChargeTax } from '../declarations/OrderCalculatedChargeTax.js';
export type { TaxCalculationRequest } from '../declarations/TaxCalculationRequest.js';
export type { TaxComponentRequest } from '../declarations/TaxComponentRequest.js';
export type { TaxJurisdiction } from '../declarations/TaxJurisdiction.js';
export type { OrderDeliveryDestinationAddress } from '../declarations/OrderDeliveryDestinationAddress.js';
export type { OrderDeliveryDestinationRecipient } from '../declarations/OrderDeliveryDestinationRecipient.js';
export type { Fulfillment } from '../declarations/Fulfillment.js';
export type { FulfillmentChargeLink } from '../declarations/FulfillmentChargeLink.js';
export type { DigitalFulfillmentDetails } from '../declarations/DigitalFulfillmentDetails.js';
export type { FulfillmentLineItem } from '../declarations/FulfillmentLineItem.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { DeliveryFulfillmentDetails } from '../declarations/DeliveryFulfillmentDetails.js';
export type { ExpandedPackageSummary } from '../declarations/ExpandedPackageSummary.js';
export type { PickupFulfillmentDetails } from '../declarations/PickupFulfillmentDetails.js';
export type { FulfillmentRecipient } from '../declarations/FulfillmentRecipient.js';
export type { ServiceFulfillmentDetails } from '../declarations/ServiceFulfillmentDetails.js';
export type { ExpandedShipmentSummary } from '../declarations/ExpandedShipmentSummary.js';
export type { OrderGiftCardAllocation } from '../declarations/OrderGiftCardAllocation.js';
export type { OrderGiftCardSettlement } from '../declarations/OrderGiftCardSettlement.js';
export type { OrderGiftCardSelection } from '../declarations/OrderGiftCardSelection.js';
export type { OrderLineItem } from '../declarations/OrderLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { GiftCardProductConfiguration } from '../declarations/GiftCardProductConfiguration.js';
export type { GiftCardCustomAmountBounds } from '../declarations/GiftCardCustomAmountBounds.js';
export type { GiftCardPurchaseRecipient } from '../declarations/GiftCardPurchaseRecipient.js';
export type { Image } from '../declarations/Image.js';
export type { LineItemInventoryDemand } from '../declarations/LineItemInventoryDemand.js';
export type { PurchasedGiftCard } from '../declarations/PurchasedGiftCard.js';
export type { OrderCalculatedLineItemTax } from '../declarations/OrderCalculatedLineItemTax.js';
export type { RequestedTip } from '../declarations/RequestedTip.js';
export type { OrderReturnCreditSettlement } from '../declarations/OrderReturnCreditSettlement.js';
export type { SubscriptionPlanLineItem } from '../declarations/SubscriptionPlanLineItem.js';
export type { OrderLineItemTax } from '../declarations/OrderLineItemTax.js';
export type { OrderTaxExemption } from '../declarations/OrderTaxExemption.js';
export type { OrderTaxLocation } from '../declarations/OrderTaxLocation.js';
export type { TaxBreakdown } from '../declarations/TaxBreakdown.js';
export type { Tip } from '../declarations/Tip.js';
export type { TipPaymentIntentAllocation } from '../declarations/TipPaymentIntentAllocation.js';
export type { TipValueSettlementAllocation } from '../declarations/TipValueSettlementAllocation.js';
export type { BuyerDeliverySelection } from '../declarations/BuyerDeliverySelection.js';
export type { BuyerDeliverySelectionChoiceResource } from '../declarations/BuyerDeliverySelectionChoiceResource.js';
export type { DeliveryRecipientResource } from '../declarations/DeliveryRecipientResource.js';
export type { CloseCheckoutSessionRequestInput } from '../declarations/CloseCheckoutSessionRequestInput.js';
export type { ConfirmCheckoutCustomerVerificationRequestInput } from '../declarations/ConfirmCheckoutCustomerVerificationRequestInput.js';
export type { CreateCheckoutSessionRequestInput } from '../declarations/CreateCheckoutSessionRequestInput.js';
export type { CreateCheckoutCustomerVerificationRequestInput } from '../declarations/CreateCheckoutCustomerVerificationRequestInput.js';
export type { CreateCheckoutDeliveryQuoteRequestInput } from '../declarations/CreateCheckoutDeliveryQuoteRequestInput.js';
export type { CreateDeliverySelectionRequestInput } from '../declarations/CreateDeliverySelectionRequestInput.js';
export type { UpdateCheckoutSessionRequestInput } from '../declarations/UpdateCheckoutSessionRequestInput.js';
export { makeCheckoutSessionResponse } from '../declarations/makeCheckoutSessionResponse.js';
export { makeCheckoutCustomerVerificationConfirmationResponse } from '../declarations/makeCheckoutCustomerVerificationConfirmationResponse.js';
export { makeCheckoutSessionLaunchResponse } from '../declarations/makeCheckoutSessionLaunchResponse.js';
export { makeCheckoutCustomerVerificationResponse } from '../declarations/makeCheckoutCustomerVerificationResponse.js';
export { makeCheckoutDeliveryQuoteResponse } from '../declarations/makeCheckoutDeliveryQuoteResponse.js';
export { makeCheckoutDeliverySelectionResultResponse } from '../declarations/makeCheckoutDeliverySelectionResultResponse.js';
export { makeCheckoutEffectiveDeliverySelectionResponse } from '../declarations/makeCheckoutEffectiveDeliverySelectionResponse.js';
export { makeDeliverySelectionResponse } from '../declarations/makeDeliverySelectionResponse.js';
export { makeCheckoutSessionListResponse } from '../declarations/makeCheckoutSessionListResponse.js';
export { makeCheckoutSession } from '../declarations/makeCheckoutSession.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeCheckoutCustomerVerificationConfirmation } from '../declarations/makeCheckoutCustomerVerificationConfirmation.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePaymentAttemptGiftCardRedemption } from '../declarations/makePaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../declarations/makePaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../declarations/makePaymentErrorSummary.js';
export { makeErrorRemediation } from '../declarations/makeErrorRemediation.js';
export { makePendingPaymentAction } from '../declarations/makePendingPaymentAction.js';
export { makeStripePaymentClientAction } from '../declarations/makeStripePaymentClientAction.js';
export { makeCheckoutCustomTextWriteConfig } from '../declarations/makeCheckoutCustomTextWriteConfig.js';
export { makeCheckoutCustomerConfig } from '../declarations/makeCheckoutCustomerConfig.js';
export { makePrefilledCustomerInfo } from '../declarations/makePrefilledCustomerInfo.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
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
export { makeCheckoutSessionLaunchResult } from '../declarations/makeCheckoutSessionLaunchResult.js';
export { makeCheckoutCustomerVerification } from '../declarations/makeCheckoutCustomerVerification.js';
export { makeDeliveryBuyerLocationResource } from '../declarations/makeDeliveryBuyerLocationResource.js';
export { makeDeliveryCoordinateRequest } from '../declarations/makeDeliveryCoordinateRequest.js';
export { makeDeliveryQuoteMethodResource } from '../declarations/makeDeliveryQuoteMethodResource.js';
export { makeDeliveryPendingCallerRateRequest } from '../declarations/makeDeliveryPendingCallerRateRequest.js';
export { makeDeliverySelection } from '../declarations/makeDeliverySelection.js';
export { makeDeliverySelectionChoiceResource } from '../declarations/makeDeliverySelectionChoiceResource.js';
export { makeDeliverySelectionInstructionsRequest } from '../declarations/makeDeliverySelectionInstructionsRequest.js';
export { makeDeliverySelectionLifecycleEventResource } from '../declarations/makeDeliverySelectionLifecycleEventResource.js';
export { makeDeliveryInventoryReservationSummary } from '../declarations/makeDeliveryInventoryReservationSummary.js';
export { makeOrder } from '../declarations/makeOrder.js';
export { makeAppliedDiscount } from '../declarations/makeAppliedDiscount.js';
export { makeBuyerAction } from '../declarations/makeBuyerAction.js';
export { makeOrderCharge } from '../declarations/makeOrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../declarations/makeOrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../declarations/makeTaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../declarations/makeTaxComponentRequest.js';
export { makeTaxJurisdiction } from '../declarations/makeTaxJurisdiction.js';
export { makeOrderDeliveryDestinationAddress } from '../declarations/makeOrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../declarations/makeOrderDeliveryDestinationRecipient.js';
export { makeFulfillment } from '../declarations/makeFulfillment.js';
export { makeFulfillmentChargeLink } from '../declarations/makeFulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../declarations/makeDigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../declarations/makeFulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../declarations/makeDeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../declarations/makeExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../declarations/makePickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../declarations/makeFulfillmentRecipient.js';
export { makeServiceFulfillmentDetails } from '../declarations/makeServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../declarations/makeExpandedShipmentSummary.js';
export { makeOrderGiftCardAllocation } from '../declarations/makeOrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../declarations/makeOrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../declarations/makeOrderGiftCardSelection.js';
export { makeOrderLineItem } from '../declarations/makeOrderLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeGiftCardProductConfiguration } from '../declarations/makeGiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../declarations/makeGiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../declarations/makeGiftCardPurchaseRecipient.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeLineItemInventoryDemand } from '../declarations/makeLineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../declarations/makePurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../declarations/makeOrderCalculatedLineItemTax.js';
export { makeRequestedTip } from '../declarations/makeRequestedTip.js';
export { makeOrderReturnCreditSettlement } from '../declarations/makeOrderReturnCreditSettlement.js';
export { makeSubscriptionPlanLineItem } from '../declarations/makeSubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../declarations/makeOrderLineItemTax.js';
export { makeOrderTaxExemption } from '../declarations/makeOrderTaxExemption.js';
export { makeOrderTaxLocation } from '../declarations/makeOrderTaxLocation.js';
export { makeTaxBreakdown } from '../declarations/makeTaxBreakdown.js';
export { makeTip } from '../declarations/makeTip.js';
export { makeTipPaymentIntentAllocation } from '../declarations/makeTipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../declarations/makeTipValueSettlementAllocation.js';
export { makeBuyerDeliverySelection } from '../declarations/makeBuyerDeliverySelection.js';
export { makeBuyerDeliverySelectionChoiceResource } from '../declarations/makeBuyerDeliverySelectionChoiceResource.js';
export { makeDeliveryRecipientResource } from '../declarations/makeDeliveryRecipientResource.js';
