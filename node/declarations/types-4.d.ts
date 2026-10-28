import type { Address, AddressRequest, AddressRequestInput, AuthMode } from './types-0.js';
import type { ResourceReference, ResponseMeta } from './types-42.js';
import type { DeliveryInputRequirement, DeliveryMerchantDiagnostic } from './types-13.js';
import type { DeliveryQuoteChoiceGroupResource } from './types-15.js';
import type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from './types-18.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { OrderLineItemTax, OrderLineItemTaxInput, OrderPaymentAttempt } from './types-34.js';
import type { Image } from './types-21.js';
import type { LegalSettings } from './types-30.js';
import type { MetadataMap } from './types-32.js';
import type { PaymentCollection } from './types-37.js';
import type { InputValue, ClientOptions as RuntimeClientOptions, CredentialProvider } from '../runtime.js';
import type {
    CloseCheckoutSessionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionRequestInput
} from './types-5.js';
import type { CreateDeliverySelectionRequestInput } from './types-6.js';
import type { UpdateCheckoutSessionRequestInput } from './types-50.js';
import type { SubscriptionIntervalOption } from './types-48.js';
import type { Credentials } from './types-11.js';
/**
 * Shape $ (Value): {@link ChangeSubscriptionPlanRequest}. The request body for: Change
 * subscription plan.
 */
export type ChangeSubscriptionPlanRequest = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link ChangeSubscriptionPlanRequestInput}. The request body for: Change
 * subscription plan.
 */
export type ChangeSubscriptionPlanRequestInput = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CheckoutBuyerContact}. Buyer contact supplied with payment or saved
 * during checkout.
 */
