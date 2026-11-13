import type { CustomerSessionsRevocation, Customer, CustomerReceivables } from './types-15.js';
import type { ResponseMeta } from './types-54.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { Address } from './types-0.js';
import type { ExpandedPaymentMethodSummary } from './types-24.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { TaxIdentity } from './types-64.js';
import type { InputValue } from '../runtime.js';
import type { ConfirmCustomerVerificationRequestInput } from './types-7.js';
import type {
    CreateCustomerVerificationRequestInput,
    CreateCustomerAccessLinkRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerRequestInput,
    CreateCustomerTaxExemptionRequestInput
} from './types-8.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { LinkCustomerGuestPurchasesRequestInput, LocationCoordinate } from './types-35.js';
import type {
    UpdateCustomerAddressRequestInput,
    UpdateCustomerRequestInput,
    UpdateCustomerTaxExemptionRequestInput
} from './types-66.js';
import type { GetReturnInspectionResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-25.js';
import type { ReturnLineDecision, ReturnLineDecisionInput } from './types-55.js';
import type { GetReturnResponse } from './types-26.js';
import type { DeliveryWeeklyInterval, DeliveryWeeklyIntervalRequestInput } from './types-22.js';
import type { DeliveryCoordinateRequestInput } from './types-17.js';
/** A response containing `CustomerSessionsRevocation` data. */
export type CustomerSessionsRevocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of revoking a
     * customer's sessions: the customer ID and how many sessions were revoked.
     */
    "data": CustomerSessionsRevocation;
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
export type CustomerSessionsRevokeParams = {};
/**
 * Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain
 * retrievable by ID and through the archived status filter. Expired and archived records cannot be
 * edited. An active record applies to the customer's sales whose taxable destination its coverage
 * contains, within its date range, and is snapshotted on each exempt sale. Saving one doesn't
 * change the customer's blanket tax_exempt flag, which still takes precedence.
 */
export type CustomerTaxExemption = {
    /**
     * Merchant's exemption certificate number. Null when none is recorded. minLength: 1.
     * maxLength: 255.
     */
    "certificate_number": string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Replaced as a whole: send every
     * field you want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverage;
    /** When the exemption was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The customer that owns this nested child for its lifetime. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Flint customer tax exemption ID, prefixed ctex_. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     */
    "customer_tax_exemption_id": string;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1.
     * maxLength: 500.
     */
    "description": string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Format: date. Example: "2026-08-02".
     */
    "end_date": string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     */
    "evidence_reference": string | null;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. Example: "2026-08-02".
     */
    "start_date": string;
    /**
     * Derived from dates in the merchant timezone, using UTC when unset. DELETE archives the
     * record. Value enum: "scheduled", "active", "expired", "archived".
     */
    "status": "scheduled" | "active" | "expired" | "archived" | (string & {});
    /** When the exemption last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current resource version. Date-derived status changes do not advance it. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverage = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states"?: Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | (string & {})>;
    /** Choose all_states or states explicitly. Value enum: "all_states", "states". */
    "type": "all_states" | "states" | (string & {});
})
    & ((Exclude<CustomerTaxExemptionCoverageAllStates & object, readonly unknown[]>)
    | (Exclude<CustomerTaxExemptionCoverageStates & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverageAllStates = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states"?: Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | (string & {})>;
    /** Choose all_states or states explicitly. Value enum: "all_states". */
    "type": "all_states" | (string & {});
})
    & (({
    /** Value enum: "all_states". */
    "type"?: "all_states" | (string & {});
}));
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverageAllStatesRequestInput = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US".
     */
    "country": "US";
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states"?: Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | "WY">;
    /** Choose all_states or states explicitly. Value enum: "all_states". */
    "type": "all_states";
})
    & (({
    /** Value enum: "all_states". */
    "type"?: "all_states";
}) & ({
    "states"?: never;
}));
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverageRequestInput = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US".
     */
    "country": "US";
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states"?: Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | "WY">;
    /** Choose all_states or states explicitly. Value enum: "all_states", "states". */
    "type": "all_states" | "states";
})
    & ((Exclude<CustomerTaxExemptionCoverageAllStatesRequestInput & object, readonly unknown[]>)
    | (Exclude<CustomerTaxExemptionCoverageStatesRequestInput & object, readonly unknown[]>));
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverageStates = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states": Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | (string & {})>;
    /** Choose all_states or states explicitly. Value enum: "states". */
    "type": "states" | (string & {});
})
    & ({
    /** Value enum: "states". */
    "type"?: "states" | (string & {});
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states": Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | (string & {})>;
});
/**
 * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list
 * of US states and DC.
 */
