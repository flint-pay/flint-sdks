import type { InputValue } from '../runtime.js';
import type { RemoveLicenseKeyPoolKeysRequestInput } from './types-61.js';
import type { UpdateLicenseKeyPoolRequestInput, UpdateLicenseKeyRequestInput, UpdateLocationRequestInput } from './types-76.js';
import type { LicenseKey, LicenseKeyActivation } from './types-39.js';
import type { ResponseMeta, ResendLicenseKeyRequestInput, ReturnActivity } from './types-62.js';
import type {
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedOrderSummaryPreviousAttributes,
    DisputesAcceptParams
} from './types-26.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { DisableLicenseKeyRequestInput } from './types-25.js';
import type { RevealLicenseKeyRequestInput, ReturnResource } from './types-66.js';
import type { ValidateLicenseKeyRequestInput } from './types-78.js';
import type { ReturnDisposition, ReturnInspection } from './types-63.js';
import type { ReturnLineItem, ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-64.js';
import type { ReturnResolution } from './types-65.js';
import type { Address } from './types-0.js';
import type { CreateLocationRequestInput } from './types-11.js';
import type { InventoryAllocationPoliciesDeleteParams } from './types-31.js';
import type { MoneyValue, MoneyValueInput } from './types-44.js';
export type LicenseKeyPoolsRemoveKeysParams = (RemoveLicenseKeyPoolKeysRequestInput)
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
export type LicenseKeyPoolsUpdateParams = (InputValue<UpdateLicenseKeyPoolRequestInput>)
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
/** A response containing `LicenseKey` data. */
export type LicenseKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A license key issued to
     * a buyer, with its display suffix.
     */
    "data": LicenseKey;
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
/** One occurrence of a cause keeping the key disabled. */
export type LicenseKeyRestriction = {
    /** When the restriction took effect. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** The dispute that restricted the key. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
    "dispute_id"?: string;
    /** Whether the dispute is open or lost. Value enum: "open", "lost". */
    "dispute_status"?: "open" | "lost" | (string & {});
    /** Reason for a merchant or subscription restriction. */
    "reason"?: string;
    /** The refund that restricted the key. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_id"?: string;
    /** The subscription that restricted the key. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id"?: string;
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription". */
    "type": "merchant" | "refund" | "dispute" | "subscription" | (string & {});
};
export type LicenseKeyRestrictionPreviousAttributes = {
    /**
     * When the restriction took effect. anyOf[1] (Value): string. When the restriction took
     * effect. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * The dispute that restricted the key. anyOf[1] (Value): string. The dispute that restricted
     * the key. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
     */
    "dispute_id"?: ((string) | (null));
    /**
     * Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[1] (Value): string.
     * Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[2] (Value): null.
     */
    "dispute_status"?: (("open" | "lost" | (string & {})) | (null));
    /**
     * Reason for a merchant or subscription restriction. anyOf[1] (Value): string. Reason for a
     * merchant or subscription restriction. anyOf[2] (Value): null.
     */
    "reason"?: ((string) | (null));
    /**
     * The refund that restricted the key. anyOf[1] (Value): string. The refund that restricted the
     * key. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     */
    "refund_id"?: ((string) | (null));
    /**
     * The subscription that restricted the key. anyOf[1] (Value): string. The subscription that
     * restricted the key. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     */
    "subscription_id"?: ((string) | (null));
    /**
     * What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription".
     * anyOf[1] (Value): string. What caused the restriction. Value enum: "merchant", "refund",
     * "dispute", "subscription". anyOf[2] (Value): null.
     */
    "type"?: (("merchant" | "refund" | "dispute" | "subscription" | (string & {})) | (null));
};
export type LicenseKeyUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "order_line_item_id": string | null;
            "product_id": string;
            "restrictions": Array<LicenseKeyRestriction>;
            "source": "generated" | "pool" | (string & {});
            "status": "pending" | "active" | "disabled" | "expired" | (string & {});
            "subscription_id": string | null;
            "subscription_line_item_id": string | null;
            "supported_actions": Array<"disable" | "reinstate" | (string & {})>;
            "unit_ordinal": number;
            "updated_at": string;
            "variant_id": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "activation_limit"?: ((number) | (null));
            "active_activation_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "key_last4"?: ((string) | (null));
            "license_key_id"?: ((string) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "product_id"?: ((string) | (null));
            "restrictions"?: ((Array<LicenseKeyRestrictionPreviousAttributes>) | (null));
            "source"?: (("generated" | "pool" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "disabled" | "expired" | (string & {})) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_line_item_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"disable" | "reinstate" | (string & {})>) | (null));
            "unit_ordinal"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "variant_id"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "order_line_item_id": string | null;
            "product_id": string;
            "restrictions": Array<LicenseKeyRestriction>;
            "source": "generated" | "pool" | (string & {});
            "status": "pending" | "active" | "disabled" | "expired" | (string & {});
            "subscription_id": string | null;
            "subscription_line_item_id": string | null;
            "supported_actions": Array<"disable" | "reinstate" | (string & {})>;
            "unit_ordinal": number;
            "updated_at": string;
            "variant_id": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "activation_limit"?: ((number) | (null));
            "active_activation_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "key_last4"?: ((string) | (null));
            "license_key_id"?: ((string) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_line_item_id"?: ((string) | (null));
            "product_id"?: ((string) | (null));
            "restrictions"?: ((Array<LicenseKeyRestrictionPreviousAttributes>) | (null));
            "source"?: (("generated" | "pool" | (string & {})) | (null));
            "status"?: (("pending" | "active" | "disabled" | "expired" | (string & {})) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_line_item_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"disable" | "reinstate" | (string & {})>) | (null));
            "unit_ordinal"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "variant_id"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key.updated";
});
/**
 * The `license_key.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type LicenseKeyUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. The linked customer. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string or null. The
     * current customer of the owning order or subscription. Null when the order has no linked
     * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or
     * null. When the key expires. Null when no expiry is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.key_last4 (Required): string or null. Last four characters of
     * the assigned key. Null when the key is awaiting assignment. object.license_key_id
     * (Required): string. Unique license key ID with the lk_ prefix. Example:
     * "lk_01KEZF7C000QD7VJ83G43V0NSN". object.license_key_pool_id (Required): string or null. The
     * source pool ID. Null when the key is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * object.metadata (Required): {@link MetadataMap}. Merchant-defined key-value pairs.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Present only when
     * `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. The owning order or the order that started the subscription. Null when a
     * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string or null. The owning order line. Null when the
     * key belongs to a subscription line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * object.product_id (Required): string. The product ID. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
     * LicenseKeyRestriction}. Restrictions currently in force. object.restrictions[] (Value):
     * {@link LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled.
     * object.source (Required): string. How the key was supplied. Value enum: "generated", "pool".
     * object.status (Required): string. Whether the key is usable. Expiry takes effect at
     * expires_at. Value enum: "pending", "active", "disabled", "expired". object.subscription_id
     * (Required): string or null. The owning subscription. Null when the key belongs to an order
     * line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_line_item_id
     * (Required): string or null. The owning subscription line. Null when the key belongs to an
     * order line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". object.supported_actions (Required):
     * Array of string. Lifecycle actions currently available for this key. [] enum: "disable",
     * "reinstate". object.supported_actions[] (Value): string. Value enum: "disable", "reinstate".
     * object.unit_ordinal (Required): integer. The unit of the owning line, starting at 1. Format:
     * int32. object.updated_at (Required): string. When the license key version last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required): string.
     * The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.activation_limit (Optional): integer or null. Maximum active
     * installations. Null when activations are unlimited.
     * previous_attributes.activation_limit.anyOf[1] (Value): integer. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * previous_attributes.activation_limit.anyOf[2] (Value): null.
     * previous_attributes.active_activation_count (Optional): integer or null. Number of currently
     * active installations. previous_attributes.active_activation_count.anyOf[1] (Value): integer.
     * Number of currently active installations. Format: int32.
     * previous_attributes.active_activation_count.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the license key was issued.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the license key was issued.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. The linked customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The current customer of
     * the owning order or subscription. Null when the order has no linked customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. The current customer of the owning
     * order or subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. When the key expires. Null when
     * no expiry is set. previous_attributes.expires_at.anyOf[1] (Value): string. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.expires_at.anyOf[2] (Value): null. previous_attributes.key_last4
     * (Optional): string or null. Last four characters of the assigned key. Null when the key is
     * awaiting assignment. previous_attributes.key_last4.anyOf[1] (Value): string. Last four
     * characters of the assigned key. Null when the key is awaiting assignment.
     * previous_attributes.key_last4.anyOf[2] (Value): null. previous_attributes.license_key_id
     * (Optional): string or null. Unique license key ID with the lk_ prefix.
     * previous_attributes.license_key_id.anyOf[1] (Value): string. Unique license key ID with the
     * lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * previous_attributes.license_key_id.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The source pool ID. Null
     * when the key is generated. previous_attributes.license_key_pool_id.anyOf[1] (Value): string.
     * The source pool ID. Null when the key is generated. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". previous_attributes.license_key_pool_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. The linked order. Present only when
     * `expand` includes `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The owning order or the order that started the subscription. Null when a
     * subscription has no starting order. previous_attributes.order_id.anyOf[1] (Value): string.
     * The owning order or the order that started the subscription. Null when a subscription has no
     * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_line_item_id
     * (Optional): string or null. The owning order line. Null when the key belongs to a
     * subscription line. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". previous_attributes.order_line_item_id.anyOf[2] (Value):
     * null. previous_attributes.product_id (Optional): string or null. The product ID.
     * previous_attributes.product_id.anyOf[1] (Value): string. The product ID. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2] (Value): null.
     * previous_attributes.restrictions (Optional): Array of {@link
     * LicenseKeyRestrictionPreviousAttributes} or null. Restrictions currently in force.
     * previous_attributes.restrictions.anyOf[1] (Value): Array of {@link
     * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
     * previous_attributes.restrictions.anyOf[1][] (Value): {@link
     * LicenseKeyRestrictionPreviousAttributes}. previous_attributes.restrictions.anyOf[2] (Value):
     * null. previous_attributes.source (Optional): string or null. How the key was supplied. Value
     * enum: "generated", "pool". previous_attributes.source.anyOf[1] (Value): string. How the key
     * was supplied. Value enum: "generated", "pool". previous_attributes.source.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether the key is usable.
     * Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled", "expired".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the key is usable. Expiry takes
     * effect at expires_at. Value enum: "pending", "active", "disabled", "expired".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The owning subscription. Null when the key belongs to an order
     * line. previous_attributes.subscription_id.anyOf[1] (Value): string. The owning subscription.
     * Null when the key belongs to an order line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.subscription_line_item_id (Optional): string or null. The owning
     * subscription line. Null when the key belongs to an order line.
     * previous_attributes.subscription_line_item_id.anyOf[1] (Value): string. The owning
     * subscription line. Null when the key belongs to an order line. Example:
     * "sli_01KEZF7C00PPWVJ2N321V84ASA". previous_attributes.subscription_line_item_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * currently available for this key. [] enum: "disable", "reinstate".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "disable",
     * "reinstate". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unit_ordinal (Optional): integer or null. The unit of the owning line,
     * starting at 1. previous_attributes.unit_ordinal.anyOf[1] (Value): integer. The unit of the
     * owning line, starting at 1. Format: int32. previous_attributes.unit_ordinal.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the license
     * key version last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * license key version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.variant_id
     * (Optional): string or null. The product variant ID. previous_attributes.variant_id.anyOf[1]
     * (Value): string. The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * previous_attributes.variant_id.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * activation_limit (Required): integer or null. Maximum active installations. Null when
         * activations are unlimited. Format: int32. active_activation_count (Required): integer.
         * Number of currently active installations. Format: int32. created_at (Required): string.
         * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Required): string or null. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Required): string or
         * null. When the key expires. Null when no expiry is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". key_last4 (Required): string or null. Last four characters of
         * the assigned key. Null when the key is awaiting assignment. license_key_id (Required):
         * string. Unique license key ID with the lk_ prefix. Example:
         * "lk_01KEZF7C000QD7VJ83G43V0NSN". license_key_pool_id (Required): string or null. The
         * source pool ID. Null when the key is generated. Example:
         * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". metadata (Required): {@link MetadataMap}.
         * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. The linked order.
         * Present only when `expand` includes `order`; `null` when expanded and there is no
         * related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. The owning order or the order that started the subscription. Null when a
         * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_line_item_id (Required): string or null. The owning order line. Null when the key
         * belongs to a subscription line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". product_id
         * (Required): string. The product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * restrictions (Required): Array of {@link LicenseKeyRestriction}. Restrictions currently
         * in force. restrictions[] (Value): {@link LicenseKeyRestriction}. One occurrence of a
         * cause keeping the key disabled. source (Required): string. How the key was supplied.
         * Value enum: "generated", "pool". status (Required): string. Whether the key is usable.
         * Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled",
         * "expired". subscription_id (Required): string or null. The owning subscription. Null
         * when the key belongs to an order line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_line_item_id (Required): string or null. The owning subscription line. Null
         * when the key belongs to an order line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
         * supported_actions (Required): Array of string. Lifecycle actions currently available for
         * this key. [] enum: "disable", "reinstate". supported_actions[] (Value): string. Value
         * enum: "disable", "reinstate". unit_ordinal (Required): integer. The unit of the owning
         * line, starting at 1. Format: int32. updated_at (Required): string. When the license key
         * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /** Maximum active installations. Null when activations are unlimited. Format: int32. */
            "activation_limit": number | null;
            /** Number of currently active installations. Format: int32. */
            "active_activation_count": number;
            /**
             * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The linked customer. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The current customer of the owning order or subscription. Null when the order has no
             * linked customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the key expires. Null when no expiry is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Last four characters of the assigned key. Null when the key is awaiting assignment.
             */
            "key_last4": string | null;
            /**
             * Unique license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
             */
            "license_key_id": string;
            /**
             * The source pool ID. Null when the key is generated. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Present only when `expand` includes `order`; `null` when expanded
             * and there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The owning order or the order that started the subscription. Null when a
             * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The owning order line. Null when the key belongs to a subscription line. Example:
             * "li_01KEZF7C008YPRCK7VDKTGWR31".
             */
            "order_line_item_id": string | null;
            /** The product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Restrictions currently in force. [] (Value): {@link LicenseKeyRestriction}. One
             * occurrence of a cause keeping the key disabled.
             */
            "restrictions": Array<LicenseKeyRestriction>;
            /** How the key was supplied. Value enum: "generated", "pool". */
            "source": "generated" | "pool" | (string & {});
            /**
             * Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending",
             * "active", "disabled", "expired".
             */
            "status": "pending" | "active" | "disabled" | "expired" | (string & {});
            /**
             * The owning subscription. Null when the key belongs to an order line. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * The owning subscription line. Null when the key belongs to an order line. Example:
             * "sli_01KEZF7C00PPWVJ2N321V84ASA".
             */
            "subscription_line_item_id": string | null;
            /**
             * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
             * [] (Value): string. Value enum: "disable", "reinstate".
             */
            "supported_actions": Array<"disable" | "reinstate" | (string & {})>;
            /** The unit of the owning line, starting at 1. Format: int32. */
            "unit_ordinal": number;
            /**
             * When the license key version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. activation_limit (Optional): integer or null.
         * Maximum active installations. Null when activations are unlimited.
         * activation_limit.anyOf[1] (Value): integer. Maximum active installations. Null when
         * activations are unlimited. Format: int32. activation_limit.anyOf[2] (Value): null.
         * active_activation_count (Optional): integer or null. Number of currently active
         * installations. active_activation_count.anyOf[1] (Value): integer. Number of currently
         * active installations. Format: int32. active_activation_count.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the license key was issued.
         * created_at.anyOf[1] (Value): string. When the license key was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional):
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. The linked customer. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
         * customer. customer_id.anyOf[1] (Value): string. The current customer of the owning order
         * or subscription. Null when the order has no linked customer. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When the key expires. Null when no expiry is set.
         * expires_at.anyOf[1] (Value): string. When the key expires. Null when no expiry is set.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * key_last4 (Optional): string or null. Last four characters of the assigned key. Null
         * when the key is awaiting assignment. key_last4.anyOf[1] (Value): string. Last four
         * characters of the assigned key. Null when the key is awaiting assignment.
         * key_last4.anyOf[2] (Value): null. license_key_id (Optional): string or null. Unique
         * license key ID with the lk_ prefix. license_key_id.anyOf[1] (Value): string. Unique
         * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
         * license_key_id.anyOf[2] (Value): null. license_key_pool_id (Optional): string or null.
         * The source pool ID. Null when the key is generated. license_key_pool_id.anyOf[1]
         * (Value): string. The source pool ID. Null when the key is generated. Example:
         * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". license_key_pool_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. The linked order.
         * Present only when `expand` includes `order`; `null` when expanded and there is no
         * related order. order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
         * order.anyOf[2] (Value): null. order_id (Optional): string or null. The owning order or
         * the order that started the subscription. Null when a subscription has no starting order.
         * order_id.anyOf[1] (Value): string. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The owning order line. Null when the key belongs to a
         * subscription line. order_line_item_id.anyOf[1] (Value): string. The owning order line.
         * Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". order_line_item_id.anyOf[2] (Value): null. product_id
         * (Optional): string or null. The product ID. product_id.anyOf[1] (Value): string. The
         * product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value):
         * null. restrictions (Optional): Array of {@link LicenseKeyRestrictionPreviousAttributes}
         * or null. Restrictions currently in force. restrictions.anyOf[1] (Value): Array of {@link
         * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
         * restrictions.anyOf[1][] (Value): {@link LicenseKeyRestrictionPreviousAttributes}.
         * restrictions.anyOf[2] (Value): null. source (Optional): string or null. How the key was
         * supplied. Value enum: "generated", "pool". source.anyOf[1] (Value): string. How the key
         * was supplied. Value enum: "generated", "pool". source.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether the key is usable. Expiry takes effect at
         * expires_at. Value enum: "pending", "active", "disabled", "expired". status.anyOf[1]
         * (Value): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". status.anyOf[2] (Value): null.
         * subscription_id (Optional): string or null. The owning subscription. Null when the key
         * belongs to an order line. subscription_id.anyOf[1] (Value): string. The owning
         * subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_line_item_id (Optional): string or null. The owning subscription line. Null
         * when the key belongs to an order line. subscription_line_item_id.anyOf[1] (Value):
         * string. The owning subscription line. Null when the key belongs to an order line.
         * Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". subscription_line_item_id.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions currently
         * available for this key. [] enum: "disable", "reinstate". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions currently available for this key. [] enum:
         * "disable", "reinstate". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "disable", "reinstate". supported_actions.anyOf[2] (Value): null. unit_ordinal
         * (Optional): integer or null. The unit of the owning line, starting at 1.
         * unit_ordinal.anyOf[1] (Value): integer. The unit of the owning line, starting at 1.
         * Format: int32. unit_ordinal.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. When the license key version last changed. updated_at.anyOf[1] (Value): string.
         * When the license key version last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. variant_id (Optional): string
         * or null. The product variant ID. variant_id.anyOf[1] (Value): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". variant_id.anyOf[2] (Value):
         * null. version (Optional): integer or null. Persisted version of this resource's owned
         * state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Maximum active installations. Null when activations are unlimited. anyOf[1] (Value):
             * integer. Maximum active installations. Null when activations are unlimited. Format:
             * int32. anyOf[2] (Value): null.
             */
            "activation_limit"?: ((number) | (null));
            /**
             * Number of currently active installations. anyOf[1] (Value): integer. Number of
             * currently active installations. Format: int32. anyOf[2] (Value): null.
             */
            "active_activation_count"?: ((number) | (null));
            /**
             * When the license key was issued. anyOf[1] (Value): string. When the license key was
             * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The linked customer. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The current customer of the owning order or subscription. Null when the order has no
             * linked customer. anyOf[1] (Value): string. The current customer of the owning order
             * or subscription. Null when the order has no linked customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the key expires. Null when no expiry is set. anyOf[1] (Value): string. When the
             * key expires. Null when no expiry is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Last four characters of the assigned key. Null when the key is awaiting assignment.
             * anyOf[1] (Value): string. Last four characters of the assigned key. Null when the
             * key is awaiting assignment. anyOf[2] (Value): null.
             */
            "key_last4"?: ((string) | (null));
            /**
             * Unique license key ID with the lk_ prefix. anyOf[1] (Value): string. Unique license
             * key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". anyOf[2]
             * (Value): null.
             */
            "license_key_id"?: ((string) | (null));
            /**
             * The source pool ID. Null when the key is generated. anyOf[1] (Value): string. The
             * source pool ID. Null when the key is generated. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The linked order. Present only when `expand` includes `order`; `null` when expanded
             * and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The owning order or the order that started the subscription. Null when a
             * subscription has no starting order. anyOf[1] (Value): string. The owning order or
             * the order that started the subscription. Null when a subscription has no starting
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The owning order line. Null when the key belongs to a subscription line. anyOf[1]
             * (Value): string. The owning order line. Null when the key belongs to a subscription
             * line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The product ID. anyOf[1] (Value): string. The product ID. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
             */
            "product_id"?: ((string) | (null));
            /**
             * Restrictions currently in force. anyOf[1] (Value): Array of {@link
             * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
             * anyOf[1][] (Value): {@link LicenseKeyRestrictionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "restrictions"?: ((Array<LicenseKeyRestrictionPreviousAttributes>) | (null));
            /**
             * How the key was supplied. Value enum: "generated", "pool". anyOf[1] (Value): string.
             * How the key was supplied. Value enum: "generated", "pool". anyOf[2] (Value): null.
             */
            "source"?: (("generated" | "pool" | (string & {})) | (null));
            /**
             * Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending",
             * "active", "disabled", "expired". anyOf[1] (Value): string. Whether the key is
             * usable. Expiry takes effect at expires_at. Value enum: "pending", "active",
             * "disabled", "expired". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "disabled" | "expired" | (string & {})) | (null));
            /**
             * The owning subscription. Null when the key belongs to an order line. anyOf[1]
             * (Value): string. The owning subscription. Null when the key belongs to an order
             * line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * The owning subscription line. Null when the key belongs to an order line. anyOf[1]
             * (Value): string. The owning subscription line. Null when the key belongs to an order
             * line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". anyOf[2] (Value): null.
             */
            "subscription_line_item_id"?: ((string) | (null));
            /**
             * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
             * anyOf[1] (Value): Array of string. Lifecycle actions currently available for this
             * key. [] enum: "disable", "reinstate". anyOf[1][] (Value): string. Value enum:
             * "disable", "reinstate". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"disable" | "reinstate" | (string & {})>) | (null));
            /**
             * The unit of the owning line, starting at 1. anyOf[1] (Value): integer. The unit of
             * the owning line, starting at 1. Format: int32. anyOf[2] (Value): null.
             */
            "unit_ordinal"?: ((number) | (null));
            /**
             * When the license key version last changed. anyOf[1] (Value): string. When the
             * license key version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The product variant ID. anyOf[1] (Value): string. The product variant ID. Example:
             * "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
             */
            "variant_id"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key.updated". */
    "event_type"?: "license_key.updated";
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
 * The `license_key.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. The linked customer. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string or null. The
     * current customer of the owning order or subscription. Null when the order has no linked
     * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or
     * null. When the key expires. Null when no expiry is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.key_last4 (Required): string or null. Last four characters of
     * the assigned key. Null when the key is awaiting assignment. object.license_key_id
     * (Required): string. Unique license key ID with the lk_ prefix. Example:
     * "lk_01KEZF7C000QD7VJ83G43V0NSN". object.license_key_pool_id (Required): string or null. The
     * source pool ID. Null when the key is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * object.metadata (Required): {@link MetadataMap}. Merchant-defined key-value pairs.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Present only when
     * `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. The owning order or the order that started the subscription. Null when a
     * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string or null. The owning order line. Null when the
     * key belongs to a subscription line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * object.product_id (Required): string. The product ID. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
     * LicenseKeyRestriction}. Restrictions currently in force. object.restrictions[] (Value):
     * {@link LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled.
     * object.source (Required): string. How the key was supplied. Value enum: "generated", "pool".
     * object.status (Required): string. Whether the key is usable. Expiry takes effect at
     * expires_at. Value enum: "pending", "active", "disabled", "expired". object.subscription_id
     * (Required): string or null. The owning subscription. Null when the key belongs to an order
     * line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_line_item_id
     * (Required): string or null. The owning subscription line. Null when the key belongs to an
     * order line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". object.supported_actions (Required):
     * Array of string. Lifecycle actions currently available for this key. [] enum: "disable",
     * "reinstate". object.supported_actions[] (Value): string. Value enum: "disable", "reinstate".
     * object.unit_ordinal (Required): integer. The unit of the owning line, starting at 1. Format:
     * int32. object.updated_at (Required): string. When the license key version last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.variant_id (Required): string.
     * The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.activation_limit (Optional): integer or null. Maximum active
     * installations. Null when activations are unlimited.
     * previous_attributes.activation_limit.anyOf[1] (Value): integer. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * previous_attributes.activation_limit.anyOf[2] (Value): null.
     * previous_attributes.active_activation_count (Optional): integer or null. Number of currently
     * active installations. previous_attributes.active_activation_count.anyOf[1] (Value): integer.
     * Number of currently active installations. Format: int32.
     * previous_attributes.active_activation_count.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the license key was issued.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the license key was issued.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. The linked customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The current customer of
     * the owning order or subscription. Null when the order has no linked customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. The current customer of the owning
     * order or subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. When the key expires. Null when
     * no expiry is set. previous_attributes.expires_at.anyOf[1] (Value): string. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.expires_at.anyOf[2] (Value): null. previous_attributes.key_last4
     * (Optional): string or null. Last four characters of the assigned key. Null when the key is
     * awaiting assignment. previous_attributes.key_last4.anyOf[1] (Value): string. Last four
     * characters of the assigned key. Null when the key is awaiting assignment.
     * previous_attributes.key_last4.anyOf[2] (Value): null. previous_attributes.license_key_id
     * (Optional): string or null. Unique license key ID with the lk_ prefix.
     * previous_attributes.license_key_id.anyOf[1] (Value): string. Unique license key ID with the
     * lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * previous_attributes.license_key_id.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The source pool ID. Null
     * when the key is generated. previous_attributes.license_key_pool_id.anyOf[1] (Value): string.
     * The source pool ID. Null when the key is generated. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". previous_attributes.license_key_pool_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. The linked order. Present only when
     * `expand` includes `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. The owning order or the order that started the subscription. Null when a
     * subscription has no starting order. previous_attributes.order_id.anyOf[1] (Value): string.
     * The owning order or the order that started the subscription. Null when a subscription has no
     * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_line_item_id
     * (Optional): string or null. The owning order line. Null when the key belongs to a
     * subscription line. previous_attributes.order_line_item_id.anyOf[1] (Value): string. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". previous_attributes.order_line_item_id.anyOf[2] (Value):
     * null. previous_attributes.product_id (Optional): string or null. The product ID.
     * previous_attributes.product_id.anyOf[1] (Value): string. The product ID. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2] (Value): null.
     * previous_attributes.restrictions (Optional): Array of {@link
     * LicenseKeyRestrictionPreviousAttributes} or null. Restrictions currently in force.
     * previous_attributes.restrictions.anyOf[1] (Value): Array of {@link
     * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
     * previous_attributes.restrictions.anyOf[1][] (Value): {@link
     * LicenseKeyRestrictionPreviousAttributes}. previous_attributes.restrictions.anyOf[2] (Value):
     * null. previous_attributes.source (Optional): string or null. How the key was supplied. Value
     * enum: "generated", "pool". previous_attributes.source.anyOf[1] (Value): string. How the key
     * was supplied. Value enum: "generated", "pool". previous_attributes.source.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether the key is usable.
     * Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled", "expired".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the key is usable. Expiry takes
     * effect at expires_at. Value enum: "pending", "active", "disabled", "expired".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The owning subscription. Null when the key belongs to an order
     * line. previous_attributes.subscription_id.anyOf[1] (Value): string. The owning subscription.
     * Null when the key belongs to an order line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.subscription_line_item_id (Optional): string or null. The owning
     * subscription line. Null when the key belongs to an order line.
     * previous_attributes.subscription_line_item_id.anyOf[1] (Value): string. The owning
     * subscription line. Null when the key belongs to an order line. Example:
     * "sli_01KEZF7C00PPWVJ2N321V84ASA". previous_attributes.subscription_line_item_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * currently available for this key. [] enum: "disable", "reinstate".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "disable",
     * "reinstate". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unit_ordinal (Optional): integer or null. The unit of the owning line,
     * starting at 1. previous_attributes.unit_ordinal.anyOf[1] (Value): integer. The unit of the
     * owning line, starting at 1. Format: int32. previous_attributes.unit_ordinal.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the license
     * key version last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * license key version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.variant_id
     * (Optional): string or null. The product variant ID. previous_attributes.variant_id.anyOf[1]
     * (Value): string. The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * previous_attributes.variant_id.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * activation_limit (Required): integer or null. Maximum active installations. Null when
         * activations are unlimited. Format: int32. active_activation_count (Required): integer.
         * Number of currently active installations. Format: int32. created_at (Required): string.
         * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Required): string or null. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". expires_at (Required): string or
         * null. When the key expires. Null when no expiry is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". key_last4 (Required): string or null. Last four characters of
         * the assigned key. Null when the key is awaiting assignment. license_key_id (Required):
         * string. Unique license key ID with the lk_ prefix. Example:
         * "lk_01KEZF7C000QD7VJ83G43V0NSN". license_key_pool_id (Required): string or null. The
         * source pool ID. Null when the key is generated. Example:
         * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". metadata (Required): {@link MetadataMap}.
         * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. The linked order.
         * Present only when `expand` includes `order`; `null` when expanded and there is no
         * related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. The owning order or the order that started the subscription. Null when a
         * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_line_item_id (Required): string or null. The owning order line. Null when the key
         * belongs to a subscription line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". product_id
         * (Required): string. The product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * restrictions (Required): Array of {@link LicenseKeyRestriction}. Restrictions currently
         * in force. restrictions[] (Value): {@link LicenseKeyRestriction}. One occurrence of a
         * cause keeping the key disabled. source (Required): string. How the key was supplied.
         * Value enum: "generated", "pool". status (Required): string. Whether the key is usable.
         * Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled",
         * "expired". subscription_id (Required): string or null. The owning subscription. Null
         * when the key belongs to an order line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_line_item_id (Required): string or null. The owning subscription line. Null
         * when the key belongs to an order line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
         * supported_actions (Required): Array of string. Lifecycle actions currently available for
         * this key. [] enum: "disable", "reinstate". supported_actions[] (Value): string. Value
         * enum: "disable", "reinstate". unit_ordinal (Required): integer. The unit of the owning
         * line, starting at 1. Format: int32. updated_at (Required): string. When the license key
         * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". variant_id
         * (Required): string. The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /** Maximum active installations. Null when activations are unlimited. Format: int32. */
            "activation_limit": number | null;
            /** Number of currently active installations. Format: int32. */
            "active_activation_count": number;
            /**
             * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * The linked customer. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The current customer of the owning order or subscription. Null when the order has no
             * linked customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * When the key expires. Null when no expiry is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Last four characters of the assigned key. Null when the key is awaiting assignment.
             */
            "key_last4": string | null;
            /**
             * Unique license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
             */
            "license_key_id": string;
            /**
             * The source pool ID. Null when the key is generated. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Present only when `expand` includes `order`; `null` when expanded
             * and there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The owning order or the order that started the subscription. Null when a
             * subscription has no starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The owning order line. Null when the key belongs to a subscription line. Example:
             * "li_01KEZF7C008YPRCK7VDKTGWR31".
             */
            "order_line_item_id": string | null;
            /** The product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Restrictions currently in force. [] (Value): {@link LicenseKeyRestriction}. One
             * occurrence of a cause keeping the key disabled.
             */
            "restrictions": Array<LicenseKeyRestriction>;
            /** How the key was supplied. Value enum: "generated", "pool". */
            "source": "generated" | "pool" | (string & {});
            /**
             * Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending",
             * "active", "disabled", "expired".
             */
            "status": "pending" | "active" | "disabled" | "expired" | (string & {});
            /**
             * The owning subscription. Null when the key belongs to an order line. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * The owning subscription line. Null when the key belongs to an order line. Example:
             * "sli_01KEZF7C00PPWVJ2N321V84ASA".
             */
            "subscription_line_item_id": string | null;
            /**
             * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
             * [] (Value): string. Value enum: "disable", "reinstate".
             */
            "supported_actions": Array<"disable" | "reinstate" | (string & {})>;
            /** The unit of the owning line, starting at 1. Format: int32. */
            "unit_ordinal": number;
            /**
             * When the license key version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /** The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. activation_limit (Optional): integer or null.
         * Maximum active installations. Null when activations are unlimited.
         * activation_limit.anyOf[1] (Value): integer. Maximum active installations. Null when
         * activations are unlimited. Format: int32. activation_limit.anyOf[2] (Value): null.
         * active_activation_count (Optional): integer or null. Number of currently active
         * installations. active_activation_count.anyOf[1] (Value): integer. Number of currently
         * active installations. Format: int32. active_activation_count.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the license key was issued.
         * created_at.anyOf[1] (Value): string. When the license key was issued. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional):
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. The linked customer. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
         * customer. customer_id.anyOf[1] (Value): string. The current customer of the owning order
         * or subscription. Null when the order has no linked customer. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When the key expires. Null when no expiry is set.
         * expires_at.anyOf[1] (Value): string. When the key expires. Null when no expiry is set.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * key_last4 (Optional): string or null. Last four characters of the assigned key. Null
         * when the key is awaiting assignment. key_last4.anyOf[1] (Value): string. Last four
         * characters of the assigned key. Null when the key is awaiting assignment.
         * key_last4.anyOf[2] (Value): null. license_key_id (Optional): string or null. Unique
         * license key ID with the lk_ prefix. license_key_id.anyOf[1] (Value): string. Unique
         * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
         * license_key_id.anyOf[2] (Value): null. license_key_pool_id (Optional): string or null.
         * The source pool ID. Null when the key is generated. license_key_pool_id.anyOf[1]
         * (Value): string. The source pool ID. Null when the key is generated. Example:
         * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". license_key_pool_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. The linked order.
         * Present only when `expand` includes `order`; `null` when expanded and there is no
         * related order. order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
         * order.anyOf[2] (Value): null. order_id (Optional): string or null. The owning order or
         * the order that started the subscription. Null when a subscription has no starting order.
         * order_id.anyOf[1] (Value): string. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_line_item_id
         * (Optional): string or null. The owning order line. Null when the key belongs to a
         * subscription line. order_line_item_id.anyOf[1] (Value): string. The owning order line.
         * Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". order_line_item_id.anyOf[2] (Value): null. product_id
         * (Optional): string or null. The product ID. product_id.anyOf[1] (Value): string. The
         * product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value):
         * null. restrictions (Optional): Array of {@link LicenseKeyRestrictionPreviousAttributes}
         * or null. Restrictions currently in force. restrictions.anyOf[1] (Value): Array of {@link
         * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
         * restrictions.anyOf[1][] (Value): {@link LicenseKeyRestrictionPreviousAttributes}.
         * restrictions.anyOf[2] (Value): null. source (Optional): string or null. How the key was
         * supplied. Value enum: "generated", "pool". source.anyOf[1] (Value): string. How the key
         * was supplied. Value enum: "generated", "pool". source.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether the key is usable. Expiry takes effect at
         * expires_at. Value enum: "pending", "active", "disabled", "expired". status.anyOf[1]
         * (Value): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". status.anyOf[2] (Value): null.
         * subscription_id (Optional): string or null. The owning subscription. Null when the key
         * belongs to an order line. subscription_id.anyOf[1] (Value): string. The owning
         * subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_line_item_id (Optional): string or null. The owning subscription line. Null
         * when the key belongs to an order line. subscription_line_item_id.anyOf[1] (Value):
         * string. The owning subscription line. Null when the key belongs to an order line.
         * Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". subscription_line_item_id.anyOf[2] (Value):
         * null. supported_actions (Optional): Array of string or null. Lifecycle actions currently
         * available for this key. [] enum: "disable", "reinstate". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions currently available for this key. [] enum:
         * "disable", "reinstate". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "disable", "reinstate". supported_actions.anyOf[2] (Value): null. unit_ordinal
         * (Optional): integer or null. The unit of the owning line, starting at 1.
         * unit_ordinal.anyOf[1] (Value): integer. The unit of the owning line, starting at 1.
         * Format: int32. unit_ordinal.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. When the license key version last changed. updated_at.anyOf[1] (Value): string.
         * When the license key version last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. variant_id (Optional): string
         * or null. The product variant ID. variant_id.anyOf[1] (Value): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". variant_id.anyOf[2] (Value):
         * null. version (Optional): integer or null. Persisted version of this resource's owned
         * state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Maximum active installations. Null when activations are unlimited. anyOf[1] (Value):
             * integer. Maximum active installations. Null when activations are unlimited. Format:
             * int32. anyOf[2] (Value): null.
             */
            "activation_limit"?: ((number) | (null));
            /**
             * Number of currently active installations. anyOf[1] (Value): integer. Number of
             * currently active installations. Format: int32. anyOf[2] (Value): null.
             */
            "active_activation_count"?: ((number) | (null));
            /**
             * When the license key was issued. anyOf[1] (Value): string. When the license key was
             * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The linked customer. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The current customer of the owning order or subscription. Null when the order has no
             * linked customer. anyOf[1] (Value): string. The current customer of the owning order
             * or subscription. Null when the order has no linked customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the key expires. Null when no expiry is set. anyOf[1] (Value): string. When the
             * key expires. Null when no expiry is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Last four characters of the assigned key. Null when the key is awaiting assignment.
             * anyOf[1] (Value): string. Last four characters of the assigned key. Null when the
             * key is awaiting assignment. anyOf[2] (Value): null.
             */
            "key_last4"?: ((string) | (null));
            /**
             * Unique license key ID with the lk_ prefix. anyOf[1] (Value): string. Unique license
             * key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". anyOf[2]
             * (Value): null.
             */
            "license_key_id"?: ((string) | (null));
            /**
             * The source pool ID. Null when the key is generated. anyOf[1] (Value): string. The
             * source pool ID. Null when the key is generated. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The linked order. Present only when `expand` includes `order`; `null` when expanded
             * and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The owning order or the order that started the subscription. Null when a
             * subscription has no starting order. anyOf[1] (Value): string. The owning order or
             * the order that started the subscription. Null when a subscription has no starting
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The owning order line. Null when the key belongs to a subscription line. anyOf[1]
             * (Value): string. The owning order line. Null when the key belongs to a subscription
             * line. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
             */
            "order_line_item_id"?: ((string) | (null));
            /**
             * The product ID. anyOf[1] (Value): string. The product ID. Example:
             * "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
             */
            "product_id"?: ((string) | (null));
            /**
             * Restrictions currently in force. anyOf[1] (Value): Array of {@link
             * LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force.
             * anyOf[1][] (Value): {@link LicenseKeyRestrictionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "restrictions"?: ((Array<LicenseKeyRestrictionPreviousAttributes>) | (null));
            /**
             * How the key was supplied. Value enum: "generated", "pool". anyOf[1] (Value): string.
             * How the key was supplied. Value enum: "generated", "pool". anyOf[2] (Value): null.
             */
            "source"?: (("generated" | "pool" | (string & {})) | (null));
            /**
             * Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending",
             * "active", "disabled", "expired". anyOf[1] (Value): string. Whether the key is
             * usable. Expiry takes effect at expires_at. Value enum: "pending", "active",
             * "disabled", "expired". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "active" | "disabled" | "expired" | (string & {})) | (null));
            /**
             * The owning subscription. Null when the key belongs to an order line. anyOf[1]
             * (Value): string. The owning subscription. Null when the key belongs to an order
             * line. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * The owning subscription line. Null when the key belongs to an order line. anyOf[1]
             * (Value): string. The owning subscription line. Null when the key belongs to an order
             * line. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". anyOf[2] (Value): null.
             */
            "subscription_line_item_id"?: ((string) | (null));
            /**
             * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
             * anyOf[1] (Value): Array of string. Lifecycle actions currently available for this
             * key. [] enum: "disable", "reinstate". anyOf[1][] (Value): string. Value enum:
             * "disable", "reinstate". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"disable" | "reinstate" | (string & {})>) | (null));
            /**
             * The unit of the owning line, starting at 1. anyOf[1] (Value): integer. The unit of
             * the owning line, starting at 1. Format: int32. anyOf[2] (Value): null.
             */
            "unit_ordinal"?: ((number) | (null));
            /**
             * When the license key version last changed. anyOf[1] (Value): string. When the
             * license key version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The product variant ID. anyOf[1] (Value): string. The product variant ID. Example:
             * "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
             */
            "variant_id"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key.updated". */
    "event_type"?: "license_key.updated";
});
/** The result of checking a license key. */
export type LicenseKeyValidation = {
    /**
     * Maximum active installations for the matched key. Null when unlimited. Omitted when no key
     * matches. Format: int32.
     */
    "activation_limit"?: number | null;
    /** The number of active installations for the matched key, when found. Format: int32. */
    "active_activation_count"?: number;
    /**
     * The expiry of the matched key. Null when the key has no expiry. Omitted when no key matches.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /**
     * Why the key or activation could not be used. Value enum: "not_found", "disabled", "expired",
     * "activation_not_found".
     */
    "invalid_reason"?: "not_found" | "disabled" | "expired" | "activation_not_found" | (string & {});
    /** Whether the key and any supplied activation are active. */
    "is_valid": boolean;
    /**
     * The active installation when the request supplied its ID and it belongs to this key. A
     * top-level child of a license key representing an installation.
     */
    "license_key_activation"?: LicenseKeyActivation;
    /** The matched license key ID, when found. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
    "license_key_id"?: string;
    /**
     * The listed product that the key belongs to, when found. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * The effective status of the matched key, when found. Value enum: "pending", "active",
     * "disabled", "expired".
     */
    "status"?: "pending" | "active" | "disabled" | "expired" | (string & {});
    /**
     * The variant that the key belongs to, when found. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** A response containing `LicenseKeyValidation` data. */
export type LicenseKeyValidationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of checking a
     * license key.
     */
    "data": LicenseKeyValidation;
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
/** The request body for: Reinstate a license key; Rotate a license key. */
export type LicenseKeyVersionRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** A merchant license key with its full credential when available to the caller. */
export type LicenseKeyWithKey = {
    /** Maximum active installations. Null when activations are unlimited. Format: int32. */
    "activation_limit": number | null;
    /** Number of currently active installations. Format: int32. */
    "active_activation_count": number;
    /** When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Customer summary when requested with expand=customer. Null when the key has no customer.
     * Omitted when no customer expansion is requested. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded.
     */
    "customer"?: ExpandedCustomerSummary;
    /**
     * The current customer of the owning order or subscription. Null when the order has no linked
     * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * When the key expires. Null when no expiry is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * The full key. Omitted when another credential replays the request, the recovery window has
     * ended, or a rotation is replayed after the resource version changed.
     */
    "key"?: string;
    /** Last four characters of the assigned key. Null when the key is awaiting assignment. */
    "key_last4": string | null;
    /** Unique license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
    "license_key_id": string;
    /**
     * The source pool ID. Null when the key is generated. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string | null;
    /**
     * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /**
     * Order summary when requested with expand=order. Null when the key has no order. Omitted when
     * no order expansion is requested. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     */
    "order"?: ExpandedOrderSummary;
    /**
     * The owning order or the order that started the subscription. Null when a subscription has no
     * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string | null;
    /**
     * The owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string | null;
    /** The product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id": string;
    /**
     * Restrictions currently in force. [] (Value): {@link LicenseKeyRestriction}. One occurrence
     * of a cause keeping the key disabled.
     */
    "restrictions": Array<LicenseKeyRestriction>;
    /** How the key was supplied. Value enum: "generated", "pool". */
    "source": "generated" | "pool" | (string & {});
    /**
     * Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending",
     * "active", "disabled", "expired".
     */
    "status": "pending" | "active" | "disabled" | "expired" | (string & {});
    /**
     * The owning subscription. Null when the key belongs to an order line. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * The owning subscription line. Null when the key belongs to an order line. Example:
     * "sli_01KEZF7C00PPWVJ2N321V84ASA".
     */
    "subscription_line_item_id": string | null;
    /**
     * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate". []
     * (Value): string. Value enum: "disable", "reinstate".
     */
    "supported_actions": Array<"disable" | "reinstate" | (string & {})>;
    /** The unit of the owning line, starting at 1. Format: int32. */
    "unit_ordinal": number;
    /**
     * When the license key version last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** The product variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A response containing `LicenseKeyWithKey` data. */
export type LicenseKeyWithKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant license key
     * with its full credential when available to the caller.
     */
    "data": LicenseKeyWithKey;
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
export type LicenseKeysDisableParams = (InputValue<DisableLicenseKeyRequestInput>);
export type LicenseKeysGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order. Include the
     * order or customer summary. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string. []
     * enum: "customer", "order". anyOf[1][] (Value): string. Value enum: "customer", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type LicenseKeysListParams = {
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
     * Exact order ID, including the starting order of a subscription key. pattern:
     * ^ord_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Exact customer ID of the owning order or subscription. pattern:
     * ^cus_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Exact subscription ID. pattern: ^sub_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: InputValue<string>;
    /**
     * Exact product ID. pattern: ^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Exact variant ID. pattern: ^var_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Exact license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id"?: InputValue<string>;
    /**
     * Exact buyer or customer email. Ignores case and surrounding whitespace in stored addresses,
     * with accents preserved. Send one bare email address. Format: email. Example:
     * "buyer@example.com".
     */
    "email"?: InputValue<string>;
    /**
     * Filter by effective license key status. An active key past its expiry matches expired.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "active", "disabled", "expired". Value enum: "pending", "active", "disabled",
     * "expired". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "disabled", "expired". anyOf[1][] (Value): string. Value enum: "pending", "active",
     * "disabled", "expired". anyOf[2] (Value): string. Value enum: "pending", "active",
     * "disabled", "expired".
     */
    "status"?: InputValue<("pending" | "active" | "disabled" | "expired")
        | readonly ("pending" | "active" | "disabled" | "expired")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer, order. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. Checkout
     * session credentials cannot use expand on this route. [] enum: "customer", "order". Value
     * enum: "customer", "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order".
     * anyOf[1][] (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value
     * enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type LicenseKeysLookupParams = (InputValue<LookupLicenseKeyRequestInput>)
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
export type LicenseKeysReinstateParams = (InputValue<LicenseKeyVersionRequestInput>);
export type LicenseKeysResendParams = (InputValue<ResendLicenseKeyRequestInput>);
export type LicenseKeysRevealParams = (InputValue<RevealLicenseKeyRequestInput>);
export type LicenseKeysRotateKeyParams = LicenseKeysReinstateParams;
export type LicenseKeysUpdateParams = (UpdateLicenseKeyRequestInput);
export type LicenseKeysValidateParams = (InputValue<ValidateLicenseKeyRequestInput>);
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequest = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequestModelInput = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin";
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequest = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequest;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required" | (string & {});
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequestModelInput = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequestModelInput;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required";
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
};
/** The quantity of one inventory item that each unit of an order line item uses. */
export type LineItemInventoryDemand = {
    /**
     * ID of the bundle component this demand comes from. Present only on a line item that sells a
     * bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * Identifier of the bundle component as it was frozen on the line item. Present only when the
     * bundle component has one. Inventory reservations for the demand use it in place of
     * `bundle_component_id`. Example: "component-1842".
     */
    "component_snapshot_id"?: string;
    /**
     * ID of the inventory item each unit of the line item uses. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity_per_line_item_unit": number;
};
export type LineItemInventoryDemandPreviousAttributes = {
    /**
     * ID of the bundle component this demand comes from. Present only on a line item that sells a
     * bundle. anyOf[1] (Value): string. ID of the bundle component this demand comes from. Present
     * only on a line item that sells a bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * Identifier of the bundle component as it was frozen on the line item. Present only when the
     * bundle component has one. Inventory reservations for the demand use it in place of
     * `bundle_component_id`. anyOf[1] (Value): string. Identifier of the bundle component as it
     * was frozen on the line item. Present only when the bundle component has one. Inventory
     * reservations for the demand use it in place of `bundle_component_id`. Example:
     * "component-1842". anyOf[2] (Value): null.
     */
    "component_snapshot_id"?: ((string) | (null));
    /**
     * ID of the inventory item each unit of the line item uses. anyOf[1] (Value): string. ID of
     * the inventory item each unit of the line item uses. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     */
    "inventory_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity_per_line_item_unit"?: ((number) | (null));
};
/**
 * Whether an order line item tracks inventory, and the inventory item quantities each unit
 * demands.
 */
export type LineItemInventorySnapshot = {
    /**
     * The inventory items and quantities each unit of the line item uses. [] (Value): {@link
     * LineItemInventoryDemand}. The quantity of one inventory item that each unit of an order line
     * item uses.
     */
    "demands": Array<LineItemInventoryDemand>;
    /** Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
};
export type LineItemInventorySnapshotPreviousAttributes = {
    /**
     * The inventory items and quantities each unit of the line item uses. anyOf[1] (Value): Array
     * of {@link LineItemInventoryDemandPreviousAttributes}. The inventory items and quantities
     * each unit of the line item uses. anyOf[1][] (Value): {@link
     * LineItemInventoryDemandPreviousAttributes}. anyOf[2] (Value): null.
     */
    "demands"?: ((Array<LineItemInventoryDemandPreviousAttributes>) | (null));
    /**
     * Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". anyOf[1]
     * (Value): string. Whether the line item draws on tracked stock. Value enum: "not_tracked",
     * "tracked". anyOf[2] (Value): null.
     */
    "inventory_tracking"?: (("not_tracked" | "tracked" | (string & {})) | (null));
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequest = {
    /**
     * ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it
     * up. minLength: 1. Example: "cver_01KEZF7C00E7S01991S7457CVK".
     */
    "customer_verification_id": string;
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequestInput = LinkCustomerGuestPurchasesRequest;
/** A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnActivity}. One entry in a return's activity history.
     */
    "data": Array<ReturnActivity>;
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
/** A page of `ReturnDisposition` objects. */
export type ListReturnDispositionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "data": Array<ReturnDisposition>;
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
/** A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": Array<ReturnInspection>;
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
/** A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnLineItem}. An item included in a return request.
     */
    "data": Array<ReturnLineItem>;
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
/** A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicy}. Rules governing whether and how purchased items can be returned.
     */
    "data": Array<ReturnPolicy>;
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
/** A page of `ReturnPolicyRevision` objects. */
export type ListReturnPolicyRevisionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy.
     */
    "data": Array<ReturnPolicyRevision>;
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
/** A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReason}. A reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     */
    "data": Array<ReturnReceipt>;
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
/** A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** A page of `Return` objects. */
export type ListReturnsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResource}. A request to send purchased items back.
     */
    "data": Array<ReturnResource>;
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
/**
 * A physical or logical place a merchant operates from. Every Location can hold stock.
 * inventory_allocation_enabled controls whether it accepts inventory allocation.
 */
export type Location = {
    /**
     * Published postal address. `null` when the Location has no address on record. anyOf[1]
     * (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country. anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /**
     * Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude
     * for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Where `coordinate` came from. Omitted when the Location has no coordinate. Value enum:
     * "merchant_supplied", "geocoded".
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | (string & {});
    /** Time the Location was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Read-only version that advances only on geography changes and is pinned by tax and delivery
     * dependencies. It is not a request fence. Format: uint64. minimum: 0.
     */
    "geography_version": number;
    /**
     * Whether this Location accepts inventory allocation. Always present, including false when
     * allocation is not configured.
     */
    "inventory_allocation_enabled": boolean;
    /** Stable Location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** IANA timezone for local schedules. */
    "timezone": string;
    /** Time the Location last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Optimistic-concurrency version that advances on every Location change. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A latitude and longitude for a merchant location. */
export type LocationCoordinate = {
    /** Latitude between -90 and 90. Responses always include this field, including 0. */
    "latitude": number;
    /** Longitude between -180 and 180. Responses always include this field, including 0. */
    "longitude": number;
};
/** A latitude and longitude for a merchant location. */
export type LocationCoordinateRequestInput = LocationCoordinate;
/** A page of `Location` objects. */
export type LocationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Location}. A physical or logical place a merchant operates from. Every Location can hold
     * stock. inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Array<Location>;
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
/** A response containing `Location` data. */
export type LocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A physical or logical
     * place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled
     * controls whether it accepts inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateParams = (InputValue<CreateLocationRequestInput>)
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
export type LocationsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type LocationsGetParams = DisputesAcceptParams;
export type LocationsListParams = {
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
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by whether the Location accepts inventory allocation. false includes Locations
     * without an inventory allocation configuration.
     */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search Location ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
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
export type LocationsUpdateParams = (InputValue<UpdateLocationRequestInput>)
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
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequest = {
    /**
     * Email address to look up. Matched after trimming surrounding whitespace and ignoring case,
     * the way Flint matches unsubscribes. minLength: 1. maxLength: 320.
     */
    "email": string;
};
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequestInput = LookupEmailPreferencesRequest;
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequest = {
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
};
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/** The full key to look up. */
export type LookupLicenseKeyRequest = {
    /**
     * The full bearer key. Generated keys ignore case, spaces and hyphens and use the last 25
     * characters after normalization. Pool keys match exactly after surrounding whitespace is
     * trimmed. minLength: 1.
     */
    "key": string;
};
/** The full key to look up. */
export type LookupLicenseKeyRequestInput = LookupLicenseKeyRequest;
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequest = {
    /**
     * The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are
     * normalized. minLength: 16.
     */
    "admission_code": string;
};
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequestInput = LookupTicketRequest;
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Name of the discount. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Name of the discount. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item";
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
};