export type CheckoutBuyerContact = {
    /**
     * Shape $ (Value): string or null. Email supplied for the buyer, exactly as sent. Null when no
     * email is saved; is_email_cleared distinguishes an explicit clear. Format: email. maxLength:
     * 255.
     */
    "email": string | null;
    /**
     * Shape $ (Value): boolean. True when the buyer explicitly cleared the email, including before
     * entering one. Saving an email resets it to false. Do not restore a prefilled email while
     * true.
     */
    "is_email_cleared": boolean;
    /**
     * Shape $ (Value): boolean. True when the buyer explicitly cleared the phone, including before
     * entering one. Saving a phone resets it to false. Do not restore a prefilled phone while
     * true.
     */
    "is_phone_cleared": boolean;
    /**
     * Shape $ (Value): string or null. Phone supplied for the buyer, in E.164 format. Null when no
     * phone is saved; is_phone_cleared distinguishes an explicit clear. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "phone": string | null;
    /**
     * Shape $ (Value): string. When the buyer last changed the saved checkout contact. Omitted on
     * order buyer contact. Format: date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer contact to supply with payment or
 * save during checkout. Send at least one field. Values are stored exactly as sent, so an email
 * with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept
 * null to clear a field. Payment requests do not accept null. minProperties: 1.
 */
export type CheckoutBuyerContactRequest = {
    /**
     * Shape $ (Value): string or null. Email for the buyer, such as buyer@example.com. On checkout
     * session updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): string or null. Phone for the buyer, in E.164 format, such as +14155551234.
     * On checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: string | null;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer contact to supply with payment
 * or save during checkout. Send at least one field. Values are stored exactly as sent, so an email
 * with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept
 * null to clear a field. Payment requests do not accept null. minProperties: 1.
 */
export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
/**
 * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field you
 * leave out uses your checkout settings.
 */
export type CheckoutBuyerFields = {
    /**
     * Shape $ (Value): boolean. Whether checkout offers address suggestions while the buyer enters
     * an address.
     */
    "address_autocomplete_enabled"?: boolean;
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's billing address. */
    "require_billing_address"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether checkout requires the buyer's email address. Subscription
     * plan sessions always require email, so only true is allowed with type: subscription_plan.
     */
    "require_email"?: boolean;
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's phone number. */
    "require_phone"?: boolean;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the buyer
 * for. Each field you leave out uses your checkout settings.
 */
export type CheckoutBuyerFieldsRequestRequestInput = CheckoutBuyerFields;
/**
 * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
 * summary message and a shipping address label.
 */
export type CheckoutCustomTextConfig = {
    /** Shape $ (Value): string. */
    "order_summary_message"?: string;
    /** Shape $ (Value): string. */
    "shipping_address_label"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
 * when creating a checkout session: an order summary message and a shipping address label.
 */
export type CheckoutCustomTextWriteConfigInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_summary_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "shipping_address_label"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutCustomerPrefill}. Details the buyer's checkout can prefill from
 * the customer it acts for.
 */
export type CheckoutCustomerPrefill = {
    /**
     * Shape $ (Value): {@link Address}. The customer's default billing address. Omitted when the
     * customer has none. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "billing_address"?: Address;
    /** Shape $ (Value): string. The customer's email. */
    "email": string;
    /**
     * Shape $ (Value): {@link Address}. The customer's default shipping address. Omitted when the
     * customer has none. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "shipping_address"?: Address;
    /**
     * Shape $ (Value): string. Recipient name of the customer's default shipping address. Present
     * whenever `shipping_address` is.
     */
    "shipping_recipient_name"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a
 * checkout, such as the assigned method, eligibility, or pricing callback, with the revision it
 * was pinned at.
 */
export type CheckoutDeliveryPinnedDependency = {
    /**
     * Shape $ (Value): string. Value enum: "assigned_method", "eligibility", "method_origin",
     * "pickup_collection", "pricing_callback", "origin".
     */
    "delivery_dependency_role": "assigned_method"
        | "eligibility"
        | "method_origin"
        | "pickup_collection"
        | "pricing_callback"
        | "origin"
        | (string & {});
    /**
     * Shape $ (Value): {@link ResourceReference} or null. Shape $.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * Shape $.anyOf[2] (Value): null.
     */
    "dependency": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): integer string. Version of the Location geography used by this assignment
     * or dependency. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "revision_id"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutDerivedDeliveryResource}. The delivery options Flint derived for
 * a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.
 */
export type CheckoutDerivedDeliveryResource = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "buyer_reasons": Array<string>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteChoiceGroupResource}. Shape $[] (Value):
     * {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with
     * the delivery options the buyer can choose, its availability status, and any input still
     * needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** Shape $ (Value): string. */
    "delivery_quote_id"?: string;
    /**
     * Shape $ (Value): string or null. Current delivery selection ID after reconciliation, or null
     * when no selection is current. Assert this value with expected_delivery_selection_id on
     * checkout delivery writes.
     */
    "delivery_selection_id": string | null;
    /**
     * Shape $ (Value): string. Value enum: "complete", "incomplete", "degraded",
     * "requires_explicit_quote".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Inputs the checkout's delivery
     * methods need. Once the checkout has a delivery quote, these are the quote's
     * input_requirements. Before that, they come from the methods alone and name no choice group:
     * the fields in each method's quote_input_fields, and each recipient field a method requires.
     * Shape $[] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such
     * as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryMerchantDiagnostic}. Always present with an API key
     * or dashboard credential. Shape $[] (Value): {@link DeliveryMerchantDiagnostic}. A
     * merchant-only diagnostic explaining why a delivery method produced no option, with its
     * outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
};
/**
 * Shape $ (Value): {@link CheckoutGiftCardChallenge}. A URL to load in an iframe when applying a
 * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
 */
export type CheckoutGiftCardChallenge = {
    /**
     * Shape $ (Value): string. Load this URL in an iframe on page_origin when applying a gift card
     * returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for
     * you, so you don't need to do anything. The page posts a single-use proof to your page; send
     * it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session
     * and stops working when the session ends. Format: uri.
     */
    "url": string;
};
/**
 * Shape $ (Value): {@link CheckoutLegalConfigRequestInput}. Legal settings you supply when
 * creating a checkout session: whether buyers must accept terms, and links to the terms, refund
 * policy, shipping policy, and contract.
 */
export type CheckoutLegalConfigRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "contract_url"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "refund_policy_url"?: string;
    /** Shape $ (Value): boolean. */
    "require_terms_of_service"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "shipping_policy_url"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "terms_of_service_url"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutMerchantSupport}. The merchant's support contact. Each field is
 * omitted when the merchant has not set it.
 */
export type CheckoutMerchantSupport = {
    /** Shape $ (Value): string. Support email address. Format: email. */
    "email"?: string;
    /** Shape $ (Value): string. Support phone number. */
    "phone"?: string;
    /** Shape $ (Value): string. Support page, as an absolute http or https URL. Format: uri. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings for a checkout: the enabled
 * payment options and a note shown with payment.
 */
export type CheckoutPaymentConfig = {
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Shape $ (Value): string. */
    "payment_note"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutPaymentConfigRequestInput}. Payment settings you supply when
 * creating a checkout session: the enabled payment options and a note shown with payment.
 */
export type CheckoutPaymentConfigRequestInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_note"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutPaymentMethodSave}. A card the buyer saved with the checkout's
 * payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a
 * code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications
 * and purpose confirm_saved_payment_method.
 */
export type CheckoutPaymentMethodSave = {
    /**
     * Shape $ (Value): boolean. True while status is pending after the buyer confirmed the number
     * by text, when the number alone can't save the card: the customer with the buyer's email
     * existed before this payment, the buyer did not confirm that email in this checkout, and the
     * number isn't already the customer's saved number with an active card saved with it. The
     * buyer confirms the email with an emailed code to finish; the card is then saved with the
     * number, which replaces the customer's saved number.
     */
    "email_confirmation_required": boolean;
    /**
     * Shape $ (Value): string or null. When a pending save stops waiting: 24 hours after the
     * payment succeeded or was approved. Format: date-time.
     */
    "expires_at"?: string | null;
    /**
     * Shape $ (Value): string. Last two digits of the number the buyer gave, which a code is
     * texted to. Set while status is pending.
     */
    "phone_last_digits"?: string;
    /** Shape $ (Value): string.  Value enum: "sms", "email". */
    "saved_with"?: "sms" | "email" | (string & {});
    /** Shape $ (Value): string.  Value enum: "pending", "saved", "expired". */
    "status": "pending" | "saved" | "expired" | (string & {});
};
/**
 * Shape $ (Value): {@link CheckoutPrefill}. Contact details and addresses to fill in for the
 * buyer, who can change them. For a customer with saved addresses, Flint fills in any address you
 * leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a
 * prefilled address sets the order's tax location. Not changed by what the buyer types; for that,
 * read buyer_contact. customer_prefill is what the checkout credential reads from the customer
 * record.
 */
export type CheckoutPrefill = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** Shape $ (Value): string. */
    "email"?: string;
    /** Shape $ (Value): string. */
    "phone"?: string;
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "shipping_address"?: Address;
};
/**
 * Shape $ (Value): {@link CheckoutPrefillRequest}. Contact details and addresses to fill in for
 * the buyer, who can change them. For a customer with saved addresses, Flint fills in any address
 * you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a
 * prefilled address sets the order's tax location. Not changed by what the buyer types; for that,
 * read buyer_contact. customer_prefill is what the checkout credential reads from the customer
 * record.
 */
export type CheckoutPrefillRequest = {
    /**
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "billing_address"?: AddressRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "email"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequest;
};
/**
 * Shape $ (Value): {@link CheckoutPrefillRequestInput}. Contact details and addresses to fill in
 * for the buyer, who can change them. For a customer with saved addresses, Flint fills in any
 * address you leave out, and reads include it. With quick_pay or subscription_plan and automatic
 * tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types;
 * for that, read buyer_contact. customer_prefill is what the checkout credential reads from the
 * customer record.
 */
export type CheckoutPrefillRequestInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "billing_address"?: AddressRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "email"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "phone"?: string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequestInput;
};
/**
 * Shape $ (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
 * stale delivery selection, with its `code`, whether it blocks completion, and remediation.
 */
export type CheckoutProblemResource = {
    /** Shape $ (Value): boolean. */
    "blocks_completion": boolean;
    /**
     * Shape $ (Value): string. Value enum: "delivery_selection_stale",
     * "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * Shape $ (Value): {@link ErrorRemediation}. Recovery guidance for an error: whether and how
     * to `retry`, plus next steps and suggested actions.
     */
    "remediation"?: ErrorRemediation;
    /** Shape $ (Value): string.  Value enum: "error". */
    "severity": "error" | (string & {});
};
/**
 * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
 * automatic promotions apply and whether the buyer can apply promotion codes.
 */
export type CheckoutPromotionConfig = {
    /** Shape $ (Value): boolean. */
    "automatic_enabled"?: boolean;
    /**
     * Shape $ (Value): boolean or null. Object-level override for whether this checkout's buyer
     * can apply promotion codes, hosted or headless. Hosted checkout shows or hides code entry to
     * match. Omit to inherit checkout.promotion_codes_enabled. True allows codes when the
     * merchant's promotion settings allow them; false blocks them for this checkout.
     */
    "codes_enabled"?: boolean | null;
};
/**
 * Shape $ (Value): {@link CheckoutPromotionConfigRequestRequestInput}. Promotion settings for a
 * checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
 */
export type CheckoutPromotionConfigRequestRequestInput = CheckoutPromotionConfig;
/**
 * Shape $ (Value): {@link CheckoutQuickPayItemRequest}. A single custom item to charge on a
 * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
};
/**
 * Shape $ (Value): {@link CheckoutQuickPayItemRequestInput}. A single custom item to charge on a
 * checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTaxInput;
};
/**
 * Shape $ (Value): {@link CheckoutRecoveryEmailSettings}. Checkout reminder email settings. On
 * update, an omitted field keeps its value.
 */
export type CheckoutRecoveryEmailSettings = {
    /**
     * Shape $ (Value): integer. Seconds to wait after the buyer last changed their email or phone
     * before sending the reminder. Must be a multiple of 60. Defaults to 3600. Format: int32.
     * minimum: 900. maximum: 86400. multipleOf: 60. Default: 3600.
     */
    "delay_seconds"?: number;
    /**
     * Shape $ (Value): boolean. Whether Flint sends checkout reminders. Turning them on requires a
     * business address on the merchant, which the reminder prints; without one the update returns
     * ACTION_NOT_ALLOWED with reason configuration_required and the merchant reference.
     */
    "enabled"?: boolean;
};
/**
 * Shape $ (Value): {@link CheckoutRecoveryEmailSettingsRequestRequestInput}. Checkout reminder
 * email settings. On update, an omitted field keeps its value.
 */
export type CheckoutRecoveryEmailSettingsRequestRequestInput = CheckoutRecoveryEmailSettings;
/**
 * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not allowed
 * when surface is embedded; use payment_return_url.
 */
export type CheckoutRedirects = {
    /**
     * Shape $ (Value): string. Where the buyer goes when they leave checkout without paying. The
     * session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP
     * loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Shape $ (Value): string. Where Flint sends a buyer who opens the session after it expires.
     * Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also
     * accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "expired_url"?: string;
    /**
     * Shape $ (Value): string. Where the buyer goes after paying. Flint adds checkout_session_id
     * and order_id query parameters, replacing any with those names. The redirect doesn't prove
     * payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL;
     * test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength:
     * 2048.
     */
    "success_url"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the buyer.
 * Not allowed when surface is embedded; use payment_return_url.
 */
export type CheckoutRedirectsRequestInput = {
    /**
     * Shape $ (Value): string. Where the buyer goes when they leave checkout without paying. The
     * session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP
     * loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Shape $ (Value): string. Where Flint sends a buyer who opens the session after it expires.
     * Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also
     * accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength:
     * 2048.
     */
    "expired_url"?: string;
    /**
     * Shape $ (Value): string. Where the buyer goes after paying. Flint adds checkout_session_id
     * and order_id query parameters, replacing any with those names. The redirect doesn't prove
     * payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL;
     * test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. minLength:
     * 1. maxLength: 2048.
     */
    "success_url"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutSavedPaymentDetailsSettingsRequestRequestInput}. Saved payment
 * details settings for hosted checkout. On update, an omitted field keeps its value.
 */
export type CheckoutSavedPaymentDetailsSettingsRequestRequestInput = {
    /**
     * Shape $ (Value): boolean. Whether hosted checkout shows buyers an unchecked option to save
     * the card they type. A card is saved only when the buyer checks it and the payment succeeds,
     * with usage on_session: Flint charges it only in checkouts the buyer completes, never for
     * subscriptions, automatic invoices, or other charges without the buyer. Checkout never shows
     * the option when customer accounts are merchant hosted, or for invoice, subscription, and
     * return checkouts.
     */
    "enabled"?: boolean;
};
/**
 * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
 * payment.
 */
export type CheckoutSession = {
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Contact the buyer entered in checkout before
     * paying, saved with the session's checkout credential. Separate from merchant-supplied
     * prefill and customer_prefill from the customer record. Omitted until the buyer saves or
     * clears a field. When a checkout session payment omits buyer_contact.email or
     * buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): boolean. Whether checkout offers the buyer the option to save the card they
     * type for faster checkout at this merchant. When true and
     * save_payment_method_requires_verification is false, PayOrder accepts save_payment_method:
     * true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether the buyer can save the card they type by giving a US or
     * Canadian mobile phone number with the payment, in save_payment_method_phone on POST
     * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True while
     * Flint can send texts and either save_payment_method_requires_verification is true, so the
     * number replaces confirming an email before paying, or the checkout acts for the customer
     * whose email the buyer confirmed with this credential, so the number joins that customer's
     * saved details once the buyer confirms it. Returned only to the checkout credential; never in
     * webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    /** Shape $ (Value): string. */
    "checkout_session_id": string;
    /** Shape $ (Value): string. The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Shape $ (Value): string. The customer of the session's order. Omitted when the order has
     * none. A checkout credential issued for this session acts for this customer. Add
     * expand=customer to include the customer.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutCustomerPrefill}. Contact and default addresses of the
     * customer the checkout acts for, with the recipient name on its default shipping address: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. Present on GET and PATCH responses while the session is open and acts for a
     * customer. Separate from merchant-supplied prefill and buyer_contact saved by the buyer.
     * Returned only to the checkout credential; never in webhook payloads. Details the buyer's
     * checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Shape $ (Value): {@link CheckoutDerivedDeliveryResource}. Current delivery choices for
     * Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field
     * does not request a delivery quote. Omitted when the session is not open, has no order, or
     * Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer
     * sees them: choice groups, input requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment captured when the
     * checkout was created. Shape $[] (Value): string.
     */
    "delivery_method_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link CheckoutDeliveryPinnedDependency}. Immutable configuration
     * lineage used to evaluate delivery quotes. Shape $[] (Value): {@link
     * CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a checkout, such as the
     * assigned method, eligibility, or pricing callback, with the revision it was pinned at.
     */
    "delivery_pinned_dependencies"?: Array<CheckoutDeliveryPinnedDependency>;
    /**
     * Shape $ (Value): boolean. Whether the order has at least one remaining quote-resolved
     * fulfillment choice that must be selected before payment.
     */
    "delivery_selection_required": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): integer string. The lifetime the session got. expires_at is its deadline.
     * Omitted for invoice sessions, which take their deadline from the invoice. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutGiftCardChallenge}. Where the buyer completes a gift card
     * challenge for this checkout. Returned on single-session reads, session create and update
     * responses, checkout launch results, and customer verification confirmation results while the
     * session is open and can show the challenge. Omitted from lists, webhooks, expanded
     * resources, and delivery selection results. A URL to load in an iframe when applying a gift
     * card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Shape $ (Value): {@link ExpandedInvoiceSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid,
     * outstanding, and refunded amounts, returned when the invoice is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this terminal session credential is temporarily restricted
     * to recovering its owning payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link Image}. The merchant's square icon, shown in browser tabs and
     * compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link Image}. The merchant's logo. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * Shape $ (Value): string. The merchant's business name, which hosted checkout shows when
     * `theme.title` is unset. Reads `Merchant` when the merchant has not set a business name.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it.
     */
    "merchant_name"?: string;
    /**
     * Shape $ (Value): {@link CheckoutMerchantSupport}. How the buyer can reach the merchant for
     * help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses
     * when the merchant set at least one of them. Show it where your checkout tells the buyer to
     * contact the merchant, such as an expired or closed checkout, or your receipt. Returned only
     * to the checkout credential; never in webhook payloads. The merchant's support contact. Each
     * field is omitted when the merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page that renders this embedded checkout. Omitted
     * when not set.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Guidance for collecting a payment source.
     * Checkout-credential reads include it only while the session is open. Returned only to the
     * checkout credential; never in webhook payloads. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedPaymentIntentSummary}. Shape $[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Shape $ (Value): {@link ExpandedPaymentLinkSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type,
     * status, and URL, returned when the payment link is expanded. Shape $.anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_link_id"?: string;
    /**
     * Shape $ (Value): {@link Image}. The current image of the payment link that opened this
     * session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an
     * image; other responses and webhooks omit it. An image with its `url`, `width`, and `height`,
     * and optional `alt` text.
     */
    "payment_link_image"?: Image;
    /**
     * Shape $ (Value): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this
     * checkout's payment by giving a mobile phone number, and whether they confirmed it. Present
     * on GET and PATCH responses after a payment that paid the order in full, or that was approved
     * for the merchant to capture later, and saved a card this way. A checkout whose payment is
     * approved stays open until the capture. Returned only to the checkout credential; never in
     * webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile
     * phone number. It works for nothing until the buyer confirms it with a code: request one with
     * POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Configured payment options for merchant
     * credentials; currently available payment options for the checkout credential. Payment
     * settings for a checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefill}. Contact details and addresses to fill in for the
     * buyer, who can change them. For a customer with saved addresses, Flint fills in any address
     * you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax
     * on, a prefilled address sets the order's tax location. Not changed by what the buyer types;
     * for that, read buyer_contact. customer_prefill is what the checkout credential reads from
     * the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Shape $ (Value): Array of {@link CheckoutProblemResource}. Named conditions that affect
     * checkout completion. Follow each problem's remediation action instead of reconstructing
     * delivery lifecycle rules in the client. payment_in_progress means another payment for the
     * order must finish before this checkout can complete. When Flint cannot read the checkout's
     * delivery, the read still succeeds and reports delivery_unreadable; its remediation says
     * whether reading the session again can succeed, and its next action's reason_code names the
     * error. Shape $[] (Value): {@link CheckoutProblemResource}. A problem with a checkout
     * session, such as a stale delivery selection, with its `code`, whether it blocks completion,
     * and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): string or null. RFC3339 deadline for the restricted payment-attempt
     * recovery window. Format: date-time.
     */
    "recovery_expires_at"?: string | null;
    /**
     * Shape $ (Value): string. Payment attempt that this checkout credential may recover while
     * is_in_recovery is true.
     */
    "recovery_payment_attempt_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): boolean. Whether the buyer must confirm their email with a code before the
     * checkout can save their card or use their saved cards. True when can_save_payment_method is
     * true and the checkout acts for no customer for this credential: the merchant created it
     * without one, and either the buyer has not confirmed an email with this credential, or the
     * customer whose email they confirmed has since changed that email or been deleted. A
     * credential other than the one a confirmation returned, such as the hosted checkout link
     * opened on another device, reads true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * Shape $ (Value): Array of string. What save_payment_method keeps, present when
     * can_save_payment_method is true: card, a card the buyer types into checkout. Show the save
     * option with that payment method only. A pay request that sends save_payment_method: true
     * with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created
     * with setup_future_usage none, still pays, and its payment attempt's payment_method_save
     * reports not_saved. The values can grow. Returned only to the checkout credential; never in
     * webhook payloads. [] enum: "card". Shape $[] (Value): string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Guidance for collecting a payment method to
     * save. Checkout-credential reads include it only while the session is open. Returned only to
     * the checkout credential; never in webhook payloads. Client-side details for collecting
     * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for
     * this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /**
     * Shape $ (Value): string. Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTerms}. Renewal terms a subscription checkout
     * commits the buyer to. Frozen when the session's order was created, so later plan changes do
     * not alter them. Absent when the checkout starts no subscription. Renewal terms a
     * subscription checkout commits the buyer to. Frozen when the session's order was created, so
     * later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /** Shape $ (Value): string. */
    "superseding_checkout_session_id"?: string;
    /** Shape $ (Value): string.  Value enum: "hosted", "embedded". */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutSessionTax}. The session's tax settings. Omitted when the
     * session sets none. Tax settings of a checkout session: whether it collects tax and any tax
     * location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Shape $ (Value): string. Why the session ended. The checkout credential can still read its
     * own closed or expired session; every other call returns CHECKOUT_SESSION_NOT_OPEN.
     * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially
     * succeeds outside the session. order_mutated applies when an edit closes or completes its
     * order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant
     * edits keep hosted and embedded sessions open. A session already past expires_at ends with
     * expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTheme}. The theme checkout renders with: your branding
     * settings, with the session's `title`, `primary_color`, and `accent_color` over them. A
     * session sets only those three; the other fields come from branding settings. Omitted when
     * neither sets a value. Colors, corner radius, font family, and title that style a checkout,
     * taken from the session or link theme or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. What the session collects payment for, fixed at creation. Value
     * enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): string. Hosted checkout URL that carries a one-time launch credential. Send
     * the buyer here to pay. Present only for hosted sessions read with a merchant credential that
     * can manage checkout sessions. Launch results include it for hosted sessions: create,
     * payment-link resolve, and invoice and return-resolution checkout. Omitted for embedded
     * sessions.
     */
    "url"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CheckoutSessionCustomerVerification}. A request for a checkout
 * verification code. A request with channel email reads the same whether or not Flint sent a code.
 */
