import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { Address, AddressRequest, AddressRequestInput, AdvanceTestClockRequestInput } from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { ConnectTaxConnectionRequestInput } from './types-6.js';
import type { CreateTaxRegistrationRequestInput, CreateTestClockRequestInput } from './types-11.js';
import type { DisconnectTaxConnectionRequestInput, DocumentTaxID } from './types-20.js';
import type { ResponseMeta } from './types-48.js';
import type { UpdateTaxRegistrationRequestInput } from './types-60.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { DocumentTaxIDRequestInput } from './types-21.js';
/** The `flat_amount` variant of `TaxBreakdown`. */
export type TaxBreakdownFlatAmount = ({
    /** Value enum: "flat_amount". */
    "calculation_type": "flat_amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money": MoneyValue;
    "fulfillment_choice_group_id"?: string;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    "location_id"?: string;
    "order_charge_id"?: string;
    "order_line_item_id"?: string;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent"?: number;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "taxable_money": MoneyValue;
})
    & (({
    /** Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money": MoneyValue;
}));
/** The `percentage` variant of `TaxBreakdown`. */
export type TaxBreakdownPercentage = ({
    /** Value enum: "percentage". */
    "calculation_type": "percentage" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    "fulfillment_choice_group_id"?: string;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    "location_id"?: string;
    "order_charge_id"?: string;
    "order_line_item_id"?: string;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "taxable_money": MoneyValue;
})
    & (({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
}));
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequest = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequest}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequest>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestInput = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequestInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestModelInput = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequestModelInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestModelInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequest = ({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax" | (string & {});
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestInput = ({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdictionInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestModelInput = ({
    /** Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdictionRequestInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * The environment's automatic sales tax connection. Before a record exists, identity, version and
 * timestamps are omitted. Read-time business-detail changes and provider pauses do not advance
 * version or send webhooks. Status_reason and supported_actions can also change with the clock as
 * registrations end, without a version change or webhook.
 */
export type TaxConnection = {
    /**
     * Verified business address that connect will use as the tax origin, or the address copied to
     * the connected account. A postal address. Every address has country. Addresses Flint checked
     * as complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "business_address"?: Address;
    /**
     * Verified legal business name that connect will use, or the name copied to the connected
     * account.
     */
    "business_name"?: string;
    /** When the connection record was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Current statements the seller must agree to before connecting. Ordered seller disclosure
     * rendered with the merchant's effective automatic tax fee.
     */
    "disclosure": TaxConnectionDisclosure;
    /**
     * Recorded seller agreement, or null before a connect records one. anyOf[1] (Value): {@link
     * TaxConnectionSellerAttestation}. The disclosure the seller agreed to and when Flint recorded
     * that agreement. anyOf[2] (Value): null.
     */
    "seller_attestation": ((TaxConnectionSellerAttestation) | (null));
    /**
     * Whether automatic tax is connected and can calculate tax. Value enum: "not_connected",
     * "provisioning", "active", "attention_required", "disabled".
     */
    "status": "not_connected" | "provisioning" | "active" | "attention_required" | "disabled" | (string & {});
    /**
     * Machine-readable detail for not_connected or attention_required, or null when no reason
     * applies. Unknown reasons normalize to other. Value enum: "not_offered",
     * "onboarding_required", "tax_category_required", "registration_required",
     * "temporarily_unavailable", "setup_incomplete", "registration_rejected",
     * "business_details_changed", "support_required", "disconnected", "other", null.
     */
    "status_reason": "not_offered"
        | "onboarding_required"
        | "tax_category_required"
        | "registration_required"
        | "temporarily_unavailable"
        | "setup_incomplete"
        | "registration_rejected"
        | "business_details_changed"
        | "support_required"
        | "disconnected"
        | "other"
        | null
        | (string & {})
        | null;
    /**
     * Lists connect when setup can complete and disconnect when automatic tax can be turned off,
     * for credentials that can write settings; otherwise empty. Webhook snapshots describe the
     * connection state independently of a receiving credential. [] enum: "connect", "disconnect".
     * [] (Value): string. Value enum: "connect", "disconnect".
     */
    "supported_actions": Array<"connect" | "disconnect" | (string & {})>;
    /**
     * Flint tax connection ID. Present once the first registration or connection creates a record.
     */
    "tax_connection_id"?: string;
    /** When the connection record's public state last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Current resource version. Send as expected_version to reject a write based on an older
     * version. Format: uint64. minimum: 1.
     */
    "version"?: number;
};
export type TaxConnectionConnectParams = (InputValue<ConnectTaxConnectionRequestInput>);
export type TaxConnectionCreateRegistrationParams = (InputValue<CreateTaxRegistrationRequestInput>);
export type TaxConnectionDeleteRegistrationParams = {
    /**
     * Registration version last read by the caller. Omit to delete the current registration.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
/** Ordered seller disclosure rendered with the merchant's effective automatic tax fee. */
export type TaxConnectionDisclosure = {
    /**
     * Statements in display order. The seller must agree to every statement. [] (Value): {@link
     * TaxDisclosureStatement}. One statement of the seller disclosure.
     */
    "statements": Array<TaxDisclosureStatement>;
    /** Opaque version of the exact rendered statements. Do not parse it. */
    "version": string;
};
export type TaxConnectionDisconnectParams = (InputValue<DisconnectTaxConnectionRequestInput>);
export type TaxConnectionGetParams = {};
export type TaxConnectionGetRegistrationParams = {};
export type TaxConnectionListRegistrationsParams = {
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
     * Return registrations with these statuses. Removed registrations never list. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "scheduled", "active", "ended", "rejected",
     * "removed". Value enum: "pending", "scheduled", "active", "ended", "rejected", "removed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "scheduled", "active",
     * "ended", "rejected", "removed". anyOf[1][] (Value): string. Value enum: "pending",
     * "scheduled", "active", "ended", "rejected", "removed". anyOf[2] (Value): string. Value enum:
     * "pending", "scheduled", "active", "ended", "rejected", "removed".
     */
    "status"?: InputValue<("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")
        | readonly ("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")[]>;
    /**
     * Return registrations in these exact US postal states. Values match case-sensitively and
     * intersect the status filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "AL",
     * "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
     * "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC",
     * "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI",
     * "WY". Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID",
     * "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV",
     * "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
     * "VA", "WA", "WV", "WI", "WY". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "AL",
     * "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
     * "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC",
     * "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI",
     * "WY". anyOf[1][] (Value): string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC",
     * "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[2] (Value): string. Value
     * enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN",
     * "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM",
     * "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA",
     * "WV", "WI", "WY".
     */
    "state"?: InputValue<("AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY")
        | readonly ("AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY")[]>;
};
/** A response containing `TaxConnection` data. */
export type TaxConnectionResponse = {
    /**
     * The environment's automatic sales tax connection. Before a record exists, identity, version
     * and timestamps are omitted. Read-time business-detail changes and provider pauses do not
     * advance version or send webhooks. Status_reason and supported_actions can also change with
     * the clock as registrations end, without a version change or webhook.
     */
    "data": TaxConnection;
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
/** The disclosure the seller agreed to and when Flint recorded that agreement. */
export type TaxConnectionSellerAttestation = {
    /** When Flint recorded the seller's agreement. Format: date-time. */
    "attested_at": string;
    /** Opaque version of the disclosure the seller agreed to. */
    "disclosure_version": string;
};
export type TaxConnectionUpdateRegistrationParams = (UpdateTaxRegistrationRequestInput);
export type TaxConnectionUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TaxConnection;
    };
    "event_type"?: "tax_connection.updated";
})
    & {
    "event_type": "tax_connection.updated";
});
/** One statement of the seller disclosure. */
export type TaxDisclosureStatement = {
    /** Text to show the seller verbatim. */
    "text": string;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentity = {
    /** minLength: 1. maxLength: 255. */
    "legal_name": string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "registered_address": ((Address) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with
     * its country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids": Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityPatch = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequest}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequest) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with
     * its country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityPatchInput = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequestInput) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxIDRequestInput}. A tax identifier printed on
     * documents, with its country, optional region, identifier type, and value. Flint does not
     * verify the value.
     */
    "tax_ids"?: Array<DocumentTaxIDRequestInput>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityRequestInput = TaxIdentityPatchInput;
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdiction = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionRequestInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/**
 * An independent registration for one US state and a non-overlapping date window. Scheduled and
 * ended are derived from the UTC date at read time without advancing version or sending a webhook.
 * Removed is a final DELETE snapshot and is never listed.
 */
export type TaxRegistration = {
    /**
     * Country of registration. Currently US. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** When this registration was saved. Format: date-time. */
    "created_at": string;
    /**
     * Last day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. Null means no end date. Format: date.
     */
    "end_date": string | null;
    /** Last four characters of the registration number. The complete number is never returned. */
    "registration_number_last4": string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date.
     */
    "start_date": string;
    /**
     * US postal state code or DC. Registrations in the same state must have non-overlapping date
     * windows. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID",
     * "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV",
     * "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
     * "VA", "WA", "WV", "WI", "WY".
     */
    "state": "AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY"
        | (string & {});
    /**
     * Pending until confirmed; then scheduled before start_date, active within the inclusive date
     * window, and ended after end_date. Rejected when verification fails. Removed is returned only
     * by DELETE in its final snapshot. Value enum: "pending", "scheduled", "active", "ended",
     * "rejected", "removed".
     */
    "status": "pending" | "scheduled" | "active" | "ended" | "rejected" | "removed" | (string & {});
    /** Flint tax registration ID. */
    "tax_registration_id": string;
    /** When this registration last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Current resource version. Send as expected_version to reject a write based on an older
     * version. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `TaxRegistration` objects. */
export type TaxRegistrationListResponse = {
    /**
     *  [] (Value): {@link TaxRegistration}. An independent registration for one US state and a
     * non-overlapping date window. Scheduled and ended are derived from the UTC date at read time
     * without advancing version or sending a webhook. Removed is a final DELETE snapshot and is
     * never listed.
     */
    "data": Array<TaxRegistration>;
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
/** A response containing `TaxRegistration` data. */
export type TaxRegistrationResponse = {
    /**
     * An independent registration for one US state and a non-overlapping date window. Scheduled
     * and ended are derived from the UTC date at read time without advancing version or sending a
     * webhook. Removed is a final DELETE snapshot and is never listed.
     */
    "data": TaxRegistration;
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
 * Tax settings: whether tax is calculated by default and the default tax categories for line items
 * and delivery charges.
 */
export type TaxSettings = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "default_line_item_tax_category"?: "general"
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
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequest = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Send null to clear it. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null
        | (string & {})
        | null;
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequestInput = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Send null to clear it. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null;
};
/**
 * A sandbox clock that customers created on it, and their subscriptions, read as the current time.
 */
export type TestClock = {
    /** When the test clock was created, in real time. Format: date-time. */
    "created_at": string;
    /**
     * The time the test clock shows. Customers created on the clock, and their subscriptions,
     * treat it as the current time. After you advance the clock, `frozen_at` is the time you
     * advanced it to, while `status` is `advancing` and after. Format: date-time.
     */
    "frozen_at": string;
    /**
     * Your label for the test clock. Omitted when you didn't set one. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Where the test clock is in its lifecycle. Read it before advancing, and after an advance
     * until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived".
     */
    "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
    /** Unique identifier for the test clock. */
    "test_clock_id": string;
    /** When the test clock last changed, in real time. Format: date-time. */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type TestClockAdvancingEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.advancing";
})
    & {
    "event_type": "test_clock.advancing";
});
export type TestClockArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.archived";
})
    & {
    "event_type": "test_clock.archived";
});
export type TestClockCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.created";
})
    & {
    "event_type": "test_clock.created";
});
export type TestClockFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.failed";
})
    & {
    "event_type": "test_clock.failed";
});
/** A page of `TestClock` objects. */
export type TestClockListResponse = {
    /**
     *  [] (Value): {@link TestClock}. A sandbox clock that customers created on it, and their
     * subscriptions, read as the current time.
     */
    "data": Array<TestClock>;
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
export type TestClockReadyEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.ready";
})
    & {
    "event_type": "test_clock.ready";
});
/** A response containing `TestClock` data. */
export type TestClockResponse = {
    /**
     * A sandbox clock that customers created on it, and their subscriptions, read as the current
     * time.
     */
    "data": TestClock;
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
export type TestClocksAdvanceParams = (InputValue<AdvanceTestClockRequestInput>);
export type TestClocksCreateParams = (InputValue<CreateTestClockRequestInput>);
export type TestClocksDeleteParams = {
    /**
     * Optional version most recently read. A stale value returns 409 VERSION_CONFLICT with the
     * current version. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type TestClocksGetParams = {};
export type TestClocksListParams = {
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "ready", "advancing", "failed", "archived". Value enum:
     * "ready", "advancing", "failed", "archived". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "ready", "advancing", "failed", "archived". anyOf[1][] (Value): string. Value enum:
     * "ready", "advancing", "failed", "archived". anyOf[2] (Value): string. Value enum: "ready",
     * "advancing", "failed", "archived".
     */
    "status"?: InputValue<("ready" | "advancing" | "failed" | "archived")
        | readonly ("ready" | "advancing" | "failed" | "archived")[]>;
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
/**
 * Settings for a text modifier group: whether input is required or multiline, and its length
 * limits.
 */
export type TextModifierConfig = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "min_length"?: number;
    /** Whether the buyer's text can include line breaks. */
    "multiline": boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence.
     */
    "required": boolean;
};
/**
 * Send only text fields to change. Omitted fields keep their stored values. null clears min_length
 * or max_length. An empty object is invalid. The merged configuration is validated. minProperties:
 * 1.
 */
export type TextModifierConfigPatchRequest = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Omit it to keep the current limit; send null to clear it. Format: int32. minimum: 1.
     * maximum: 500.
     */
    "max_length"?: number | null;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Omit it to keep the current minimum; send null to clear it. Format: int32. minimum: 0.
     */
    "min_length"?: number | null;
    /** Whether the buyer's text can include line breaks. */
    "multiline"?: boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence.
     */
    "required"?: boolean;
};
/**
 * Send only text fields to change. Omitted fields keep their stored values. null clears min_length
 * or max_length. An empty object is invalid. The merged configuration is validated. minProperties:
 * 1.
 */
