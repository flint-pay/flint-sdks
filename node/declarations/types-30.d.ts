import type { InventoryTransfer, InventoryTransferLine } from './types-29.js';
import type { ResponseMeta, ReportInventoryTransferLossRequestInput } from './types-51.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { InventoryLevel } from './types-28.js';
import type { InputValue } from '../runtime.js';
import type { CancelInventoryTransferRequestInput } from './types-4.js';
import type { CreateInventoryTransferRequestInput } from './types-9.js';
import type { DepartInventoryTransferRequestInput, DisputesAcceptParams } from './types-22.js';
import type { ReceiveInventoryTransferRequestInput } from './types-50.js';
import type { ReturnInventoryTransferToOriginRequestInput } from './types-52.js';
import type { UpdateInventoryTransferRequestInput } from './types-63.js';
import type { Address } from './types-0.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary } from './types-23.js';
import type { InvoiceLateFee, InvoicePaymentAttempt } from './types-31.js';
import type {
    InvoicePaymentDue,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentPolicy,
    InvoicePaymentPolicyRequestInput
} from './types-32.js';
import type { InvoiceScheduleEntry, InvoiceSnapshot } from './types-33.js';
import type { MoneyValue } from './types-37.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput, CheckoutSession } from './types-5.js';
/** A page of `InventoryTransfer` objects. */
export type InventoryTransferListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryTransfer}. Stock moving between locations.
     */
    "data": Array<InventoryTransfer>;
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
export type InventoryTransferLostEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.lost";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.lost";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.lost";
});
/**
 * The `inventory_transfer.lost` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryTransferLostInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
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
 * The `inventory_transfer.lost` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryTransferLostMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
});
export type InventoryTransferReceivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.received";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.received";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.received";
});
/**
 * The `inventory_transfer.received` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferReceivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
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
 * The `inventory_transfer.received` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReceivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
});
/** A response containing `InventoryTransfer` data. */
export type InventoryTransferResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Stock moving between
     * locations.
     */
    "data": InventoryTransfer;
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
 * inventory_transfer is the primary resource and expected_version target. Stock-moving actions
 * return this result instead of a resource alone.
 */
