import type { InputValue } from '../runtime.js';
import type {
    UpdateSubscriptionRequestInput,
    UpdateTaxCalculationCallbackRequestInput,
    UpdateTaxRegistrationRequestInput
} from './types-68.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { MerchantWebhookEnvelope } from './types-37.js';
import type { ResponseMeta } from './types-54.js';
import type { CreateTaxCalculationCallbackRequestInput, CreateTaxRegistrationRequestInput } from './types-14.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { ConnectTaxConnectionRequestInput } from './types-7.js';
import type { DisconnectTaxConnectionRequestInput, DocumentTaxID, DocumentTaxIDRequestInput } from './types-23.js';
export type SubscriptionsUpdateParams = (InputValue<UpdateSubscriptionRequestInput>)
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
/**
 * The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
 * amount, rate or flat amount, and tax.
 */
export type TaxBreakdown = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage", "flat_amount".
     */
    "calculation_type": "percentage" | "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & ((Exclude<TaxBreakdownPercentage & object, readonly unknown[]>)
    | (Exclude<TaxBreakdownFlatAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `flat_amount` variant of `TaxBreakdown`. */
export type TaxBreakdownFlatAmount = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount".
     */
    "calculation_type": "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
    /** Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount".
     */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
}));
/** The `percentage` variant of `TaxBreakdown`. */
export type TaxBreakdownPercentage = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type": "percentage" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type"?: "percentage" | (string & {});
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
/** An endpoint that supplies tax calculations. */
export type TaxCalculationCallback = {
    /**
     * Consecutive failed requests to the endpoint for the current revision. A valid response
     * resets it. minimum: 0.
     */
    "circuit_failure_count": number;
    /**
     * Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the
     * endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests.
     * - `half_open`: 30 seconds after opening, the next request is a probe: a valid response
     * closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open".
     */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, and redirect policy.
     */
    "configuration": TaxCalculationCallbackConfiguration;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the callback's current revision, beginning with `tcbr_`. It changes whenever
     * `configuration` or `signing_methods` changes, and each revision has its own circuit.
     * Example: "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "current_tax_calculation_callback_revision_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the HMAC signing key that goes with `secret`. Returned only in the response that
     * returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only
     * callback. Example: "cbkey_00112233445566778899aabb".
     */
    "key_id"?: string;
    /** Your label for the callback. */
    "name": string;
    /** Initial HMAC shared secret, returned once when hmac is included in signing_methods. */
    "secret"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. minItems: 1. uniqueItems: true. [] enum:
     * "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum:
     * "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /**
     * Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not
     * selectable in settings. New callbacks start here. Connection checks and test deliveries
     * still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`:
     * Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested
     * again. Value enum: "inactive", "active", "archived".
     */
    "status": "inactive" | "active" | "archived" | (string & {});
    /**
     * Unique identifier for this tax calculation callback, prefixed `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Advances on every write. Send it as `expected_version` when you update `configuration` or
     * `signing_methods`. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type TaxCalculationCallbackActivatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TaxCalculationCallback>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.activated";
})
    & {
    "event_type": "tax_calculation_callback.activated";
});
export type TaxCalculationCallbackArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TaxCalculationCallback>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.archived";
})
    & {
    "event_type": "tax_calculation_callback.archived";
});
/**
 * Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout,
 * request and response size limits, and redirect policy.
 */
export type TaxCalculationCallbackConfiguration = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject" | (string & {});
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. minimum: 0.1. maximum: 10. Default: 3.
     */
    "request_timeout_seconds"?: number;
    /**
     * HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Changes to a tax calculation callback's configuration. Only the keys you send change; keys you
 * leave out keep their current values. Null restores an optional key's default. Requires
 * expected_version. minProperties: 1.
 */
export type TaxCalculationCallbackConfigurationPatchRequest = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. Null restores 3 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /**
     * HTTPS endpoint that receives signed callback requests. Null is invalid. Format: uri.
     * minLength: 1. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "url"?: string;
};
/**
 * Changes to a tax calculation callback's configuration. Only the keys you send change; keys you
 * leave out keep their current values. Null restores an optional key's default. Requires
 * expected_version. minProperties: 1.
 */
export type TaxCalculationCallbackConfigurationPatchRequestInput = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null;
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. Null restores 3 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /**
     * HTTPS endpoint that receives signed callback requests. Null is invalid. Format: uri.
     * minLength: 1. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "url"?: string;
};
/**
 * Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout,
 * request and response size limits, and redirect policy.
 */