export type CheckoutSessionCustomerVerification = {
    /**
     * Shape $ (Value): string. How the code reached the buyer: email or sms. Value enum: "email",
     * "sms".
     */
    "channel": "email" | "sms" | (string & {});
    /** Shape $ (Value): string. ID to confirm the code with. */
    "checkout_session_customer_verification_id": string;
    /** Shape $ (Value): string. The checkout session the code belongs to. */
    "checkout_session_id": string;
    /** Shape $ (Value): string. When the code was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. The address the code is for, lowercased: the email the buyer typed,
     * or for an emailed confirm_saved_payment_method code, the customer's email masked to its
     * first character and domain, such as a•••@example.com. Omitted for a texted
     * confirm_saved_payment_method code.
     */
    "email"?: string;
    /**
     * Shape $ (Value): string. When the code stops working: 15 minutes after the request for an
     * emailed code, and 10 minutes after the text provider first sent a texted code, which a new
     * request within them texts again. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): string. Last two digits of the number a texted code went to, so the buyer
     * knows which phone to check. Set only for channel sms.
     */
    "phone_last_digits"?: string;
    /**
     * Shape $ (Value): string. Why the buyer asked for the code, as sent in the request. Value
     * enum: "gift_card_purchase", "save_payment_method", "use_saved_payment_methods",
     * "confirm_saved_payment_method".
     */
    "purpose": "gift_card_purchase"
        | "save_payment_method"
        | "use_saved_payment_methods"
        | "confirm_saved_payment_method"
        | (string & {});
};
/**
 * Shape $ (Value): {@link CheckoutSessionCustomerVerificationResponse}. A response containing
 * `CheckoutSessionCustomerVerification` data.
 */