export type TextModifierConfigPatchRequestInput = TextModifierConfigPatchRequest;
/**
 * Settings for a text modifier group when creating or updating one: required, multiline, and
 * length limits.
 */
export type TextModifierConfigRequest = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "min_length"?: number;
    /** Whether the buyer's text can include line breaks. Default: false. */
    "multiline"?: boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence. Default: false.
     */
    "required"?: boolean;
};
/**
 * Settings for a text modifier group when creating or updating one: required, multiline, and
 * length limits.
 */
export type TextModifierConfigRequestInput = TextModifierConfigRequest;
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequest = {
    /**
     * Identifier of the text modifier group. For a group a modifier set owns (source: inline),
     * read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return
     * it. minLength: 1.
     */
    "modifier_group_id": string;
    /** Text entered by the buyer, subject to the group's text rules. minLength: 1. */
    "value": string;
};
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequestInput = TextModifierRequest;
/** Colors and title applied to a payment link's checkout page. */
export type ThemeConfig = {
    "accent_color"?: string;
    "primary_color"?: string;
    "title"?: string;
};
/** Colors and title to apply to a checkout session's page. */
export type ThemeConfigRequestInput = {
    /** minLength: 1. */
    "accent_color"?: string;
    /** minLength: 1. */
    "primary_color"?: string;
    /** minLength: 1. */
    "title"?: string;
};
/**
 * Event details for a ticketed order: name, location, start time, time zone, and the tickets
 * issued.
 */