export type TaxCalculationCallbackConfigurationRequestInput = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject";
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. minimum: 0.1. maximum: 10. Default: 3.
     */
    "request_timeout_seconds"?: number;
    /**
     * HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Result of checking the connection to a tax calculation callback endpoint, with its status,
 * latency, HTTP status code, and failure category if it failed.
 */
export type TaxCalculationCallbackConnectionCheck = {
    /** When Flint sent the connection check. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "checked_at": string;
    /**
     * Why the callback request failed and the action that can make the next one succeed. -
     * `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing
     * methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request
     * bytes. For HMAC, check the shared secret and verify the raw body before parsing it. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also echo tax_calculation_evaluation_id with empty
     * line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint
     * couldn't complete the request for another reason. Check the URL and your server logs, then
     * test again. - `timeout`: Acknowledge the callback within its configured timeout, then test
     * again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again.
     * Value enum: "authentication_or_http_error", "blocked_target", "connection_error",
     * "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** HTTP status code your endpoint returned. Omitted when it returned no response. */
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "key_id": string;
    /** How long your endpoint took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint
     * answered as the request requires. - `failed`: The request failed. See `failure_category`.
     * Value enum: "succeeded", "failed".
     */
    "status": "succeeded" | "failed" | (string & {});
    /**
     * ID of the callback that was called, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /**
     * ID of the callback revision that was called, beginning with `tcbr_`. Example:
     * "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "tax_calculation_callback_revision_id": string;
};
/** A response containing `TaxCalculationCallbackConnectionCheck` data. */
export type TaxCalculationCallbackConnectionCheckResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of checking the
     * connection to a tax calculation callback endpoint, with its status, latency, HTTP status
     * code, and failure category if it failed.
     */
    "data": TaxCalculationCallbackConnectionCheck;
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
export type TaxCalculationCallbackCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.created";
})
    & {
    "event_type": "tax_calculation_callback.created";
});
export type TaxCalculationCallbackDeactivatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TaxCalculationCallback>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.deactivated";
})
    & {
    "event_type": "tax_calculation_callback.deactivated";
});
/** A page of `TaxCalculationCallback` objects. */
export type TaxCalculationCallbackListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * TaxCalculationCallback}. An endpoint that supplies tax calculations.
     */
    "data": Array<TaxCalculationCallback>;
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
/** A response containing `TaxCalculationCallback` data. */
export type TaxCalculationCallbackResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An endpoint that
     * supplies tax calculations.
     */
    "data": TaxCalculationCallback;
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
 * Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the
 * new `secret`, which is returned only in this response.
 */