export type CheckoutSessionCustomerVerificationResponse = {
    /**
     * Shape $ (Value): {@link CheckoutSessionCustomerVerification}. A request for a checkout
     * verification code. A request with channel email reads the same whether or not Flint sent a
     * code.
     */
    "data": CheckoutSessionCustomerVerification;
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
/** Shape $ (Value): {@link CheckoutSessionListResponse}. A page of `CheckoutSession` objects. */
export type CheckoutSessionListResponse = {
    /**
     * Shape $ (Value): Array of {@link CheckoutSession}. Shape $[] (Value): {@link
     * CheckoutSession}. A session in which a buyer completes an order's payment.
     */
    "data": Array<CheckoutSession>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CheckoutSessionResponse}. A response containing `CheckoutSession` data.
 */
export type CheckoutSessionResponse = {
    /**
     * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data": CheckoutSession;
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
 * Shape $ (Value): {@link CheckoutSessionTax}. Tax settings of a checkout session: whether it
 * collects tax and any tax location the merchant fixed.
 */
export type CheckoutSessionTax = {
    /** Shape $ (Value): boolean. Whether the session collects tax, as set when it was created. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): {@link Address}. The tax location your order already held when this session
     * was created over it. Hosted checkout shows it and does not ask the buyer for another.
     * Omitted when the buyer may give or change the location. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "location_fixed_by_merchant"?: Address;
};
/**
 * Shape $ (Value): {@link CheckoutSessionWithSecret}. The checkout session with its checkout
 * credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
 * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
 * payment.
 */
export type CheckoutSessionWithSecret = (Exclude<CheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. Checkout credential. Send it as Authorization: Bearer
     * <checkout_auth_token>. Present on checkout launch and customer binding confirmation; omitted
     * when a saved-card confirmation keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
export type CheckoutSessionsCloseSessionInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CloseCheckoutSessionRequestInput}. The request body for: Close
     * checkout session.
     */
    "body"?: InputValue<CloseCheckoutSessionRequestInput>;
};
export type CheckoutSessionsConfirmCustomerVerificationInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "checkout_session_customer_verification_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmCheckoutSessionCustomerVerificationRequestInput}. The code
     * the buyer typed.
     */
    "body": InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>;
};
export type CheckoutSessionsCreateCustomerVerificationInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCheckoutSessionCustomerVerificationRequestInput}. A checkout
     * verification request selected by purpose.
     */
    "body": InputValue<CreateCheckoutSessionCustomerVerificationRequestInput>;
};
export type CheckoutSessionsCreateDeliveryQuoteInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCheckoutDeliveryQuoteRequestInput}. The request body for:
     * Create delivery quote.
     */
    "body": InputValue<CreateCheckoutDeliveryQuoteRequestInput>;
};
export type CheckoutSessionsCreateDeliverySelectionInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliverySelectionRequestInput}. The request body for: Create
     * delivery selection.
     */
    "body": InputValue<CreateDeliverySelectionRequestInput>;
};
export type CheckoutSessionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCheckoutSessionRequestInput}. The request body for: Create
     * checkout session.
     */
    "body": InputValue<CreateCheckoutSessionRequestInput>;
};
export type CheckoutSessionsDeleteCurrentDeliverySelectionInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "expected_delivery_selection_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type CheckoutSessionsGetCurrentDeliverySelectionInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
};
export type CheckoutSessionsGetDeliveryQuoteInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_quote_id": InputValue<string>;
};
export type CheckoutSessionsGetDeliverySelectionInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_selection_id": InputValue<string>;
};
export type CheckoutSessionsGetInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "invoice", "order",
     * "payment_intents", "payment_link". Shape $[] (Value): string. Value enum: "customer",
     * "invoice", "order", "payment_intents", "payment_link".
     */
    "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>;
};
export type CheckoutSessionsListDeliverySelectionsInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type CheckoutSessionsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "paid", "partially_paid",
     * "expired", "closed", "invalidated". Shape $[] (Value): string. Value enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated".
     */
    "status"?: InputValue<Array<"open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "payment_link_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. */
    "invoice_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "hosted", "embedded". Shape $[]
     * (Value): string. Value enum: "hosted", "embedded".
     */
    "surface"?: InputValue<Array<"hosted" | "embedded">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link". Shape $[] (Value): string. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     */
    "type"?: InputValue<Array<"order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "invoice", "order", "payment_link".
     * Shape $[] (Value): string. Value enum: "customer", "invoice", "order", "payment_link".
     */
    "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_link">>;
};
export type CheckoutSessionsUpdateInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCheckoutSessionRequestInput}. The request body for: Update
     * checkout session.
     */
    "body": InputValue<UpdateCheckoutSessionRequestInput>;
};
/**
 * Shape $ (Value): {@link CheckoutSettings}. Merchant defaults for checkout: custom domain,
 * delivery methods, expiration, payment options, required contact fields, promotion codes,
 * recovery email, and saved payment details.
 */