export type TicketedEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /** When the event starts. RFC 3339 timestamp. Format: date-time. */
    "starts_at"?: string;
    /**
     * Ticket numbers issued for this order. Empty while ticket_status is pending. [] (Value):
     * string.
     */
    "ticket_numbers": Array<string>;
    /** Value enum: "pending", "issued", "void". */
    "ticket_status": "pending" | "issued" | "void" | (string & {});
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/**
 * A tip on an order, with its requested, settled, and refunded amounts, status, and how it was
 * paid.
 */
export type Tip = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "effective_amount_money": MoneyValue;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name"?: string;
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "settled_amount_money": MoneyValue;
    /** Value enum: "requested", "settled", "partially_refunded", "refunded", "canceled". */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     *  [] (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
     * settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The part of a tip paid through one payment intent. */
export type TipPaymentIntentAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "payment_intent_id": string;
};
/** The part of a tip paid through one value settlement. */
export type TipValueSettlementAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "value_settlement_id": string;
};
/**
 * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips
 * are allowed.
 */
export type TippingSettings = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its
     * amount and currency must match one of the effective smart_tip_money_options. Null means no
     * preselection is set; effective settings use Flint's default. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for
     * this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "default_smart_tip_money": ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. It must
     * match one of the effective tip_percent_options. Null means no preselection is set; effective
     * settings use Flint's default. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent": number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatch = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatchInput = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValueInput}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
