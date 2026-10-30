import type { InputValue } from '../runtime.js';
import type { Address } from './types-0.js';
import type { ExpandedPaymentMethodSummary } from './types-21.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { TaxIdentity } from './types-57.js';
import type { BuyerCapabilities, BuyerCapabilitiesInput } from './types-1.js';
import type { ResponseMeta } from './types-48.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type {
    CreateCustomerDeletionRequestInput,
    CreateCustomerSessionRequestInput,
    CreateCustomerVerificationRequestInput
} from './types-7.js';
import type { ResolveCustomerDeletionRequestInput } from './types-47.js';
import type { MoneyValue } from './types-35.js';
import type { RefreshCustomerSessionRequestInput } from './types-46.js';
import type { ConfirmCustomerVerificationRequestInput } from './types-6.js';
export type CustomDomainsListParams = {
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
     * Return domains of these types. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "checkout", "customer_account". Value enum: "checkout", "customer_account". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "checkout", "customer_account". anyOf[1][]
     * (Value): string. Value enum: "checkout", "customer_account". anyOf[2] (Value): string. Value
     * enum: "checkout", "customer_account".
     */
    "type"?: InputValue<("checkout" | "customer_account") | readonly ("checkout" | "customer_account")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "provisioning", "active", "attention_required",
     * "inactive", "archived". Value enum: "provisioning", "active", "attention_required",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "provisioning", "active", "attention_required", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "provisioning", "active", "attention_required", "inactive", "archived".
     * anyOf[2] (Value): string. Value enum: "provisioning", "active", "attention_required",
     * "inactive", "archived".
     */
    "status"?: InputValue<("provisioning" | "active" | "attention_required" | "inactive" | "archived")
        | readonly ("provisioning" | "active" | "attention_required" | "inactive" | "archived")[]>;
};
export type CustomDomainsValidateParams = {};
/** A merchant's customer profile. */
export type Customer = {
    /**
     * The customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. Null when no saved address is
     * the billing default. anyOf[1] (Value): {@link Address}. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "billing_address": ((Address) | (null));
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id": string;
    "default_invoice_payment_term_id"?: string;
    /**
     * Present only when `expand` includes `default_payment_method`; `null` when expanded and there
     * is no related payment method. anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. anyOf[2] (Value): null.
     */
    "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    "default_payment_method_id": string | null;
    /**
     * Customer email, or null when the customer has none. Unique among the environment's
     * customers.
     */
    "email": string | null;
    /**
     * Caller-owned identifier for this customer in an external system, or null when none. Not
     * returned to customer sessions. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Internal note about this customer, or null when none. Not returned to customer sessions. */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Customer name, or null when none. */
    "name": string | null;
    /** Customer phone number, or null when none. */
    "phone": string | null;
    /** A customer's receivable balances by currency and when they were observed. */
    "receivables"?: CustomerReceivables;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Null
     * when none. Not returned to customer sessions.
     */
    "segment"?: string | null;
    /**
     * The customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. Null when no saved address is the shipping default. anyOf[1] (Value):
     * {@link Address}. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country. anyOf[2] (Value): null.
     */
    "shipping_address": ((Address) | (null));
    /** Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    "tax_exempt"?: boolean;
    /**
     *  anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * ID of the test clock the customer was created on. The customer and its subscriptions read
     * the clock's `frozen_at` as the current time. Present only for customers created on a test
     * clock. Not returned to customer sessions.
     */
    "test_clock_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * How the Flint-hosted customer account is presented. The account's hostname is a custom domain;
 * manage it with /v1/custom-domains. Send null to clear a value.
 */
export type CustomerAccountPresentation = {
    /**
     * Name shown at the top of the Flint-hosted customer account, up to 100 characters. Without
     * one, the account shows your business name. Send null to clear it. minLength: 1.
     */
    "account_name"?: string | null;
};
/**
 * How the Flint-hosted customer account is presented. The account's hostname is a custom domain;
 * manage it with /v1/custom-domains. Send null to clear a value.
 */
export type CustomerAccountPresentationRequestInput = CustomerAccountPresentation;
/**
 * Route templates for a merchant-hosted customer account: email preferences, invoice, order,
 * return, and subscription pages. Send null to clear one.
 */
export type CustomerAccountRouteTemplates = {
    /** Send null to clear it. minLength: 1. */
    "email_preferences"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "invoice"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "order"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "return"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "subscription"?: string | null;
};
/**
 * Route templates for a merchant-hosted customer account: email preferences, invoice, order,
 * return, and subscription pages. Send null to clear one.
 */
export type CustomerAccountRouteTemplatesRequestInput = CustomerAccountRouteTemplates;
/**
 * Customer account settings: hosted mode, merchant account URL, presentation, route templates, and
 * what buyers may do to their own subscriptions.
 */
export type CustomerAccountSettings = {
    /**
     * Replaced as a whole: send every field you want to keep. What buyers may do to their own
     * subscriptions in Flint's buyer account or through a customer session, in either mode.
     * Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an
     * update that includes buyer_capabilities replaces the stored value, and each field it omits
     * takes its default. Effective settings include every default. What a store lets buyers do to
     * their own subscriptions. Send at least one field; each field you omit takes its default.
     * minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilities;
    /** Send null to clear it. minLength: 1. */
    "merchant_account_url"?: string | null;
    /** Value enum: "flint_hosted", "merchant_hosted". */
    "mode"?: "flint_hosted" | "merchant_hosted" | (string & {});
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. How the
     * Flint-hosted customer account is presented. The account's hostname is a custom domain;
     * manage it with /v1/custom-domains. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentation;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Route templates
     * for a merchant-hosted customer account: email preferences, invoice, order, return, and
     * subscription pages. Send null to clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplates;
};
/**
 * Customer account settings: hosted mode, merchant account URL, presentation, route templates, and
 * what buyers may do to their own subscriptions.
 */
export type CustomerAccountSettingsRequestInput = {
    /**
     * Replaced as a whole: send every field you want to keep. What buyers may do to their own
     * subscriptions in Flint's buyer account or through a customer session, in either mode.
     * Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an
     * update that includes buyer_capabilities replaces the stored value, and each field it omits
     * takes its default. Effective settings include every default. What a store lets buyers do to
     * their own subscriptions. Send at least one field; each field you omit takes its default.
     * minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilitiesInput;
    /** Send null to clear it. minLength: 1. */
    "merchant_account_url"?: string | null;
    /** Value enum: "flint_hosted", "merchant_hosted". */
    "mode"?: "flint_hosted" | "merchant_hosted";
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. How the
     * Flint-hosted customer account is presented. The account's hostname is a custom domain;
     * manage it with /v1/custom-domains. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentationRequestInput;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Route templates
     * for a merchant-hosted customer account: email preferences, invoice, order, return, and
     * subscription pages. Send null to clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplatesRequestInput;
};
/** An address saved on a customer's profile. */
export type CustomerAddress = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address": Address;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "customer_address_id": string;
    "customer_id": string;
    "is_default_billing": boolean;
    "is_default_shipping": boolean;
    /** Limited to 100 characters (Unicode code points). maxLength: 100. */
    "label"?: string;
    /** E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: 30. */
    "phone"?: string;
    /** Limited to 255 characters (Unicode code points). maxLength: 255. */
    "recipient_name": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `CustomerAddress` objects. */
export type CustomerAddressListResponse = {
    /**  [] (Value): {@link CustomerAddress}. An address saved on a customer's profile. */
    "data": Array<CustomerAddress>;
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
/** A response containing `CustomerAddress` data. */
export type CustomerAddressResponse = {
    /** An address saved on a customer's profile. */
    "data": CustomerAddress;
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
export type CustomerCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.created";
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
    "event_type": "customer.created";
});
/**
 * The `customer.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CustomerCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.created". */
    "event_type"?: "customer.created";
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
 * The `customer.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.created". */
    "event_type"?: "customer.created";
});
export type CustomerDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.deleted";
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
    "event_type": "customer.deleted";
});
/**
 * The `customer.deleted` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CustomerDeletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted";
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
 * The `customer.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted";
});
/** A request to delete a customer's personal information. */
export type CustomerDeletionRequest = {
    "customer_deletion_request_id": string;
    "customer_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "requested_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "resolved_at"?: string;
    /**
     * What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes,
     * payments, and refunds stay for accounting, tax, and disputes, without the customer's email
     * address or phone number. Issued invoices and credit notes keep the buyer name, billing
     * address, and tax ID they were issued with, because tax law requires them. Orders keep the
     * delivery recipient's name and address. Contact copies created while deletion is finishing
     * are erased within minutes, with another check about 24 hours later. Value enum:
     * "retain_required_commerce_records".
     */
    "retention_policy": "retain_required_commerce_records" | (string & {});
    /** Value enum: "pending_review", "processing", "completed", "rejected", "failed". */
    "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
};
export type CustomerDeletionRequestCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.completed";
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
    "event_type": "customer_deletion_request.completed";
});
/**
 * The `customer_deletion_request.completed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CustomerDeletionRequestCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.completed". */
    "event_type"?: "customer_deletion_request.completed";
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
 * The `customer_deletion_request.completed` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type CustomerDeletionRequestCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.completed". */
    "event_type"?: "customer_deletion_request.completed";
});
export type CustomerDeletionRequestCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.created";
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
    "event_type": "customer_deletion_request.created";
});
/**
 * The `customer_deletion_request.created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CustomerDeletionRequestCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.created". */
    "event_type"?: "customer_deletion_request.created";
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
 * The `customer_deletion_request.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CustomerDeletionRequestCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.created". */
    "event_type"?: "customer_deletion_request.created";
});
export type CustomerDeletionRequestFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.failed";
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
    "event_type": "customer_deletion_request.failed";
});
/**
 * The `customer_deletion_request.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CustomerDeletionRequestFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.failed". */
    "event_type"?: "customer_deletion_request.failed";
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
 * The `customer_deletion_request.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CustomerDeletionRequestFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.failed". */
    "event_type"?: "customer_deletion_request.failed";
});
/** A page of `CustomerDeletionRequest` objects. */
export type CustomerDeletionRequestListResponse = {
    /**
     *  [] (Value): {@link CustomerDeletionRequest}. A request to delete a customer's personal
     * information.
     */
    "data": Array<CustomerDeletionRequest>;
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
export type CustomerDeletionRequestProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.processing";
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
    "event_type": "customer_deletion_request.processing";
});
/**
 * The `customer_deletion_request.processing` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CustomerDeletionRequestProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.processing". */
    "event_type"?: "customer_deletion_request.processing";
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
 * The `customer_deletion_request.processing` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type CustomerDeletionRequestProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.processing". */
    "event_type"?: "customer_deletion_request.processing";
});
export type CustomerDeletionRequestRejectedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.rejected";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.rejected";
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
    "event_type": "customer_deletion_request.rejected";
});
/**
 * The `customer_deletion_request.rejected` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CustomerDeletionRequestRejectedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.rejected". */
    "event_type"?: "customer_deletion_request.rejected";
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
 * The `customer_deletion_request.rejected` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CustomerDeletionRequestRejectedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CustomerDeletionRequest}. A request to delete a customer's
     * personal information.
     */
    "data"?: {
        /** A request to delete a customer's personal information. */
        "object": CustomerDeletionRequest;
    };
    /** Value enum: "customer_deletion_request.rejected". */
    "event_type"?: "customer_deletion_request.rejected";
});
/** A response containing `CustomerDeletionRequest` data. */
export type CustomerDeletionRequestResponse = {
    /** A request to delete a customer's personal information. */
    "data": CustomerDeletionRequest;
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
export type CustomerDeletionRequestsCreateParams = (InputValue<CreateCustomerDeletionRequestInput>);
export type CustomerDeletionRequestsGetParams = {};
export type CustomerDeletionRequestsListParams = {
    /**
     * Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values,
     * or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending_review", "processing", "completed", "rejected", "failed". Value enum:
     * "pending_review", "processing", "completed", "rejected", "failed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "pending_review", "processing", "completed", "rejected",
     * "failed". anyOf[1][] (Value): string. Value enum: "pending_review", "processing",
     * "completed", "rejected", "failed". anyOf[2] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<("pending_review" | "processing" | "completed" | "rejected" | "failed")
        | readonly ("pending_review" | "processing" | "completed" | "rejected" | "failed")[]>;
    /**
     * Only return requests for this Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "customer_id"?: InputValue<string>;
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
export type CustomerDeletionRequestsResolveParams = (InputValue<ResolveCustomerDeletionRequestInput>);
/** For each kind of customer email, whether Flint sends it or the merchant sends it. */
export type CustomerEmailDeliverySettings = {
    /** Value enum: "flint_sends", "merchant_sends". */
    "dunning"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Value enum: "flint_sends", "merchant_sends". */
    "fulfillment_updates"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Value enum: "flint_sends", "merchant_sends". */
    "invoices"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Value enum: "flint_sends", "merchant_sends". */
    "order_receipts"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Value enum: "flint_sends", "merchant_sends". */
    "returns"?: "flint_sends" | "merchant_sends" | (string & {});
    /** Value enum: "flint_sends", "merchant_sends". */
    "subscription_lifecycle"?: "flint_sends" | "merchant_sends" | (string & {});
};
/** For each kind of customer email, whether Flint sends it or the merchant sends it. */
export type CustomerEmailDeliverySettingsRequestInput = {
    /** Value enum: "flint_sends", "merchant_sends". */
    "dunning"?: "flint_sends" | "merchant_sends";
    /** Value enum: "flint_sends", "merchant_sends". */
    "fulfillment_updates"?: "flint_sends" | "merchant_sends";
    /** Value enum: "flint_sends", "merchant_sends". */
    "invoices"?: "flint_sends" | "merchant_sends";
    /** Value enum: "flint_sends", "merchant_sends". */
    "order_receipts"?: "flint_sends" | "merchant_sends";
    /** Value enum: "flint_sends", "merchant_sends". */
    "returns"?: "flint_sends" | "merchant_sends";
    /** Value enum: "flint_sends", "merchant_sends". */
    "subscription_lifecycle"?: "flint_sends" | "merchant_sends";
};
/** A customer's email preferences: checkout reminders and shipping updates. */
export type CustomerEmailPreferences = {
    /** A reminder after leaving checkout without paying. */
    "checkout_reminders": boolean;
    /** Flint customer ID fixed by the customer session. */
    "customer_id": string;
    /** Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. */
    "shipping_updates": boolean;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/** A response containing `CustomerEmailPreferences` data. */
export type CustomerEmailPreferencesResponse = {
    /** A customer's email preferences: checkout reminders and shipping updates. */
    "data": CustomerEmailPreferences;
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
/** A page of `Customer` objects. */
export type CustomerListResponse = {
    /**  [] (Value): {@link Customer}. A merchant's customer profile. */
    "data": Array<Customer>;
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
/** A customer's outstanding and overdue amounts in one currency. */
export type CustomerReceivableBalance = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "outstanding_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "overdue_money": MoneyValue;
};
/** A customer's receivable balances by currency and when they were observed. */
export type CustomerReceivables = {
    /**
     *  [] (Value): {@link CustomerReceivableBalance}. A customer's outstanding and overdue amounts
     * in one currency.
     */
    "balances": Array<CustomerReceivableBalance>;
    /** RFC3339 timestamp. Format: date-time. */
    "observed_at": string;
};
/** A response containing `Customer` data. */
export type CustomerResponse = {
    /** A merchant's customer profile. */
    "data": Customer;
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
 * A credential for the /v1/me routes that acts as one customer. Unless it came from an access
 * link, its secret can read and change that customer's orders, payments, subscriptions, saved
 * payment methods, addresses, returns, and invoices, and request account deletion.
 */
export type CustomerSession = {
    /** When the session was created. Format: date-time. */
    "created_at": string;
    "customer_id": string;
    "customer_session_id": string;
    /** When the current secret stops authenticating account calls. Format: date-time. */
    "expires_at": string;
    /** When the refresh token expires. Format: date-time. */
    "refresh_token_expires_at": string;
    /**
     * When the session was first revoked. Present exactly when status is revoked. Format:
     * date-time.
     */
    "revoked_at"?: string;
    /**
     * active means the session can be refreshed and its secret works until expires_at; revoked
     * means none of its credentials work. Value enum: "active", "revoked".
     */
    "status": "active" | "revoked" | (string & {});
};
/** A response containing `CustomerSession` data. */
export type CustomerSessionResponse = {
    /**
     * A credential for the /v1/me routes that acts as one customer. Unless it came from an access
     * link, its secret can read and change that customer's orders, payments, subscriptions, saved
     * payment methods, addresses, returns, and invoices, and request account deletion.
     */
    "data": CustomerSession;
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
 * A customer session with its `secret` and `refresh_token`, returned only when the session is
 * created or refreshed. A credential for the /v1/me routes that acts as one customer. Unless it
 * came from an access link, its secret can read and change that customer's orders, payments,
 * subscriptions, saved payment methods, addresses, returns, and invoices, and request account
 * deletion.
 */
export type CustomerSessionWithSecret = (Exclude<CustomerSession & object, readonly unknown[]>)
    & ({
    /**
     * Single-use refresh token. Returned only on create and refresh; retry rotation with the same
     * Idempotency-Key.
     */
    "refresh_token": string;
    /** Current server-held customer session secret. Returned only on create and refresh. */
    "secret": string;
});
/** A response containing `CustomerSessionWithSecret` data. */
export type CustomerSessionWithSecretResponse = {
    /**
     * A customer session with its `secret` and `refresh_token`, returned only when the session is
     * created or refreshed. A credential for the /v1/me routes that acts as one customer. Unless
     * it came from an access link, its secret can read and change that customer's orders,
     * payments, subscriptions, saved payment methods, addresses, returns, and invoices, and
     * request account deletion.
     */
    "data": CustomerSessionWithSecret;
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
export type CustomerSessionsCreateParams = (InputValue<CreateCustomerSessionRequestInput>);
export type CustomerSessionsRefreshParams = (InputValue<RefreshCustomerSessionRequestInput>);
/**
 * The result of revoking a customer's sessions: the customer ID and how many sessions were
 * revoked.
 */
export type CustomerSessionsRevocation = {
    "customer_id": string;
    /** Format: int64. */
    "revoked_count": number;
};
/** A response containing `CustomerSessionsRevocation` data. */
export type CustomerSessionsRevocationResponse = {
    /**
     * The result of revoking a customer's sessions: the customer ID and how many sessions were
     * revoked.
     */
    "data": CustomerSessionsRevocation;
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
export type CustomerSessionsRevokeParams = {};
export type CustomerUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.updated";
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
    "event_type": "customer.updated";
});
/**
 * The `customer.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CustomerUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.updated". */
    "event_type"?: "customer.updated";
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
 * The `customer.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Customer}. A merchant's customer profile. */
    "data"?: {
        /** A merchant's customer profile. */
        "object": Customer;
    };
    /** Value enum: "customer.updated". */
    "event_type"?: "customer.updated";
});
/** An email verification requested for linking guest purchases. */
export type CustomerVerification = {
    /** Value enum: "email". */
    "channel": "email" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "customer_id": string;
    "customer_verification_id": string;
    "email": string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
    /**
     * pending while the code can be confirmed; confirmed while an unused proof can link purchases;
     * used after linking; expired when the code or proof expires. Value enum: "pending",
     * "confirmed", "used", "expired".
     */
    "status": "pending" | "confirmed" | "used" | "expired" | (string & {});
};
/** A response containing `CustomerVerification` data. */
export type CustomerVerificationResponse = {
    /** An email verification requested for linking guest purchases. */
    "data": CustomerVerification;
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
export type CustomerVerificationsConfirmParams = (InputValue<ConfirmCustomerVerificationRequestInput>);
export type CustomerVerificationsCreateParams = (InputValue<CreateCustomerVerificationRequestInput>);