export type CheckoutSettings = {
    /**
     * Shape $ (Value): Array of string. Default delivery methods for checkout creation requests
     * that omit delivery_method_ids, payment links without delivery_method_ids, and invoice
     * checkouts. The default applies only when the order has items to deliver; otherwise no
     * methods are assigned. Methods and their dependencies must be active when saved. Send [] to
     * clear this default; null is rejected. Each checkout pins its assigned methods when created.
     * Shape $[] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Default lifetime in seconds for generic checkout sessions.
     * Invoice checkout sessions instead use the fixed deadline of the active invoice public-link
     * generation. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. minLength: 1. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): boolean. Merchant default for whether a checkout session's buyer can apply
     * promotion codes, hosted or headless; hosted checkout shows or hides code entry to match.
     * Object-level promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link CheckoutRecoveryEmailSettings}. Patch object: fields you send are
     * applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who
     * entered an email address in hosted checkout and left without paying. Merchant scope only.
     * Effective settings default it to off with a 3600 second delay. Checkout reminder email
     * settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettings;
    /** Shape $ (Value): boolean. */
    "require_billing_address"?: boolean;
    /** Shape $ (Value): boolean. */
    "require_email"?: boolean;
    /** Shape $ (Value): boolean. */
    "require_phone"?: boolean;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Patch object: fields you send are applied,
     * fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the
     * card they type for faster checkout at this merchant. Merchant scope only. Effective settings
     * default it to on. Saved payment details settings for hosted checkout. On update, an omitted
     * field keeps its value.
     */
    "saved_payment_details"?: CheckoutTaxConfig;
};
/**
 * Shape $ (Value): {@link CheckoutSettingsRequestRequestInput}. Merchant defaults for checkout:
 * custom domain, delivery methods, expiration, payment options, required contact fields, promotion
 * codes, recovery email, and saved payment details.
 */