export type InventoryTransferResult = {
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /** The inventory transfer. Stock moving between locations. */
    "inventory_transfer": InventoryTransfer;
};
/** A response containing `InventoryTransferResult` data. */
export type InventoryTransferResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. inventory_transfer is
     * the primary resource and expected_version target. Stock-moving actions return this result
     * instead of a resource alone.
     */
    "data": InventoryTransferResult;
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
export type InventoryTransferReturnedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.returned";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.returned";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.returned";
});
/**
 * The `inventory_transfer.returned` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferReturnedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
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
 * The `inventory_transfer.returned` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReturnedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
             */
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
});
export type InventoryTransfersCancelParams = (InputValue<CancelInventoryTransferRequestInput>)
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
export type InventoryTransfersCreateParams = (InputValue<CreateInventoryTransferRequestInput>)
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
export type InventoryTransfersDepartParams = (InputValue<DepartInventoryTransferRequestInput>)
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
export type InventoryTransfersGetParams = DisputesAcceptParams;
export type InventoryTransfersListParams = {
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
    /** Filter by inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id"?: InputValue<string>;
    /** Filter by origin Location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id"?: InputValue<string>;
    /** Filter by destination Location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "destination_location_id"?: InputValue<string>;
    /**
     * Filter by transfer status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "draft", "in_transit", "partially_resolved", "closed". Value enum: "draft",
     * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[1][] (Value):
     * string. Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[2] (Value):
     * string. Value enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "status"?: InputValue<("draft" | "in_transit" | "partially_resolved" | "closed")
        | readonly ("draft" | "in_transit" | "partially_resolved" | "closed")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Exact, case-sensitive match on the caller-owned external reference ID. Must contain 1 to 255
     * characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search by inventory_transfer_id, external_reference_id, or note. maxLength: 255. */
    "query"?: InputValue<string>;
    /**
     * Filter by how the transfer ended. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "received", "canceled", "received_with_cancellation", "returned",
     * "lost", "mixed". Value enum: "received", "canceled", "received_with_cancellation",
     * "returned", "lost", "mixed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * anyOf[1][] (Value): string. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed". anyOf[2] (Value): string. Value
     * enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     */
    "closed_reason"?: InputValue<("received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed")
        | readonly ("received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
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
export type InventoryTransfersReceiveParams = (InputValue<ReceiveInventoryTransferRequestInput>)
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
export type InventoryTransfersReportLossParams = (InputValue<ReportInventoryTransferLossRequestInput>)
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
export type InventoryTransfersReturnToOriginParams = (InputValue<ReturnInventoryTransferToOriginRequestInput>)
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
export type InventoryTransfersUpdateParams = (InputValue<UpdateInventoryTransferRequestInput>)
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
/** A bill issued to a customer. */
export type Invoice = {
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * How this invoice is collected, resolved when the draft is written. Send this object back
     * when updating its collection policy. The invoice collection policy resolved at write time.
     * The object can be sent back when updating a draft.
     */
    "collection": InvoiceCollection;
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit
     * isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "credit_money": MoneyValue;
    /**
     * The part of the balance due now. Without schedule_entries, it equals outstanding_money. With
     * schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose
     * due date has started and that still has a balance, or 0 when there is none. It is the amount
     * the next collect call or checkout session charges. To total everything overdue, add the
     * outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is
     * open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Customer billed by this invoice. Absent when the invoice has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
    "delivery_mode"?: "email" | "caller_managed" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
     * outstanding balance becomes overdue only after this date ends. Automatic collection runs at
     * the later of issue and the start of this date. With payment terms, issue computes this date
     * from issued_at. Absent when there is no due date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset.
     */
    "footer": string | null;
    /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * When the invoice was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "issued_at"?: string;
    /**
     * Late fees assessed after issue, minus waivers, including amounts since paid or written off.
     * Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. [] (Value): {@link
     * InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<InvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue.
     * `null` when unset.
     */
    "memo": string | null;
    /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Summary of the backing order. Returned only with expand=order. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Refunds don't
     * reduce it; they are in refunded_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * The resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. The invoice due-date policy resolved at write
     * time. The object can be sent back when updating a draft.
     */
    "payment_due": InvoicePaymentDue;
    /**
     * The payment term captured on the draft, with its due date rule and late fee policy. Later
     * changes to the payment term don't affect this invoice. The payment terms saved on an
     * invoice: the term's name, version, due date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. It cannot change after
     * issue. `null` when unset.
     */
    "po_number": string | null;
    /**
     * The hosted invoice link where the buyer views and pays the invoice. Present after issue on
     * API reads, except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret.
     */
    "public_url"?: string;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. `null` when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Whether automatic reminders are paused. Set reminders_paused on PATCH
     * /v1/invoices/{invoice_id} to change it.
     */
    "reminders_paused": boolean;
    /**
     * When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "reminders_paused_at"?: string;
    /**
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * The payment schedule, in schedule order. Always [] when the invoice has no schedule and is
     * collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One payment on an
     * invoice's payment schedule, such as a deposit, installment, or balance, with its due time,
     * amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
     * when the draft is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. `null` when unset. Format: date. Example:
     * "2026-08-02".
     */
    "service_date": string | null;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid",
     * "paid", "voided", "uncollectible", "credited".
     */
    "status": "draft"
        | "open"
        | "partially_paid"
        | "paid"
        | "voided"
        | "uncollectible"
        | "credited"
        | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". [] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void".
     */
    "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
    /**
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar.
     */
    "timezone"?: string;
    /**
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * When the invoice was marked uncollectible. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "uncollectible_at"?: string;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "voided_at"?: string;
    /**
     * The balance written off when the invoice was marked uncollectible, including unpaid late
     * fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * Read-only invoice history row for timeline rendering and debugging. Detail fields are present
 * only on the activity types their descriptions list. The invoice and the referenced resources
 * remain authoritative for state and money movement.
 */
export type InvoiceActivity = {
    /**
     * What happened. other means an activity this API version doesn't describe yet. New values may
     * be added; treat an unrecognized value like `other`. Value enum: "draft_created", "issued",
     * "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started",
     * "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded",
     * "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited", "other".
     */
    "activity_type": "draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited"
        | "other"
        | (string & {});
    /**
     * Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the
     * merchant ID. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "actor_id"?: string;
    /**
     * Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint
     * on a schedule or in response to a payment event. Absent when no actor was recorded. Example:
     * "merchant". Value enum: "merchant", "buyer", "system".
     */
    "actor_type"?: "merchant" | "buyer" | "system" | (string & {});
    /**
     * Amount of the payment, refund, or late fee. Present on payment_applied,
     * manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and
     * late_fee_waived, and on updated when a card refund changed or a credit note refund was
     * requested. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /** Delivery channel. Present on delivery_sent and reminder_sent. Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Checkout session the buyer paid through. Present on payment_attempt_started for hosted
     * payments. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * Why collection was blocked or unblocked. Present on collection_blocked and
     * collection_block_resolved. Value enum: "inventory_unavailable", "inventory_restored".
     */
    "collection_block_reason"?: "inventory_unavailable" | "inventory_restored" | (string & {});
    /** When the activity happened. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Total credit applied to the invoice. Present on credited. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "credit_money"?: MoneyValue;
    /**
     * Credit note that requested the refund. Present on updated when a credit note refund was
     * requested or changed. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /** Human-readable Flint description of the activity. */
    "description": string;
    /**
     * Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /** Public error code of the failed scheduled issue. Present on issue_failed. */
    "error_code"?: string;
    /**
     * Amount the processing payment is expected to settle. Present on payment_processing. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
    /**
     * Flint invoice activity ID. IDs begin with inevt_. Example:
     * "inevt_01KEZF7C00RQVKGDVE88YNX9FQ".
     */
    "invoice_activity_id": string;
    /**
     * The delivery attempt that sent the email. Present on delivery_sent and reminder_sent.
     * Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
     */
    "invoice_delivery_attempt_id"?: string;
    /**
     * The late fee. Present on late_fee_assessed and late_fee_waived. Example:
     * "inlf_01KEZF7C00NVR97MBH5AHR4W1X".
     */
    "invoice_late_fee_id"?: string;
    /**
     * The manual payment. Present on manual_payment_recorded and manual_payment_reversed. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "invoice_manual_payment_id"?: string;
    /**
     * The payment attempt. Present on payment_attempt_started and payment_processing. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     */
    "invoice_payment_attempt_id"?: string;
    /**
     * Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due,
     * late_fee_assessed, and late_fee_waived when the invoice has a payment schedule. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Payment intent whose funds were applied. Present on payment_applied. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Payment rail of the attempt. Present on payment_processing. Value enum: "card", "ach_debit".
     */
    "rail"?: "card" | "ach_debit" | (string & {});
    /**
     * Related refund. Present on refund_succeeded, and on updated when a card refund changed or a
     * credit note refund was requested or changed. Read the refund for its current status.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
    /** Recipient of the email. Present on delivery_sent and reminder_sent. */
    "to_email"?: string;
    /**
     * Balance written off. Present on marked_uncollectible. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "written_off_money"?: MoneyValue;
};
/** A page of `InvoiceActivity` objects. */
export type InvoiceActivityListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceActivity}. Read-only invoice history row for timeline rendering and debugging. Detail
     * fields are present only on the activity types their descriptions list. The invoice and the
     * referenced resources remain authoritative for state and money movement.
     */
    "data": Array<InvoiceActivity>;
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
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicy = {
    /**
     * Days after the due date to retry, from 1 to 30, in strictly increasing order, at most 5.
     * maxItems: 5. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 30.
     */
    "retry_day_offsets": Array<number>;
};
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicyInput = InvoiceAutopayRetryPolicy;
/**
 * The request body for: Create an invoice checkout session for the current buyer; Get or create
 * invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequest = ({
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * The request body for: Create an invoice checkout session for the current buyer; Get or create
 * invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequestInput = ({
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
/** A response containing `InvoiceCheckoutSessionResult` data. */
export type InvoiceCheckoutSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The invoice is the
     * primary resource, with its checkout session and any invoice payment attempt. Hosted launches
     * return checkout_session.url; embedded launches return checkout_auth_token.
     */
    "data": InvoiceCheckoutSessionResult;
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
 * The invoice is the primary resource, with its checkout session and any invoice payment attempt.
 * Hosted launches return checkout_session.url; embedded launches return checkout_auth_token.
 */
export type InvoiceCheckoutSessionResult = {
    /**
     * Checkout credential for embedded launches. Send it as Authorization: Bearer
     * <checkout_auth_token>. Omitted for hosted launches, which return checkout_session.url
     * instead.
     */
    "checkout_auth_token"?: string;
    /**
     * The checkout session created to collect the invoice or selected schedule entry. A session in
     * which a buyer completes an order's payment.
     */
    "checkout_session": CheckoutSession;
    /**
     * The invoice the checkout session collects, with its current balance. A bill issued to a
     * customer.
     */
    "invoice": Invoice;
    /**
     * The invoice payment attempt started for this checkout session. An attempt to collect payment
     * for an invoice.
     */
    "invoice_payment_attempt"?: InvoicePaymentAttempt;
};
/**
 * The invoice collection policy resolved at write time. The object can be sent back when updating
 * a draft.
 */
export type InvoiceCollection = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated", "automatic", "external".
     */
    "mode": "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `automatic` variant of `InvoiceCollection`. */
export type InvoiceCollectionAutomatic = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id": string | null;
}));
export type InvoiceCollectionBlockResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.collection_block_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.collection_block_resolved";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.collection_block_resolved";
});
/**
 * The `invoice.collection_block_resolved` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceCollectionBlockResolvedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
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
 * The `invoice.collection_block_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceCollectionBlockResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
});
export type InvoiceCollectionBlockedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.collection_blocked";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.collection_blocked";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.collection_blocked";
});
/**
 * The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceCollectionBlockedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
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
 * The `invoice.collection_blocked` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoiceCollectionBlockedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
});
/** The `buyer_initiated` variant of `InvoiceCollection`. */
export type InvoiceCollectionBuyerInitiated = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
}));
/** The `external` variant of `InvoiceCollection`. */
export type InvoiceCollectionExternal = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "external".
     */
    "mode": "external" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external" | (string & {});
}));
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomatic = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
}));
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomaticInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic";
})
    & (({
    "payment_policy"?: never;
})));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiated = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
}));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiatedInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated";
})
    & (({
    "payment_method_id"?: never;
})));
/** The `external` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputExternalInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "external".
     */
    "mode": "external";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefault = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default" | (string & {});
}));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefaultInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/**
 * How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional
 * saved payment method, and a payment policy.
 */
