import type {
    CheckoutSession,
    CheckoutRecoveryEmailSettings,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-4.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResolvePaymentLinkResponse } from './types-47.js';
import type { ResponseMeta } from './types-48.js';
import type { Address, AuthMode } from './types-0.js';
import type { InputValue, ClientOptions as RuntimeClientOptions, CredentialProvider } from '../runtime.js';
import type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionRequestInput
} from './types-6.js';
import type { CreateDeliverySelectionRequestInput } from './types-7.js';
import type { UpdateCheckoutSessionRequestInput } from './types-58.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { SubscriptionIntervalOption } from './types-54.js';
import type { Credentials } from './types-12.js';
import type { Invoice } from './types-28.js';
import type { InvoicePaymentAttempt } from './types-30.js';
import type { GetReturnResponse } from './types-23.js';
export type CheckoutSessionClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.closed";
});
/**
 * The `checkout_session.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CheckoutSessionClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
});
export type CheckoutSessionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.created";
});
/**
 * The `checkout_session.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
});
/**
 * A request for a checkout verification code. A request with channel email reads the same whether
 * or not Flint sent a code.
 */
export type CheckoutSessionCustomerVerification = {
    /** How the code reached the buyer: email or sms. Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /** ID to confirm the code with. */
    "checkout_session_customer_verification_id": string;
    /** The checkout session the code belongs to. */
    "checkout_session_id": string;
    /** When the code was requested. Format: date-time. */
    "created_at": string;
    /**
     * The address the code is for, lowercased: the email the buyer typed, or for an emailed
     * confirm_saved_payment_method code, the customer's email masked to its first character and
     * domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code.
     */
    "email"?: string;
    /**
     * When the code stops working: 15 minutes after the request for an emailed code, and 10
     * minutes after the text provider first sent a texted code, which a new request within them
     * texts again. Format: date-time.
     */
    "expires_at": string;
    /**
     * Last two digits of the number a texted code went to, so the buyer knows which phone to
     * check. Set only for channel sms.
     */
    "phone_last_digits"?: string;
    /**
     * Why the buyer asked for the code, as sent in the request. Value enum: "gift_card_purchase",
     * "save_payment_method", "use_saved_payment_methods", "confirm_saved_payment_method".
     */
    "purpose": "gift_card_purchase"
        | "save_payment_method"
        | "use_saved_payment_methods"
        | "confirm_saved_payment_method"
        | (string & {});
};
export type CheckoutSessionCustomerVerificationConfirmationResponse = ResolvePaymentLinkResponse;
/** A response containing `CheckoutSessionCustomerVerification` data. */
export type CheckoutSessionCustomerVerificationResponse = {
    /**
     * A request for a checkout verification code. A request with channel email reads the same
     * whether or not Flint sent a code.
     */
    "data": CheckoutSessionCustomerVerification;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CheckoutSessionExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.expired";
});
/**
 * The `checkout_session.expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
});
export type CheckoutSessionInvalidatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.invalidated";
});
/**
 * The `checkout_session.invalidated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionInvalidatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.invalidated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionInvalidatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
});
export type CheckoutSessionLaunchResponse = ResolvePaymentLinkResponse;
/** A page of `CheckoutSession` objects. */
export type CheckoutSessionListResponse = {
    /**
     *  [] (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data": Array<CheckoutSession>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CheckoutSessionPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.paid";
});
/**
 * The `checkout_session.paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CheckoutSessionPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
});
export type CheckoutSessionPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.partially_paid";
});
/**
 * The `checkout_session.partially_paid` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CheckoutSessionPartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.partially_paid` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
});
/** A response containing `CheckoutSession` data. */
export type CheckoutSessionResponse = {
    /** A session in which a buyer completes an order's payment. */
    "data": CheckoutSession;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Tax settings of a checkout session: whether it collects tax and any tax location the merchant
 * fixed.
 */
export type CheckoutSessionTax = {
    /** Whether the session collects tax, as set when it was created. */
    "enabled"?: boolean;
    /**
     * The tax location your order already held when this session was created over it. Hosted
     * checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or
     * change the location. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "location_fixed_by_merchant"?: Address;
};
/**
 * The checkout session with its checkout credential. For hosted checkout, send the buyer to url.
 * For embedded checkout, pass checkout_auth_token to your checkout client. A session in which a
 * buyer completes an order's payment.
 */
export type CheckoutSessionWithSecret = (Exclude<CheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on
     * checkout launch and customer binding confirmation; omitted when a saved-card confirmation
     * keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
export type CheckoutSessionsCloseParams = (InputValue<CloseCheckoutSessionRequestInput>);
export type CheckoutSessionsConfirmCustomerVerificationParams = (InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>);
export type CheckoutSessionsCreateCustomerVerificationParams = (CreateCheckoutSessionCustomerVerificationRequestInput);
export type CheckoutSessionsCreateDeliveryQuoteParams = (InputValue<CreateCheckoutDeliveryQuoteRequestInput>);
export type CheckoutSessionsCreateDeliverySelectionParams = (InputValue<CreateDeliverySelectionRequestInput>);
export type CheckoutSessionsCreateParams = (CreateCheckoutSessionRequestInput);
export type CheckoutSessionsDeleteCurrentDeliverySelectionParams = {
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear
     * whichever selection is current.
     */
    "expected_delivery_selection_id"?: InputValue<string>;
};
export type CheckoutSessionsGetCurrentDeliverySelectionParams = {};
export type CheckoutSessionsGetDeliveryQuoteParams = {};
export type CheckoutSessionsGetDeliverySelectionParams = {};
export type CheckoutSessionsGetParams = {
    /**
     * Supported expansions: customer, invoice, order, payment_intents, payment_link. Expansion
     * requires checkouts.checkout_sessions.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=customer&expand=invoice, or pass
     * one comma-separated value. [] enum: "customer", "invoice", "order", "payment_intents",
     * "payment_link". Value enum: "customer", "invoice", "order", "payment_intents",
     * "payment_link". anyOf[1] (Value): Array of string. [] enum: "customer", "invoice", "order",
     * "payment_intents", "payment_link". anyOf[1][] (Value): string. Value enum: "customer",
     * "invoice", "order", "payment_intents", "payment_link". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order", "payment_intents", "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_intents" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_intents" | "payment_link")[]>;
};
export type CheckoutSessionsListDeliverySelectionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type CheckoutSessionsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by the status each session has when read. A session past expires_at lists as expired
     * even before its stored status is updated, unless payment work keeps it open, in which case
     * it lists as open. A page can hold fewer sessions than page_size. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated". Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated". anyOf[1][] (Value): string. Value
     * enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[2]
     * (Value): string. Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated".
     */
    "status"?: InputValue<("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")
        | readonly ("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")[]>;
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by Flint payment link ID. Example: "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_link_id"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact match on the Flint subscription plan ID. minLength: 1. pattern:
     * ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Exact match on the Flint invoice ID. minLength: 1. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by checkout surface. Sessions created before surfaces existed are hosted. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "hosted", "embedded". Value enum: "hosted", "embedded".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "hosted", "embedded". anyOf[1][]
     * (Value): string. Value enum: "hosted", "embedded". anyOf[2] (Value): string. Value enum:
     * "hosted", "embedded".
     */
    "surface"?: InputValue<("hosted" | "embedded") | readonly ("hosted" | "embedded")[]>;
    /**
     * Filter by checkout session type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "order",
     * "quick_pay", "subscription_plan", "invoice", "payment_link". Value enum: "order",
     * "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "order", "quick_pay", "subscription_plan", "invoice",
     * "payment_link". anyOf[1][] (Value): string. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link". anyOf[2] (Value): string. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     */
    "type"?: InputValue<("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")
        | readonly ("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across checkout session ID, external reference ID, metadata, and payment notes. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as cs_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by checkout_session_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer, invoice, order, payment_link. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order", "payment_link". Value enum: "customer", "invoice", "order",
     * "payment_link". anyOf[1] (Value): Array of string. [] enum: "customer", "invoice", "order",
     * "payment_link". anyOf[1][] (Value): string. Value enum: "customer", "invoice", "order",
     * "payment_link". anyOf[2] (Value): string. Value enum: "customer", "invoice", "order",
     * "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_link")[]>;
};
export type CheckoutSessionsUpdateParams = (InputValue<UpdateCheckoutSessionRequestInput>);
/**
 * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options,
 * required contact fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettings = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead
     * use the fixed deadline of the active invoice public-link generation. Format: int64. minimum:
     * 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: number;
    /**
     * Payment options checkout offers by default. Adding ach_debit in merchant settings requests
     * ACH Direct Debit for your payment account; Flint refuses it before the account is set up,
     * for a payment account outside the US, and in location or device settings. Each option shows
     * only when it is available for the payment account and order. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. minLength: 1. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or
     * headless; hosted checkout shows or hides code entry to match. Object-level
     * promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder
     * email: one email to a buyer who entered an email address in hosted checkout and left without
     * paying. Merchant scope only. Effective settings default it to off with a 3600 second delay.
     * Checkout reminder email settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettings;
    "require_billing_address"?: boolean;
    "require_email"?: boolean;
    "require_phone"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted
     * checkout offers buyers the option to save the card they type for faster checkout at this
     * merchant. Merchant scope only. Effective settings default it to on. Saved payment details
     * settings for hosted checkout. On update, an omitted field keeps its value.
     */
    "saved_payment_details"?: CheckoutTaxConfig;
};
/**
 * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options,
 * required contact fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettingsRequestInput = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead
     * use the fixed deadline of the active invoice public-link generation. Format: int64. minimum:
     * 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: number;
    /**
     * Payment options checkout offers by default. Adding ach_debit in merchant settings requests
     * ACH Direct Debit for your payment account; Flint refuses it before the account is set up,
     * for a payment account outside the US, and in location or device settings. Each option shows
     * only when it is available for the payment account and order. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. minLength: 1. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or
     * headless; hosted checkout shows or hides code entry to match. Object-level
     * promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder
     * email: one email to a buyer who entered an email address in hosted checkout and left without
     * paying. Merchant scope only. Effective settings default it to off with a 3600 second delay.
     * Checkout reminder email settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettingsRequestInput;
    "require_billing_address"?: boolean;
    "require_email"?: boolean;
    "require_phone"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted
     * checkout offers buyers the option to save the card they type for faster checkout at this
     * merchant. Merchant scope only. Effective settings default it to on. Saved payment details
     * settings for hosted checkout. On update, an omitted field keeps its value.
     */
    "saved_payment_details"?: CheckoutSavedPaymentDetailsSettingsRequestInput;
};
/**
 * Recurring shipping charged on a checkout's subscription: the delivery method name, whether the
 * price is fixed or quoted, and the amount.
 */
export type CheckoutSubscriptionRecurringShipping = {
    "delivery_method_name": string;
    /** Value enum: "fixed", "quoted". */
    "price_type": "fixed" | "quoted" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "shipping_money"?: MoneyValue;
};
/**
 * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was
 * created, so later plan changes do not alter them.
 */
export type CheckoutSubscriptionTerms = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of billing intervals between recurring charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * The term agreed with the buyer, in months, when configured. Flint records it on the
     * subscription and does not stop the buyer from canceling earlier. Format: int32.
     */
    "contract_term_months"?: number;
    /**
     * Whether any line in the subscription plan's frozen checkout terms requires delivery.
     * Available before delivery selection. One-time order lines do not affect this value.
     */
    "delivery_required": boolean;
    /**
     * The fee agreed for canceling before the recorded term ends, when configured. Flint records
     * it on the subscription but never charges it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Plan name shown to the buyer. */
    "plan_name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /** minItems: 1. [] (Value): integer. Format: int32. */
    "quantity_options": Array<number>;
    /**
     * Recurring shipping charged on a checkout's subscription: the delivery method name, whether
     * the price is fixed or quoted, and the amount.
     */
    "recurring_shipping"?: CheckoutSubscriptionRecurringShipping;
    /**
     * Charge for one billing interval before tax: each line's unit price times its quantity, plus
     * modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "recurring_total_money": MoneyValue;
    /**
     * One-time fee charged with the first payment, when the plan has one. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /** Flint subscription plan ID the terms come from. */
    "subscription_plan_id": string;
    /** Days before the first recurring charge, when the plan has a trial. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Subscription terms you set on a checkout session: billing interval, interval count, and
 * quantity.
 */
export type CheckoutSubscriptionTermsRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/**
 * Subscription terms you set on a checkout session: billing interval, interval count, and
 * quantity.
 */
export type CheckoutSubscriptionTermsRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/** Whether tax is collected for a checkout session or payment link. */
export type CheckoutTaxConfig = {
    "enabled"?: boolean;
};
/** Whether tax is collected for a checkout session or payment link. */
export type CheckoutTaxConfigRequestInput = CheckoutTaxConfig;
/**
 * Colors, corner radius, font family, and title that style a checkout, taken from the session or
 * link theme or the merchant's branding settings.
 */
export type CheckoutTheme = {
    /** Accent color, from the session or link theme, or from branding settings. maxLength: 50. */
    "accent_color"?: string;
    /**
     * Page background color from branding settings, as a six-digit hex value such as `#ffffff`.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string;
    /**
     * Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format:
     * int32. minimum: 0. maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Font family from branding settings. New values may be added. Value enum: "instrument_sans",
     * "system_sans", "system_serif", "monospace".
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /** Primary color, from the session or link theme, or from branding settings. maxLength: 50. */
    "primary_color"?: string;
    /** Text color from branding settings, as a six-digit hex value. pattern: ^#[0-9a-fA-F]{6}$. */
    "text_color"?: string;
    /** Title shown in place of the merchant's business name. maxLength: 255. */
    "title"?: string;
};
/**
 * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the
 * default tip, and custom tips.
 */
export type CheckoutTipConfig = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * The preselected fixed tip, with a positive amount in the same currency as
     * smart_tip_money_options. Its amount and currency must match one of the effective
     * smart_tip_money_options: the ones sent here, or else the ones inherited from tipping
     * settings. An inherited preselection that isn't one of the effective options is dropped.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValue;
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. Must match
     * one of the effective tip_percent_options: the ones sent here, or else the ones inherited
     * from tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /**
     * Whether checkout offers a tip. Omit it to follow the merchant's tipping settings.
     * Subscription signups don't inherit that setting or its preselected tip: they offer a tip
     * only when this is true, and the tip is collected once, with the signup payment. A signup
     * with nothing due today, such as a free trial, offers none. Renewals don't include it.
     */
    "enabled"?: boolean;
    /**
     * Three fixed tips to offer, each with a positive amount. On a checkout session they must use
     * the session's currency. On a payment link they must share one currency, and a checkout
     * opened from the link offers only those in its currency. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValue>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places. []
     * (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the
 * default tip, and custom tips.
 */
export type CheckoutTipConfigRequestInput = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * The preselected fixed tip, with a positive amount in the same currency as
     * smart_tip_money_options. Its amount and currency must match one of the effective
     * smart_tip_money_options: the ones sent here, or else the ones inherited from tipping
     * settings. An inherited preselection that isn't one of the effective options is dropped.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValueInput;
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. Must match
     * one of the effective tip_percent_options: the ones sent here, or else the ones inherited
     * from tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /**
     * Whether checkout offers a tip. Omit it to follow the merchant's tipping settings.
     * Subscription signups don't inherit that setting or its preselected tip: they offer a tip
     * only when this is true, and the tip is collected once, with the signup payment. A signup
     * with nothing due today, such as a free trial, offers none. Renewals don't include it.
     */
    "enabled"?: boolean;
    /**
     * Three fixed tips to offer, each with a positive amount. On a checkout session they must use
     * the session's currency. On a payment link they must share one currency, and a checkout
     * opened from the link offers only those in its currency. [] (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValueInput>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places. []
     * (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/** Client configuration. See RUNTIME.md#clientoptions. */
export type ClientOptions = Omit<RuntimeClientOptions, 'baseUrl' | 'token' | 'authMode' | 'credentials'>
    & {
    baseUrl?: string | undefined;
    "apiKey"?: string | CredentialProvider;
    "checkoutToken"?: string | CredentialProvider;
    "customerToken"?: string | CredentialProvider;
    "invoiceToken"?: string | CredentialProvider;
    "onboardingToken"?: string | CredentialProvider;
    "token"?: string | CredentialProvider;
    authMode?: AuthMode;
    credentials?: Partial<Credentials>;
};
/** The request body for: Close checkout session. */
export type CloseCheckoutSessionRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the checkout session. It is not shown to the buyer.
     * minLength: 1.
     */
    "reason_message"?: string;
};
/** The request body for: Close checkout session. */
export type CloseCheckoutSessionRequestInput = CloseCheckoutSessionRequest;
/** The request body for: Close order. */
export type CloseOrderRequest = {
    /**
     * Send keep to close while keeping collected money. Required when collected money remains
     * refundable to its original tenders, after pending refunds. Closing does not refund money,
     * and the order remains refundable. Accepted when nothing was collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep" | (string & {});
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the order. It is not shown to the buyer. minLength:
     * 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/** The request body for: Close order. */
export type CloseOrderRequestInput = {
    /**
     * Send keep to close while keeping collected money. Required when collected money remains
     * refundable to its original tenders, after pending refunds. Closing does not refund money,
     * and the order remains refundable. Accepted when nothing was collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep";
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the order. It is not shown to the buyer. minLength:
     * 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/** The request body for: Collect invoice. */
export type CollectInvoiceRequest = {
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /** minLength: 1. */
    "payment_method_id"?: string;
};
/** The request body for: Collect invoice. */
export type CollectInvoiceRequestInput = CollectInvoiceRequest;
/** A response containing `CollectInvoiceResult` data. */
export type CollectInvoiceResponse = {
    /**
     * The invoice is the primary resource and expected_version target; invoice_payment_attempt
     * records the collection outcome.
     */
    "data": CollectInvoiceResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
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
/** The request body for: Complete return. */
export type CompleteReturnRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "manual_completion", "exception_waived", "other". */
    "reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Complete return. */
export type CompleteReturnRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "manual_completion", "exception_waived", "other". */
    "reason"?: "manual_completion" | "exception_waived" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type CompleteReturnResponse = GetReturnResponse;
/** The request body for: Revoke an API key. */
export type ConfigurationVersionRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
};