export type CustomerTaxExemptionCoverageStatesRequestInput = ({
    /**
     * Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country
     * codes. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US".
     */
    "country": "US";
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states": Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | "WY">;
    /** Choose all_states or states explicitly. Value enum: "states". */
    "type": "states";
})
    & ({
    /** Value enum: "states". */
    "type"?: "states";
    /**
     * US postal state codes or DC. Required for states and forbidden for all_states. minItems: 1.
     * maxItems: 60. uniqueItems: true. [] enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". [] (Value):
     * string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
     * "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
     * "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD",
     * "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "states": Array<"AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DE"
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
        | "MT"
        | "NE"
        | "NV"
        | "NH"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "OR"
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
        | "WY">;
});
/** A page of `CustomerTaxExemption` objects. */
export type CustomerTaxExemptionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CustomerTaxExemption}. Nested child of a customer, bounded to 100 unarchived records per
     * customer. Archives remain retrievable by ID and through the archived status filter. Expired
     * and archived records cannot be edited. An active record applies to the customer's sales
     * whose taxable destination its coverage contains, within its date range, and is snapshotted
     * on each exempt sale. Saving one doesn't change the customer's blanket tax_exempt flag, which
     * still takes precedence.
     */
    "data": Array<CustomerTaxExemption>;
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
/** A response containing `CustomerTaxExemption` data. */
export type CustomerTaxExemptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Nested child of a
     * customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID
     * and through the archived status filter. Expired and archived records cannot be edited. An
     * active record applies to the customer's sales whose taxable destination its coverage
     * contains, within its date range, and is snapshotted on each exempt sale. Saving one doesn't
     * change the customer's blanket tax_exempt flag, which still takes precedence.
     */
    "data": CustomerTaxExemption;
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
 * A copy of one of the customer's `tax_identity.tax_ids`. Frozen once the order is paid;
 * recalculating tax before payment reads the customer again.
 */
export type CustomerTaxID = {
    /**
     * Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: 2.
     * maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Type of the tax ID, as entered on the customer. */
    "identifier_type": string;
    /** Region of the tax ID. `null` when the tax ID has no region. */
    "region": string | null;
    /** The tax ID. */
    "value": string;
};
export type CustomerUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Customer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "customer.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Customer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "customer.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null. object.test_clock_id
     * (Optional): string. ID of the test clock the customer was created on. The customer and its
     * subscriptions read the clock's `frozen_at` as the current time. Present only for customers
     * created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
         * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
         * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
         * owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
             * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Customer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "customer.updated". */
    "event_type"?: "customer.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `customer.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null. object.test_clock_id
     * (Optional): string. ID of the test clock the customer was created on. The customer and its
     * subscriptions read the clock's `frozen_at` as the current time. Present only for customers
     * created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
         * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
         * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
         * owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
             * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Customer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "customer.updated". */
    "event_type"?: "customer.updated";
});
/** An email verification requested for linking guest purchases. */
export type CustomerVerification = {
    /** How the code was delivered. Value enum: "email". */
    "channel": "email" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the customer whose email this verification proves. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Unique identifier for this customer verification, prefixed `cver_`. Example:
     * "cver_01KEZF7C00E7S01991S7457CVK".
     */
    "customer_verification_id": string;
    /**
     * The email address that received the code: the customer's email when the verification was
     * created.
     */
    "email": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /** What the verification is for. Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
    /**
     * pending while the code can be confirmed; confirmed while an unused proof can link purchases;
     * used after linking; expired when the code or proof expires. Value enum: "pending",
     * "confirmed", "used", "expired".
     */
    "status": "pending" | "confirmed" | "used" | "expired" | (string & {});
    /**
     * Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains
     * confirm while the code is pending; empty once confirmed, used, expired, or out of attempts.
     * Expiry is evaluated when Flint serves the response. [] enum: "confirm". [] (Value): string.
     * Value enum: "confirm".
     */
    "supported_actions": Array<"confirm" | (string & {})>;
};
/** A page of `CustomerVerification` objects. */
export type CustomerVerificationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CustomerVerification}. An email verification requested for linking guest purchases.
     */
    "data": Array<CustomerVerification>;
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
/** A response containing `CustomerVerification` data. */
export type CustomerVerificationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An email verification
     * requested for linking guest purchases.
     */
    "data": CustomerVerification;
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
export type CustomerVerificationsConfirmParams = (InputValue<ConfirmCustomerVerificationRequestInput>);
export type CustomerVerificationsCreateParams = (InputValue<CreateCustomerVerificationRequestInput>);
export type CustomerVerificationsGetParams = {};
export type CustomerVerificationsListParams = {
    /**
     * Required exact customer ID. An unknown or inaccessible customer returns an empty page.
     * pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": InputValue<string>;
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
export type CustomersCreateAccessLinkParams = (InputValue<CreateCustomerAccessLinkRequestInput>);
export type CustomersCreateAddressParams = (InputValue<CreateCustomerAddressRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersCreateParams = (InputValue<CreateCustomerRequestInput>
    | {
    "addresses"?: never;
    "default_invoice_payment_term_id"?: never;
    "email"?: never;
    "external_reference_id"?: never;
    "internal_note"?: never;
    "is_merchant_verified"?: never;
    "metadata"?: never;
    "name"?: never;
    "on_email_conflict"?: never;
    "phone"?: never;
    "price_list_id"?: never;
    "segment"?: never;
    "tax_exempt"?: never;
    "tax_identity"?: never;
    "test_clock_id"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersCreateTaxExemptionParams = (InputValue<CreateCustomerTaxExemptionRequestInput>);
export type CustomersDeleteAddressParams = {
    /**
     * Optional address version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersDeleteTaxExemptionParams = {
    /**
     * Resource version last read by the caller. Omit to archive the current record. Format:
     * uint64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type CustomersGetAddressParams = DisputesAcceptParams;
export type CustomersGetEmailPreferencesParams = DisputesAcceptParams;
export type CustomersGetParams = {
    /**
     * Include related objects in the response. Supported expansions: default_payment_method,
     * receivables. Expanding the default payment method requires customers.read plus
     * payments.payment_methods.read. Limits: at most 10 unique expand paths per request. [] enum:
     * "default_payment_method", "receivables". Value enum: "default_payment_method",
     * "receivables". anyOf[1] (Value): Array of string. [] enum: "default_payment_method",
     * "receivables". anyOf[1][] (Value): string. Value enum: "default_payment_method",
     * "receivables". anyOf[2] (Value): string. Value enum: "default_payment_method",
     * "receivables".
     */
    "expand"?: InputValue<("default_payment_method" | "receivables") | readonly ("default_payment_method" | "receivables")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersGetTaxExemptionParams = {};
export type CustomersLinkGuestPurchasesParams = (InputValue<LinkCustomerGuestPurchasesRequestInput>);
export type CustomersListAddressesParams = {
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
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersListParams = {
    /**
     * Filter by status. Omitted, the list leaves out deleted rows; name deleted to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "deletion_processing", "deleted". Value enum: "active", "deletion_processing", "deleted".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "deletion_processing",
     * "deleted". anyOf[1][] (Value): string. Value enum: "active", "deletion_processing",
     * "deleted". anyOf[2] (Value): string. Value enum: "active", "deletion_processing", "deleted".
     */
    "status"?: InputValue<("active" | "deletion_processing" | "deleted")
        | readonly ("active" | "deletion_processing" | "deleted")[]>;
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
    /**
     * Search across customer_id, name, email, phone number, and external_reference_id. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as cus_01.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Exact whole-address match after trimming surrounding whitespace. Case is ignored and accents
     * are kept: `Ana@example.com` matches `ana@example.com`, but `josé@example.com` doesn't match
     * `jose@example.com`.
     */
    "email"?: InputValue<string>;
    /**
     * Only return customers assigned directly to this price list. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: InputValue<string>;
    /**
     * Byte-sensitive whole-value match on the opaque customer segment. Whitespace, casing,
     * Unicode, and commas are literal. minLength: 1. maxLength: 255.
     */
    "segment"?: InputValue<string>;
    /** Filter by merchant verification, independently of email verification. */
    "is_merchant_verified"?: InputValue<boolean>;
    /**
     * Exact match on a full E.164 phone number, such as `+14155551234`. The leading plus is
     * required. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: InputValue<string>;
    /**
     * Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN`
     * with reason `test_mode_required`. minLength: 1. pattern: ^tclk_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by customer_id. Default:
     * "created_at". Value enum: "name", "email", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
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
    /**
     * Include related objects in the response. Supported expansions: default_payment_method,
     * receivables. Include the requested related resources using scoped batch reads for this page.
     * Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "default_payment_method", "receivables". Value enum:
     * "default_payment_method", "receivables". anyOf[1] (Value): Array of string. [] enum:
     * "default_payment_method", "receivables". anyOf[1][] (Value): string. Value enum:
     * "default_payment_method", "receivables". anyOf[2] (Value): string. Value enum:
     * "default_payment_method", "receivables".
     */
    "expand"?: InputValue<("default_payment_method" | "receivables") | readonly ("default_payment_method" | "receivables")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersListTaxExemptionsParams = {
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
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "scheduled", "active", "expired", "archived". Value enum: "scheduled", "active", "expired",
     * "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "scheduled", "active",
     * "expired", "archived". anyOf[1][] (Value): string. Value enum: "scheduled", "active",
     * "expired", "archived". anyOf[2] (Value): string. Value enum: "scheduled", "active",
     * "expired", "archived".
     */
    "status"?: InputValue<("scheduled" | "active" | "expired" | "archived")
        | readonly ("scheduled" | "active" | "expired" | "archived")[]>;
};
export type CustomersRevokeSessionsParams = {};
export type CustomersUpdateAddressParams = (InputValue<UpdateCustomerAddressRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersUpdateParams = (InputValue<UpdateCustomerRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CustomersUpdateTaxExemptionParams = (UpdateCustomerTaxExemptionRequestInput);
/** The request body for: Decide return inspection line item. */
export type DecideReturnInspectionLineItemRequest = {
    /**
     * Why the units were accepted or rejected after review. Value enum: "inspection_result",
     * "return_policy", "manual_review", "other".
     */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Detail about `acceptance_decision_reason`. minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected".
     */
    "acceptance_status": "accepted" | "rejected" | (string & {});
    /**
     * Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the
     * inspection ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Decide return inspection line item. */
export type DecideReturnInspectionLineItemRequestInput = {
    /**
     * Why the units were accepted or rejected after review. Value enum: "inspection_result",
     * "return_policy", "manual_review", "other".
     */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other";
    /** Detail about `acceptance_decision_reason`. minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected".
     */
    "acceptance_status": "accepted" | "rejected";
    /**
     * Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the
     * inspection ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
export type DecideReturnInspectionLineItemResponse = GetReturnInspectionResponse;
/** The request body for: Decide return. */
export type DecideReturnRequest = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link ReturnLineDecision}. Start from
     * the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecision>;
};
/** The request body for: Decide return. */
export type DecideReturnRequestInput = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link ReturnLineDecisionInput}. Start
     * from the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecisionInput>;
};
export type DecideReturnResponse = GetReturnResponse;
/** The request body for: Decline a payment review. */
export type DeclinePaymentReviewRequest = {
    /**
     * Add the payment's card fingerprint, email and IP address to Flint's default block lists, so
     * later payments with any of them are blocked. Values the payment didn't have are skipped.
     * Defaults to false. Default: false.
     */
    "add_to_block_lists"?: boolean;
};
/** The request body for: Decline a payment review. */
export type DeclinePaymentReviewRequestInput = DeclinePaymentReviewRequest;
/**
 * A promotion accepted at subscription signup for the subscription's first charged cycle. It does
 * not discount the signup order.
 */
export type DeferredPromotion = {
    /** Name the buyer sees for the promotion, fixed when it was accepted at signup. */
    "customer_facing_name": string;
    /**
     * ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to
     * POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example:
     * "dp_01KEZF7C00AZMP1PY1ER7CQ4SA".
     */
    "deferred_promotion_id": string;
    /** Promotion code accepted at signup. Null when the promotion was applied by ID. */
    "promotion_code": string | null;
    /**
     * ID of the promotion accepted for the subscription. Example:
     * "promo_01KEZF7C00E1JAV4M413D9DE1P".
     */
    "promotion_id": string;
};
export type DeleteReturnLineItemResponse = GetReturnResponse;
export type DeleteReturnPolicyResponse = GetReturnPolicyResponse;
export type DeleteReturnReasonResponse = GetReturnReasonResponse;
/**
 * An address verification result for a delivery address or buyer location. `suggested_address` may
 * offer a correction.
 */
export type DeliveryAddressAdvisoryResource = {
    /** Which address the advisory is about. Value enum: "destination_address", "buyer_location". */
    "role": "destination_address" | "buyer_location" | (string & {});
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "suggested_address"?: Address;
    /** How far address verification got. Value enum: "needs_review", "unverifiable". */
    "verification_state": "needs_review" | "unverifiable" | (string & {});
};
/**
 * A partial address for delivery quotes, previews, and buyer locations. Country is required when
 * any member is present.
 */
export type DeliveryAddressRequest = ({
    /** City, town, or locality. minLength: 1. maxLength: 100. */
    "city"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** First line of the street address. minLength: 1. maxLength: 255. */
    "line1"?: string;
    /**
     * Second line of the street address, such as an apartment or suite. minLength: 1. maxLength:
     * 255.
     */
    "line2"?: string;
    /** Postal or ZIP code. minLength: 1. maxLength: 20. */
    "postal_code"?: string;
    /**
     * State, province, or region. State conditions read it as a subdivision of the address's
     * country: send its code with or without the country prefix, such as NY or US-NY. In the US
     * and Canada, the English name, such as New York, also matches. US addresses also accept the
     * USPS military codes AA, AE, and AP. If the address country is listed by a state condition
     * but state names no subdivision of that country, the condition cannot be decided: the method
     * or rate is left out as cannot_calculate (invalid_buyer_input). minLength: 1. maxLength: 100.
     */
    "state"?: string;
});
/**
 * A partial address for delivery quotes, previews, and buyer locations. Country is required when
 * any member is present.
 */
export type DeliveryAddressRequestInput = DeliveryAddressRequest;
/**
 * The estimated arrival date range for a delivery option, as calendar dates in the option's
 * timezone.
 */
export type DeliveryArrivalEstimate = {
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * Example: "2026-08-02".
     */
    "earliest_date": string;
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * Example: "2026-08-02".
     */
    "latest_date": string;
    /** Uses an IANA time zone name. */
    "timezone": string;
};
/**
 * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and
 * how far ahead a buyer can book.
 */
export type DeliveryAvailability = {
    /**
     * Local date-time spans in which no window is offered. [] (Value): {@link
     * DeliveryBlackoutInterval}. A local start and end time during which a delivery schedule
     * offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutInterval>;
    /**
     * Which of the two instants a local time means when a clock change makes it happen twice.
     * Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later".
     */
    "dst_disambiguation"?: "earlier" | "later" | (string & {});
    /** How many days ahead windows are offered, from 1 to 365. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    /**
     * Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows
     * are no longer offered. Omit it to apply no cutoff.
     */
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     * One to 100 weekly spans in which windows are offered. They cannot overlap. [] (Value):
     * {@link DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday and minute to
     * an end weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyInterval>;
};
/**
 * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and
 * how far ahead a buyer can book.
 */
export type DeliveryAvailabilityRequestInput = {
    /**
     * Local date-time spans in which no window is offered. [] (Value): {@link
     * DeliveryBlackoutIntervalRequestInput}. A local start and end time during which a delivery
     * schedule offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutIntervalRequestInput>;
    /**
     * Which of the two instants a local time means when a clock change makes it happen twice.
     * Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later".
     */
    "dst_disambiguation"?: "earlier" | "later";
    /** How many days ahead windows are offered, from 1 to 365. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    /**
     * Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows
     * are no longer offered. Omit it to apply no cutoff.
     */
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     * One to 100 weekly spans in which windows are offered. They cannot overlap. [] (Value):
     * {@link DeliveryWeeklyIntervalRequestInput}. A recurring weekly span, from a start weekday
     * and minute to an end weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyIntervalRequestInput>;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutInterval = {
    /**
     * Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone.
     * minLength: 1.
     */
    "end_local": string;
    /**
     * Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's
     * timezone. minLength: 1.
     */
    "start_local": string;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutIntervalRequestInput = DeliveryBlackoutInterval;
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRange = {
    /** Most business days, from `minimum` to 365. */
    "maximum": number;
    /** Fewest business days, from 0. */
    "minimum": number;
};
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRangeRequestInput = DeliveryBusinessDayRange;
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddress = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequest;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: LocationCoordinate;
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": unknown;
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequest;
}));
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddressInput = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequestInput;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": "address";
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": ("address") & ("address");
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequestInput;
})
    & ({
    "coordinate"?: never;
}));