export type TaxCalculationCallbackSigningKey = {
    /** ID of the new HMAC signing key. Example: "cbkey_00112233445566778899aabb". */
    "key_id": string;
    /** New HMAC shared secret. Returned only by this response. */
    "secret": string;
    /**
     * ID of the callback whose secret was issued or rotated, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
};
/** A response containing `TaxCalculationCallbackSigningKey` data. */
export type TaxCalculationCallbackSigningKeyRotationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of rotating a tax
     * calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which
     * is returned only in this response.
     */
    "data": TaxCalculationCallbackSigningKey;
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
 * Result of sending a test delivery to a tax calculation callback, with its status, latency, HTTP
 * status code, and failure category if it failed.
 */
export type TaxCalculationCallbackTestDelivery = {
    /**
     * Why the callback request failed and the action that can make the next one succeed. -
     * `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing
     * methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request
     * bytes. For HMAC, check the shared secret and verify the raw body before parsing it. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also echo tax_calculation_evaluation_id with empty
     * line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint
     * couldn't complete the request for another reason. Check the URL and your server logs, then
     * test again. - `timeout`: Acknowledge the callback within its configured timeout, then test
     * again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again.
     * Value enum: "authentication_or_http_error", "blocked_target", "connection_error",
     * "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** HTTP status code your endpoint returned. Omitted when it returned no response. */
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "key_id": string;
    /** How long your endpoint took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint
     * answered as the request requires. - `failed`: The request failed. See `failure_category`.
     * Value enum: "succeeded", "failed".
     */
    "status": "succeeded" | "failed" | (string & {});
    /**
     * ID of the callback that was called, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /**
     * ID of the callback revision that was called, beginning with `tcbr_`. Example:
     * "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "tax_calculation_callback_revision_id": string;
    /** When Flint sent the test delivery. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "tested_at": string;
};
/** A response containing `TaxCalculationCallbackTestDelivery` data. */
export type TaxCalculationCallbackTestDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of sending a test
     * delivery to a tax calculation callback, with its status, latency, HTTP status code, and
     * failure category if it failed.
     */
    "data": TaxCalculationCallbackTestDelivery;
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
export type TaxCalculationCallbackUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TaxCalculationCallback>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.updated";
})
    & {
    "event_type": "tax_calculation_callback.updated";
});
export type TaxCalculationCallbacksCheckConnectionParams = {};
export type TaxCalculationCallbacksCreateParams = (InputValue<CreateTaxCalculationCallbackRequestInput>);
export type TaxCalculationCallbacksCreateTestDeliveryParams = {};
export type TaxCalculationCallbacksDeleteParams = {
    /** Current callback version. Format: uint64. minimum: 1. maximum: 9007199254740991. */
    "expected_version"?: InputValue<number>;
};
export type TaxCalculationCallbacksGetParams = {};
export type TaxCalculationCallbacksListParams = {
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
    /** Search tax_calculation_callback_id, name, and external_reference_id. maxLength: 255. */
    "query"?: InputValue<string>;
    /** Match the external reference ID. minLength: 1. maxLength: 255. Example: "warehouse-1842". */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
};
export type TaxCalculationCallbacksRotateSecretParams = {};
export type TaxCalculationCallbacksUpdateParams = (UpdateTaxCalculationCallbackRequestInput);
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequest = {
    /**
     * The tax for this line item or charge, one component per jurisdiction and tax type. Each is a
     * `percentage` tax. minItems: 1. [] (Value): {@link TaxComponentRequest}. One tax component in
     * a `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequest>;
    /**
     * Whether the price this tax applies to already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestModelInput = {
    /**
     * The tax for this line item or charge, one component per jurisdiction and tax type. Each is a
     * `percentage` tax. minItems: 1. [] (Value): {@link TaxComponentRequestModelInput}. One tax
     * component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestModelInput>;
    /**
     * Whether the price this tax applies to already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestRequestInput = {
    /**
     * The tax for this line item or charge, one component per jurisdiction and tax type. Each is a
     * `percentage` tax. minItems: 1. [] (Value): {@link TaxComponentRequestRequestInput}. One tax
     * component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestRequestInput>;
    /**
     * Whether the price this tax applies to already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequest = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type"?: "percentage" | (string & {});
    /**
     * The fixed tax amount in the order currency. Send it with a `flat_amount` component; a
     * `percentage` component doesn't take it. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its
     * level, such as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum:
     * 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst",
     * "hst", "pst", "qst".
     */
    "tax_type": "sales_tax" | "use_tax" | "vat" | "gst" | "hst" | "pst" | "qst" | (string & {});
    /**
     * Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum:
     * "reverse_charge".
     */
    "taxability_reason"?: "reverse_charge" | (string & {});
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestModelInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "percentage". Value enum: "percentage".
     */
    "calculation_type"?: "percentage";
    /**
     * The fixed tax amount in the order currency. Send it with a `flat_amount` component; a
     * `percentage` component doesn't take it. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its
     * level, such as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdictionRequestModelInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum:
     * 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst",
     * "hst", "pst", "qst".
     */
    "tax_type": "sales_tax" | "use_tax" | "vat" | "gst" | "hst" | "pst" | "qst";
    /**
     * Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum:
     * "reverse_charge".
     */
    "taxability_reason"?: "reverse_charge";
})
    & ({
    "flat_money"?: never;
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestRequestInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type"?: "percentage";
    /**
     * The fixed tax amount in the order currency. Send it with a `flat_amount` component; a
     * `percentage` component doesn't take it. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its
     * level, such as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdictionRequestInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum:
     * 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst",
     * "hst", "pst", "qst".
     */
    "tax_type": "sales_tax" | "use_tax" | "vat" | "gst" | "hst" | "pst" | "qst";
    /**
     * Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum:
     * "reverse_charge".
     */
    "taxability_reason"?: "reverse_charge";
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
     * comes from the merchant profile. `null` when no legal address is available or the sandbox
     * profile address is incomplete. anyOf[1] (Value): {@link Address}. A postal address. Every
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
     * details; once connected, comes from the tax account snapshot. In sandboxes, comes from the
     * merchant profile. Omitted when no name is available.
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
     * based on the connection state for every credential. An empty array means neither action is
     * available. Performing either action requires settings.write. [] enum: "connect",
     * "disconnect". [] (Value): string. Value enum: "connect", "disconnect".
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
        "previous_attributes"?: Partial<TaxConnection>;
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
    /** Name of the jurisdiction, up to 200 characters. minLength: 1. */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     */
    "state"?: string;
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
    /** Name of the jurisdiction, up to 200 characters. minLength: 1. */
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
    /** Name of the jurisdiction, up to 200 characters. minLength: 1. */
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
