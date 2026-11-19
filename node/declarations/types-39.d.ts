import type { PartnerWebhookEnvelope } from './types-50.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { LicenseKeyActivation, LicenseKey } from './types-38.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateLicenseKeyActivationRequestInput,
    CreateLicenseKeyPoolKeysRequestInput,
    CreateLicenseKeyPoolRequestInput
} from './types-11.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummaryPreviousAttributes
} from './types-26.js';
import type { ReleaseLicenseKeyActivationRequestInput, RemoveLicenseKeyPoolKeysRequestInput } from './types-61.js';
import type {
    GeneratedLicenseKeyConfiguration,
    GeneratedLicenseKeyConfigurationPreviousAttributes,
    GeneratedLicenseKeyConfigurationRequest,
    GeneratedLicenseKeyConfigurationRequestInput
} from './types-28.js';
import type {
    PoolLicenseKeyConfiguration,
    PoolLicenseKeyConfigurationPreviousAttributes,
    PoolLicenseKeyConfigurationRequest,
    PoolLicenseKeyConfigurationRequestInput
} from './types-56.js';
import type { LicenseKeyWithKey } from './types-40.js';
import type { UpdateLicenseKeyPoolRequestInput } from './types-76.js';
/**
 * The `license_key_activation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyActivationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When the activation was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.fingerprint (Required): string or
     * null. The identifier supplied by the app. Null when absent or erased.
     * object.last_validated_at (Required): string or null. When the activation was last checked,
     * updated at most once an hour. Null when the activation has never been checked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.license_key_activation_id (Required):
     * string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". object.license_key_id
     * (Required): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.name (Required): string or null. The name supplied by the app. Null when erased.
     * object.product_id (Required): string. The product this installation can use. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.released_at (Required): string or null. When the
     * activation was released. Null when it is active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The activation state. Value enum:
     * "active", "released". object.supported_actions (Required): Array of string. Actions
     * available for this activation. [] enum: "release". object.supported_actions[] (Value):
     * string. Value enum: "release". object.variant_id (Required): string. The variant this
     * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When the activation was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". fingerprint (Required): string or null. The identifier
         * supplied by the app. Null when absent or erased. last_validated_at (Required): string or
         * null. When the activation was last checked, updated at most once an hour. Null when the
         * activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * license_key_activation_id (Required): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_id (Required): string. The activated
         * license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". name (Required): string or
         * null. The name supplied by the app. Null when erased. product_id (Required): string. The
         * product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * released_at (Required): string or null. When the activation was released. Null when it
         * is active. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. The activation state. Value enum: "active", "released". supported_actions
         * (Required): Array of string. Actions available for this activation. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release". variant_id (Required):
         * string. The variant this installation can use. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX".
         */
        "object": {
            /**
             * When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** The identifier supplied by the app. Null when absent or erased. */
            "fingerprint": string | null;
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "last_validated_at": string | null;
            /** The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". */
            "license_key_activation_id": string;
            /** The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
            "license_key_id": string;
            /** The name supplied by the app. Null when erased. */
            "name": string | null;
            /**
             * The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "released_at": string | null;
            /** The activation state. Value enum: "active", "released". */
            "status": "active" | "released" | (string & {});
            /**
             * Actions available for this activation. [] enum: "release". [] (Value): string. Value
             * enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
            /** The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key_activation.created". */
    "event_type"?: "license_key_activation.created";
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
 * The `license_key_activation.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type LicenseKeyActivationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When the activation was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.fingerprint (Required): string or
     * null. The identifier supplied by the app. Null when absent or erased.
     * object.last_validated_at (Required): string or null. When the activation was last checked,
     * updated at most once an hour. Null when the activation has never been checked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.license_key_activation_id (Required):
     * string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". object.license_key_id
     * (Required): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.name (Required): string or null. The name supplied by the app. Null when erased.
     * object.product_id (Required): string. The product this installation can use. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.released_at (Required): string or null. When the
     * activation was released. Null when it is active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The activation state. Value enum:
     * "active", "released". object.supported_actions (Required): Array of string. Actions
     * available for this activation. [] enum: "release". object.supported_actions[] (Value):
     * string. Value enum: "release". object.variant_id (Required): string. The variant this
     * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When the activation was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". fingerprint (Required): string or null. The identifier
         * supplied by the app. Null when absent or erased. last_validated_at (Required): string or
         * null. When the activation was last checked, updated at most once an hour. Null when the
         * activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * license_key_activation_id (Required): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_id (Required): string. The activated
         * license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". name (Required): string or
         * null. The name supplied by the app. Null when erased. product_id (Required): string. The
         * product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * released_at (Required): string or null. When the activation was released. Null when it
         * is active. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. The activation state. Value enum: "active", "released". supported_actions
         * (Required): Array of string. Actions available for this activation. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release". variant_id (Required):
         * string. The variant this installation can use. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX".
         */
        "object": {
            /**
             * When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** The identifier supplied by the app. Null when absent or erased. */
            "fingerprint": string | null;
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "last_validated_at": string | null;
            /** The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". */
            "license_key_activation_id": string;
            /** The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
            "license_key_id": string;
            /** The name supplied by the app. Null when erased. */
            "name": string | null;
            /**
             * The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "released_at": string | null;
            /** The activation state. Value enum: "active", "released". */
            "status": "active" | "released" | (string & {});
            /**
             * Actions available for this activation. [] enum: "release". [] (Value): string. Value
             * enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
            /** The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key_activation.created". */
    "event_type"?: "license_key_activation.created";
});
/** A page of `LicenseKeyActivation` objects. */
export type LicenseKeyActivationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * LicenseKeyActivation}. A top-level child of a license key representing an installation.
     */
    "data": Array<LicenseKeyActivation>;
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
export type LicenseKeyActivationReleasedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "fingerprint": string | null;
            "last_validated_at": string | null;
            "license_key_activation_id": string;
            "license_key_id": string;
            "name": string | null;
            "product_id": string;
            "released_at": string | null;
            "status": "active" | "released" | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
            "variant_id": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "last_validated_at"?: ((string) | (null));
            "license_key_activation_id"?: ((string) | (null));
            "license_key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "product_id"?: ((string) | (null));
            "released_at"?: ((string) | (null));
            "status"?: (("active" | "released" | (string & {})) | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
            "variant_id"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_activation.released";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "fingerprint": string | null;
            "last_validated_at": string | null;
            "license_key_activation_id": string;
            "license_key_id": string;
            "name": string | null;
            "product_id": string;
            "released_at": string | null;
            "status": "active" | "released" | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
            "variant_id": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "fingerprint"?: ((string) | (null));
            "last_validated_at"?: ((string) | (null));
            "license_key_activation_id"?: ((string) | (null));
            "license_key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "product_id"?: ((string) | (null));
            "released_at"?: ((string) | (null));
            "status"?: (("active" | "released" | (string & {})) | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
            "variant_id"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_activation.released";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_activation.released";
});
/**
 * The `license_key_activation.released` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type LicenseKeyActivationReleasedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When the activation was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.fingerprint (Required): string or
     * null. The identifier supplied by the app. Null when absent or erased.
     * object.last_validated_at (Required): string or null. When the activation was last checked,
     * updated at most once an hour. Null when the activation has never been checked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.license_key_activation_id (Required):
     * string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". object.license_key_id
     * (Required): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.name (Required): string or null. The name supplied by the app. Null when erased.
     * object.product_id (Required): string. The product this installation can use. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.released_at (Required): string or null. When the
     * activation was released. Null when it is active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The activation state. Value enum:
     * "active", "released". object.supported_actions (Required): Array of string. Actions
     * available for this activation. [] enum: "release". object.supported_actions[] (Value):
     * string. Value enum: "release". object.variant_id (Required): string. The variant this
     * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.created_at (Optional):
     * string or null. When the activation was created. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the activation was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.fingerprint (Optional): string or null. The identifier supplied by the
     * app. Null when absent or erased. previous_attributes.fingerprint.anyOf[1] (Value): string.
     * The identifier supplied by the app. Null when absent or erased.
     * previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.last_validated_at (Optional): string or null. When the activation was
     * last checked, updated at most once an hour. Null when the activation has never been checked.
     * previous_attributes.last_validated_at.anyOf[1] (Value): string. When the activation was last
     * checked, updated at most once an hour. Null when the activation has never been checked.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.last_validated_at.anyOf[2] (Value): null.
     * previous_attributes.license_key_activation_id (Optional): string or null. The activation ID.
     * previous_attributes.license_key_activation_id.anyOf[1] (Value): string. The activation ID.
     * Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * previous_attributes.license_key_activation_id.anyOf[2] (Value): null.
     * previous_attributes.license_key_id (Optional): string or null. The activated license key ID.
     * previous_attributes.license_key_id.anyOf[1] (Value): string. The activated license key ID.
     * Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". previous_attributes.license_key_id.anyOf[2]
     * (Value): null. previous_attributes.name (Optional): string or null. The name supplied by the
     * app. Null when erased. previous_attributes.name.anyOf[1] (Value): string. The name supplied
     * by the app. Null when erased. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.product_id (Optional): string or null. The product this installation can
     * use. previous_attributes.product_id.anyOf[1] (Value): string. The product this installation
     * can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2]
     * (Value): null. previous_attributes.released_at (Optional): string or null. When the
     * activation was released. Null when it is active. previous_attributes.released_at.anyOf[1]
     * (Value): string. When the activation was released. Null when it is active. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.released_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The activation state.
     * Value enum: "active", "released". previous_attributes.status.anyOf[1] (Value): string. The
     * activation state. Value enum: "active", "released". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions available for this activation. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions available
     * for this activation. [] enum: "release". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "release". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.variant_id (Optional): string or null. The variant this
     * installation can use. previous_attributes.variant_id.anyOf[1] (Value): string. The variant
     * this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * previous_attributes.variant_id.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When the activation was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". fingerprint (Required): string or null. The identifier
         * supplied by the app. Null when absent or erased. last_validated_at (Required): string or
         * null. When the activation was last checked, updated at most once an hour. Null when the
         * activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * license_key_activation_id (Required): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_id (Required): string. The activated
         * license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". name (Required): string or
         * null. The name supplied by the app. Null when erased. product_id (Required): string. The
         * product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * released_at (Required): string or null. When the activation was released. Null when it
         * is active. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. The activation state. Value enum: "active", "released". supported_actions
         * (Required): Array of string. Actions available for this activation. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release". variant_id (Required):
         * string. The variant this installation can use. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX".
         */
        "object": {
            /**
             * When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** The identifier supplied by the app. Null when absent or erased. */
            "fingerprint": string | null;
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "last_validated_at": string | null;
            /** The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". */
            "license_key_activation_id": string;
            /** The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
            "license_key_id": string;
            /** The name supplied by the app. Null when erased. */
            "name": string | null;
            /**
             * The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "released_at": string | null;
            /** The activation state. Value enum: "active", "released". */
            "status": "active" | "released" | (string & {});
            /**
             * Actions available for this activation. [] enum: "release". [] (Value): string. Value
             * enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
            /** The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * activation was created. created_at.anyOf[1] (Value): string. When the activation was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. fingerprint (Optional): string or null. The identifier supplied by the
         * app. Null when absent or erased. fingerprint.anyOf[1] (Value): string. The identifier
         * supplied by the app. Null when absent or erased. fingerprint.anyOf[2] (Value): null.
         * last_validated_at (Optional): string or null. When the activation was last checked,
         * updated at most once an hour. Null when the activation has never been checked.
         * last_validated_at.anyOf[1] (Value): string. When the activation was last checked,
         * updated at most once an hour. Null when the activation has never been checked. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". last_validated_at.anyOf[2] (Value): null.
         * license_key_activation_id (Optional): string or null. The activation ID.
         * license_key_activation_id.anyOf[1] (Value): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_activation_id.anyOf[2] (Value): null.
         * license_key_id (Optional): string or null. The activated license key ID.
         * license_key_id.anyOf[1] (Value): string. The activated license key ID. Example:
         * "lk_01KEZF7C000QD7VJ83G43V0NSN". license_key_id.anyOf[2] (Value): null. name (Optional):
         * string or null. The name supplied by the app. Null when erased. name.anyOf[1] (Value):
         * string. The name supplied by the app. Null when erased. name.anyOf[2] (Value): null.
         * product_id (Optional): string or null. The product this installation can use.
         * product_id.anyOf[1] (Value): string. The product this installation can use. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value): null. released_at
         * (Optional): string or null. When the activation was released. Null when it is active.
         * released_at.anyOf[1] (Value): string. When the activation was released. Null when it is
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". released_at.anyOf[2]
         * (Value): null. status (Optional): string or null. The activation state. Value enum:
         * "active", "released". status.anyOf[1] (Value): string. The activation state. Value enum:
         * "active", "released". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Actions available for this activation. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Actions available for this
         * activation. [] enum: "release". supported_actions.anyOf[1][] (Value): string. Value
         * enum: "release". supported_actions.anyOf[2] (Value): null. variant_id (Optional): string
         * or null. The variant this installation can use. variant_id.anyOf[1] (Value): string. The
         * variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * variant_id.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the activation was created. anyOf[1] (Value): string. When the activation was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The identifier supplied by the app. Null when absent or erased. anyOf[1] (Value):
             * string. The identifier supplied by the app. Null when absent or erased. anyOf[2]
             * (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. anyOf[1] (Value): string. When the activation was
             * last checked, updated at most once an hour. Null when the activation has never been
             * checked. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "last_validated_at"?: ((string) | (null));
            /**
             * The activation ID. anyOf[1] (Value): string. The activation ID. Example:
             * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". anyOf[2] (Value): null.
             */
            "license_key_activation_id"?: ((string) | (null));
            /**
             * The activated license key ID. anyOf[1] (Value): string. The activated license key
             * ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". anyOf[2] (Value): null.
             */
            "license_key_id"?: ((string) | (null));
            /**
             * The name supplied by the app. Null when erased. anyOf[1] (Value): string. The name
             * supplied by the app. Null when erased. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * The product this installation can use. anyOf[1] (Value): string. The product this
             * installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value):
             * null.
             */
            "product_id"?: ((string) | (null));
            /**
             * When the activation was released. Null when it is active. anyOf[1] (Value): string.
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "released_at"?: ((string) | (null));
            /**
             * The activation state. Value enum: "active", "released". anyOf[1] (Value): string.
             * The activation state. Value enum: "active", "released". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "released" | (string & {})) | (null));
            /**
             * Actions available for this activation. [] enum: "release". anyOf[1] (Value): Array
             * of string. Actions available for this activation. [] enum: "release". anyOf[1][]
             * (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
            /**
             * The variant this installation can use. anyOf[1] (Value): string. The variant this
             * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
             * null.
             */
            "variant_id"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key_activation.released". */
    "event_type"?: "license_key_activation.released";
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
 * The `license_key_activation.released` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type LicenseKeyActivationReleasedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When the activation was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.fingerprint (Required): string or
     * null. The identifier supplied by the app. Null when absent or erased.
     * object.last_validated_at (Required): string or null. When the activation was last checked,
     * updated at most once an hour. Null when the activation has never been checked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.license_key_activation_id (Required):
     * string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". object.license_key_id
     * (Required): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.name (Required): string or null. The name supplied by the app. Null when erased.
     * object.product_id (Required): string. The product this installation can use. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66". object.released_at (Required): string or null. When the
     * activation was released. Null when it is active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The activation state. Value enum:
     * "active", "released". object.supported_actions (Required): Array of string. Actions
     * available for this activation. [] enum: "release". object.supported_actions[] (Value):
     * string. Value enum: "release". object.variant_id (Required): string. The variant this
     * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.created_at (Optional):
     * string or null. When the activation was created. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the activation was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.fingerprint (Optional): string or null. The identifier supplied by the
     * app. Null when absent or erased. previous_attributes.fingerprint.anyOf[1] (Value): string.
     * The identifier supplied by the app. Null when absent or erased.
     * previous_attributes.fingerprint.anyOf[2] (Value): null.
     * previous_attributes.last_validated_at (Optional): string or null. When the activation was
     * last checked, updated at most once an hour. Null when the activation has never been checked.
     * previous_attributes.last_validated_at.anyOf[1] (Value): string. When the activation was last
     * checked, updated at most once an hour. Null when the activation has never been checked.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.last_validated_at.anyOf[2] (Value): null.
     * previous_attributes.license_key_activation_id (Optional): string or null. The activation ID.
     * previous_attributes.license_key_activation_id.anyOf[1] (Value): string. The activation ID.
     * Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * previous_attributes.license_key_activation_id.anyOf[2] (Value): null.
     * previous_attributes.license_key_id (Optional): string or null. The activated license key ID.
     * previous_attributes.license_key_id.anyOf[1] (Value): string. The activated license key ID.
     * Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". previous_attributes.license_key_id.anyOf[2]
     * (Value): null. previous_attributes.name (Optional): string or null. The name supplied by the
     * app. Null when erased. previous_attributes.name.anyOf[1] (Value): string. The name supplied
     * by the app. Null when erased. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.product_id (Optional): string or null. The product this installation can
     * use. previous_attributes.product_id.anyOf[1] (Value): string. The product this installation
     * can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2]
     * (Value): null. previous_attributes.released_at (Optional): string or null. When the
     * activation was released. Null when it is active. previous_attributes.released_at.anyOf[1]
     * (Value): string. When the activation was released. Null when it is active. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.released_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. The activation state.
     * Value enum: "active", "released". previous_attributes.status.anyOf[1] (Value): string. The
     * activation state. Value enum: "active", "released". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions available for this activation. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions available
     * for this activation. [] enum: "release". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "release". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.variant_id (Optional): string or null. The variant this
     * installation can use. previous_attributes.variant_id.anyOf[1] (Value): string. The variant
     * this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * previous_attributes.variant_id.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When the activation was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". fingerprint (Required): string or null. The identifier
         * supplied by the app. Null when absent or erased. last_validated_at (Required): string or
         * null. When the activation was last checked, updated at most once an hour. Null when the
         * activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * license_key_activation_id (Required): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_id (Required): string. The activated
         * license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". name (Required): string or
         * null. The name supplied by the app. Null when erased. product_id (Required): string. The
         * product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
         * released_at (Required): string or null. When the activation was released. Null when it
         * is active. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. The activation state. Value enum: "active", "released". supported_actions
         * (Required): Array of string. Actions available for this activation. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release". variant_id (Required):
         * string. The variant this installation can use. Example:
         * "var_01KEZF7C004GSH2KT8CNYVMHGX".
         */
        "object": {
            /**
             * When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** The identifier supplied by the app. Null when absent or erased. */
            "fingerprint": string | null;
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "last_validated_at": string | null;
            /** The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". */
            "license_key_activation_id": string;
            /** The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". */
            "license_key_id": string;
            /** The name supplied by the app. Null when erased. */
            "name": string | null;
            /**
             * The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
             */
            "product_id": string;
            /**
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "released_at": string | null;
            /** The activation state. Value enum: "active", "released". */
            "status": "active" | "released" | (string & {});
            /**
             * Actions available for this activation. [] enum: "release". [] (Value): string. Value
             * enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
            /** The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
            "variant_id": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * activation was created. created_at.anyOf[1] (Value): string. When the activation was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. fingerprint (Optional): string or null. The identifier supplied by the
         * app. Null when absent or erased. fingerprint.anyOf[1] (Value): string. The identifier
         * supplied by the app. Null when absent or erased. fingerprint.anyOf[2] (Value): null.
         * last_validated_at (Optional): string or null. When the activation was last checked,
         * updated at most once an hour. Null when the activation has never been checked.
         * last_validated_at.anyOf[1] (Value): string. When the activation was last checked,
         * updated at most once an hour. Null when the activation has never been checked. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". last_validated_at.anyOf[2] (Value): null.
         * license_key_activation_id (Optional): string or null. The activation ID.
         * license_key_activation_id.anyOf[1] (Value): string. The activation ID. Example:
         * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". license_key_activation_id.anyOf[2] (Value): null.
         * license_key_id (Optional): string or null. The activated license key ID.
         * license_key_id.anyOf[1] (Value): string. The activated license key ID. Example:
         * "lk_01KEZF7C000QD7VJ83G43V0NSN". license_key_id.anyOf[2] (Value): null. name (Optional):
         * string or null. The name supplied by the app. Null when erased. name.anyOf[1] (Value):
         * string. The name supplied by the app. Null when erased. name.anyOf[2] (Value): null.
         * product_id (Optional): string or null. The product this installation can use.
         * product_id.anyOf[1] (Value): string. The product this installation can use. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value): null. released_at
         * (Optional): string or null. When the activation was released. Null when it is active.
         * released_at.anyOf[1] (Value): string. When the activation was released. Null when it is
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". released_at.anyOf[2]
         * (Value): null. status (Optional): string or null. The activation state. Value enum:
         * "active", "released". status.anyOf[1] (Value): string. The activation state. Value enum:
         * "active", "released". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Actions available for this activation. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Actions available for this
         * activation. [] enum: "release". supported_actions.anyOf[1][] (Value): string. Value
         * enum: "release". supported_actions.anyOf[2] (Value): null. variant_id (Optional): string
         * or null. The variant this installation can use. variant_id.anyOf[1] (Value): string. The
         * variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * variant_id.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the activation was created. anyOf[1] (Value): string. When the activation was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The identifier supplied by the app. Null when absent or erased. anyOf[1] (Value):
             * string. The identifier supplied by the app. Null when absent or erased. anyOf[2]
             * (Value): null.
             */
            "fingerprint"?: ((string) | (null));
            /**
             * When the activation was last checked, updated at most once an hour. Null when the
             * activation has never been checked. anyOf[1] (Value): string. When the activation was
             * last checked, updated at most once an hour. Null when the activation has never been
             * checked. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "last_validated_at"?: ((string) | (null));
            /**
             * The activation ID. anyOf[1] (Value): string. The activation ID. Example:
             * "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". anyOf[2] (Value): null.
             */
            "license_key_activation_id"?: ((string) | (null));
            /**
             * The activated license key ID. anyOf[1] (Value): string. The activated license key
             * ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". anyOf[2] (Value): null.
             */
            "license_key_id"?: ((string) | (null));
            /**
             * The name supplied by the app. Null when erased. anyOf[1] (Value): string. The name
             * supplied by the app. Null when erased. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * The product this installation can use. anyOf[1] (Value): string. The product this
             * installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value):
             * null.
             */
            "product_id"?: ((string) | (null));
            /**
             * When the activation was released. Null when it is active. anyOf[1] (Value): string.
             * When the activation was released. Null when it is active. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "released_at"?: ((string) | (null));
            /**
             * The activation state. Value enum: "active", "released". anyOf[1] (Value): string.
             * The activation state. Value enum: "active", "released". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "released" | (string & {})) | (null));
            /**
             * Actions available for this activation. [] enum: "release". anyOf[1] (Value): Array
             * of string. Actions available for this activation. [] enum: "release". anyOf[1][]
             * (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
            /**
             * The variant this installation can use. anyOf[1] (Value): string. The variant this
             * installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
             * null.
             */
            "variant_id"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key_activation.released". */
    "event_type"?: "license_key_activation.released";
});
/** A response containing `LicenseKeyActivation` data. */
export type LicenseKeyActivationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A top-level child of a
     * license key representing an installation.
     */
    "data": LicenseKeyActivation;
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
export type LicenseKeyActivationsCreateParams = (InputValue<CreateLicenseKeyActivationRequestInput>);
export type LicenseKeyActivationsGetParams = DisputesAcceptParams;
export type LicenseKeyActivationsListParams = {
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
     * The license key whose activations to list. pattern: ^lk_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     * Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     */
    "license_key_id": InputValue<string>;
    /**
     * Filter by one or more activation statuses. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "active", "released". Value enum: "active", "released". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "active", "released". anyOf[1][] (Value):
     * string. Value enum: "active", "released". anyOf[2] (Value): string. Value enum: "active",
     * "released".
     */
    "status"?: InputValue<("active" | "released") | readonly ("active" | "released")[]>;
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
export type LicenseKeyActivationsReleaseParams = (InputValue<ReleaseLicenseKeyActivationRequestInput>);
/**
 * License key terms. Null limits mean unlimited activations or no expiry. A null generated key
 * prefix means no prefix.
 */
export type LicenseKeyConfiguration = ({
    /**
     * Maximum active devices per key. Null when activations are unlimited. Format: int32. minimum:
     * 1. maximum: 10000.
     */
    "activation_limit": number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled": boolean;
    /**
     * Prefix shown before each generated key. Null when no prefix is configured. minLength: 2.
     * maxLength: 8. pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix"?: string | null;
    /**
     * Active pool in this merchant and environment. Required when source is pool. pattern:
     * ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id"?: string;
    /** Source of the license keys. Value enum: "generated", "pool". */
    "source": "generated" | "pool" | (string & {});
    /**
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days": number | null;
})
    & ((Exclude<GeneratedLicenseKeyConfiguration & object, readonly unknown[]>)
    | (Exclude<PoolLicenseKeyConfiguration & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type LicenseKeyConfigurationPreviousAttributes = ({
    /**
     * Maximum active devices per key. Null when activations are unlimited. anyOf[1] (Value):
     * integer. Maximum active devices per key. Null when activations are unlimited. Format: int32.
     * minimum: 1. maximum: 10000. anyOf[2] (Value): null.
     */
    "activation_limit"?: ((number) | (null));
    /**
     * Whether Flint emails keys to the buyer. Defaults to true. anyOf[1] (Value): boolean. Whether
     * Flint emails keys to the buyer. Defaults to true. Default: true. anyOf[2] (Value): null.
     */
    "email_delivery_enabled"?: ((boolean) | (null));
    /**
     * Prefix shown before each generated key. Null when no prefix is configured. anyOf[1] (Value):
     * string. Prefix shown before each generated key. Null when no prefix is configured.
     * minLength: 2. maxLength: 8. pattern: ^[A-Z0-9]{2,8}$. anyOf[2] (Value): null.
     */
    "key_prefix"?: ((string) | (null));
    /**
     * Active pool in this merchant and environment. Required when source is pool. anyOf[1]
     * (Value): string. Active pool in this merchant and environment. Required when source is pool.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". anyOf[2]
     * (Value): null.
     */
    "license_key_pool_id"?: ((string) | (null));
    /**
     * Source of the license keys. Value enum: "generated", "pool". anyOf[1] (Value): string.
     * Source of the license keys. Value enum: "generated", "pool". anyOf[2] (Value): null.
     */
    "source"?: (("generated" | "pool" | (string & {})) | (null));
    /**
     * Days from issuance until expiry. Null when keys do not expire. anyOf[1] (Value): integer.
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500. anyOf[2] (Value): null.
     */
    "validity_period_days"?: ((number) | (null));
})
    & (((Exclude<GeneratedLicenseKeyConfigurationPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PoolLicenseKeyConfigurationPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type LicenseKeyConfigurationRequest = ({
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Prefix shown before each generated key. Omit for no prefix. minLength: 2. maxLength: 8.
     * pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix"?: string;
    /**
     * Active pool in this merchant and environment. Required when source is pool. minLength: 1.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id"?: string;
    /** Source of the license keys. Value enum: "generated", "pool". */
    "source": "generated" | "pool" | (string & {});
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
})
    & ((Exclude<GeneratedLicenseKeyConfigurationRequest & object, readonly unknown[]>)
    | (Exclude<PoolLicenseKeyConfigurationRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type LicenseKeyConfigurationRequestInput = ({
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Prefix shown before each generated key. Omit for no prefix. minLength: 2. maxLength: 8.
     * pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix"?: string;
    /**
     * Active pool in this merchant and environment. Required when source is pool. minLength: 1.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id"?: string;
    /** Source of the license keys. Value enum: "generated", "pool". */
    "source": "generated" | "pool";
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
})
    & ((Exclude<GeneratedLicenseKeyConfigurationRequestInput & object, readonly unknown[]>)
    | (Exclude<PoolLicenseKeyConfigurationRequestInput & object, readonly unknown[]>));
export type LicenseKeyCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key.created";
});
/**
 * The `license_key.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type LicenseKeyCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * activation_limit (Required): integer or null. Maximum active installations. Null when
         * activations are unlimited. Format: int32. active_activation_count (Required): integer.
         * Number of currently active installations. Format: int32. created_at (Required): string.
         * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key.created". */
    "event_type"?: "license_key.created";
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
 * The `license_key.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * activation_limit (Required): integer or null. Maximum active installations. Null when
         * activations are unlimited. Format: int32. active_activation_count (Required): integer.
         * Number of currently active installations. Format: int32. created_at (Required): string.
         * When the license key was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key.created". */
    "event_type"?: "license_key.created";
});
export type LicenseKeyDisabledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    "event_type"?: "license_key.disabled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    "event_type"?: "license_key.disabled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key.disabled";
});
/**
 * The `license_key.disabled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type LicenseKeyDisabledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when requested with
     * expand=customer. Null when the key has no customer. Omitted when no customer expansion is
     * requested. previous_attributes.customer.anyOf[1] (Value): {@link
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
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when requested with
     * expand=order. Null when the key has no order. Omitted when no order expansion is requested.
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
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when
         * requested with expand=customer. Null when the key has no customer. Omitted when no
         * customer expansion is requested. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. The current customer of the owning order or subscription.
         * Null when the order has no linked customer. customer_id.anyOf[1] (Value): string. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. When the key expires. Null when no expiry is set.
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
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The owning order or the order that started the subscription.
         * Null when a subscription has no starting order. order_id.anyOf[1] (Value): string. The
         * owning order or the order that started the subscription. Null when a subscription has no
         * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value):
         * null. order_line_item_id (Optional): string or null. The owning order line. Null when
         * the key belongs to a subscription line. order_line_item_id.anyOf[1] (Value): string. The
         * owning order line. Null when the key belongs to a subscription line. Example:
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. anyOf[1] (Value): {@link
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. anyOf[1] (Value): {@link
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
    /** Value enum: "license_key.disabled". */
    "event_type"?: "license_key.disabled";
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
 * The `license_key.disabled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyDisabledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when requested with
     * expand=customer. Null when the key has no customer. Omitted when no customer expansion is
     * requested. previous_attributes.customer.anyOf[1] (Value): {@link
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
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when requested with
     * expand=order. Null when the key has no order. Omitted when no order expansion is requested.
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
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when
         * requested with expand=customer. Null when the key has no customer. Omitted when no
         * customer expansion is requested. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. The current customer of the owning order or subscription.
         * Null when the order has no linked customer. customer_id.anyOf[1] (Value): string. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. When the key expires. Null when no expiry is set.
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
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The owning order or the order that started the subscription.
         * Null when a subscription has no starting order. order_id.anyOf[1] (Value): string. The
         * owning order or the order that started the subscription. Null when a subscription has no
         * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value):
         * null. order_line_item_id (Optional): string or null. The owning order line. Null when
         * the key belongs to a subscription line. order_line_item_id.anyOf[1] (Value): string. The
         * owning order line. Null when the key belongs to a subscription line. Example:
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. anyOf[1] (Value): {@link
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. anyOf[1] (Value): {@link
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
    /** Value enum: "license_key.disabled". */
    "event_type"?: "license_key.disabled";
});
export type LicenseKeyExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    "event_type"?: "license_key.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "activation_limit": number | null;
            "active_activation_count": number;
            "created_at": string;
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
    "event_type"?: "license_key.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key.expired";
});
/**
 * The `license_key.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type LicenseKeyExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when requested with
     * expand=customer. Null when the key has no customer. Omitted when no customer expansion is
     * requested. previous_attributes.customer.anyOf[1] (Value): {@link
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
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when requested with
     * expand=order. Null when the key has no order. Omitted when no order expansion is requested.
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
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when
         * requested with expand=customer. Null when the key has no customer. Omitted when no
         * customer expansion is requested. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. The current customer of the owning order or subscription.
         * Null when the order has no linked customer. customer_id.anyOf[1] (Value): string. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. When the key expires. Null when no expiry is set.
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
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The owning order or the order that started the subscription.
         * Null when a subscription has no starting order. order_id.anyOf[1] (Value): string. The
         * owning order or the order that started the subscription. Null when a subscription has no
         * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value):
         * null. order_line_item_id (Optional): string or null. The owning order line. Null when
         * the key belongs to a subscription line. order_line_item_id.anyOf[1] (Value): string. The
         * owning order line. Null when the key belongs to a subscription line. Example:
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. anyOf[1] (Value): {@link
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. anyOf[1] (Value): {@link
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
    /** Value enum: "license_key.expired". */
    "event_type"?: "license_key.expired";
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
 * The `license_key.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.activation_limit (Required): integer or null. Maximum active
     * installations. Null when activations are unlimited. Format: int32.
     * object.active_activation_count (Required): integer. Number of currently active
     * installations. Format: int32. object.created_at (Required): string. When the license key was
     * issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when requested with
     * expand=customer. Null when the key has no customer. Omitted when no customer expansion is
     * requested. previous_attributes.customer.anyOf[1] (Value): {@link
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
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when requested with
     * expand=order. Null when the key has no order. Omitted when no order expansion is requested.
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
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when
         * requested with expand=customer. Null when the key has no customer. Omitted when no
         * customer expansion is requested. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. The current customer of the owning order or subscription.
         * Null when the order has no linked customer. customer_id.anyOf[1] (Value): string. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. When the key expires. Null when no expiry is set.
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
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The owning order or the order that started the subscription.
         * Null when a subscription has no starting order. order_id.anyOf[1] (Value): string. The
         * owning order or the order that started the subscription. Null when a subscription has no
         * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value):
         * null. order_line_item_id (Optional): string or null. The owning order line. Null when
         * the key belongs to a subscription line. order_line_item_id.anyOf[1] (Value): string. The
         * owning order line. Null when the key belongs to a subscription line. Example:
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. anyOf[1] (Value): {@link
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. anyOf[1] (Value): {@link
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
    /** Value enum: "license_key.expired". */
    "event_type"?: "license_key.expired";
});
/** A page of `CheckoutLicenseKey` objects. */
export type LicenseKeyListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * LicenseKeyWithKey}. A listed license key with an optional holder-only key.
     */
    "data": Array<LicenseKeyWithKey>;
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
/** A merchant's pool of uploaded license keys. */
export type LicenseKeyPool = {
    /**
     * Count of keys still for sale, expressed as a whole number because fractional quantities are
     * not supported. Format: int64.
     */
    "available_quantity": number;
    /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Count of keys reserved for payments in progress, expressed as a whole number because
     * fractional quantities are not supported. Format: int64.
     */
    "held_quantity": number;
    /**
     * Count of keys assigned to licenses, expressed as a whole number because fractional
     * quantities are not supported. Format: int64.
     */
    "issued_quantity": number;
    /**
     * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string;
    /**
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991.
     */
    "low_stock_threshold": number | null;
    /**
     * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /** The name of the pool. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Count of paid units waiting for a key, expressed as a whole number because fractional
     * quantities are not supported. Format: int64.
     */
    "pending_quantity": number;
    /**
     * Whether the pool permits validation without a credential. All keys that have not been
     * removed must have at least 16 characters.
     */
    "public_validation_enabled": boolean;
    /**
     * Count of keys withdrawn from stock, expressed as a whole number because fractional
     * quantities are not supported. Format: int64.
     */
    "removed_quantity": number;
    /** Whether the pool is active or archived. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** When the pool's version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** The results of a batch upload to the pool. */
export type LicenseKeyPoolAdditions = {
    /**
     * One outcome per submitted key, in request order. [] (Value): {@link
     * LicenseKeyPoolKeyAddition}. The result of submitting one key for upload.
     */
    "additions": Array<LicenseKeyPoolKeyAddition>;
};
/** A response containing `LicenseKeyPoolAdditions` data. */
export type LicenseKeyPoolAdditionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The results of a batch
     * upload to the pool.
     */
    "data": LicenseKeyPoolAdditions;
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
export type LicenseKeyPoolArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available_quantity"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "held_quantity"?: ((number) | (null));
            "issued_quantity"?: ((number) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "low_stock_threshold"?: ((number) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "pending_quantity"?: ((number) | (null));
            "public_validation_enabled"?: ((boolean) | (null));
            "removed_quantity"?: ((number) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_pool.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available_quantity"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "held_quantity"?: ((number) | (null));
            "issued_quantity"?: ((number) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "low_stock_threshold"?: ((number) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "pending_quantity"?: ((number) | (null));
            "public_validation_enabled"?: ((boolean) | (null));
            "removed_quantity"?: ((number) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_pool.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_pool.archived";
});
/**
 * The `license_key_pool.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyPoolArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.available_quantity
     * (Optional): integer or null. Count of keys still for sale, expressed as a whole number
     * because fractional quantities are not supported.
     * previous_attributes.available_quantity.anyOf[1] (Value): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.available_quantity.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the pool was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the pool was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.held_quantity (Optional): integer or null. Count of keys reserved
     * for payments in progress, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.held_quantity.anyOf[1] (Value): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. previous_attributes.held_quantity.anyOf[2] (Value): null.
     * previous_attributes.issued_quantity (Optional): integer or null. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.issued_quantity.anyOf[1] (Value): integer. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * Format: int64. previous_attributes.issued_quantity.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The license key pool ID.
     * previous_attributes.license_key_pool_id.anyOf[1] (Value): string. The license key pool ID.
     * pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * previous_attributes.license_key_pool_id.anyOf[2] (Value): null.
     * previous_attributes.low_stock_threshold (Optional): integer or null. Available quantity at
     * or below which the pool is low on stock. Null when no threshold is set.
     * previous_attributes.low_stock_threshold.anyOf[1] (Value): integer. Available quantity at or
     * below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum:
     * 1. maximum: 9007199254740991. previous_attributes.low_stock_threshold.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. The name of the pool. previous_attributes.name.anyOf[1] (Value): string. The
     * name of the pool. minLength: 1. maxLength: 255. previous_attributes.name.anyOf[2] (Value):
     * null. previous_attributes.pending_quantity (Optional): integer or null. Count of paid units
     * waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.pending_quantity.anyOf[1] (Value): integer. Count of paid
     * units waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. previous_attributes.pending_quantity.anyOf[2] (Value): null.
     * previous_attributes.public_validation_enabled (Optional): boolean or null. Whether the pool
     * permits validation without a credential. All keys that have not been removed must have at
     * least 16 characters. previous_attributes.public_validation_enabled.anyOf[1] (Value):
     * boolean. Whether the pool permits validation without a credential. All keys that have not
     * been removed must have at least 16 characters.
     * previous_attributes.public_validation_enabled.anyOf[2] (Value): null.
     * previous_attributes.removed_quantity (Optional): integer or null. Count of keys withdrawn
     * from stock, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.removed_quantity.anyOf[1] (Value): integer. Count of keys withdrawn from
     * stock, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.removed_quantity.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether the pool is active or
     * archived. Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Whether the pool is active or archived. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the pool's version last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
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
         * state, including synthetic test events. available_quantity (Optional): integer or null.
         * Count of keys still for sale, expressed as a whole number because fractional quantities
         * are not supported. available_quantity.anyOf[1] (Value): integer. Count of keys still for
         * sale, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. available_quantity.anyOf[2] (Value): null. created_at (Optional): string
         * or null. When the pool was created. created_at.anyOf[1] (Value): string. When the pool
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. held_quantity (Optional): integer or null. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. held_quantity.anyOf[1] (Value): integer. Count of keys reserved for payments
         * in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. held_quantity.anyOf[2] (Value): null. issued_quantity
         * (Optional): integer or null. Count of keys assigned to licenses, expressed as a whole
         * number because fractional quantities are not supported. issued_quantity.anyOf[1]
         * (Value): integer. Count of keys assigned to licenses, expressed as a whole number
         * because fractional quantities are not supported. Format: int64. issued_quantity.anyOf[2]
         * (Value): null. license_key_pool_id (Optional): string or null. The license key pool ID.
         * license_key_pool_id.anyOf[1] (Value): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * license_key_pool_id.anyOf[2] (Value): null. low_stock_threshold (Optional): integer or
         * null. Available quantity at or below which the pool is low on stock. Null when no
         * threshold is set. low_stock_threshold.anyOf[1] (Value): integer. Available quantity at
         * or below which the pool is low on stock. Null when no threshold is set. Format: int64.
         * minimum: 1. maximum: 9007199254740991. low_stock_threshold.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. The name of the pool. name.anyOf[1] (Value): string. The
         * name of the pool. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * pending_quantity (Optional): integer or null. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported.
         * pending_quantity.anyOf[1] (Value): integer. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. pending_quantity.anyOf[2] (Value): null. public_validation_enabled (Optional):
         * boolean or null. Whether the pool permits validation without a credential. All keys that
         * have not been removed must have at least 16 characters.
         * public_validation_enabled.anyOf[1] (Value): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. public_validation_enabled.anyOf[2] (Value): null. removed_quantity
         * (Optional): integer or null. Count of keys withdrawn from stock, expressed as a whole
         * number because fractional quantities are not supported. removed_quantity.anyOf[1]
         * (Value): integer. Count of keys withdrawn from stock, expressed as a whole number
         * because fractional quantities are not supported. Format: int64.
         * removed_quantity.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * pool is active or archived. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the pool is active or archived. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When the pool's
         * version last changed. updated_at.anyOf[1] (Value): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys still for
             * sale, expressed as a whole number because fractional quantities are not supported.
             * Format: int64. anyOf[2] (Value): null.
             */
            "available_quantity"?: ((number) | (null));
            /**
             * When the pool was created. anyOf[1] (Value): string. When the pool was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys
             * reserved for payments in progress, expressed as a whole number because fractional
             * quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "held_quantity"?: ((number) | (null));
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys assigned to
             * licenses, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "issued_quantity"?: ((number) | (null));
            /**
             * The license key pool ID. anyOf[1] (Value): string. The license key pool ID. pattern:
             * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             * anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. anyOf[1] (Value): integer. Available quantity at or below which
             * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
             * maximum: 9007199254740991. anyOf[2] (Value): null.
             */
            "low_stock_threshold"?: ((number) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The name of the pool. anyOf[1] (Value): string. The name of the pool. minLength: 1.
             * maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of paid
             * units waiting for a key, expressed as a whole number because fractional quantities
             * are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "pending_quantity"?: ((number) | (null));
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters. anyOf[1] (Value): boolean. Whether
             * the pool permits validation without a credential. All keys that have not been
             * removed must have at least 16 characters. anyOf[2] (Value): null.
             */
            "public_validation_enabled"?: ((boolean) | (null));
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys withdrawn
             * from stock, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "removed_quantity"?: ((number) | (null));
            /**
             * Whether the pool is active or archived. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the pool is active or archived. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * When the pool's version last changed. anyOf[1] (Value): string. When the pool's
             * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
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
    /** Value enum: "license_key_pool.archived". */
    "event_type"?: "license_key_pool.archived";
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
 * The `license_key_pool.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type LicenseKeyPoolArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.available_quantity
     * (Optional): integer or null. Count of keys still for sale, expressed as a whole number
     * because fractional quantities are not supported.
     * previous_attributes.available_quantity.anyOf[1] (Value): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.available_quantity.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the pool was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the pool was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.held_quantity (Optional): integer or null. Count of keys reserved
     * for payments in progress, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.held_quantity.anyOf[1] (Value): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. previous_attributes.held_quantity.anyOf[2] (Value): null.
     * previous_attributes.issued_quantity (Optional): integer or null. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.issued_quantity.anyOf[1] (Value): integer. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * Format: int64. previous_attributes.issued_quantity.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The license key pool ID.
     * previous_attributes.license_key_pool_id.anyOf[1] (Value): string. The license key pool ID.
     * pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * previous_attributes.license_key_pool_id.anyOf[2] (Value): null.
     * previous_attributes.low_stock_threshold (Optional): integer or null. Available quantity at
     * or below which the pool is low on stock. Null when no threshold is set.
     * previous_attributes.low_stock_threshold.anyOf[1] (Value): integer. Available quantity at or
     * below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum:
     * 1. maximum: 9007199254740991. previous_attributes.low_stock_threshold.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. The name of the pool. previous_attributes.name.anyOf[1] (Value): string. The
     * name of the pool. minLength: 1. maxLength: 255. previous_attributes.name.anyOf[2] (Value):
     * null. previous_attributes.pending_quantity (Optional): integer or null. Count of paid units
     * waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.pending_quantity.anyOf[1] (Value): integer. Count of paid
     * units waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. previous_attributes.pending_quantity.anyOf[2] (Value): null.
     * previous_attributes.public_validation_enabled (Optional): boolean or null. Whether the pool
     * permits validation without a credential. All keys that have not been removed must have at
     * least 16 characters. previous_attributes.public_validation_enabled.anyOf[1] (Value):
     * boolean. Whether the pool permits validation without a credential. All keys that have not
     * been removed must have at least 16 characters.
     * previous_attributes.public_validation_enabled.anyOf[2] (Value): null.
     * previous_attributes.removed_quantity (Optional): integer or null. Count of keys withdrawn
     * from stock, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.removed_quantity.anyOf[1] (Value): integer. Count of keys withdrawn from
     * stock, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.removed_quantity.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether the pool is active or
     * archived. Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Whether the pool is active or archived. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the pool's version last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
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
         * state, including synthetic test events. available_quantity (Optional): integer or null.
         * Count of keys still for sale, expressed as a whole number because fractional quantities
         * are not supported. available_quantity.anyOf[1] (Value): integer. Count of keys still for
         * sale, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. available_quantity.anyOf[2] (Value): null. created_at (Optional): string
         * or null. When the pool was created. created_at.anyOf[1] (Value): string. When the pool
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. held_quantity (Optional): integer or null. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. held_quantity.anyOf[1] (Value): integer. Count of keys reserved for payments
         * in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. held_quantity.anyOf[2] (Value): null. issued_quantity
         * (Optional): integer or null. Count of keys assigned to licenses, expressed as a whole
         * number because fractional quantities are not supported. issued_quantity.anyOf[1]
         * (Value): integer. Count of keys assigned to licenses, expressed as a whole number
         * because fractional quantities are not supported. Format: int64. issued_quantity.anyOf[2]
         * (Value): null. license_key_pool_id (Optional): string or null. The license key pool ID.
         * license_key_pool_id.anyOf[1] (Value): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * license_key_pool_id.anyOf[2] (Value): null. low_stock_threshold (Optional): integer or
         * null. Available quantity at or below which the pool is low on stock. Null when no
         * threshold is set. low_stock_threshold.anyOf[1] (Value): integer. Available quantity at
         * or below which the pool is low on stock. Null when no threshold is set. Format: int64.
         * minimum: 1. maximum: 9007199254740991. low_stock_threshold.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. The name of the pool. name.anyOf[1] (Value): string. The
         * name of the pool. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * pending_quantity (Optional): integer or null. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported.
         * pending_quantity.anyOf[1] (Value): integer. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. pending_quantity.anyOf[2] (Value): null. public_validation_enabled (Optional):
         * boolean or null. Whether the pool permits validation without a credential. All keys that
         * have not been removed must have at least 16 characters.
         * public_validation_enabled.anyOf[1] (Value): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. public_validation_enabled.anyOf[2] (Value): null. removed_quantity
         * (Optional): integer or null. Count of keys withdrawn from stock, expressed as a whole
         * number because fractional quantities are not supported. removed_quantity.anyOf[1]
         * (Value): integer. Count of keys withdrawn from stock, expressed as a whole number
         * because fractional quantities are not supported. Format: int64.
         * removed_quantity.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * pool is active or archived. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the pool is active or archived. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When the pool's
         * version last changed. updated_at.anyOf[1] (Value): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys still for
             * sale, expressed as a whole number because fractional quantities are not supported.
             * Format: int64. anyOf[2] (Value): null.
             */
            "available_quantity"?: ((number) | (null));
            /**
             * When the pool was created. anyOf[1] (Value): string. When the pool was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys
             * reserved for payments in progress, expressed as a whole number because fractional
             * quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "held_quantity"?: ((number) | (null));
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys assigned to
             * licenses, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "issued_quantity"?: ((number) | (null));
            /**
             * The license key pool ID. anyOf[1] (Value): string. The license key pool ID. pattern:
             * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             * anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. anyOf[1] (Value): integer. Available quantity at or below which
             * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
             * maximum: 9007199254740991. anyOf[2] (Value): null.
             */
            "low_stock_threshold"?: ((number) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The name of the pool. anyOf[1] (Value): string. The name of the pool. minLength: 1.
             * maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of paid
             * units waiting for a key, expressed as a whole number because fractional quantities
             * are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "pending_quantity"?: ((number) | (null));
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters. anyOf[1] (Value): boolean. Whether
             * the pool permits validation without a credential. All keys that have not been
             * removed must have at least 16 characters. anyOf[2] (Value): null.
             */
            "public_validation_enabled"?: ((boolean) | (null));
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys withdrawn
             * from stock, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "removed_quantity"?: ((number) | (null));
            /**
             * Whether the pool is active or archived. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the pool is active or archived. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * When the pool's version last changed. anyOf[1] (Value): string. When the pool's
             * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
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
    /** Value enum: "license_key_pool.archived". */
    "event_type"?: "license_key_pool.archived";
});
export type LicenseKeyPoolCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_pool.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_pool.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_pool.created";
});
/**
 * The `license_key_pool.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyPoolCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key_pool.created". */
    "event_type"?: "license_key_pool.created";
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
 * The `license_key_pool.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyPoolCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key_pool.created". */
    "event_type"?: "license_key_pool.created";
});
/** An uploaded key represented by its display suffix. */
export type LicenseKeyPoolKey = {
    /** When the key was uploaded. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Last four characters of the uploaded key. */
    "key_last4": string;
    /**
     * The assigned license ID. Null when the key has not been issued. Example:
     * "lk_01KEZF7C000QD7VJ83G43V0NSN".
     */
    "license_key_id": string | null;
    /**
     * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string;
    /**
     * The pool key ID. pattern: ^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkpk_01KEZF7C004XWT0EAW2ZQGG93S".
     */
    "license_key_pool_key_id": string;
    /** The disposition of the key. Value enum: "available", "held", "issued", "removed". */
    "status": "available" | "held" | "issued" | "removed" | (string & {});
};
/** The result of submitting one key for upload. */
export type LicenseKeyPoolKeyAddition = {
    /**
     * The key that was created or matched. Its pool may differ from the requested pool. An
     * uploaded key represented by its display suffix.
     */
    "license_key_pool_key": LicenseKeyPoolKey;
    /** Whether the key was added or already existed. Value enum: "created", "existing". */
    "outcome": "created" | "existing" | (string & {});
};
/** A page of `LicenseKeyPoolKey` objects. */
export type LicenseKeyPoolKeyListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * LicenseKeyPoolKey}. An uploaded key represented by its display suffix.
     */
    "data": Array<LicenseKeyPoolKey>;
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
/** The result of recalling one key. */
export type LicenseKeyPoolKeyRemoval = {
    /**
     * The matched pool key. Omitted when the selector did not match a key. An uploaded key
     * represented by its display suffix.
     */
    "license_key_pool_key"?: LicenseKeyPoolKey;
    /** The outcome for this selector. Value enum: "removed", "issued", "held", "not_found". */
    "outcome": "removed" | "issued" | "held" | "not_found" | (string & {});
};
/** A page of `LicenseKeyPool` objects. */
export type LicenseKeyPoolListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * LicenseKeyPool}. A merchant's pool of uploaded license keys.
     */
    "data": Array<LicenseKeyPool>;
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
export type LicenseKeyPoolLowStockEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_pool.low_stock";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_pool.low_stock";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_pool.low_stock";
});
/**
 * The `license_key_pool.low_stock` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyPoolLowStockInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key_pool.low_stock". */
    "event_type"?: "license_key_pool.low_stock";
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
 * The `license_key_pool.low_stock` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type LicenseKeyPoolLowStockMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key_pool.low_stock". */
    "event_type"?: "license_key_pool.low_stock";
});
export type LicenseKeyPoolOutOfStockEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_pool.out_of_stock";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_pool.out_of_stock";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_pool.out_of_stock";
});
/**
 * The `license_key_pool.out_of_stock` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyPoolOutOfStockInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "license_key_pool.out_of_stock". */
    "event_type"?: "license_key_pool.out_of_stock";
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
 * The `license_key_pool.out_of_stock` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type LicenseKeyPoolOutOfStockMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "license_key_pool.out_of_stock". */
    "event_type"?: "license_key_pool.out_of_stock";
});
/** The results of a batch recall from the pool. */
export type LicenseKeyPoolRemovals = {
    /**
     * One outcome per selector, in request order. [] (Value): {@link LicenseKeyPoolKeyRemoval}.
     * The result of recalling one key.
     */
    "removals": Array<LicenseKeyPoolKeyRemoval>;
};
/** A response containing `LicenseKeyPoolRemovals` data. */
export type LicenseKeyPoolRemovalsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The results of a batch
     * recall from the pool.
     */
    "data": LicenseKeyPoolRemovals;
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
/** A response containing `LicenseKeyPool` data. */
export type LicenseKeyPoolResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's pool of
     * uploaded license keys.
     */
    "data": LicenseKeyPool;
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
export type LicenseKeyPoolUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available_quantity"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "held_quantity"?: ((number) | (null));
            "issued_quantity"?: ((number) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "low_stock_threshold"?: ((number) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "pending_quantity"?: ((number) | (null));
            "public_validation_enabled"?: ((boolean) | (null));
            "removed_quantity"?: ((number) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "license_key_pool.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "created_at": string;
            "held_quantity": number;
            "issued_quantity": number;
            "license_key_pool_id": string;
            "low_stock_threshold": number | null;
            "metadata": MetadataMap;
            "name": string;
            "pending_quantity": number;
            "public_validation_enabled": boolean;
            "removed_quantity": number;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available_quantity"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "held_quantity"?: ((number) | (null));
            "issued_quantity"?: ((number) | (null));
            "license_key_pool_id"?: ((string) | (null));
            "low_stock_threshold"?: ((number) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "pending_quantity"?: ((number) | (null));
            "public_validation_enabled"?: ((boolean) | (null));
            "removed_quantity"?: ((number) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "license_key_pool.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "license_key_pool.updated";
});
/**
 * The `license_key_pool.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type LicenseKeyPoolUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.available_quantity
     * (Optional): integer or null. Count of keys still for sale, expressed as a whole number
     * because fractional quantities are not supported.
     * previous_attributes.available_quantity.anyOf[1] (Value): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.available_quantity.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the pool was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the pool was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.held_quantity (Optional): integer or null. Count of keys reserved
     * for payments in progress, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.held_quantity.anyOf[1] (Value): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. previous_attributes.held_quantity.anyOf[2] (Value): null.
     * previous_attributes.issued_quantity (Optional): integer or null. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.issued_quantity.anyOf[1] (Value): integer. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * Format: int64. previous_attributes.issued_quantity.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The license key pool ID.
     * previous_attributes.license_key_pool_id.anyOf[1] (Value): string. The license key pool ID.
     * pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * previous_attributes.license_key_pool_id.anyOf[2] (Value): null.
     * previous_attributes.low_stock_threshold (Optional): integer or null. Available quantity at
     * or below which the pool is low on stock. Null when no threshold is set.
     * previous_attributes.low_stock_threshold.anyOf[1] (Value): integer. Available quantity at or
     * below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum:
     * 1. maximum: 9007199254740991. previous_attributes.low_stock_threshold.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. The name of the pool. previous_attributes.name.anyOf[1] (Value): string. The
     * name of the pool. minLength: 1. maxLength: 255. previous_attributes.name.anyOf[2] (Value):
     * null. previous_attributes.pending_quantity (Optional): integer or null. Count of paid units
     * waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.pending_quantity.anyOf[1] (Value): integer. Count of paid
     * units waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. previous_attributes.pending_quantity.anyOf[2] (Value): null.
     * previous_attributes.public_validation_enabled (Optional): boolean or null. Whether the pool
     * permits validation without a credential. All keys that have not been removed must have at
     * least 16 characters. previous_attributes.public_validation_enabled.anyOf[1] (Value):
     * boolean. Whether the pool permits validation without a credential. All keys that have not
     * been removed must have at least 16 characters.
     * previous_attributes.public_validation_enabled.anyOf[2] (Value): null.
     * previous_attributes.removed_quantity (Optional): integer or null. Count of keys withdrawn
     * from stock, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.removed_quantity.anyOf[1] (Value): integer. Count of keys withdrawn from
     * stock, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.removed_quantity.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether the pool is active or
     * archived. Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Whether the pool is active or archived. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the pool's version last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
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
         * state, including synthetic test events. available_quantity (Optional): integer or null.
         * Count of keys still for sale, expressed as a whole number because fractional quantities
         * are not supported. available_quantity.anyOf[1] (Value): integer. Count of keys still for
         * sale, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. available_quantity.anyOf[2] (Value): null. created_at (Optional): string
         * or null. When the pool was created. created_at.anyOf[1] (Value): string. When the pool
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. held_quantity (Optional): integer or null. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. held_quantity.anyOf[1] (Value): integer. Count of keys reserved for payments
         * in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. held_quantity.anyOf[2] (Value): null. issued_quantity
         * (Optional): integer or null. Count of keys assigned to licenses, expressed as a whole
         * number because fractional quantities are not supported. issued_quantity.anyOf[1]
         * (Value): integer. Count of keys assigned to licenses, expressed as a whole number
         * because fractional quantities are not supported. Format: int64. issued_quantity.anyOf[2]
         * (Value): null. license_key_pool_id (Optional): string or null. The license key pool ID.
         * license_key_pool_id.anyOf[1] (Value): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * license_key_pool_id.anyOf[2] (Value): null. low_stock_threshold (Optional): integer or
         * null. Available quantity at or below which the pool is low on stock. Null when no
         * threshold is set. low_stock_threshold.anyOf[1] (Value): integer. Available quantity at
         * or below which the pool is low on stock. Null when no threshold is set. Format: int64.
         * minimum: 1. maximum: 9007199254740991. low_stock_threshold.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. The name of the pool. name.anyOf[1] (Value): string. The
         * name of the pool. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * pending_quantity (Optional): integer or null. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported.
         * pending_quantity.anyOf[1] (Value): integer. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. pending_quantity.anyOf[2] (Value): null. public_validation_enabled (Optional):
         * boolean or null. Whether the pool permits validation without a credential. All keys that
         * have not been removed must have at least 16 characters.
         * public_validation_enabled.anyOf[1] (Value): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. public_validation_enabled.anyOf[2] (Value): null. removed_quantity
         * (Optional): integer or null. Count of keys withdrawn from stock, expressed as a whole
         * number because fractional quantities are not supported. removed_quantity.anyOf[1]
         * (Value): integer. Count of keys withdrawn from stock, expressed as a whole number
         * because fractional quantities are not supported. Format: int64.
         * removed_quantity.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * pool is active or archived. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the pool is active or archived. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When the pool's
         * version last changed. updated_at.anyOf[1] (Value): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys still for
             * sale, expressed as a whole number because fractional quantities are not supported.
             * Format: int64. anyOf[2] (Value): null.
             */
            "available_quantity"?: ((number) | (null));
            /**
             * When the pool was created. anyOf[1] (Value): string. When the pool was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys
             * reserved for payments in progress, expressed as a whole number because fractional
             * quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "held_quantity"?: ((number) | (null));
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys assigned to
             * licenses, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "issued_quantity"?: ((number) | (null));
            /**
             * The license key pool ID. anyOf[1] (Value): string. The license key pool ID. pattern:
             * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             * anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. anyOf[1] (Value): integer. Available quantity at or below which
             * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
             * maximum: 9007199254740991. anyOf[2] (Value): null.
             */
            "low_stock_threshold"?: ((number) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The name of the pool. anyOf[1] (Value): string. The name of the pool. minLength: 1.
             * maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of paid
             * units waiting for a key, expressed as a whole number because fractional quantities
             * are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "pending_quantity"?: ((number) | (null));
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters. anyOf[1] (Value): boolean. Whether
             * the pool permits validation without a credential. All keys that have not been
             * removed must have at least 16 characters. anyOf[2] (Value): null.
             */
            "public_validation_enabled"?: ((boolean) | (null));
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys withdrawn
             * from stock, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "removed_quantity"?: ((number) | (null));
            /**
             * Whether the pool is active or archived. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the pool is active or archived. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * When the pool's version last changed. anyOf[1] (Value): string. When the pool's
             * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
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
    /** Value enum: "license_key_pool.updated". */
    "event_type"?: "license_key_pool.updated";
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
 * The `license_key_pool.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type LicenseKeyPoolUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.created_at (Required): string. When the pool was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.held_quantity (Required): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. object.issued_quantity (Required): integer. Count of keys
     * assigned to licenses, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. object.license_key_pool_id (Required): string. The license key
     * pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
     * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.low_stock_threshold (Required): integer or null.
     * Available quantity at or below which the pool is low on stock. Null when no threshold is
     * set. Format: int64. minimum: 1. maximum: 9007199254740991. object.metadata (Required):
     * {@link MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on
     * a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The name of the pool. minLength: 1.
     * maxLength: 255. object.pending_quantity (Required): integer. Count of paid units waiting for
     * a key, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. object.public_validation_enabled (Required): boolean. Whether the pool permits
     * validation without a credential. All keys that have not been removed must have at least 16
     * characters. object.removed_quantity (Required): integer. Count of keys withdrawn from stock,
     * expressed as a whole number because fractional quantities are not supported. Format: int64.
     * object.status (Required): string. Whether the pool is active or archived. Value enum:
     * "active", "archived". object.updated_at (Required): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.available_quantity
     * (Optional): integer or null. Count of keys still for sale, expressed as a whole number
     * because fractional quantities are not supported.
     * previous_attributes.available_quantity.anyOf[1] (Value): integer. Count of keys still for
     * sale, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.available_quantity.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the pool was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the pool was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.held_quantity (Optional): integer or null. Count of keys reserved
     * for payments in progress, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.held_quantity.anyOf[1] (Value): integer. Count of keys
     * reserved for payments in progress, expressed as a whole number because fractional quantities
     * are not supported. Format: int64. previous_attributes.held_quantity.anyOf[2] (Value): null.
     * previous_attributes.issued_quantity (Optional): integer or null. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.issued_quantity.anyOf[1] (Value): integer. Count of keys assigned to
     * licenses, expressed as a whole number because fractional quantities are not supported.
     * Format: int64. previous_attributes.issued_quantity.anyOf[2] (Value): null.
     * previous_attributes.license_key_pool_id (Optional): string or null. The license key pool ID.
     * previous_attributes.license_key_pool_id.anyOf[1] (Value): string. The license key pool ID.
     * pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * previous_attributes.license_key_pool_id.anyOf[2] (Value): null.
     * previous_attributes.low_stock_threshold (Optional): integer or null. Available quantity at
     * or below which the pool is low on stock. Null when no threshold is set.
     * previous_attributes.low_stock_threshold.anyOf[1] (Value): integer. Available quantity at or
     * below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum:
     * 1. maximum: 9007199254740991. previous_attributes.low_stock_threshold.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Merchant-defined
     * key-value pairs. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. The name of the pool. previous_attributes.name.anyOf[1] (Value): string. The
     * name of the pool. minLength: 1. maxLength: 255. previous_attributes.name.anyOf[2] (Value):
     * null. previous_attributes.pending_quantity (Optional): integer or null. Count of paid units
     * waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. previous_attributes.pending_quantity.anyOf[1] (Value): integer. Count of paid
     * units waiting for a key, expressed as a whole number because fractional quantities are not
     * supported. Format: int64. previous_attributes.pending_quantity.anyOf[2] (Value): null.
     * previous_attributes.public_validation_enabled (Optional): boolean or null. Whether the pool
     * permits validation without a credential. All keys that have not been removed must have at
     * least 16 characters. previous_attributes.public_validation_enabled.anyOf[1] (Value):
     * boolean. Whether the pool permits validation without a credential. All keys that have not
     * been removed must have at least 16 characters.
     * previous_attributes.public_validation_enabled.anyOf[2] (Value): null.
     * previous_attributes.removed_quantity (Optional): integer or null. Count of keys withdrawn
     * from stock, expressed as a whole number because fractional quantities are not supported.
     * previous_attributes.removed_quantity.anyOf[1] (Value): integer. Count of keys withdrawn from
     * stock, expressed as a whole number because fractional quantities are not supported. Format:
     * int64. previous_attributes.removed_quantity.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether the pool is active or
     * archived. Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Whether the pool is active or archived. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the pool's version last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the pool's version last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Count of keys still for sale, expressed as a
         * whole number because fractional quantities are not supported. Format: int64. created_at
         * (Required): string. When the pool was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". held_quantity (Required): integer. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. issued_quantity (Required): integer. Count of keys assigned to
         * licenses, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. license_key_pool_id (Required): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * low_stock_threshold (Required): integer or null. Available quantity at or below which
         * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
         * maximum: 9007199254740991. metadata (Required): {@link MetadataMap}. Merchant-defined
         * key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. The name of the pool. minLength: 1. maxLength: 255.
         * pending_quantity (Required): integer. Count of paid units waiting for a key, expressed
         * as a whole number because fractional quantities are not supported. Format: int64.
         * public_validation_enabled (Required): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. removed_quantity (Required): integer. Count of keys withdrawn from stock,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. status (Required): string. Whether the pool is active or archived. Value enum:
         * "active", "archived". updated_at (Required): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "issued_quantity": number;
            /**
             * The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example:
             * "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             */
            "license_key_pool_id": string;
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
             */
            "low_stock_threshold": number | null;
            /**
             * Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource.
             * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow
             * the limits on MetadataInput and MetadataPatchInput; maps written before those limits
             * may not satisfy them.
             */
            "metadata": MetadataMap;
            /** The name of the pool. minLength: 1. maxLength: 255. */
            "name": string;
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. Format: int64.
             */
            "pending_quantity": number;
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters.
             */
            "public_validation_enabled": boolean;
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. Format: int64.
             */
            "removed_quantity": number;
            /** Whether the pool is active or archived. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * When the pool's version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
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
         * state, including synthetic test events. available_quantity (Optional): integer or null.
         * Count of keys still for sale, expressed as a whole number because fractional quantities
         * are not supported. available_quantity.anyOf[1] (Value): integer. Count of keys still for
         * sale, expressed as a whole number because fractional quantities are not supported.
         * Format: int64. available_quantity.anyOf[2] (Value): null. created_at (Optional): string
         * or null. When the pool was created. created_at.anyOf[1] (Value): string. When the pool
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. held_quantity (Optional): integer or null. Count of keys reserved for
         * payments in progress, expressed as a whole number because fractional quantities are not
         * supported. held_quantity.anyOf[1] (Value): integer. Count of keys reserved for payments
         * in progress, expressed as a whole number because fractional quantities are not
         * supported. Format: int64. held_quantity.anyOf[2] (Value): null. issued_quantity
         * (Optional): integer or null. Count of keys assigned to licenses, expressed as a whole
         * number because fractional quantities are not supported. issued_quantity.anyOf[1]
         * (Value): integer. Count of keys assigned to licenses, expressed as a whole number
         * because fractional quantities are not supported. Format: int64. issued_quantity.anyOf[2]
         * (Value): null. license_key_pool_id (Optional): string or null. The license key pool ID.
         * license_key_pool_id.anyOf[1] (Value): string. The license key pool ID. pattern:
         * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
         * license_key_pool_id.anyOf[2] (Value): null. low_stock_threshold (Optional): integer or
         * null. Available quantity at or below which the pool is low on stock. Null when no
         * threshold is set. low_stock_threshold.anyOf[1] (Value): integer. Available quantity at
         * or below which the pool is low on stock. Null when no threshold is set. Format: int64.
         * minimum: 1. maximum: 9007199254740991. low_stock_threshold.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Merchant-defined key-value pairs.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name
         * (Optional): string or null. The name of the pool. name.anyOf[1] (Value): string. The
         * name of the pool. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * pending_quantity (Optional): integer or null. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported.
         * pending_quantity.anyOf[1] (Value): integer. Count of paid units waiting for a key,
         * expressed as a whole number because fractional quantities are not supported. Format:
         * int64. pending_quantity.anyOf[2] (Value): null. public_validation_enabled (Optional):
         * boolean or null. Whether the pool permits validation without a credential. All keys that
         * have not been removed must have at least 16 characters.
         * public_validation_enabled.anyOf[1] (Value): boolean. Whether the pool permits validation
         * without a credential. All keys that have not been removed must have at least 16
         * characters. public_validation_enabled.anyOf[2] (Value): null. removed_quantity
         * (Optional): integer or null. Count of keys withdrawn from stock, expressed as a whole
         * number because fractional quantities are not supported. removed_quantity.anyOf[1]
         * (Value): integer. Count of keys withdrawn from stock, expressed as a whole number
         * because fractional quantities are not supported. Format: int64.
         * removed_quantity.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * pool is active or archived. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the pool is active or archived. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When the pool's
         * version last changed. updated_at.anyOf[1] (Value): string. When the pool's version last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * version.anyOf[1] (Value): integer. Persisted version of this resource's owned state.
         * Expanded resources and external observations can change independently. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Count of keys still for sale, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys still for
             * sale, expressed as a whole number because fractional quantities are not supported.
             * Format: int64. anyOf[2] (Value): null.
             */
            "available_quantity"?: ((number) | (null));
            /**
             * When the pool was created. anyOf[1] (Value): string. When the pool was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Count of keys reserved for payments in progress, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys
             * reserved for payments in progress, expressed as a whole number because fractional
             * quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "held_quantity"?: ((number) | (null));
            /**
             * Count of keys assigned to licenses, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys assigned to
             * licenses, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "issued_quantity"?: ((number) | (null));
            /**
             * The license key pool ID. anyOf[1] (Value): string. The license key pool ID. pattern:
             * ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
             * anyOf[2] (Value): null.
             */
            "license_key_pool_id"?: ((string) | (null));
            /**
             * Available quantity at or below which the pool is low on stock. Null when no
             * threshold is set. anyOf[1] (Value): integer. Available quantity at or below which
             * the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1.
             * maximum: 9007199254740991. anyOf[2] (Value): null.
             */
            "low_stock_threshold"?: ((number) | (null));
            /**
             * Merchant-defined key-value pairs. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The name of the pool. anyOf[1] (Value): string. The name of the pool. minLength: 1.
             * maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Count of paid units waiting for a key, expressed as a whole number because
             * fractional quantities are not supported. anyOf[1] (Value): integer. Count of paid
             * units waiting for a key, expressed as a whole number because fractional quantities
             * are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "pending_quantity"?: ((number) | (null));
            /**
             * Whether the pool permits validation without a credential. All keys that have not
             * been removed must have at least 16 characters. anyOf[1] (Value): boolean. Whether
             * the pool permits validation without a credential. All keys that have not been
             * removed must have at least 16 characters. anyOf[2] (Value): null.
             */
            "public_validation_enabled"?: ((boolean) | (null));
            /**
             * Count of keys withdrawn from stock, expressed as a whole number because fractional
             * quantities are not supported. anyOf[1] (Value): integer. Count of keys withdrawn
             * from stock, expressed as a whole number because fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "removed_quantity"?: ((number) | (null));
            /**
             * Whether the pool is active or archived. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the pool is active or archived. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * When the pool's version last changed. anyOf[1] (Value): string. When the pool's
             * version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
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
    /** Value enum: "license_key_pool.updated". */
    "event_type"?: "license_key_pool.updated";
});
export type LicenseKeyPoolsCreateKeysParams = (InputValue<CreateLicenseKeyPoolKeysRequestInput>)
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
export type LicenseKeyPoolsCreateParams = (InputValue<CreateLicenseKeyPoolRequestInput>)
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
export type LicenseKeyPoolsDeleteParams = {
    /**
     * Refuse the archive if the pool version has changed. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /** Set to true to remove every available key before archiving. Default: false. */
    "remove_available_keys"?: InputValue<boolean>;
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
export type LicenseKeyPoolsGetParams = DisputesAcceptParams;
export type LicenseKeyPoolsListKeysParams = {
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
     * Filter by one or more pool key statuses. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "available", "held", "issued", "removed". Value enum:
     * "available", "held", "issued", "removed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "available", "held", "issued", "removed". anyOf[1][] (Value): string. Value enum:
     * "available", "held", "issued", "removed". anyOf[2] (Value): string. Value enum: "available",
     * "held", "issued", "removed".
     */
    "status"?: InputValue<("available" | "held" | "issued" | "removed")
        | readonly ("available" | "held" | "issued" | "removed")[]>;
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
export type LicenseKeyPoolsListParams = {
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
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
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
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
            "customer"?: ExpandedCustomerSummary;
            "customer_id": string | null;
            "expires_at": string | null;
            "key_last4": string | null;
            "license_key_id": string;
            "license_key_pool_id": string | null;
            "metadata": MetadataMap;
            "order"?: ExpandedOrderSummary;
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
     * {@link ExpandedCustomerSummary}. Customer summary when requested with expand=customer. Null
     * when the key has no customer. Omitted when no customer expansion is requested. A customer's
     * summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer_id (Required): string or null. The current customer of the owning order or
     * subscription. Null when the order has no linked customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.expires_at (Required): string or null. When the key
     * expires. Null when no expiry is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.key_last4 (Required): string or null. Last four characters of the assigned key. Null
     * when the key is awaiting assignment. object.license_key_id (Required): string. Unique
     * license key ID with the lk_ prefix. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * object.license_key_pool_id (Required): string or null. The source pool ID. Null when the key
     * is generated. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". object.metadata (Required): {@link
     * MetadataMap}. Merchant-defined key-value pairs. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary}. Order summary
     * when requested with expand=order. Null when the key has no order. Omitted when no order
     * expansion is requested. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order_id (Required): string or null. The owning order or the order that started the
     * subscription. Null when a subscription has no starting order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string or null. The
     * owning order line. Null when the key belongs to a subscription line. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.product_id (Required): string. The product ID.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.restrictions (Required): Array of {@link
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
     * ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when requested with
     * expand=customer. Null when the key has no customer. Omitted when no customer expansion is
     * requested. previous_attributes.customer.anyOf[1] (Value): {@link
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
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when requested with
     * expand=order. Null when the key has no order. Omitted when no order expansion is requested.
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
         * customer (Optional): {@link ExpandedCustomerSummary}. Customer summary when requested
         * with expand=customer. Null when the key has no customer. Omitted when no customer
         * expansion is requested. A customer's summary fields, returned in place of a customer ID
         * when the customer is expanded. customer_id (Required): string or null. The current
         * customer of the owning order or subscription. Null when the order has no linked
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
         * satisfy them. order (Optional): {@link ExpandedOrderSummary}. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order_id (Required): string or null. The owning order or the order that started the
         * subscription. Null when a subscription has no starting order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string or null. The
         * owning order line. Null when the key belongs to a subscription line. Example:
         * "li_01KEZF7C008YPRCK7VDKTGWR31". product_id (Required): string. The product ID. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". restrictions (Required): Array of {@link
         * LicenseKeyRestriction}. Restrictions currently in force. restrictions[] (Value): {@link
         * LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled. source
         * (Required): string. How the key was supplied. Value enum: "generated", "pool". status
         * (Required): string. Whether the key is usable. Expiry takes effect at expires_at. Value
         * enum: "pending", "active", "disabled", "expired". subscription_id (Required): string or
         * null. The owning subscription. Null when the key belongs to an order line. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_line_item_id (Required): string or null.
         * The owning subscription line. Null when the key belongs to an order line. Example:
         * "sli_01KEZF7C00PPWVJ2N321V84ASA". supported_actions (Required): Array of string.
         * Lifecycle actions currently available for this key. [] enum: "disable", "reinstate".
         * supported_actions[] (Value): string. Value enum: "disable", "reinstate". unit_ordinal
         * (Required): integer. The unit of the owning line, starting at 1. Format: int32.
         * updated_at (Required): string. When the license key version last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". variant_id (Required): string. The product
         * variant ID. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". version (Required): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1.
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             */
            "customer"?: ExpandedCustomerSummary;
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
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
         * {@link ExpandedCustomerSummaryPreviousAttributes} or null. Customer summary when
         * requested with expand=customer. Null when the key has no customer. Omitted when no
         * customer expansion is requested. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. The current customer of the owning order or subscription.
         * Null when the order has no linked customer. customer_id.anyOf[1] (Value): string. The
         * current customer of the owning order or subscription. Null when the order has no linked
         * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. When the key expires. Null when no expiry is set.
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
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary when
         * requested with expand=order. Null when the key has no order. Omitted when no order
         * expansion is requested. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The owning order or the order that started the subscription.
         * Null when a subscription has no starting order. order_id.anyOf[1] (Value): string. The
         * owning order or the order that started the subscription. Null when a subscription has no
         * starting order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value):
         * null. order_line_item_id (Optional): string or null. The owning order line. Null when
         * the key belongs to a subscription line. order_line_item_id.anyOf[1] (Value): string. The
         * owning order line. Null when the key belongs to a subscription line. Example:
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
             * Customer summary when requested with expand=customer. Null when the key has no
             * customer. Omitted when no customer expansion is requested. anyOf[1] (Value): {@link
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
             * Order summary when requested with expand=order. Null when the key has no order.
             * Omitted when no order expansion is requested. anyOf[1] (Value): {@link
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
