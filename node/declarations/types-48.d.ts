import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { PartnerWebhookEnvelope, PaymentClientAction } from './types-44.js';
import type { MoneyMovementListMeta, MoneyValue, MoneyMovementBlockedReason, NextAction, MoneyValueInput } from './types-38.js';
import type { ResponseMeta, ResourceReference } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from './types-67.js';
import type { ExpandedPayoutDestinationSummary, ExpandedPayoutSummary } from './types-24.js';
import type { Payout } from './types-47.js';
import type { CancelPayoutRequestInput } from './types-4.js';
import type { CreatePayoutRequestInput } from './types-11.js';
import type { Address } from './types-0.js';
/** The account that receives merchant payouts. */
export type PayoutDestination = {
    /**
     * Payout methods available through Flint for this destination. Only standard is currently
     * available. [] enum: "standard". [] (Value): string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Name of the bank, when your processor reports it. */
    "bank_name"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * When the destination was last disabled or archived. Absent if it never was. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "disabled_at"?: string;
    /**
     * Flint-normalized reason the payout destination cannot currently be used. Unknown
     * provider/backend values are returned as destination_unavailable. Value enum:
     * "destination_disabled", "destination_removed", "destination_unavailable",
     * "destination_rejected", "destination_under_review", "requirements_past_due",
     * "requirements_pending_verification".
     */
    "disabled_reason"?: "destination_disabled"
        | "destination_removed"
        | "destination_unavailable"
        | "destination_rejected"
        | "destination_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {});
    /**
     * Whether this is the default destination for its currency. Scheduled payouts, and payouts
     * created without payout_destination_id, go to the default, and only an active destination can
     * be it.
     */
    "is_default_for_currency": boolean;
    /** Last four digits of the account or card number. */
    "last4"?: string;
    /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". */
    "payout_destination_id": string;
    /**
     * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * When Flint last recorded the destination's status. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "status_updated_at"?: string;
    /**
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** When the destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PayoutDestinationArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.archived";
});
/**
 * The `payout_destination.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.archived". */
    "event_type"?: "payout_destination.archived";
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
 * The `payout_destination.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.archived". */
    "event_type"?: "payout_destination.archived";
});
export type PayoutDestinationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.created";
});
/**
 * The `payout_destination.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
    /** Value enum: "payout_destination.created". */
    "event_type"?: "payout_destination.created";
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
 * The `payout_destination.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
    /** Value enum: "payout_destination.created". */
    "event_type"?: "payout_destination.created";
});
export type PayoutDestinationDisabledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.disabled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.disabled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.disabled";
});
/**
 * The `payout_destination.disabled` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationDisabledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.disabled". */
    "event_type"?: "payout_destination.disabled";
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
 * The `payout_destination.disabled` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationDisabledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.disabled". */
    "event_type"?: "payout_destination.disabled";
});
/** A page of `PayoutDestination` objects. */
export type PayoutDestinationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PayoutDestination}. The account that receives merchant payouts.
     */
    "data": Array<PayoutDestination>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
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
/** A response containing `PayoutDestination` data. */
export type PayoutDestinationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The account that
     * receives merchant payouts.
     */
    "data": PayoutDestination;
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
export type PayoutDestinationUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.updated";
});
/**
 * The `payout_destination.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.updated". */
    "event_type"?: "payout_destination.updated";
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
 * The `payout_destination.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.updated". */
    "event_type"?: "payout_destination.updated";
});
export type PayoutDestinationsDeleteParams = {
    /**
     * Optional payout destination version last read by the caller. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type PayoutDestinationsGetParams = DisputesAcceptParams;
export type PayoutDestinationsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Optional payout destination type filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "bank_account", "debit_card". Value enum: "bank_account",
     * "debit_card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "bank_account",
     * "debit_card". anyOf[1][] (Value): string. Value enum: "bank_account", "debit_card". anyOf[2]
     * (Value): string. Value enum: "bank_account", "debit_card".
     */
    "type"?: InputValue<("bank_account" | "debit_card") | readonly ("bank_account" | "debit_card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". Value enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed". anyOf[1][] (Value): string. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * anyOf[2] (Value): string. Value enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed".
     */
    "status"?: InputValue<("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")
        | readonly ("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")[]>;
    /**
     * Optional available payout method filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "standard". Value enum: "standard". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "standard". anyOf[1][] (Value): string. Value enum:
     * "standard". anyOf[2] (Value): string. Value enum: "standard".
     */
    "available_payout_methods"?: InputValue<("standard") | readonly ("standard")[]>;
    /** Whether to return only destinations that are the default for their currency. */
    "is_default_for_currency"?: InputValue<boolean>;
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
export type PayoutDestinationsUpdateParams = (InputValue<UpdatePayoutDestinationRequestInput>);
export type PayoutFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.failed";
});
/**
 * The `payout.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type PayoutFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.failed". */
    "event_type"?: "payout.failed";
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
 * The `payout.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.failed". */
    "event_type"?: "payout.failed";
});
/** A page of `Payout` objects. */
export type PayoutListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Payout}. Funds sent from a merchant balance to a payout destination.
     */
    "data": Array<Payout>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
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
/** A response containing `Payout` data. */
export type PayoutResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data": Payout;
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
export type PayoutReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.reversed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.reversed";
});
/**
 * The `payout.reversed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutReversedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.reversed". */
    "event_type"?: "payout.reversed";
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
 * The `payout.reversed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.reversed". */
    "event_type"?: "payout.reversed";
});
/** The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
     * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a
     * message, next steps, and who can resolve it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
     * precision. Null when no stored settings record exists. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string | null;
    /**
     * Default payout destination for each currency, as a map from currency code to
     * payout_destination_id. Empty when no defaults are configured. Change a currency's default
     * with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded
     * component. * (Value): string.
     */
    "default_payout_destinations": Record<string, string>;
    /**
     * Normal settlement delay in days before a payment's funds become available to pay out. A new
     * account's first payments can stay pending longer; each balance transaction's available_at is
     * when its funds become available. Format: int32.
     */
    "delay_days": number;
    /**
     * Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't
     * guarantee the pending time of every payment; see available_at on each balance transaction.
     * Absent when none is set. Format: int32.
     */
    "delay_days_override"?: number;
    /**
     * Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual",
     * "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Amount kept in your balance instead of paid out, keyed by currency code. Absent when no
     * minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "minimum_balance_currency_options"?: Record<string, MoneyValue>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value): integer.
     * Format: int32.
     */
    "monthly_payout_days": Array<number>;
    /**
     * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id.
     */
    "next_actions": Array<NextAction>;
    /** Stable identifier of your payout settings. Example: "pset_01KEZF7C0027X093301CQ36WSZ". */
    "payout_settings_id": string;
    /** Text shown on your bank statement for payouts. Absent when none is set. */
    "statement_descriptor"?: string;
    /**
     * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
     * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
     * "enabled", "disabled", "blocked", "pending".
     */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string | null;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday
     * or sunday; when you change the schedule, Flint accepts monday through friday. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". [] (Value):
     * string. Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
     * "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsGetParams = DisputesAcceptParams;
/** A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The merchant's payout
     * schedule and preferences.
     */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateParams = (InputValue<UpdatePayoutSettingsRequestInput>);
export type PayoutSettingsUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            "created_at": string | null;
            "default_payout_destinations": Record<string, string>;
            "delay_days": number;
            "delay_days_override"?: number;
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            "merchant_id": string;
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            "monthly_payout_days": Array<number>;
            "next_actions": Array<NextAction>;
            "payout_settings_id": string;
            "statement_descriptor"?: string;
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            "updated_at": string | null;
            "version": number;
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_settings.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            "created_at": string | null;
            "default_payout_destinations": Record<string, string>;
            "delay_days": number;
            "delay_days_override"?: number;
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            "merchant_id": string;
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            "monthly_payout_days": Array<number>;
            "next_actions": Array<NextAction>;
            "payout_settings_id": string;
            "statement_descriptor"?: string;
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            "updated_at": string | null;
            "version": number;
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_settings.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_settings.updated";
});
/**
 * The `payout_settings.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PayoutSettingsUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.blocked_reasons (Required): Array of {@link
     * MoneyMovementBlockedReason}. Why payouts can't run. Empty when nothing blocks them.
     * object.blocked_reasons[] (Value): {@link MoneyMovementBlockedReason}. Why a money movement
     * action is blocked, with an error code, a message, next steps, and who can resolve it.
     * object.created_at (Required): string or null. When Flint stored the payout settings record,
     * as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_payout_destinations
     * (Required): Map of string. Default payout destination for each currency, as a map from
     * currency code to payout_destination_id. Empty when no defaults are configured. Change a
     * currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in
     * the payouts embedded component. object.default_payout_destinations.* (Value): string.
     * object.delay_days (Required): integer. Normal settlement delay in days before a payment's
     * funds become available to pay out. A new account's first payments can stay pending longer;
     * each balance transaction's available_at is when its funds become available. Format: int32.
     * object.delay_days_override (Optional): integer. Settlement delay in days you set in place of
     * the account's default, 0 through 31. It doesn't guarantee the pending time of every payment;
     * see available_at on each balance transaction. Absent when none is set. Format: int32.
     * object.interval (Required): string. Payout schedule interval. Unmapped intervals are
     * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * object.merchant_id (Required): string. Merchant these settings belong to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.minimum_balance_currency_options (Optional): Map of
     * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency code.
     * Absent when no minimum is set. object.minimum_balance_currency_options.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.monthly_payout_days (Required): Array of integer. Days of the month, 1 through
     * 31, on which monthly payouts are sent. object.monthly_payout_days[] (Value): integer.
     * Format: int32. object.next_actions (Required): Array of {@link NextAction}. Steps that would
     * let payouts run, when Flint has one to suggest. Empty otherwise. object.next_actions[]
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id. object.payout_settings_id
     * (Required): string. Stable identifier of your payout settings. Example:
     * "pset_01KEZF7C0027X093301CQ36WSZ". object.statement_descriptor (Optional): string. Text
     * shown on your bank statement for payouts. Absent when none is set. object.status (Required):
     * string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
     * enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value
     * enum: "enabled", "disabled", "blocked", "pending". object.updated_at (Required): string or
     * null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.weekly_payout_days (Required): Array of
     * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report
     * saturday or sunday; when you change the schedule, Flint accepts monday through friday. []
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * object.weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday", "saturday", "sunday". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * blocked_reasons (Required): Array of {@link MoneyMovementBlockedReason}. Why payouts
         * can't run. Empty when nothing blocks them. blocked_reasons[] (Value): {@link
         * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code,
         * a message, next steps, and who can resolve it. created_at (Required): string or null.
         * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
         * precision. Null when no stored settings record exists. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". default_payout_destinations (Required): Map of string. Default
         * payout destination for each currency, as a map from currency code to
         * payout_destination_id. Empty when no defaults are configured. Change a currency's
         * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
         * payouts embedded component. default_payout_destinations.* (Value): string. delay_days
         * (Required): integer. Normal settlement delay in days before a payment's funds become
         * available to pay out. A new account's first payments can stay pending longer; each
         * balance transaction's available_at is when its funds become available. Format: int32.
         * delay_days_override (Optional): integer. Settlement delay in days you set in place of
         * the account's default, 0 through 31. It doesn't guarantee the pending time of every
         * payment; see available_at on each balance transaction. Absent when none is set. Format:
         * int32. interval (Required): string. Payout schedule interval. Unmapped intervals are
         * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
         * merchant_id (Required): string. Merchant these settings belong to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". minimum_balance_currency_options (Optional): Map of
         * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency
         * code. Absent when no minimum is set. minimum_balance_currency_options.* (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. monthly_payout_days (Required): Array of integer. Days of the month, 1
         * through 31, on which monthly payouts are sent. monthly_payout_days[] (Value): integer.
         * Format: int32. next_actions (Required): Array of {@link NextAction}. Steps that would
         * let payouts run, when Flint has one to suggest. Empty otherwise. next_actions[] (Value):
         * {@link NextAction}. A follow-up action. When target_resource is present, send its
         * resource_id in the target request field named {resource_type}_id. payout_settings_id
         * (Required): string. Stable identifier of your payout settings. Example:
         * "pset_01KEZF7C0027X093301CQ36WSZ". statement_descriptor (Optional): string. Text shown
         * on your bank statement for payouts. Absent when none is set. status (Required): string.
         * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
         * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
         * "enabled", "disabled", "blocked", "pending". updated_at (Required): string or null. When
         * the stored payout settings record was last updated, as an RFC 3339 UTC instant at second
         * precision. Without a stored record, this is your processor's update time. `null` when
         * there is no stored record and your processor supplied no update time. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1. weekly_payout_days (Required): Array of
         * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can
         * report saturday or sunday; when you change the schedule, Flint accepts monday through
         * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
         * "sunday". weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday",
         * "wednesday", "thursday", "friday", "saturday", "sunday".
         */
        "object": {
            /**
             * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
             * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error
             * code, a message, next steps, and who can resolve it.
             */
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            /**
             * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
             * precision. Null when no stored settings record exists. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string | null;
            /**
             * Default payout destination for each currency, as a map from currency code to
             * payout_destination_id. Empty when no defaults are configured. Change a currency's
             * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
             * payouts embedded component. * (Value): string.
             */
            "default_payout_destinations": Record<string, string>;
            /**
             * Normal settlement delay in days before a payment's funds become available to pay
             * out. A new account's first payments can stay pending longer; each balance
             * transaction's available_at is when its funds become available. Format: int32.
             */
            "delay_days": number;
            /**
             * Settlement delay in days you set in place of the account's default, 0 through 31. It
             * doesn't guarantee the pending time of every payment; see available_at on each
             * balance transaction. Absent when none is set. Format: int32.
             */
            "delay_days_override"?: number;
            /**
             * Payout schedule interval. Unmapped intervals are returned as other. Value enum:
             * "manual", "daily", "weekly", "monthly", "other".
             */
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Amount kept in your balance instead of paid out, keyed by currency code. Absent when
             * no minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            /**
             * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value):
             * integer. Format: int32.
             */
            "monthly_payout_days": Array<number>;
            /**
             * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
             * (Value): {@link NextAction}. A follow-up action. When target_resource is present,
             * send its resource_id in the target request field named {resource_type}_id.
             */
            "next_actions": Array<NextAction>;
            /**
             * Stable identifier of your payout settings. Example:
             * "pset_01KEZF7C0027X093301CQ36WSZ".
             */
            "payout_settings_id": string;
            /** Text shown on your bank statement for payouts. Absent when none is set. */
            "statement_descriptor"?: string;
            /**
             * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
             * enabled, blocked_reasons says why and next_actions lists any steps Flint can
             * suggest. Value enum: "enabled", "disabled", "blocked", "pending".
             */
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            /**
             * When the stored payout settings record was last updated, as an RFC 3339 UTC instant
             * at second precision. Without a stored record, this is your processor's update time.
             * `null` when there is no stored record and your processor supplied no update time.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string | null;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Days of the week weekly payouts are sent. Accounts set up outside Flint can report
             * saturday or sunday; when you change the schedule, Flint accepts monday through
             * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
             * "sunday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
             * "thursday", "friday", "saturday", "sunday".
             */
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_settings.updated". */
    "event_type"?: "payout_settings.updated";
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
 * The `payout_settings.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PayoutSettingsUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.blocked_reasons (Required): Array of {@link
     * MoneyMovementBlockedReason}. Why payouts can't run. Empty when nothing blocks them.
     * object.blocked_reasons[] (Value): {@link MoneyMovementBlockedReason}. Why a money movement
     * action is blocked, with an error code, a message, next steps, and who can resolve it.
     * object.created_at (Required): string or null. When Flint stored the payout settings record,
     * as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_payout_destinations
     * (Required): Map of string. Default payout destination for each currency, as a map from
     * currency code to payout_destination_id. Empty when no defaults are configured. Change a
     * currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in
     * the payouts embedded component. object.default_payout_destinations.* (Value): string.
     * object.delay_days (Required): integer. Normal settlement delay in days before a payment's
     * funds become available to pay out. A new account's first payments can stay pending longer;
     * each balance transaction's available_at is when its funds become available. Format: int32.
     * object.delay_days_override (Optional): integer. Settlement delay in days you set in place of
     * the account's default, 0 through 31. It doesn't guarantee the pending time of every payment;
     * see available_at on each balance transaction. Absent when none is set. Format: int32.
     * object.interval (Required): string. Payout schedule interval. Unmapped intervals are
     * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * object.merchant_id (Required): string. Merchant these settings belong to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.minimum_balance_currency_options (Optional): Map of
     * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency code.
     * Absent when no minimum is set. object.minimum_balance_currency_options.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.monthly_payout_days (Required): Array of integer. Days of the month, 1 through
     * 31, on which monthly payouts are sent. object.monthly_payout_days[] (Value): integer.
     * Format: int32. object.next_actions (Required): Array of {@link NextAction}. Steps that would
     * let payouts run, when Flint has one to suggest. Empty otherwise. object.next_actions[]
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id. object.payout_settings_id
     * (Required): string. Stable identifier of your payout settings. Example:
     * "pset_01KEZF7C0027X093301CQ36WSZ". object.statement_descriptor (Optional): string. Text
     * shown on your bank statement for payouts. Absent when none is set. object.status (Required):
     * string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
     * enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value
     * enum: "enabled", "disabled", "blocked", "pending". object.updated_at (Required): string or
     * null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.weekly_payout_days (Required): Array of
     * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report
     * saturday or sunday; when you change the schedule, Flint accepts monday through friday. []
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * object.weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday", "saturday", "sunday". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * blocked_reasons (Required): Array of {@link MoneyMovementBlockedReason}. Why payouts
         * can't run. Empty when nothing blocks them. blocked_reasons[] (Value): {@link
         * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code,
         * a message, next steps, and who can resolve it. created_at (Required): string or null.
         * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
         * precision. Null when no stored settings record exists. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". default_payout_destinations (Required): Map of string. Default
         * payout destination for each currency, as a map from currency code to
         * payout_destination_id. Empty when no defaults are configured. Change a currency's
         * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
         * payouts embedded component. default_payout_destinations.* (Value): string. delay_days
         * (Required): integer. Normal settlement delay in days before a payment's funds become
         * available to pay out. A new account's first payments can stay pending longer; each
         * balance transaction's available_at is when its funds become available. Format: int32.
         * delay_days_override (Optional): integer. Settlement delay in days you set in place of
         * the account's default, 0 through 31. It doesn't guarantee the pending time of every
         * payment; see available_at on each balance transaction. Absent when none is set. Format:
         * int32. interval (Required): string. Payout schedule interval. Unmapped intervals are
         * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
         * merchant_id (Required): string. Merchant these settings belong to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". minimum_balance_currency_options (Optional): Map of
         * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency
         * code. Absent when no minimum is set. minimum_balance_currency_options.* (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. monthly_payout_days (Required): Array of integer. Days of the month, 1
         * through 31, on which monthly payouts are sent. monthly_payout_days[] (Value): integer.
         * Format: int32. next_actions (Required): Array of {@link NextAction}. Steps that would
         * let payouts run, when Flint has one to suggest. Empty otherwise. next_actions[] (Value):
         * {@link NextAction}. A follow-up action. When target_resource is present, send its
         * resource_id in the target request field named {resource_type}_id. payout_settings_id
         * (Required): string. Stable identifier of your payout settings. Example:
         * "pset_01KEZF7C0027X093301CQ36WSZ". statement_descriptor (Optional): string. Text shown
         * on your bank statement for payouts. Absent when none is set. status (Required): string.
         * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
         * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
         * "enabled", "disabled", "blocked", "pending". updated_at (Required): string or null. When
         * the stored payout settings record was last updated, as an RFC 3339 UTC instant at second
         * precision. Without a stored record, this is your processor's update time. `null` when
         * there is no stored record and your processor supplied no update time. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1. weekly_payout_days (Required): Array of
         * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can
         * report saturday or sunday; when you change the schedule, Flint accepts monday through
         * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
         * "sunday". weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday",
         * "wednesday", "thursday", "friday", "saturday", "sunday".
         */
        "object": {
            /**
             * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
             * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error
             * code, a message, next steps, and who can resolve it.
             */
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            /**
             * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
             * precision. Null when no stored settings record exists. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string | null;
            /**
             * Default payout destination for each currency, as a map from currency code to
             * payout_destination_id. Empty when no defaults are configured. Change a currency's
             * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
             * payouts embedded component. * (Value): string.
             */
            "default_payout_destinations": Record<string, string>;
            /**
             * Normal settlement delay in days before a payment's funds become available to pay
             * out. A new account's first payments can stay pending longer; each balance
             * transaction's available_at is when its funds become available. Format: int32.
             */
            "delay_days": number;
            /**
             * Settlement delay in days you set in place of the account's default, 0 through 31. It
             * doesn't guarantee the pending time of every payment; see available_at on each
             * balance transaction. Absent when none is set. Format: int32.
             */
            "delay_days_override"?: number;
            /**
             * Payout schedule interval. Unmapped intervals are returned as other. Value enum:
             * "manual", "daily", "weekly", "monthly", "other".
             */
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Amount kept in your balance instead of paid out, keyed by currency code. Absent when
             * no minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            /**
             * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value):
             * integer. Format: int32.
             */
            "monthly_payout_days": Array<number>;
            /**
             * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
             * (Value): {@link NextAction}. A follow-up action. When target_resource is present,
             * send its resource_id in the target request field named {resource_type}_id.
             */
            "next_actions": Array<NextAction>;
            /**
             * Stable identifier of your payout settings. Example:
             * "pset_01KEZF7C0027X093301CQ36WSZ".
             */
            "payout_settings_id": string;
            /** Text shown on your bank statement for payouts. Absent when none is set. */
            "statement_descriptor"?: string;
            /**
             * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
             * enabled, blocked_reasons says why and next_actions lists any steps Flint can
             * suggest. Value enum: "enabled", "disabled", "blocked", "pending".
             */
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            /**
             * When the stored payout settings record was last updated, as an RFC 3339 UTC instant
             * at second precision. Without a stored record, this is your processor's update time.
             * `null` when there is no stored record and your processor supplied no update time.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string | null;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Days of the week weekly payouts are sent. Accounts set up outside Flint can report
             * saturday or sunday; when you change the schedule, Flint accepts monday through
             * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
             * "sunday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
             * "thursday", "friday", "saturday", "sunday".
             */
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_settings.updated". */
    "event_type"?: "payout_settings.updated";
});
export type PayoutSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.succeeded";
});
/**
 * The `payout.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.succeeded". */
    "event_type"?: "payout.succeeded";
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
 * The `payout.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PayoutSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.succeeded". */
    "event_type"?: "payout.succeeded";
});
/** A payout's bank trace ID, with whether it is pending, available, or unsupported. */
export type PayoutTraceID = {
    /**
     * Whether a bank trace ID is available. Unmapped trace states are returned as unsupported.
     * Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** The bank's trace number for the deposit, when Flint has it. */
    "value"?: string;
};
export type PayoutUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.updated";
});
/**
 * The `payout.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.updated". */
    "event_type"?: "payout.updated";
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
 * The `payout.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.updated". */
    "event_type"?: "payout.updated";
});
export type PayoutsCancelParams = (InputValue<CancelPayoutRequestInput>);
export type PayoutsCreateParams = (InputValue<CreatePayoutRequestInput>);
export type PayoutsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: original_payout,
     * payout_destination, reversed_by_payout. Expansion requires money_movement.payouts.read plus
     * the read scope for each expanded resource. Limits: at most 10 unique expand paths per
     * request. [] enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of
     * string. [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][]
     * (Value): string. Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * anyOf[2] (Value): string. Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
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
export type PayoutsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: original_payout,
     * payout_destination, reversed_by_payout. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout". anyOf[1] (Value): Array of string. [] enum: "original_payout",
     * "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string. Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.
     * Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
    /**
     * Filter recorded payouts by method. Flint sends only standard payouts. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "standard", "instant", "other". Value
     * enum: "standard", "instant", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "standard", "instant", "other". anyOf[1][] (Value): string. Value enum: "standard",
     * "instant", "other". anyOf[2] (Value): string. Value enum: "standard", "instant", "other".
     */
    "method"?: InputValue<("standard" | "instant" | "other") | readonly ("standard" | "instant" | "other")[]>;
    /**
     * Optional Flint balance source type filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "card", "bank_account". Value enum: "card", "bank_account".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". anyOf[1][]
     * (Value): string. Value enum: "card", "bank_account". anyOf[2] (Value): string. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: InputValue<("card" | "bank_account") | readonly ("card" | "bank_account")[]>;
    /**
     * Optional payout destination ID filter. pattern: ^pdest_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payout ID, external reference ID, description, and statement descriptor. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as po_01.
     */
    "query"?: InputValue<string>;
    /**
     * Optional payout status filter. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "pending", "in_transit", "succeeded", "failed", "canceled". Value enum:
     * "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     * anyOf[1][] (Value): string. Value enum: "pending", "in_transit", "succeeded", "failed",
     * "canceled". anyOf[2] (Value): string. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "in_transit" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "in_transit" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * Example: "2026-08-02".
     */
    "arrival_date_from"?: InputValue<string>;
    /**
     * Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * Example: "2026-08-02".
     */
    "arrival_date_to"?: InputValue<string>;
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
/**
 * Client-side action required before continuing a payment. Resume an order through PayOrder with
 * order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint
 * without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method.
     * card_presentment means present the card on the Tap to Pay reader in your app. Value enum:
     * "payment_authentication", "payment_method_authentication", "card_presentment".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | "card_presentment" | (string & {});
    /**
     * How to finish this step before continuing through Flint. Flint's API returns a Stripe client
     * secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's
     * authentication page receives what it needs to run the challenge. How to finish a payment
     * step. Flint's API returns a Stripe client secret only for client_action_type stripe. With
     * url, Stripe's authentication page receives what it needs to run the challenge, including the
     * client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't
     * approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent
     * ends canceled with cancellation_reason payment_returned.
     */
    "client_action": PaymentClientAction;
    /**
     * When this step stops working. For a standalone payment intent, 12 hours after the step was
     * created; for an order payment, when its attempt is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming
     * an attempt. Example: "pendact_01KEZF7C00SVMRXWKVZX6R9822".
     */
    "pending_action_id": string;
    /**
     * The attempt subject that requires client action. Exactly one of payment_intent or
     * setup_payment_source is present. Typed subject for a pending order payment action. Exactly
     * one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/** The payment intent that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionPaymentIntentSubject = {
    /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
};
/** The payment method setup that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id": string;
};
/** Typed subject for a pending order payment action. Exactly one subject is present. */
export type PendingPaymentActionSubject = {
    /**
     * PaymentIntent that requires buyer authentication or card presentment. It can be a standalone
     * intent or an order-owned payment leg. The payment intent that needs buyer authentication in
     * a pending payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Future-billing payment method setup that requires buyer authentication. The payment method
     * setup that needs buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Pickup details. For a pickup that checkout creates, location_name, address, and instructions
 * name the store the buyer chose and the delivery method's pickup instructions. The note the buyer
 * left for the store is in recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /**
     * When the recipient collected the items, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_up_at"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string;
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * When the items became ready for pickup, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Timezone used to display the pickup window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500.
     */
    "vehicle_description"?: string;
    /**
     * End of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/**
 * A platform fee your partner app charged, or asked to charge, on a payment it created for an
 * installed merchant. Owned by the merchant that owns the partner app.
 */
export type PlatformFee = {
    /**
     * The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it
     * at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why Flint collected no fee. Present only when status is canceled. Can gain values. Value
     * enum: "payment_not_completed", "install_revoked", "platform_capability_inactive",
     * "uncollectible".
     */
    "canceled_reason"?: "payment_not_completed"
        | "install_revoked"
        | "platform_capability_inactive"
        | "uncollectible"
        | (string & {});
    /**
     * The checkout session the payment came from. Absent when the fee was sent with the payment
     * itself. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * When Flint collected the fee with the payment. Absent unless status is succeeded. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "collected_at"?: string;
    /**
     * When the payment's create recorded the fee. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * The installed merchant charged the fee, as on the install. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /** The partner app that charged the fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * The install whose partner app token created the payment. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
    /**
     * The payment the fee rides on, owned by the installed merchant. After that merchant resets
     * the sandbox the payment was in, the ID no longer resolves. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id.
     * Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id": string;
    /**
     * The fee returned to the installed merchant so far, including opted-in payment refunds and
     * returns of the whole application fee. A failed refund reverses its share of this total. 0
     * when nothing has been returned. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * The fee the request asked for. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "requested_amount_money": MoneyValue;
    /**
     * When the held share is due to return to your available balance. Absent until the fee posts,
     * and when nothing was held. Setting it sends no event. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "reserve_available_at"?: string;
    /**
     * The share of the fee Flint held in your reserve when it posted the fee to your ledger.
     * Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read
     * PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_hold_money"?: MoneyValue;
    /** Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled". */
    "status": "pending" | "succeeded" | "canceled" | (string & {});
    /** When the fee last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One partner app's platform fee balance in one currency. */
export type PlatformFeeBalance = {
    /**
     * Fees Flint holds as available funds, net of the reserve. It can be negative: a fee returned
     * after payout is owed back from your next fees. available_money plus pending_money equals the
     * sum of amount_money over the app's balance transactions in this currency. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * ISO 4217 currency code of every amount on the balance. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * The next scheduled payout run. Absent until scheduled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "next_payout_at"?: string;
    /** The partner app the balance belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Why payouts wait. Present only when payouts_enabled is false. Can gain values. Value enum:
     * "platform_paused", "merchant_payouts_unavailable".
     */
    "payouts_disabled_reason"?: "platform_paused" | "merchant_payouts_unavailable" | (string & {});
    /**
     * Whether your platform and merchant account can receive payouts. Flint deferring a run for
     * cash safety doesn't disable payouts.
     */
    "payouts_enabled": boolean;
    /**
     * Fees Flint hasn't received as available funds yet, net of their reserve holds. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "pending_money": MoneyValue;
    /** Unique identifier for the balance. Example: "pfbal_01KEZF7C005QNZBGFAR0NNPEQ4". */
    "platform_fee_balance_id": string;
    /**
     * What Flint holds in your reserve now: reserve holds minus releases. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_money": MoneyValue;
    /** When the balance last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `PlatformFeeBalance` objects. */
export type PlatformFeeBalanceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeeBalance}. One partner app's platform fee balance in one currency.
     */
    "data": Array<PlatformFeeBalance>;
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
 * One entry of a partner app's platform fee ledger. Entries keep their amounts; status,
 * available_at and the payout link can be filled later.
 */
export type PlatformFeeBalanceTransaction = {
    /**
     * The signed effect on available_money plus pending_money: positive for money in, negative for
     * money out. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the entry becomes, or became, available. Absent while Flint hasn't verified the
     * application fee that carries it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "available_at"?: string;
    /** When Flint recorded the entry. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Display text, not for matching. */
    "description"?: string;
    /** When the movement happened. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** The partner app the entry belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Unique identifier for the balance transaction. Example: "pfbt_01KEZF7C0079KPKMAHC7C60G1T".
     */
    "platform_fee_balance_transaction_id": string;
    /**
     * The fee the entry concerns, when it concerns one. Example:
     * "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id"?: string;
    /**
     * The payout that carried the entry. Set once when a payout is prepared, and never changed.
     * Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id"?: string;
    /**
     * Earlier entries this one is linked to. Empty when none. [] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "related_balance_transaction_ids": Array<string>;
    /**
     * The Flint resource behind the entry, when it has one other than the fee. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "related_resource"?: ResourceReference;
    /** Whether the amount counts toward available_money yet. Value enum: "pending", "available". */
    "status": "pending" | "available" | (string & {});
    /**
     * What the entry records. Can gain values; treat an unknown value as other. Value enum:
     * "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal", "other".
     */
    "type": "platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal"
        | "other"
        | (string & {});
};
/** A page of `PlatformFeeBalanceTransaction` objects. */
export type PlatformFeeBalanceTransactionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeeBalanceTransaction}. One entry of a partner app's platform fee ledger. Entries
     * keep their amounts; status, available_at and the payout link can be filled later.
     */
    "data": Array<PlatformFeeBalanceTransaction>;
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
/** A response containing `PlatformFeeBalanceTransaction` data. */
export type PlatformFeeBalanceTransactionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One entry of a partner
     * app's platform fee ledger. Entries keep their amounts; status, available_at and the payout
     * link can be filled later.
     */
    "data": PlatformFeeBalanceTransaction;
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
export type PlatformFeeBalanceTransactionsGetParams = {};
export type PlatformFeeBalanceTransactionsListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the fee the entry concerns. minLength: 1. pattern:
     * ^pfee_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id"?: InputValue<string>;
    /**
     * Exact match on the payout that carried the entry. minLength: 1. pattern:
     * ^pfpo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id"?: InputValue<string>;
    /**
     * Types to include. Omit it to list every type. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "platform_fee", "reserve_hold", "reserve_release",
     * "loss_coverage", "loss_coverage_reversal", "platform_fee_refund",
     * "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". Value
     * enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1][] (Value): string. Value
     * enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[2] (Value): string. Value enum:
     * "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal".
     */
    "type"?: InputValue<("platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal")
        | readonly ("platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal")[]>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
export type PlatformFeeBalancesListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
};
export type PlatformFeeCanceledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PlatformFee>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.canceled";
})
    & {
    "event_type": "platform_fee.canceled";
});
/**
 * The most a platform fee can take from one payment. The largest platform fee on a payment is
 * percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed
 * part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a
 * 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum
 * can't carry a platform fee.
 */
export type PlatformFeeCap = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part.
     * Omitted when no currency has one. Only USD today. * (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "fixed_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * The maximum fee on one payment, keyed by currency code. Only USD today. * (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part
     * alone. minimum: 0. maximum: 25. multipleOf: 0.0001.
     */
    "percent": number;
};
/**
 * The whole platform fee cap. The largest platform fee on a payment is percent of the amount it
 * collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and
 * never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up
 * to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A
 * write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed
 * part.
 */
export type PlatformFeeCapRequestInput = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part:
     * 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to
     * the same currency's maximum, and a currency needs a maximum to have one; otherwise
     * INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency.
     * Only USD today. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "fixed_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units
     * ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today.
     * minProperties: 1. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValueInput>;
    /**
     * The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places.
     * 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat
     * fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency
     * without one. minimum: 0. maximum: 25. multipleOf: 0.0001.
     */
    "percent": number;
};
export type PlatformFeeCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.created";
})
    & {
    "event_type": "platform_fee.created";
});
/** A page of `PlatformFee` objects. */
export type PlatformFeeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFee}. A platform fee your partner app charged, or asked to charge, on a payment it
     * created for an installed merchant. Owned by the merchant that owns the partner app.
     */
    "data": Array<PlatformFee>;
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