export type CheckoutSettingsRequestRequestInput = {
    /**
     * Shape $ (Value): Array of string. Default delivery methods for checkout creation requests
     * that omit delivery_method_ids, payment links without delivery_method_ids, and invoice
     * checkouts. The default applies only when the order has items to deliver; otherwise no
     * methods are assigned. Methods and their dependencies must be active when saved. Send [] to
     * clear this default; null is rejected. Each checkout pins its assigned methods when created.
     * Shape $[] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): integer string. Default lifetime in seconds for generic checkout sessions.
     * Invoice checkout sessions instead use the fixed deadline of the active invoice public-link
     * generation. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. minLength: 1. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): boolean. Merchant default for whether a checkout session's buyer can apply
     * promotion codes, hosted or headless; hosted checkout shows or hides code entry to match.
     * Object-level promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link CheckoutRecoveryEmailSettingsRequestRequestInput}. Patch object:
     * fields you send are applied, fields you omit are unchanged. Checkout reminder email: one
     * email to a buyer who entered an email address in hosted checkout and left without paying.
     * Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout
     * reminder email settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettingsRequestRequestInput;
    /** Shape $ (Value): boolean. */
    "require_billing_address"?: boolean;
    /** Shape $ (Value): boolean. */
    "require_email"?: boolean;
    /** Shape $ (Value): boolean. */
    "require_phone"?: boolean;
    /**
     * Shape $ (Value): {@link CheckoutSavedPaymentDetailsSettingsRequestRequestInput}. Patch
     * object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout
     * offers buyers the option to save the card they type for faster checkout at this merchant.
     * Merchant scope only. Effective settings default it to on. Saved payment details settings for
     * hosted checkout. On update, an omitted field keeps its value.
     */
    "saved_payment_details"?: CheckoutSavedPaymentDetailsSettingsRequestRequestInput;
};
/**
 * Shape $ (Value): {@link CheckoutSubscriptionRecurringShipping}. Recurring shipping charged on a
 * checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the
 * amount.
 */