export type InvoiceCollectionRequest = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefault & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional
 * saved payment method, and a payment policy.
 */
export type InvoiceCollectionRequestInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit
     * it to use the invoice settings payment_policy, or the checkout payment options when that
     * isn't set. Which payment options an invoice accepts, any per-option total limits, and
     * whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiatedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputExternalInput & object, readonly unknown[]>));
export type InvoiceCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.created";
});
/**
 * The `invoice.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.created". */
    "event_type"?: "invoice.created";
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
 * The `invoice.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.created". */
    "event_type"?: "invoice.created";
});
export type InvoiceCreditedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.credited";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.credited";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.credited";
});
/**
 * The `invoice.credited` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceCreditedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited";
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
 * The `invoice.credited` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceCreditedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.paid_at
     * (Optional): string. When the invoice most recently became paid. Cleared when status leaves
     * paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Refunds don't reduce it; they are in
     * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
     * policy. Send this object back when updating the draft; payment_terms captures the term's
     * current revision again. The invoice due-date policy resolved at write time. The object can
     * be sent back when updating a draft. object.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date rule
     * and late fee policy. Later changes to the payment term don't affect this invoice. The
     * payment terms saved on an invoice: the term's name, version, due date calculation, and late
     * fee policy. object.po_number (Required): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.public_url (Optional): string. The hosted invoice link where the buyer views and pays
     * the invoice. Present after issue on API reads, except a list filtered by idempotency_key;
     * webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can
     * open the invoice, so treat it as a secret. object.recipient_email (Required): string or
     * null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset. object.reference (Required): string or null. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset. object.refund_status (Required):
     * string. How much of the collected money has been refunded. It doesn't change status. Value
     * enum: "none", "partially_refunded", "refunded". object.refunded_money (Required): {@link
     * MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.reminders_paused (Required): boolean. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * object.reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
     * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
     * shown on the invoice. Defaults to the invoice settings remit-to address. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
     * schedule, in schedule order. Always [] when the invoice has no schedule and is collected in
     * one balance. object.schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
     * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
     * time, amounts, and status. object.scheduled_issue_at (Required): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_date (Required): string or null. The calendar date of
     * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
     * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02". object.snapshot
     * (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts. object.status (Required): string. Current invoice status. paid and credited close
     * the current balance and can reopen to open or partially_paid after a payment or credit
     * allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts
     * manual recovery payments and becomes paid when fully recovered; reversals restore the
     * write-off. voided is final. Refunds change refund_status without reopening the balance.
     * Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". object.subscription_id (Required): string or null. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "collect", "issue", "mark_uncollectible", "void". object.supported_actions[] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void". object.timezone
     * (Optional): string. IANA time zone snapshot for invoice due dates, reminders, and late fee
     * calendar days. Taken from the merchant's timezone when the draft is written, or UTC when
     * unset. Later merchant changes do not alter this invoice's calendar. object.total_money
     * (Required): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.uncollectible_at (Optional): string. When the invoice
     * was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. When the invoice last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current invoice
     * version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * object.viewed_at (Optional): string. When the buyer first opened the invoice through its
     * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.voided_at (Optional): string. When the invoice was voided.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.written_off_money (Required):
     * {@link MoneyValue}. The balance written off when the invoice was marked uncollectible,
     * including unpaid late fees. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds don't change it. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. paid_at (Optional): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required): {@link MoneyValue}.
         * Payments collected toward this invoice, online or as recorded manual payments, minus
         * reversed payments, including payments toward late fees. Never below zero. Refunds don't
         * reduce it; they are in refunded_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. payment_due (Required): {@link InvoicePaymentDue}.
         * The resolved due-date policy. Send this object back when updating the draft;
         * payment_terms captures the term's current revision again. The invoice due-date policy
         * resolved at write time. The object can be sent back when updating a draft.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment term
         * captured on the draft, with its due date rule and late fee policy. Later changes to the
         * payment term don't affect this invoice. The payment terms saved on an invoice: the
         * term's name, version, due date calculation, and late fee policy. po_number (Required):
         * string or null. The buyer's purchase order number, printed on the invoice and PDF. It
         * cannot change after issue. `null` when unset. public_url (Optional): string. The hosted
         * invoice link where the buyer views and pays the invoice. Present after issue on API
         * reads, except a list filtered by idempotency_key; webhook payloads leave it out.
         * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat
         * it as a secret. recipient_email (Required): string or null. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * reference (Required): string or null. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. refund_status (Required): string. How much of the
         * collected money has been refunded. It doesn't change status. Value enum: "none",
         * "partially_refunded", "refunded". refunded_money (Required): {@link MoneyValue}. Money
         * refunded to the buyer after collection. Refunds don't reopen the balance; refund_status
         * summarizes them. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. reminders_paused (Required): boolean. Whether automatic reminders are
         * paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
         * reminders_paused_at (Optional): string. When automatic reminders were paused. Absent
         * while reminders are active. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * remit_to_address (Optional): {@link Address}. Where the buyer sends offline payments,
         * shown on the invoice. Defaults to the invoice settings remit-to address. A postal
         * address. Every address has country. Addresses Flint checked as complete (customer and
         * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * schedule_entries (Required): Array of {@link InvoiceScheduleEntry}. The payment
         * schedule, in schedule order. Always [] when the invoice has no schedule and is collected
         * in one balance. schedule_entries[] (Value): {@link InvoiceScheduleEntry}. One payment on
         * an invoice's payment schedule, such as a deposit, installment, or balance, with its due
         * time, amounts, and status. scheduled_issue_at (Required): string or null. When Flint
         * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the
         * draft is issued or voided, or when you send null. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_date (Required): string or null. The calendar date of
         * the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
         * without timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * snapshot (Optional): {@link InvoiceSnapshot}. The billing content of the invoice: line
         * items, discounts, charges, tip, tax, and totals. A draft previews the backing order;
         * issue freezes it, and later order changes don't reach an issued invoice. A frozen copy
         * of an issued invoice's content, including line items, charges, discounts, tax
         * identities, and pricing amounts. status (Required): string. Current invoice status. paid
         * and credited close the current balance and can reopen to open or partially_paid after a
         * payment or credit allocation reversal; invoice.reopened reports that change. An
         * uncollectible invoice accepts manual recovery payments and becomes paid when fully
         * recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". subscription_id
         * (Required): string or null. The subscription the backing order belongs to, copied when
         * the draft is created and never changed. `null` when the order isn't part of a
         * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
         * state. Independent of the caller's permissions; each action still requires its route's
         * scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Refunds
             * don't reduce it; they are in refunded_money. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.credited". */
    "event_type"?: "invoice.credited";
});
/** One attempt to email an invoice or an invoice reminder. */
export type InvoiceDeliveryAttempt = ({
    /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
    "cc_emails"?: Array<string>;
    /** How Flint delivered the invoice. Value enum: "email". */
    "channel": "email" | (string & {});
    /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Whether this attempt is the invoice email sent at issue or a reminder. Value enum: "send",
     * "reminder".
     */
    "delivery_type": "send" | "reminder" | (string & {});
    /**
     * Present only when status is failed. Legacy failed attempts without a stored reason return
     * rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     */
    "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
    /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
    "invoice_delivery_attempt_id": string;
    /**
     * ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * When the email service accepted the message. Absent until it does. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "sent_at"?: string;
    /**
     * The outcome of this attempt. sent means the email service accepted the message. Value enum:
     * "pending", "sent", "failed", "suppressed".
     */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Present only when status is suppressed. Value enum: "merchant_managed_email",
     * "recipient_unsubscribed", "sandbox_daily_limit_reached".
     */
    "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
    /** Address the invoice was sent to. `null` when the customer was deleted. */
    "to_email": string | null;
});
export type InvoiceDeliveryAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_delivery_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_delivery_attempt.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.failed";
});
/**
 * The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
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
 * The `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_delivery_attempt.failed". */
    "event_type"?: "invoice_delivery_attempt.failed";
});
/** A page of `InvoiceDeliveryAttempt` objects. */
export type InvoiceDeliveryAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceDeliveryAttempt}. One attempt to email an invoice or an invoice reminder.
     */
    "data": Array<InvoiceDeliveryAttempt>;
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
export type InvoiceDeliveryAttemptSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_delivery_attempt.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "cc_emails"?: Array<string>;
            "channel": "email" | (string & {});
            "created_at": string;
            "delivery_type": "send" | "reminder" | (string & {});
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            "invoice_delivery_attempt_id": string;
            "invoice_id": string;
            "sent_at"?: string;
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            "to_email": string | null;
        });
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_delivery_attempt.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.sent";
});
/**
 * The `invoice_delivery_attempt.sent` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceDeliveryAttemptSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
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
 * The `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceDeliveryAttemptSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.cc_emails (Optional): Array of string. Addresses copied on this
     * email. Absent when none were copied. object.cc_emails[] (Value): string. object.channel
     * (Required): string. How Flint delivered the invoice. Value enum: "email". object.created_at
     * (Required): string. When the attempt was created. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_type (Required): string. Whether this attempt is the
     * invoice email sent at issue or a reminder. Value enum: "send", "reminder".
     * object.failure_reason (Optional): string. Present only when status is failed. Legacy failed
     * attempts without a stored reason return rejected. Value enum: "rejected",
     * "delivery_unknown", "canceled". object.invoice_delivery_attempt_id (Required): string. Flint
     * invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". object.invoice_id
     * (Required): string. ID of the invoice this delivery attempt belongs to. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.sent_at (Optional): string. When the email service
     * accepted the message. Absent until it does. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. The outcome of this attempt. sent
     * means the email service accepted the message. Value enum: "pending", "sent", "failed",
     * "suppressed". object.suppression_reason (Optional): string. Present only when status is
     * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached". object.to_email (Required): string or null. Address the
     * invoice was sent to. `null` when the customer was deleted. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. cc_emails
         * (Optional): Array of string. Addresses copied on this email. Absent when none were
         * copied. cc_emails[] (Value): string. channel (Required): string. How Flint delivered the
         * invoice. Value enum: "email". created_at (Required): string. When the attempt was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_type (Required):
         * string. Whether this attempt is the invoice email sent at issue or a reminder. Value
         * enum: "send", "reminder". failure_reason (Optional): string. Present only when status is
         * failed. Legacy failed attempts without a stored reason return rejected. Value enum:
         * "rejected", "delivery_unknown", "canceled". invoice_delivery_attempt_id (Required):
         * string. Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
         * invoice_id (Required): string. ID of the invoice this delivery attempt belongs to.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". sent_at (Optional): string. When the email
         * service accepted the message. Absent until it does. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. The outcome of this attempt. sent
         * means the email service accepted the message. Value enum: "pending", "sent", "failed",
         * "suppressed". suppression_reason (Optional): string. Present only when status is
         * suppressed. Value enum: "merchant_managed_email", "recipient_unsubscribed",
         * "sandbox_daily_limit_reached". to_email (Required): string or null. Address the invoice
         * was sent to. `null` when the customer was deleted.
         */
        "object": ({
            /** Addresses copied on this email. Absent when none were copied. [] (Value): string. */
            "cc_emails"?: Array<string>;
            /** How Flint delivered the invoice. Value enum: "email". */
            "channel": "email" | (string & {});
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Whether this attempt is the invoice email sent at issue or a reminder. Value enum:
             * "send", "reminder".
             */
            "delivery_type": "send" | "reminder" | (string & {});
            /**
             * Present only when status is failed. Legacy failed attempts without a stored reason
             * return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
             */
            "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
            /** Flint invoice delivery attempt ID. Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ". */
            "invoice_delivery_attempt_id": string;
            /**
             * ID of the invoice this delivery attempt belongs to. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the email service accepted the message. Absent until it does. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sent_at"?: string;
            /**
             * The outcome of this attempt. sent means the email service accepted the message.
             * Value enum: "pending", "sent", "failed", "suppressed".
             */
            "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
            /**
             * Present only when status is suppressed. Value enum: "merchant_managed_email",
             * "recipient_unsubscribed", "sandbox_daily_limit_reached".
             */
            "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | "sandbox_daily_limit_reached" | (string & {});
            /** Address the invoice was sent to. `null` when the customer was deleted. */
            "to_email": string | null;
        });
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoiceDeliveryAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_delivery_attempt.sent". */
    "event_type"?: "invoice_delivery_attempt.sent";
});
