import type {
    Address,
    AddressPreviousAttributes,
    AddressRequest,
    AddressRequestInput,
    AdvanceTestClockRequestInput
} from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { ConnectTaxConnectionRequestInput } from './types-8.js';
import type { CreateTaxRegistrationRequestInput, CreateTestClockRequestInput } from './types-14.js';
import type { DisconnectTaxConnectionRequestInput } from './types-25.js';
import type { ResponseMeta } from './types-62.js';
import type { UpdateTaxRegistrationRequestInput } from './types-78.js';
import type { MerchantWebhookEnvelope } from './types-43.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { DocumentTaxID, DocumentTaxIDRequestInput, DocumentTaxIDPreviousAttributes } from './types-26.js';
import type { CustomerTaxID, CustomerTaxIDPreviousAttributes } from './types-17.js';
/**
 * The environment's automatic sales tax connection. Before a record exists, identity, version and
 * timestamps are omitted. Read-time business-detail changes and provider pauses do not advance
 * version or send webhooks. Status_reason and supported_actions can also change with the clock as
 * registrations end, without a version change or webhook.
 */
export type TaxConnection = {
    /**
     * Current automatic-tax coverage, independent of the seller's registrations. Sorted by
     * country. Unsupported countries or categories require external tax. [] (Value): {@link
     * TaxCountryCoverage}. A country and the categories automatic tax can calculate there.
     */
    "coverage": Array<TaxCountryCoverage>;
    /**
     * When the connection record was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Current statements the seller must agree to before connecting. Ordered seller disclosure
     * rendered with the merchant's effective automatic tax fee.
     */
    "disclosure": TaxConnectionDisclosure;
    /**
     * Legal business address used as the tax origin. In live mode, comes from processor-verified
     * onboarding details before connect and the tax account snapshot once connected. In sandboxes,
     * uses an explicit legal_address supplied at connect, otherwise verified live details or the
     * merchant profile, and retains the attested snapshot for retries and reconnects. `null` when
     * no legal address is available. anyOf[1] (Value): {@link Address}. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "legal_address": ((Address) | (null));
    /**
     * Legal business name verified by the payment processor, which can differ from the
     * merchant-entered Merchant.business_name. Before connect, comes from verified onboarding
     * details; once connected, comes from the tax account snapshot. In sandboxes, uses verified
     * live details when available, otherwise the merchant profile, and retains the connected
     * snapshot. Omitted when no name is available.
     */
    "legal_business_name"?: string;
    /**
     * The seller's recorded agreement to the disclosure. `null` when no connect has recorded one.
     * anyOf[1] (Value): {@link TaxConnectionSellerAttestation}. The disclosure the seller agreed
     * to and when Flint recorded that agreement. anyOf[2] (Value): null.
     */
    "seller_attestation": ((TaxConnectionSellerAttestation) | (null));
    /**
     * Whether automatic tax is connected and can calculate tax. Value enum: "not_connected",
     * "provisioning", "active", "attention_required", "disabled".
     */
    "status": "not_connected" | "provisioning" | "active" | "attention_required" | "disabled" | (string & {});
    /**
     * Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason
     * applies. Unknown reasons normalize to `other`. Value enum: "not_offered",
     * "business_address_required", "onboarding_required", "tax_category_required",
     * "registration_required", "temporarily_unavailable", "setup_incomplete",
     * "registration_rejected", "business_details_changed", "support_required", "disconnected",
     * "other", null.
     */
    "status_reason": "not_offered"
        | "business_address_required"
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
     * Lists connect when setup can complete, including by supplying legal_address in test mode and
     * disconnect when automatic tax can be turned off, based on the connection state for every
     * credential. An empty array means neither action is available. Performing either action
     * requires settings.write. [] enum: "connect", "disconnect". [] (Value): string. Value enum:
     * "connect", "disconnect".
     */
    "supported_actions": Array<"connect" | "disconnect" | (string & {})>;
    /**
     * Flint tax connection ID. Present once the first registration or connection creates a record.
     * Example: "tcn_01KEZF7C007Y42FMVNHV3P27QN".
     */
    "tax_connection_id"?: string;
    /**
     * When the connection record's public state last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
     * Format: uint64. minimum: 1. maximum: 9007199254740991.
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
export type TaxConnectionDisclosurePreviousAttributes = {
    /**
     * Statements in display order. The seller must agree to every statement. anyOf[1] (Value):
     * Array of {@link TaxDisclosureStatementPreviousAttributes}. Statements in display order. The
     * seller must agree to every statement. anyOf[1][] (Value): {@link
     * TaxDisclosureStatementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "statements"?: ((Array<TaxDisclosureStatementPreviousAttributes>) | (null));
    /**
     * Opaque version of the exact rendered statements. Do not parse it. anyOf[1] (Value): string.
     * Opaque version of the exact rendered statements. Do not parse it. anyOf[2] (Value): null.
     */
    "version"?: ((string) | (null));
};
export type TaxConnectionDisconnectParams = (InputValue<DisconnectTaxConnectionRequestInput>);
export type TaxConnectionGetParams = {};
export type TaxConnectionGetRegistrationParams = {};
export type TaxConnectionListRegistrationsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 100. minimum: 1. maximum:
     * 100. Default: 100.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Return registrations with these statuses. Removed registrations never list. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "pending", "scheduled",
     * "active", "ended", "rejected", "removed". Value enum: "pending", "scheduled", "active",
     * "ended", "rejected", "removed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "scheduled", "active", "ended", "rejected", "removed". anyOf[1][] (Value):
     * string. Value enum: "pending", "scheduled", "active", "ended", "rejected", "removed".
     * anyOf[2] (Value): string. Value enum: "pending", "scheduled", "active", "ended", "rejected",
     * "removed".
     */
    "status"?: InputValue<("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")
        | readonly ("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")[]>;
    /**
     * Return registrations in these US states, given by two-letter ISO 3166-2 code without the
     * `US-` prefix. Values match case-sensitively and intersect the status filter. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "BC", "MB", "QC", "SK",
     * "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
     * "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY",
     * "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
     * "WI", "WY". Value enum: "BC", "MB", "QC", "SK", "AL", "AK", "AZ", "AR", "CA", "CO", "CT",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC",
     * "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "BC", "MB", "QC", "SK", "AL", "AK", "AZ", "AR", "CA", "CO",
     * "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA",
     * "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI",
     * "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[1][] (Value):
     * string. A US state, given by its two-letter ISO 3166-2 code without the `US-` prefix. Value
     * enum: "BC", "MB", "QC", "SK", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA",
     * "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO",
     * "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX",
     * "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[2] (Value): string. A US state, given by its
     * two-letter ISO 3166-2 code without the `US-` prefix. Value enum: "BC", "MB", "QC", "SK",
     * "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
     * "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY",
     * "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
     * "WI", "WY".
     */
    "state"?: InputValue<("BC"
        | "MB"
        | "QC"
        | "SK"
        | "AL"
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
        | readonly ("BC"
        | "MB"
        | "QC"
        | "SK"
        | "AL"
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
     * Resource, collection, or operation result returned by this request. The environment's
     * automatic sales tax connection. Before a record exists, identity, version and timestamps are
     * omitted. Read-time business-detail changes and provider pauses do not advance version or
     * send webhooks. Status_reason and supported_actions can also change with the clock as
     * registrations end, without a version change or webhook.
     */
    "data": TaxConnection;
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
/** The disclosure the seller agreed to and when Flint recorded that agreement. */
export type TaxConnectionSellerAttestation = {
    /**
     * When Flint recorded the seller's agreement. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "attested_at": string;
    /** Opaque version of the disclosure the seller agreed to. */
    "disclosure_version": string;
};
export type TaxConnectionSellerAttestationPreviousAttributes = {
    /**
     * When Flint recorded the seller's agreement. anyOf[1] (Value): string. When Flint recorded
     * the seller's agreement. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "attested_at"?: ((string) | (null));
    /**
     * Opaque version of the disclosure the seller agreed to. anyOf[1] (Value): string. Opaque
     * version of the disclosure the seller agreed to. anyOf[2] (Value): null.
     */
    "disclosure_version"?: ((string) | (null));
};
export type TaxConnectionUpdateRegistrationParams = (UpdateTaxRegistrationRequestInput);
export type TaxConnectionUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "coverage": Array<TaxCountryCoverage>;
            "created_at"?: string;
            "disclosure": TaxConnectionDisclosure;
            "legal_address": ((Address) | (null));
            "legal_business_name"?: string;
            "seller_attestation": ((TaxConnectionSellerAttestation) | (null));
            "status": "not_connected" | "provisioning" | "active" | "attention_required" | "disabled" | (string & {});
            "status_reason": "not_offered"
                | "business_address_required"
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
            "supported_actions": Array<"connect" | "disconnect" | (string & {})>;
            "tax_connection_id"?: string;
            "updated_at"?: string;
            "version"?: number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "coverage"?: ((Array<TaxCountryCoveragePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "disclosure"?: ((TaxConnectionDisclosurePreviousAttributes) | (null));
            "legal_address"?: ((AddressPreviousAttributes) | (null));
            "legal_business_name"?: ((string) | (null));
            "seller_attestation"?: ((TaxConnectionSellerAttestationPreviousAttributes) | (null));
            "status"?: (("not_connected" | "provisioning" | "active" | "attention_required" | "disabled" | (string & {}))
                | (null));
            "status_reason"?: (("not_offered"
                | "business_address_required"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"connect" | "disconnect" | (string & {})>) | (null));
            "tax_connection_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_connection.updated";
})
    & {
    "event_type": "tax_connection.updated";
});
/** A country and the categories automatic tax can calculate there. */
export type TaxCountryCoverage = {
    /**
     * all covers supported line and charge categories; digital covers digital_goods, software and
     * saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services,
     * professional_services or taxable charges. Value enum: "all", "digital".
     */
    "category_scope": "all" | "digital" | (string & {});
    /**
     * ISO 3166-1 alpha-2 destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US".
     */
    "country": string;
};
export type TaxCountryCoveragePreviousAttributes = {
    /**
     * all covers supported line and charge categories; digital covers digital_goods, software and
     * saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services,
     * professional_services or taxable charges. Value enum: "all", "digital". anyOf[1] (Value):
     * string. all covers supported line and charge categories; digital covers digital_goods,
     * software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover
     * services, professional_services or taxable charges. Value enum: "all", "digital". anyOf[2]
     * (Value): null.
     */
    "category_scope"?: (("all" | "digital" | (string & {})) | (null));
    /**
     * ISO 3166-1 alpha-2 destination country. anyOf[1] (Value): string. ISO 3166-1 alpha-2
     * destination country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * anyOf[2] (Value): null.
     */
    "country"?: ((string) | (null));
};
/** VAT on an issued document converted into the currency of the country whose VAT is charged. */
export type TaxCurrencyConversion = {
    /**
     * ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national
     * currency in the EU, sterling in the UK. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
    /**
     * Units of currency for one unit of the invoice currency, rounded half up to at most 10
     * decimal places. tax_money and taxable_money are calculated from this value.
     * exclusiveMinimum: 0.
     */
    "exchange_rate": number;
    /**
     * The ECB reference day, or the first day of the month an HMRC rate covers. Format: date.
     * Example: "2026-08-02".
     */
    "rate_date": string;
    /** Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc". */
    "rate_source": "ecb" | "hmrc" | (string & {});
    /**
     * The document's VAT for this currency: VAT summed in the invoice currency, times
     * exchange_rate, rounded half up to the currency's minor units. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * The amount the VAT was charged on, converted the same way. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
};
export type TaxCurrencyConversionPreviousAttributes = {
    /**
     * ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national
     * currency in the EU, sterling in the UK. anyOf[1] (Value): string. ISO 4217 code of the
     * currency the VAT is stated in: the euro or the member state's national currency in the EU,
     * sterling in the UK. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * anyOf[2] (Value): null.
     */
    "currency"?: ((string) | (null));
    /**
     * Units of currency for one unit of the invoice currency, rounded half up to at most 10
     * decimal places. tax_money and taxable_money are calculated from this value. anyOf[1]
     * (Value): number. Units of currency for one unit of the invoice currency, rounded half up to
     * at most 10 decimal places. tax_money and taxable_money are calculated from this value.
     * exclusiveMinimum: 0. anyOf[2] (Value): null.
     */
    "exchange_rate"?: ((number) | (null));
    /**
     * The ECB reference day, or the first day of the month an HMRC rate covers. anyOf[1] (Value):
     * string. The ECB reference day, or the first day of the month an HMRC rate covers. Format:
     * date. Example: "2026-08-02". anyOf[2] (Value): null.
     */
    "rate_date"?: ((string) | (null));
    /**
     * Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc".
     * anyOf[1] (Value): string. Who published the rate. Ignore values you don't recognize. Value
     * enum: "ecb", "hmrc". anyOf[2] (Value): null.
     */
    "rate_source"?: (("ecb" | "hmrc" | (string & {})) | (null));
    /**
     * The document's VAT for this currency: VAT summed in the invoice currency, times
     * exchange_rate, rounded half up to the currency's minor units. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The amount the VAT was charged on, converted the same way. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "taxable_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** The calculation an order uses when its request leaves `tax.calculation` unset. */
export type TaxDefaultCalculation = {
    /**
     * Where an external order's components come from: `provided` (the default) when you send them,
     * or `callback` when Flint asks the selected tax calculation callback. Present only with mode
     * `external`. Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * `automatic` calculates tax through the tax connection. `external` uses tax components from
     * `components_source`. Value enum: "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
};
/** The calculation an order uses when its request leaves `tax.calculation` unset. */
export type TaxDefaultCalculationRequestInput = {
    /**
     * Where an external order's components come from: `provided` (the default) when you send them,
     * or `callback` when Flint asks the selected tax calculation callback. Present only with mode
     * `external`. Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * `automatic` calculates tax through the tax connection. `external` uses tax components from
     * `components_source`. Value enum: "automatic", "external".
     */
    "mode": "automatic" | "external";
};
/** One statement of the seller disclosure. */
export type TaxDisclosureStatement = {
    /** Text to show the seller verbatim. */
    "text": string;
};
export type TaxDisclosureStatementPreviousAttributes = {
    /**
     * Text to show the seller verbatim. anyOf[1] (Value): string. Text to show the seller
     * verbatim. anyOf[2] (Value): null.
     */
    "text"?: ((string) | (null));
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify
 * IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its
 * tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs
 * are an owned collection in display order; replacing the array requires the parent's
 * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or
 * omit its ID to add one.
 */
export type TaxIdentity = {
    /**
     * The merchant's legal name, printed on invoices and credit notes. `null` when no legal name
     * is set. minLength: 1. maxLength: 255.
     */
    "legal_name": string | null;
    /**
     * The merchant's registered business address, printed on invoices and credit notes. `null`
     * when no address is set. anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "registered_address": ((Address) | (null));
    /**
     * Tax IDs printed on invoices and credit notes, in display order. Empty when none are set.
     * maxItems: 20. [] (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with
     * its country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids": Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify
 * IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its
 * tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs
 * are an owned collection in display order; replacing the array requires the parent's
 * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or
 * omit its ID to add one.
 */
export type TaxIdentityPatch = {
    /**
     * The merchant's legal name, printed on invoices and credit notes. minLength: 1. maxLength:
     * 255.
     */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The merchant's registered business
     * address, printed on invoices and credit notes. anyOf[1] (Value): {@link AddressRequest}. A
     * complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequest) | (null));
    /**
     * Tax IDs printed on invoices and credit notes, in display order. The list you send replaces
     * the stored one: keep an entry by sending its `document_tax_id`, add one by omitting it, and
     * remove one by leaving the entry out. Send `[]` to remove every tax ID. maxItems: 20. []
     * (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with its country,
     * optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify
 * IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its
 * tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs
 * are an owned collection in display order; replacing the array requires the parent's
 * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or
 * omit its ID to add one.
 */
export type TaxIdentityPatchInput = {
    /**
     * The merchant's legal name, printed on invoices and credit notes. minLength: 1. maxLength:
     * 255.
     */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The merchant's registered business
     * address, printed on invoices and credit notes. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequestInput) | (null));
    /**
     * Tax IDs printed on invoices and credit notes, in display order. The list you send replaces
     * the stored one: keep an entry by sending its `document_tax_id`, add one by omitting it, and
     * remove one by leaving the entry out. Send `[]` to remove every tax ID. maxItems: 20. []
     * (Value): {@link DocumentTaxIDRequestInput}. A tax identifier printed on documents, with its
     * country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxIDRequestInput>;
};
export type TaxIdentityPreviousAttributes = {
    /**
     * The merchant's legal name, printed on invoices and credit notes. `null` when no legal name
     * is set. anyOf[1] (Value): string. The merchant's legal name, printed on invoices and credit
     * notes. `null` when no legal name is set. minLength: 1. maxLength: 255. anyOf[2] (Value):
     * null.
     */
    "legal_name"?: ((string) | (null));
    /**
     * The merchant's registered business address, printed on invoices and credit notes. `null`
     * when no address is set. anyOf[1] (Value): {@link AddressPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "registered_address"?: ((AddressPreviousAttributes) | (null));
    /**
     * Tax IDs printed on invoices and credit notes, in display order. Empty when none are set.
     * anyOf[1] (Value): Array of {@link DocumentTaxIDPreviousAttributes}. Tax IDs printed on
     * invoices and credit notes, in display order. Empty when none are set. maxItems: 20.
     * anyOf[1][] (Value): {@link DocumentTaxIDPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_ids"?: ((Array<DocumentTaxIDPreviousAttributes>) | (null));
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify
 * IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its
 * tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs
 * are an owned collection in display order; replacing the array requires the parent's
 * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or
 * omit its ID to add one.
 */
export type TaxIdentityRequestInput = TaxIdentityPatchInput;
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdiction = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province".
     */
    "level": "state" | "county" | "city" | "district" | "country" | "province" | (string & {});
    /**
     * Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     */
    "state"?: string;
};
export type TaxJurisdictionPreviousAttributes = {
    /**
     * Stable opaque Flint jurisdiction key used for equality and report grouping. anyOf[1]
     * (Value): string. Stable opaque Flint jurisdiction key used for equality and report grouping.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "code"?: ((string) | (null));
    /**
     * ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code.
     * minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     */
    "country"?: ((string) | (null));
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province". anyOf[1] (Value): string. The level of government that
     * imposes the tax. Value enum: "state", "county", "city", "district", "country", "province".
     * anyOf[2] (Value): null.
     */
    "level"?: (("state" | "county" | "city" | "district" | "country" | "province" | (string & {})) | (null));
    /**
     * Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * anyOf[1] (Value): string. Name of the jurisdiction, up to 200 characters. Surrounding
     * whitespace is trimmed before length validation. A supplied value cannot be blank; use null
     * where clearing is supported. minLength: 1. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. anyOf[1]
     * (Value): string. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to
     * 3 uppercase letters or digits), required below country level and omitted at country level.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "state"?: ((string) | (null));
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionRequestInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province".
     */
    "level": "state" | "county" | "city" | "district" | "country" | "province";
    /**
     * Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     */
    "state"?: string;
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionRequestModelInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province".
     */
    "level": "state" | "county" | "city" | "district" | "country" | "province";
    /**
     * Name of the jurisdiction, up to 200 characters. Surrounding whitespace is trimmed before
     * length validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     */
    "state"?: string;
};
/**
 * An independent registration for a country and optional subdivision, with a non-overlapping date
 * window. Scheduled and ended are derived from the UTC date at read time without advancing version
 * or sending a webhook. Removed is a final DELETE snapshot and is never listed.
 */
export type TaxRegistration = {
    /**
     * Country of registration: US, CA, GB, AU or NZ, or EU for a non-Union OSS registration that
     * covers all 27 member states. Uses ISO 3166-1 alpha-2 country codes. minLength: 2. maxLength:
     * 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US", "CA", "EU", "GB", "AU", "NZ".
     */
    "country": "US" | "CA" | "EU" | "GB" | "AU" | "NZ" | (string & {});
    /** When this registration was saved. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Last day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. `null` when the registration has no end date.
     * Format: date. Example: "2026-08-02".
     */
    "end_date": string | null;
    /** Last four characters of the registration number. The complete number is never returned. */
    "registration_number_last4": string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. Example: "2026-08-02".
     */
    "start_date": string;
    /**
     * US state code or DC, or CA province BC, MB, QC or SK. Null when the registration is a
     * Canadian federal GST/HST registration or an EU, GB, AU or NZ registration. Date windows must
     * not overlap for the same country and state. Uses the US postal abbreviation from ISO
     * 3166-2:US (without the US- prefix). Value enum: "BC", "MB", "QC", "SK", "AL", "AK", "AZ",
     * "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
     * "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH",
     * "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", null.
     */
    "state": "BC"
        | "MB"
        | "QC"
        | "SK"
        | "AL"
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
        | null
        | (string & {})
        | null;
    /**
     * Pending until confirmed; then scheduled before start_date, active within the inclusive date
     * window, and ended after end_date. Rejected when verification fails. Removed is returned only
     * by DELETE in its final snapshot. Value enum: "pending", "scheduled", "active", "ended",
     * "rejected", "removed".
     */
    "status": "pending" | "scheduled" | "active" | "ended" | "rejected" | "removed" | (string & {});
    /** Flint tax registration ID. Example: "trg_01KEZF7C008JBM8XMQB3J1FK7J". */
    "tax_registration_id": string;
    /** When this registration last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * TaxRegistration}. An independent registration for a country and optional subdivision, with a
     * non-overlapping date window. Scheduled and ended are derived from the UTC date at read time
     * without advancing version or sending a webhook. Removed is a final DELETE snapshot and is
     * never listed.
     */
    "data": Array<TaxRegistration>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `TaxRegistration` data. */
export type TaxRegistrationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An independent
     * registration for a country and optional subdivision, with a non-overlapping date window.
     * Scheduled and ended are derived from the UTC date at read time without advancing version or
     * sending a webhook. Removed is a final DELETE snapshot and is never listed.
     */
    "data": TaxRegistration;
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
 * The buyer accounts for the tax under the reverse charge. Rows that carry it have
 * `taxability_reason` `reverse_charge` and no tax.
 */
export type TaxReverseCharge = {
    /**
     * The customer's tax ID the reverse charge relied on. Frozen once the order is paid;
     * recalculating tax before payment reads the customer's current tax IDs again. `null` when
     * external tax sent a reverse charge and the customer has no tax ID for that country. anyOf[1]
     * (Value): {@link CustomerTaxID}. A copy of one of the customer's `tax_identity.tax_ids`.
     * Frozen once the order is paid; recalculating tax before payment reads the customer again.
     * anyOf[2] (Value): null.
     */
    "customer_tax_id": ((CustomerTaxID) | (null));
};
export type TaxReverseChargePreviousAttributes = {
    /**
     * The customer's tax ID the reverse charge relied on. Frozen once the order is paid;
     * recalculating tax before payment reads the customer's current tax IDs again. `null` when
     * external tax sent a reverse charge and the customer has no tax ID for that country. anyOf[1]
     * (Value): {@link CustomerTaxIDPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer_tax_id"?: ((CustomerTaxIDPreviousAttributes) | (null));
};
/**
 * Tax settings: whether tax is calculated by default and the default tax categories for line items
 * and delivery charges.
 */
export type TaxSettings = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omitted when no callback is selected. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Omitted when unset, which means automatic. The calculation an order uses when
     * its request leaves `tax.calculation` unset.
     */
    "default_calculation"?: TaxDefaultCalculation;
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Value enum: "service_fee", "shipping",
     * "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Effective settings return general when unset, matching the tax
     * engine fallback. Value enum: "general", "physical_goods", "digital_goods", "software",
     * "saas", "services", "professional_services", "food", "prepared_food", "clothing",
     * "medical_goods", "admission".
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
    /**
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share" | (string & {});
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequest = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omit to preserve the selection; send null to clear it. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Send null to clear it, which means automatic. While `default_enabled` is on, a
     * `callback` default needs a selected tax calculation callback, and clearing
     * `calculation_callback_id` is refused; any other default needs an active tax connection.
     * anyOf[1] (Value): {@link TaxDefaultCalculation}. The calculation an order uses when its
     * request leaves `tax.calculation` unset. anyOf[2] (Value): null.
     */
    "default_calculation"?: ((TaxDefaultCalculation) | (null));
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Send null to clear it. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Effective settings return general when unset, matching the tax
     * engine fallback. Send null to clear it. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission", null.
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
    /**
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share" | (string & {});
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequestInput = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omit to preserve the selection; send null to clear it. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Send null to clear it, which means automatic. While `default_enabled` is on, a
     * `callback` default needs a selected tax calculation callback, and clearing
     * `calculation_callback_id` is refused; any other default needs an active tax connection.
     * anyOf[1] (Value): {@link TaxDefaultCalculationRequestInput}. The calculation an order uses
     * when its request leaves `tax.calculation` unset. anyOf[2] (Value): null.
     */
    "default_calculation"?: ((TaxDefaultCalculationRequestInput) | (null));
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Send null to clear it. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Effective settings return general when unset, matching the tax
     * engine fallback. Send null to clear it. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission", null.
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
    /**
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive";
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share";
};
/**
 * A sandbox clock that customers created on it, and their subscriptions, read as the current time.
 */
export type TestClock = {
    /**
     * When the test clock was created, in real time. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * The time the test clock shows. Customers created on the clock, and their subscriptions,
     * treat it as the current time. After you advance the clock, `frozen_at` is the time you
     * advanced it to, while `status` is `advancing` and after. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
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
    /** Unique identifier for the test clock. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". */
    "test_clock_id": string;
    /**
     * When the test clock last changed, in real time. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "frozen_at"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("ready" | "advancing" | "failed" | "archived" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.advancing";
})
    & {
    "event_type": "test_clock.advancing";
});
export type TestClockArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "frozen_at"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("ready" | "advancing" | "failed" | "archived" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.archived";
})
    & {
    "event_type": "test_clock.archived";
});
export type TestClockCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.created";
})
    & {
    "event_type": "test_clock.created";
});
export type TestClockFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "frozen_at"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("ready" | "advancing" | "failed" | "archived" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.failed";
})
    & {
    "event_type": "test_clock.failed";
});
/** A page of `TestClock` objects. */
export type TestClockListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * TestClock}. A sandbox clock that customers created on it, and their subscriptions, read as
     * the current time.
     */
    "data": Array<TestClock>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type TestClockReadyEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "frozen_at"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("ready" | "advancing" | "failed" | "archived" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.ready";
})
    & {
    "event_type": "test_clock.ready";
});
/** A response containing `TestClock` data. */
export type TestClockResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A sandbox clock that
     * customers created on it, and their subscriptions, read as the current time.
     */
    "data": TestClock;
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
export type TestClocksAdvanceParams = (InputValue<AdvanceTestClockRequestInput>);
export type TestClocksCreateParams = (InputValue<CreateTestClockRequestInput>);
export type TestClocksDeleteParams = {
    /**
     * Optional version most recently read. A stale value fails with `VERSION_CONFLICT` and the
     * current version. Format: int64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type TestClocksGetParams = {};
export type TestClocksListParams = {
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "ready",
     * "advancing", "failed", "archived". Value enum: "ready", "advancing", "failed", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "ready", "advancing", "failed",
     * "archived". anyOf[1][] (Value): string. Value enum: "ready", "advancing", "failed",
     * "archived". anyOf[2] (Value): string. Value enum: "ready", "advancing", "failed",
     * "archived".
     */
    "status"?: InputValue<("ready" | "advancing" | "failed" | "archived")
        | readonly ("ready" | "advancing" | "failed" | "archived")[]>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
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
export type TextModifierConfigPreviousAttributes = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * anyOf[1] (Value): integer. Maximum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32. anyOf[2] (Value): null.
     */
    "max_length"?: ((number) | (null));
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * anyOf[1] (Value): integer. Minimum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32. anyOf[2] (Value): null.
     */
    "min_length"?: ((number) | (null));
    /**
     * Whether the buyer's text can include line breaks. anyOf[1] (Value): boolean. Whether the
     * buyer's text can include line breaks. anyOf[2] (Value): null.
     */
    "multiline"?: ((boolean) | (null));
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence. anyOf[1] (Value): boolean. Whether buyers must enter text for this group. A
     * modifier set's required override takes precedence. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
};
/**
 * Settings for a text modifier group when creating or updating one: required, multiline, and
 * length limits.
 */
export type TextModifierConfigRequest = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace,
     * from 1 to 500. Format: int32. minimum: 1. maximum: 500.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Must be 0 or more, and no more than `max_length`. Format: int32. minimum: 0.
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
     * it. minLength: 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8
     * bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed
     * only when the group's `text.multiline` is true. minLength: 1.
     */
    "value": string;
};
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequestInput = TextModifierRequest;
export type TextModifierRequestPreviousAttributes = {
    /**
     * Identifier of the text modifier group. For a group a modifier set owns (source: inline),
     * read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return
     * it. anyOf[1] (Value): string. Identifier of the text modifier group. For a group a modifier
     * set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. minLength: 1. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     */
    "modifier_group_id"?: ((string) | (null));
    /**
     * Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8
     * bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed
     * only when the group's `text.multiline` is true. anyOf[1] (Value): string. Text the buyer
     * entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against
     * the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the
     * group's `text.multiline` is true. minLength: 1. anyOf[2] (Value): null.
     */
    "value"?: ((string) | (null));
};
/** Colors and title applied to a payment link's checkout page. */
export type ThemeConfig = {
    /** Accent color of the checkout, such as #1A73E8. */
    "accent_color"?: string;
    /** Primary color of the checkout, such as #1A73E8. */
    "primary_color"?: string;
    /** Title shown in place of the merchant's business name. */
    "title"?: string;
};
export type ThemeConfigPreviousAttributes = {
    /**
     * Accent color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Accent color of the
     * checkout, such as #1A73E8. anyOf[2] (Value): null.
     */
    "accent_color"?: ((string) | (null));
    /**
     * Primary color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Primary color of
     * the checkout, such as #1A73E8. anyOf[2] (Value): null.
     */
    "primary_color"?: ((string) | (null));
    /**
     * Title shown in place of the merchant's business name. anyOf[1] (Value): string. Title shown
     * in place of the merchant's business name. anyOf[2] (Value): null.
     */
    "title"?: ((string) | (null));
};