export type CheckoutSubscriptionRecurringShipping = {
    /** Shape $ (Value): string. */
    "delivery_method_name": string;
    /** Shape $ (Value): string.  Value enum: "fixed", "quoted". */
    "price_type": "fixed" | "quoted" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "shipping_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link CheckoutSubscriptionTerms}. Renewal terms a subscription checkout
 * commits the buyer to. Frozen when the session's order was created, so later plan changes do not
 * alter them.
 */
export type CheckoutSubscriptionTerms = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Number of billing intervals between recurring charges. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. Shape $[]
     * (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2 months,
     * offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer. The term agreed with the buyer, in months, when configured. Flint
     * records it on the subscription and does not stop the buyer from canceling earlier. Format:
     * int32.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): boolean. Whether any line in the subscription plan's frozen checkout terms
     * requires delivery. Available before delivery selection. One-time order lines do not affect
     * this value.
     */
    "delivery_required": boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. The fee agreed for canceling before the recorded term
     * ends, when configured. Flint records it on the subscription but never charges it. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Shape $ (Value): string. Plan name shown to the buyer. */
    "plan_name": string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of integer. minItems: 1. Shape $[] (Value): integer. Format: int32.
     */
    "quantity_options": Array<number>;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionRecurringShipping}. Recurring shipping charged
     * on a checkout's subscription: the delivery method name, whether the price is fixed or
     * quoted, and the amount.
     */
    "recurring_shipping"?: CheckoutSubscriptionRecurringShipping;
    /**
     * Shape $ (Value): {@link MoneyValue}. Charge for one billing interval before tax: each line's
     * unit price times its quantity, plus modifiers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "recurring_total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. One-time fee charged with the first payment, when the
     * plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "setup_fee_money"?: MoneyValue;
    /** Shape $ (Value): string. Flint subscription plan ID the terms come from. */
    "subscription_plan_id": string;
    /**
     * Shape $ (Value): integer. Days before the first recurring charge, when the plan has a trial.
     * Format: int32.
     */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription terms you set on a
 * checkout session: billing interval, interval count, and quantity.
 */
export type CheckoutSubscriptionTermsRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription terms you set on a
 * checkout session: billing interval, interval count, and quantity.
 */
export type CheckoutSubscriptionTermsRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link CheckoutTaxConfig}. Whether tax is collected for a checkout session or
 * payment link.
 */
export type CheckoutTaxConfig = {
    /** Shape $ (Value): boolean. */
    "enabled"?: boolean;
};
/**
 * Shape $ (Value): {@link CheckoutTaxConfigRequestRequestInput}. Whether tax is collected for a
 * checkout session or payment link.
 */
export type CheckoutTaxConfigRequestRequestInput = CheckoutTaxConfig;
/**
 * Shape $ (Value): {@link CheckoutTheme}. Colors, corner radius, font family, and title that style
 * a checkout, taken from the session or link theme or the merchant's branding settings.
 */
export type CheckoutTheme = {
    /**
     * Shape $ (Value): string. Accent color, from the session or link theme, or from branding
     * settings. maxLength: 50.
     */
    "accent_color"?: string;
    /**
     * Shape $ (Value): string. Page background color from branding settings, as a six-digit hex
     * value such as `#ffffff`. pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string;
    /**
     * Shape $ (Value): integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is
     * a square corner. Format: int32. minimum: 0. maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Shape $ (Value): string. Font family from branding settings. New values may be added. Value
     * enum: "instrument_sans", "system_sans", "system_serif", "monospace".
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /**
     * Shape $ (Value): string. Primary color, from the session or link theme, or from branding
     * settings. maxLength: 50.
     */
    "primary_color"?: string;
    /**
     * Shape $ (Value): string. Text color from branding settings, as a six-digit hex value.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "text_color"?: string;
    /**
     * Shape $ (Value): string. Title shown in place of the merchant's business name. maxLength:
     * 255.
     */
    "title"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
 * enabled, the percent or fixed amount options, the default tip, and custom tips.
 */
export type CheckoutTipConfig = {
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. The preselected fixed tip, with a positive amount in
     * the same currency as smart_tip_money_options. Its amount and currency must match one of the
     * effective smart_tip_money_options: the ones sent here, or else the ones inherited from
     * tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValue;
    /**
     * Shape $ (Value): number. The preselected tip percent, from 1 through 100 with at most four
     * decimal places. Must match one of the effective tip_percent_options: the ones sent here, or
     * else the ones inherited from tipping settings. An inherited preselection that isn't one of
     * the effective options is dropped, and checkout preselects no tip. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /** Shape $ (Value): boolean. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Three fixed tips to offer, each with a
     * positive amount. On a checkout session they must use the session's currency. On a payment
     * link they must share one currency, and a checkout opened from the link offers only those in
     * its currency. Shape $[] (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip
     * percentages.
     */
    "smart_tips_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with
     * at most four decimal places. Shape $[] (Value): number. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Shape $ (Value): {@link CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout:
 * whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
 */
export type CheckoutTipConfigRequestRequestInput = {
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The preselected fixed tip, with a positive amount
     * in the same currency as smart_tip_money_options. Its amount and currency must match one of
     * the effective smart_tip_money_options: the ones sent here, or else the ones inherited from
     * tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): number. The preselected tip percent, from 1 through 100 with at most four
     * decimal places. Must match one of the effective tip_percent_options: the ones sent here, or
     * else the ones inherited from tipping settings. An inherited preselection that isn't one of
     * the effective options is dropped, and checkout preselects no tip. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /** Shape $ (Value): boolean. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. Three fixed tips to offer, each with a
     * positive amount. On a checkout session they must use the session's currency. On a payment
     * link they must share one currency, and a checkout opened from the link offers only those in
     * its currency. Shape $[] (Value): {@link MoneyValueInput}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValueInput>;
    /**
     * Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip
     * percentages.
     */
    "smart_tips_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with
     * at most four decimal places. Shape $[] (Value): number. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/** Client configuration. See RUNTIME.md#clientoptions. */
export type ClientOptions = Omit<RuntimeClientOptions, 'baseUrl' | 'token' | 'authMode' | 'credentials'>
    & {
    baseUrl?: string;
    "apiKey"?: string | CredentialProvider;
    "checkoutToken"?: string | CredentialProvider;
    "customerToken"?: string | CredentialProvider;
    "invoiceToken"?: string | CredentialProvider;
    "onboardingToken"?: string | CredentialProvider;
    "token"?: string | CredentialProvider;
    authMode?: AuthMode;
    credentials?: Partial<Credentials>;
};
