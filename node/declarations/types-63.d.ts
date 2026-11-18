import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
import type {
    ReturnActorPreviousAttributes,
    ReturnActor,
    RetryReturnDispositionRequestInput,
    ReturnDisposition
} from './types-62.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnDispositionRequestInput } from './types-5.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnPolicyRequestInput
} from './types-13.js';
import type { DisputesAcceptParams } from './types-26.js';
import type {
    ReturnPolicyEvaluation,
    ReturnReasonSummary,
    ReturnReason,
    ReturnPolicyAdjustmentProposal,
    ReturnPolicyAdjustmentProposalPreviousAttributes,
    ReturnReasonPreviousAttributes
} from './types-64.js';
import type { ReturnRefundEstimate, ReturnSourceSystem, ReturnSourceSystemPreviousAttributes } from './types-65.js';
import type { BundleComponent, BundleComponentPreviousAttributes } from './types-1.js';
import type { Image, ImagePreviousAttributes } from './types-31.js';
import type { OrderLineItemModifier, OrderLineItemModifierPreviousAttributes } from './types-46.js';
import type { SelectedProductOption, SelectedProductOptionPreviousAttributes } from './types-67.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type { DecideReturnInspectionLineItemRequestInput } from './types-17.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-32.js';
import type { Fulfillment } from './types-27.js';
import type { FulfillmentPreviousAttributes } from './types-28.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-59.js';
export type ReturnDispositionPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "canceled_at"?: ((string) | (null));
    /**
     * Who canceled the disposition. Merchant reads only. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other". anyOf[1] (Value): string. Why the disposition was canceled. Value
     * enum: "created_in_error", "changed_disposition", "duplicate", "other". anyOf[2] (Value):
     * null.
     */
    "cancellation_reason"?: (("created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {})) | (null));
    /**
     * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail
     * sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     */
    "cancellation_reason_message"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Who created the disposition. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "created_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". anyOf[1] (Value): string. What happens to the received units. Value enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". anyOf[2] (Value): null.
     */
    "disposition_type"?: (("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {}))
        | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Reason code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped". anyOf[1] (Value): string. Reason code
     * for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed",
     * "inventory_item_unmapped". anyOf[2] (Value): null.
     */
    "failure_code"?: (("inventory_effect_failed" | "inventory_item_unmapped" | (string & {})) | (null));
    /**
     * Explanation of a failed merchandise disposition, when available. anyOf[1] (Value): string.
     * Explanation of a failed merchandise disposition, when available. anyOf[2] (Value): null.
     */
    "failure_message"?: ((string) | (null));
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * anyOf[1] (Value): string. ID of the Location whose stock the disposition changes. Required
     * for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the
     * other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "inventory_location_id"?: ((string) | (null));
    /**
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock. anyOf[1]
     * (Value): Array of string. IDs of the inventory movements the disposition wrote. Empty when
     * it moved no stock. anyOf[1][] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * anyOf[2] (Value): null.
     */
    "inventory_movement_ids"?: ((Array<string>) | (null));
    /**
     * ID of the inventory receipt the disposition recorded. Absent when it recorded none. anyOf[1]
     * (Value): string. ID of the inventory receipt the disposition recorded. Absent when it
     * recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N". anyOf[2] (Value): null.
     */
    "inventory_receipt_id"?: ((string) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "occurred_at"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other". anyOf[1] (Value): string. Why the
     * disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other". anyOf[2] (Value): null.
     */
    "reason"?: (("inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Optional detail about `reason`, kept with the record. anyOf[1] (Value): string. Optional
     * detail about `reason`, kept with the record. anyOf[2] (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * ID of the disposition that took over this one. Present when a replacement canceled it.
     * anyOf[1] (Value): string. ID of the disposition that took over this one. Present when a
     * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value):
     * null.
     */
    "replaced_by_return_disposition_id"?: ((string) | (null));
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. anyOf[1] (Value): string. ID of the `failed` or `canceled`
     * disposition this one replaces. It takes over that disposition's unused capacity. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
     */
    "replaces_return_disposition_id"?: ((string) | (null));
    /**
     * Unique identifier for this return disposition, prefixed `retdsp_`. anyOf[1] (Value): string.
     * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
     */
    "return_disposition_id"?: ((string) | (null));
    /**
     * ID of the Return the disposition belongs to. anyOf[1] (Value): string. ID of the Return the
     * disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Inspection that owns return_inspection_line_item_id. `null` when
     * return_inspection_line_item_id is null. anyOf[1] (Value): string. Inspection that owns
     * return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     */
    "return_inspection_id"?: ((string) | (null));
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * anyOf[1] (Value): string. ID of the inspection line the disposition covers. Absent when it
     * covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". anyOf[2] (Value):
     * null.
     */
    "return_inspection_line_item_id"?: ((string) | (null));
    /**
     * ID of the Return line the units belong to. anyOf[1] (Value): string. ID of the Return line
     * the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is
     * null. anyOf[1] (Value): string. Receipt that owns return_receipt_line_item_id. `null` when
     * return_receipt_line_item_id is null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2]
     * (Value): null.
     */
    "return_receipt_id"?: ((string) | (null));
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * anyOf[1] (Value): string. ID of the receipt line the disposition covers. Absent when it
     * covers an inspection line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value):
     * null.
     */
    "return_receipt_line_item_id"?: ((string) | (null));
    /**
     * Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
     * "canceled". anyOf[1] (Value): string. Whether inventory has applied the disposition. Value
     * enum: "pending", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
    /**
     * Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only
     * before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1] (Value): Array of
     * string. Actions that can succeed now. Empty unless the parent Return is open. cancel is
     * listed only before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1][]
     * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
export type ReturnDispositionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_id": string | null;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_id": string | null;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {})) | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "disposition_type"?: (("sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("inventory_effect_failed" | "inventory_item_unmapped" | (string & {})) | (null));
            "failure_message"?: ((string) | (null));
            "inventory_location_id"?: ((string) | (null));
            "inventory_movement_ids"?: ((Array<string>) | (null));
            "inventory_receipt_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "occurred_at"?: ((string) | (null));
            "quantity"?: ((number) | (null));
            "reason"?: (("inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {}))
                | (null));
            "reason_message"?: ((string) | (null));
            "replaced_by_return_disposition_id"?: ((string) | (null));
            "replaces_return_disposition_id"?: ((string) | (null));
            "return_disposition_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_inspection_line_item_id"?: ((string) | (null));
            "return_line_item_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "return_receipt_line_item_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_disposition.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_id": string | null;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_id": string | null;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {})) | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "disposition_type"?: (("sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("inventory_effect_failed" | "inventory_item_unmapped" | (string & {})) | (null));
            "failure_message"?: ((string) | (null));
            "inventory_location_id"?: ((string) | (null));
            "inventory_movement_ids"?: ((Array<string>) | (null));
            "inventory_receipt_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "occurred_at"?: ((string) | (null));
            "quantity"?: ((number) | (null));
            "reason"?: (("inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {}))
                | (null));
            "reason_message"?: ((string) | (null));
            "replaced_by_return_disposition_id"?: ((string) | (null));
            "replaces_return_disposition_id"?: ((string) | (null));
            "return_disposition_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_inspection_line_item_id"?: ((string) | (null));
            "return_line_item_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "return_receipt_line_item_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_disposition.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_disposition.updated";
});
/**
 * The `return_disposition.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDispositionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. ID of the Return the disposition belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string or null.
     * Inspection that owns return_inspection_line_item_id. `null` when
     * return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_id (Required): string or null. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipt_line_item_id (Optional): string.
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether
     * inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
     * "canceled". object.supported_actions (Required): Array of string. Actions that can succeed
     * now. Empty unless the parent Return is open. cancel is listed only before the inventory
     * effect starts. [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0. previous_attributes (Optional):
     * object and {@link ReturnDispositionPreviousAttributes}. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the disposition. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the disposition was
     * canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the disposition was
     * canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the disposition. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.disposition_type (Optional): string or null. What happens to the
     * received units. Value enum: "sellable", "quality_control", "damaged", "quarantined",
     * "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * previous_attributes.disposition_type.anyOf[1] (Value): string. What happens to the received
     * units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair",
     * "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * previous_attributes.disposition_type.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed
     * merchandise disposition, when available. Value enum: "inventory_effect_failed",
     * "inventory_item_unmapped". previous_attributes.failure_code.anyOf[1] (Value): string. Reason
     * code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed merchandise disposition, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed
     * merchandise disposition, when available. previous_attributes.failure_message.anyOf[2]
     * (Value): null. previous_attributes.inventory_location_id (Optional): string or null. ID of
     * the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * previous_attributes.inventory_location_id.anyOf[1] (Value): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inventory_location_id.anyOf[2]
     * (Value): null. previous_attributes.inventory_movement_ids (Optional): Array of string or
     * null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * previous_attributes.inventory_movement_ids.anyOf[1] (Value): Array of string. IDs of the
     * inventory movements the disposition wrote. Empty when it moved no stock.
     * previous_attributes.inventory_movement_ids.anyOf[1][] (Value): string. Example:
     * "invm_01KEZF7C00DYPFT9PS0NZY805Z". previous_attributes.inventory_movement_ids.anyOf[2]
     * (Value): null. previous_attributes.inventory_receipt_id (Optional): string or null. ID of
     * the inventory receipt the disposition recorded. Absent when it recorded none.
     * previous_attributes.inventory_receipt_id.anyOf[1] (Value): string. ID of the inventory
     * receipt the disposition recorded. Absent when it recorded none. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". previous_attributes.inventory_receipt_id.anyOf[2]
     * (Value): null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.occurred_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.occurred_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.occurred_at.anyOf[2] (Value): null. previous_attributes.quantity
     * (Optional): integer or null. Whole-number quantity; fractional quantities are not supported.
     * previous_attributes.quantity.anyOf[1] (Value): integer. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. previous_attributes.quantity.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the disposition was made.
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other". previous_attributes.reason.anyOf[1] (Value): string. Why the
     * disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other". previous_attributes.reason.anyOf[2]
     * (Value): null. previous_attributes.reason_message (Optional): string or null. Optional
     * detail about `reason`, kept with the record. previous_attributes.reason_message.anyOf[1]
     * (Value): string. Optional detail about `reason`, kept with the record.
     * previous_attributes.reason_message.anyOf[2] (Value): null.
     * previous_attributes.replaced_by_return_disposition_id (Optional): string or null. ID of the
     * disposition that took over this one. Present when a replacement canceled it.
     * previous_attributes.replaced_by_return_disposition_id.anyOf[1] (Value): string. ID of the
     * disposition that took over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.replaced_by_return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.replaces_return_disposition_id (Optional): string or null. ID of the
     * `failed` or `canceled` disposition this one replaces. It takes over that disposition's
     * unused capacity. previous_attributes.replaces_return_disposition_id.anyOf[1] (Value):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.replaces_return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_id (Optional): string or null. Unique identifier for
     * this return disposition, prefixed `retdsp_`.
     * previous_attributes.return_disposition_id.anyOf[1] (Value): string. Unique identifier for
     * this return disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.return_id (Optional): string or null. ID of the Return the disposition
     * belongs to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the
     * disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Inspection that owns
     * return_inspection_line_item_id. `null` when return_inspection_line_item_id is null.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Inspection that owns
     * return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_id.anyOf[2]
     * (Value): null. previous_attributes.return_inspection_line_item_id (Optional): string or
     * null. ID of the inspection line the disposition covers. Absent when it covers a receipt
     * line. previous_attributes.return_inspection_line_item_id.anyOf[1] (Value): string. ID of the
     * inspection line the disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     * previous_attributes.return_inspection_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.return_line_item_id (Optional): string or null. ID of the Return line
     * the units belong to. previous_attributes.return_line_item_id.anyOf[1] (Value): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * previous_attributes.return_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_id.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_line_item_id (Optional): string or null. ID of the
     * receipt line the disposition covers. Absent when it covers an inspection line.
     * previous_attributes.return_receipt_line_item_id.anyOf[1] (Value): string. ID of the receipt
     * line the disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     * previous_attributes.return_receipt_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether inventory has applied the
     * disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Whether inventory has applied the
     * disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Empty unless the parent
     * Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can succeed now. Empty unless the parent Return is open. cancel is listed only before
     * the inventory effect starts. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. ID of the Return the
         * disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id
         * (Required): string or null. Inspection that owns return_inspection_line_item_id. `null`
         * when return_inspection_line_item_id is null. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_line_item_id (Optional): string.
         * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_id (Required): string or null. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_line_item_id (Optional): string. ID
         * of the receipt line the disposition covers. Absent when it covers an inspection line.
         * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether
         * inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
         * "canceled". supported_actions (Required): Array of string. Actions that can succeed now.
         * Empty unless the parent Return is open. cancel is listed only before the inventory
         * effect starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value
         * enum: "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /**
             * ID of the Return the disposition belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Inspection that owns return_inspection_line_item_id. `null` when
             * return_inspection_line_item_id is null. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string | null;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * Receipt that owns return_receipt_line_item_id. `null` when
             * return_receipt_line_item_id is null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string | null;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the disposition.
         * Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the disposition was canceled. Value enum:
         * "created_in_error", "changed_disposition", "duplicate", "other".
         * cancellation_reason.anyOf[1] (Value): string. Why the disposition was canceled. Value
         * enum: "created_in_error", "changed_disposition", "duplicate", "other".
         * cancellation_reason.anyOf[2] (Value): null. cancellation_reason_message (Optional):
         * string or null. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[1] (Value): string. Detail sent with the cancellation.
         * Merchant reads only. cancellation_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. created_by (Optional): {@link
         * ReturnActorPreviousAttributes} or null. Who created the disposition. created_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. created_by.anyOf[2] (Value): null.
         * disposition_type (Optional): string or null. What happens to the received units. Value
         * enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
         * "liquidate", "donate", "discard", "return_to_buyer", "lost". disposition_type.anyOf[1]
         * (Value): string. What happens to the received units. Value enum: "sellable",
         * "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
         * "donate", "discard", "return_to_buyer", "lost". disposition_type.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. failure_code
         * (Optional): string or null. Reason code for a failed merchandise disposition, when
         * available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
         * failure_code.anyOf[1] (Value): string. Reason code for a failed merchandise disposition,
         * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
         * failure_code.anyOf[2] (Value): null. failure_message (Optional): string or null.
         * Explanation of a failed merchandise disposition, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed merchandise
         * disposition, when available. failure_message.anyOf[2] (Value): null.
         * inventory_location_id (Optional): string or null. ID of the Location whose stock the
         * disposition changes. Required for `sellable`, `quality_control`, `damaged`,
         * `quarantined`, and `lost`; rejected for the other types. inventory_location_id.anyOf[1]
         * (Value): string. ID of the Location whose stock the disposition changes. Required for
         * `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the
         * other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_location_id.anyOf[2]
         * (Value): null. inventory_movement_ids (Optional): Array of string or null. IDs of the
         * inventory movements the disposition wrote. Empty when it moved no stock.
         * inventory_movement_ids.anyOf[1] (Value): Array of string. IDs of the inventory movements
         * the disposition wrote. Empty when it moved no stock. inventory_movement_ids.anyOf[1][]
         * (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
         * inventory_movement_ids.anyOf[2] (Value): null. inventory_receipt_id (Optional): string
         * or null. ID of the inventory receipt the disposition recorded. Absent when it recorded
         * none. inventory_receipt_id.anyOf[1] (Value): string. ID of the inventory receipt the
         * disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". inventory_receipt_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data.
         * See `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. occurred_at (Optional): string or null.
         * RFC3339 timestamp. occurred_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". occurred_at.anyOf[2] (Value): null. quantity
         * (Optional): integer or null. Whole-number quantity; fractional quantities are not
         * supported. quantity.anyOf[1] (Value): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. quantity.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the disposition was made. Value enum:
         * "inspection_result", "return_policy", "warehouse_override", "safety_requirement",
         * "other". reason.anyOf[1] (Value): string. Why the disposition was made. Value enum:
         * "inspection_result", "return_policy", "warehouse_override", "safety_requirement",
         * "other". reason.anyOf[2] (Value): null. reason_message (Optional): string or null.
         * Optional detail about `reason`, kept with the record. reason_message.anyOf[1] (Value):
         * string. Optional detail about `reason`, kept with the record. reason_message.anyOf[2]
         * (Value): null. replaced_by_return_disposition_id (Optional): string or null. ID of the
         * disposition that took over this one. Present when a replacement canceled it.
         * replaced_by_return_disposition_id.anyOf[1] (Value): string. ID of the disposition that
         * took over this one. Present when a replacement canceled it. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". replaced_by_return_disposition_id.anyOf[2] (Value):
         * null. replaces_return_disposition_id (Optional): string or null. ID of the `failed` or
         * `canceled` disposition this one replaces. It takes over that disposition's unused
         * capacity. replaces_return_disposition_id.anyOf[1] (Value): string. ID of the `failed` or
         * `canceled` disposition this one replaces. It takes over that disposition's unused
         * capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id.anyOf[2] (Value): null. return_disposition_id (Optional):
         * string or null. Unique identifier for this return disposition, prefixed `retdsp_`.
         * return_disposition_id.anyOf[1] (Value): string. Unique identifier for this return
         * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_disposition_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the disposition belongs to. return_id.anyOf[1] (Value): string. ID of the
         * Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_id (Optional): string or null.
         * Inspection that owns return_inspection_line_item_id. `null` when
         * return_inspection_line_item_id is null. return_inspection_id.anyOf[1] (Value): string.
         * Inspection that owns return_inspection_line_item_id. `null` when
         * return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_inspection_line_item_id (Optional):
         * string or null. ID of the inspection line the disposition covers. Absent when it covers
         * a receipt line. return_inspection_line_item_id.anyOf[1] (Value): string. ID of the
         * inspection line the disposition covers. Absent when it covers a receipt line. Example:
         * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_inspection_line_item_id.anyOf[2] (Value):
         * null. return_line_item_id (Optional): string or null. ID of the Return line the units
         * belong to. return_line_item_id.anyOf[1] (Value): string. ID of the Return line the units
         * belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". return_line_item_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
         * return_receipt_id.anyOf[1] (Value): string. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * return_receipt_line_item_id (Optional): string or null. ID of the receipt line the
         * disposition covers. Absent when it covers an inspection line.
         * return_receipt_line_item_id.anyOf[1] (Value): string. ID of the receipt line the
         * disposition covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". return_receipt_line_item_id.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether inventory has applied the disposition.
         * Value enum: "pending", "succeeded", "failed", "canceled". status.anyOf[1] (Value):
         * string. Whether inventory has applied the disposition. Value enum: "pending",
         * "succeeded", "failed", "canceled". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can succeed now. Empty unless the
         * parent Return is open. cancel is listed only before the inventory effect starts. []
         * enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of string. Actions
         * that can succeed now. Empty unless the parent Return is open. cancel is listed only
         * before the inventory effect starts. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the disposition. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other". anyOf[1] (Value): string. Why the
             * disposition was canceled. Value enum: "created_in_error", "changed_disposition",
             * "duplicate", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {})) | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the disposition. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost". anyOf[1] (Value): string. What happens to the received
             * units. Value enum: "sellable", "quality_control", "damaged", "quarantined",
             * "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
             * anyOf[2] (Value): null.
             */
            "disposition_type"?: (("sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped". anyOf[1] (Value): string.
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped". anyOf[2] (Value): null.
             */
            "failure_code"?: (("inventory_effect_failed" | "inventory_item_unmapped" | (string & {})) | (null));
            /**
             * Explanation of a failed merchandise disposition, when available. anyOf[1] (Value):
             * string. Explanation of a failed merchandise disposition, when available. anyOf[2]
             * (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. anyOf[1] (Value): string. ID of the Location whose stock the disposition
             * changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and
             * `lost`; rejected for the other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "inventory_location_id"?: ((string) | (null));
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * anyOf[1] (Value): Array of string. IDs of the inventory movements the disposition
             * wrote. Empty when it moved no stock. anyOf[1][] (Value): string. Example:
             * "invm_01KEZF7C00DYPFT9PS0NZY805Z". anyOf[2] (Value): null.
             */
            "inventory_movement_ids"?: ((Array<string>) | (null));
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * anyOf[1] (Value): string. ID of the inventory receipt the disposition recorded.
             * Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N". anyOf[2]
             * (Value): null.
             */
            "inventory_receipt_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "occurred_at"?: ((string) | (null));
            /**
             * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value):
             * integer. Whole-number quantity; fractional quantities are not supported. Format:
             * int64. anyOf[2] (Value): null.
             */
            "quantity"?: ((number) | (null));
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other". anyOf[1] (Value): string. Why
             * the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Optional detail about `reason`, kept with the record. anyOf[1] (Value): string.
             * Optional detail about `reason`, kept with the record. anyOf[2] (Value): null.
             */
            "reason_message"?: ((string) | (null));
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. anyOf[1] (Value): string. ID of the disposition that took over this one. Present
             * when a replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             * anyOf[2] (Value): null.
             */
            "replaced_by_return_disposition_id"?: ((string) | (null));
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. anyOf[1] (Value): string. ID of the `failed` or
             * `canceled` disposition this one replaces. It takes over that disposition's unused
             * capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "replaces_return_disposition_id"?: ((string) | (null));
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. anyOf[1] (Value):
             * string. Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_id"?: ((string) | (null));
            /**
             * ID of the Return the disposition belongs to. anyOf[1] (Value): string. ID of the
             * Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Inspection that owns return_inspection_line_item_id. `null` when
             * return_inspection_line_item_id is null. anyOf[1] (Value): string. Inspection that
             * owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is
             * null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. anyOf[1] (Value): string. ID of the inspection line the disposition covers.
             * Absent when it covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             * anyOf[2] (Value): null.
             */
            "return_inspection_line_item_id"?: ((string) | (null));
            /**
             * ID of the Return line the units belong to. anyOf[1] (Value): string. ID of the
             * Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
             * anyOf[2] (Value): null.
             */
            "return_line_item_id"?: ((string) | (null));
            /**
             * Receipt that owns return_receipt_line_item_id. `null` when
             * return_receipt_line_item_id is null. anyOf[1] (Value): string. Receipt that owns
             * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. anyOf[1] (Value): string. ID of the receipt line the disposition covers.
             * Absent when it covers an inspection line. Example:
             * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
             */
            "return_receipt_line_item_id"?: ((string) | (null));
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled". anyOf[1] (Value): string. Whether inventory has applied the
             * disposition. Value enum: "pending", "succeeded", "failed", "canceled". anyOf[2]
             * (Value): null.
             */
            "status"?: (("pending" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1]
             * (Value): Array of string. Actions that can succeed now. Empty unless the parent
             * Return is open. cancel is listed only before the inventory effect starts. [] enum:
             * "cancel", "retry". anyOf[1][] (Value): string. Value enum: "cancel", "retry".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
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
 * The `return_disposition.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnDispositionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. ID of the Return the disposition belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string or null.
     * Inspection that owns return_inspection_line_item_id. `null` when
     * return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_id (Required): string or null. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipt_line_item_id (Optional): string.
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether
     * inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
     * "canceled". object.supported_actions (Required): Array of string. Actions that can succeed
     * now. Empty unless the parent Return is open. cancel is listed only before the inventory
     * effect starts. [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0. previous_attributes (Optional):
     * object and {@link ReturnDispositionPreviousAttributes}. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.canceled_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the disposition. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the disposition was
     * canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the disposition was
     * canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the disposition. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.disposition_type (Optional): string or null. What happens to the
     * received units. Value enum: "sellable", "quality_control", "damaged", "quarantined",
     * "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * previous_attributes.disposition_type.anyOf[1] (Value): string. What happens to the received
     * units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair",
     * "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * previous_attributes.disposition_type.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed
     * merchandise disposition, when available. Value enum: "inventory_effect_failed",
     * "inventory_item_unmapped". previous_attributes.failure_code.anyOf[1] (Value): string. Reason
     * code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed merchandise disposition, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed
     * merchandise disposition, when available. previous_attributes.failure_message.anyOf[2]
     * (Value): null. previous_attributes.inventory_location_id (Optional): string or null. ID of
     * the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * previous_attributes.inventory_location_id.anyOf[1] (Value): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inventory_location_id.anyOf[2]
     * (Value): null. previous_attributes.inventory_movement_ids (Optional): Array of string or
     * null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * previous_attributes.inventory_movement_ids.anyOf[1] (Value): Array of string. IDs of the
     * inventory movements the disposition wrote. Empty when it moved no stock.
     * previous_attributes.inventory_movement_ids.anyOf[1][] (Value): string. Example:
     * "invm_01KEZF7C00DYPFT9PS0NZY805Z". previous_attributes.inventory_movement_ids.anyOf[2]
     * (Value): null. previous_attributes.inventory_receipt_id (Optional): string or null. ID of
     * the inventory receipt the disposition recorded. Absent when it recorded none.
     * previous_attributes.inventory_receipt_id.anyOf[1] (Value): string. ID of the inventory
     * receipt the disposition recorded. Absent when it recorded none. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". previous_attributes.inventory_receipt_id.anyOf[2]
     * (Value): null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.occurred_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.occurred_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.occurred_at.anyOf[2] (Value): null. previous_attributes.quantity
     * (Optional): integer or null. Whole-number quantity; fractional quantities are not supported.
     * previous_attributes.quantity.anyOf[1] (Value): integer. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. previous_attributes.quantity.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the disposition was made.
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other". previous_attributes.reason.anyOf[1] (Value): string. Why the
     * disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other". previous_attributes.reason.anyOf[2]
     * (Value): null. previous_attributes.reason_message (Optional): string or null. Optional
     * detail about `reason`, kept with the record. previous_attributes.reason_message.anyOf[1]
     * (Value): string. Optional detail about `reason`, kept with the record.
     * previous_attributes.reason_message.anyOf[2] (Value): null.
     * previous_attributes.replaced_by_return_disposition_id (Optional): string or null. ID of the
     * disposition that took over this one. Present when a replacement canceled it.
     * previous_attributes.replaced_by_return_disposition_id.anyOf[1] (Value): string. ID of the
     * disposition that took over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.replaced_by_return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.replaces_return_disposition_id (Optional): string or null. ID of the
     * `failed` or `canceled` disposition this one replaces. It takes over that disposition's
     * unused capacity. previous_attributes.replaces_return_disposition_id.anyOf[1] (Value):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.replaces_return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_id (Optional): string or null. Unique identifier for
     * this return disposition, prefixed `retdsp_`.
     * previous_attributes.return_disposition_id.anyOf[1] (Value): string. Unique identifier for
     * this return disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * previous_attributes.return_disposition_id.anyOf[2] (Value): null.
     * previous_attributes.return_id (Optional): string or null. ID of the Return the disposition
     * belongs to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the
     * disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Inspection that owns
     * return_inspection_line_item_id. `null` when return_inspection_line_item_id is null.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Inspection that owns
     * return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_id.anyOf[2]
     * (Value): null. previous_attributes.return_inspection_line_item_id (Optional): string or
     * null. ID of the inspection line the disposition covers. Absent when it covers a receipt
     * line. previous_attributes.return_inspection_line_item_id.anyOf[1] (Value): string. ID of the
     * inspection line the disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     * previous_attributes.return_inspection_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.return_line_item_id (Optional): string or null. ID of the Return line
     * the units belong to. previous_attributes.return_line_item_id.anyOf[1] (Value): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * previous_attributes.return_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Receipt that owns
     * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_id.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_line_item_id (Optional): string or null. ID of the
     * receipt line the disposition covers. Absent when it covers an inspection line.
     * previous_attributes.return_receipt_line_item_id.anyOf[1] (Value): string. ID of the receipt
     * line the disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     * previous_attributes.return_receipt_line_item_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Whether inventory has applied the
     * disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Whether inventory has applied the
     * disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Empty unless the parent
     * Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can succeed now. Empty unless the parent Return is open. cancel is listed only before
     * the inventory effect starts. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. ID of the Return the
         * disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id
         * (Required): string or null. Inspection that owns return_inspection_line_item_id. `null`
         * when return_inspection_line_item_id is null. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_line_item_id (Optional): string.
         * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_id (Required): string or null. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_line_item_id (Optional): string. ID
         * of the receipt line the disposition covers. Absent when it covers an inspection line.
         * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether
         * inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
         * "canceled". supported_actions (Required): Array of string. Actions that can succeed now.
         * Empty unless the parent Return is open. cancel is listed only before the inventory
         * effect starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value
         * enum: "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /**
             * ID of the Return the disposition belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Inspection that owns return_inspection_line_item_id. `null` when
             * return_inspection_line_item_id is null. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string | null;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * Receipt that owns return_receipt_line_item_id. `null` when
             * return_receipt_line_item_id is null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string | null;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the disposition.
         * Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the disposition was canceled. Value enum:
         * "created_in_error", "changed_disposition", "duplicate", "other".
         * cancellation_reason.anyOf[1] (Value): string. Why the disposition was canceled. Value
         * enum: "created_in_error", "changed_disposition", "duplicate", "other".
         * cancellation_reason.anyOf[2] (Value): null. cancellation_reason_message (Optional):
         * string or null. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[1] (Value): string. Detail sent with the cancellation.
         * Merchant reads only. cancellation_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. created_by (Optional): {@link
         * ReturnActorPreviousAttributes} or null. Who created the disposition. created_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. created_by.anyOf[2] (Value): null.
         * disposition_type (Optional): string or null. What happens to the received units. Value
         * enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
         * "liquidate", "donate", "discard", "return_to_buyer", "lost". disposition_type.anyOf[1]
         * (Value): string. What happens to the received units. Value enum: "sellable",
         * "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
         * "donate", "discard", "return_to_buyer", "lost". disposition_type.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. failure_code
         * (Optional): string or null. Reason code for a failed merchandise disposition, when
         * available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
         * failure_code.anyOf[1] (Value): string. Reason code for a failed merchandise disposition,
         * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
         * failure_code.anyOf[2] (Value): null. failure_message (Optional): string or null.
         * Explanation of a failed merchandise disposition, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed merchandise
         * disposition, when available. failure_message.anyOf[2] (Value): null.
         * inventory_location_id (Optional): string or null. ID of the Location whose stock the
         * disposition changes. Required for `sellable`, `quality_control`, `damaged`,
         * `quarantined`, and `lost`; rejected for the other types. inventory_location_id.anyOf[1]
         * (Value): string. ID of the Location whose stock the disposition changes. Required for
         * `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the
         * other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_location_id.anyOf[2]
         * (Value): null. inventory_movement_ids (Optional): Array of string or null. IDs of the
         * inventory movements the disposition wrote. Empty when it moved no stock.
         * inventory_movement_ids.anyOf[1] (Value): Array of string. IDs of the inventory movements
         * the disposition wrote. Empty when it moved no stock. inventory_movement_ids.anyOf[1][]
         * (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
         * inventory_movement_ids.anyOf[2] (Value): null. inventory_receipt_id (Optional): string
         * or null. ID of the inventory receipt the disposition recorded. Absent when it recorded
         * none. inventory_receipt_id.anyOf[1] (Value): string. ID of the inventory receipt the
         * disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". inventory_receipt_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data.
         * See `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. occurred_at (Optional): string or null.
         * RFC3339 timestamp. occurred_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". occurred_at.anyOf[2] (Value): null. quantity
         * (Optional): integer or null. Whole-number quantity; fractional quantities are not
         * supported. quantity.anyOf[1] (Value): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. quantity.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the disposition was made. Value enum:
         * "inspection_result", "return_policy", "warehouse_override", "safety_requirement",
         * "other". reason.anyOf[1] (Value): string. Why the disposition was made. Value enum:
         * "inspection_result", "return_policy", "warehouse_override", "safety_requirement",
         * "other". reason.anyOf[2] (Value): null. reason_message (Optional): string or null.
         * Optional detail about `reason`, kept with the record. reason_message.anyOf[1] (Value):
         * string. Optional detail about `reason`, kept with the record. reason_message.anyOf[2]
         * (Value): null. replaced_by_return_disposition_id (Optional): string or null. ID of the
         * disposition that took over this one. Present when a replacement canceled it.
         * replaced_by_return_disposition_id.anyOf[1] (Value): string. ID of the disposition that
         * took over this one. Present when a replacement canceled it. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". replaced_by_return_disposition_id.anyOf[2] (Value):
         * null. replaces_return_disposition_id (Optional): string or null. ID of the `failed` or
         * `canceled` disposition this one replaces. It takes over that disposition's unused
         * capacity. replaces_return_disposition_id.anyOf[1] (Value): string. ID of the `failed` or
         * `canceled` disposition this one replaces. It takes over that disposition's unused
         * capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id.anyOf[2] (Value): null. return_disposition_id (Optional):
         * string or null. Unique identifier for this return disposition, prefixed `retdsp_`.
         * return_disposition_id.anyOf[1] (Value): string. Unique identifier for this return
         * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_disposition_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the disposition belongs to. return_id.anyOf[1] (Value): string. ID of the
         * Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_id (Optional): string or null.
         * Inspection that owns return_inspection_line_item_id. `null` when
         * return_inspection_line_item_id is null. return_inspection_id.anyOf[1] (Value): string.
         * Inspection that owns return_inspection_line_item_id. `null` when
         * return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_inspection_line_item_id (Optional):
         * string or null. ID of the inspection line the disposition covers. Absent when it covers
         * a receipt line. return_inspection_line_item_id.anyOf[1] (Value): string. ID of the
         * inspection line the disposition covers. Absent when it covers a receipt line. Example:
         * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_inspection_line_item_id.anyOf[2] (Value):
         * null. return_line_item_id (Optional): string or null. ID of the Return line the units
         * belong to. return_line_item_id.anyOf[1] (Value): string. ID of the Return line the units
         * belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". return_line_item_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
         * return_receipt_id.anyOf[1] (Value): string. Receipt that owns
         * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * return_receipt_line_item_id (Optional): string or null. ID of the receipt line the
         * disposition covers. Absent when it covers an inspection line.
         * return_receipt_line_item_id.anyOf[1] (Value): string. ID of the receipt line the
         * disposition covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". return_receipt_line_item_id.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether inventory has applied the disposition.
         * Value enum: "pending", "succeeded", "failed", "canceled". status.anyOf[1] (Value):
         * string. Whether inventory has applied the disposition. Value enum: "pending",
         * "succeeded", "failed", "canceled". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can succeed now. Empty unless the
         * parent Return is open. cancel is listed only before the inventory effect starts. []
         * enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of string. Actions
         * that can succeed now. Empty unless the parent Return is open. cancel is listed only
         * before the inventory effect starts. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or null. RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the disposition. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other". anyOf[1] (Value): string. Why the
             * disposition was canceled. Value enum: "created_in_error", "changed_disposition",
             * "duplicate", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {})) | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the disposition. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost". anyOf[1] (Value): string. What happens to the received
             * units. Value enum: "sellable", "quality_control", "damaged", "quarantined",
             * "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
             * anyOf[2] (Value): null.
             */
            "disposition_type"?: (("sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped". anyOf[1] (Value): string.
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped". anyOf[2] (Value): null.
             */
            "failure_code"?: (("inventory_effect_failed" | "inventory_item_unmapped" | (string & {})) | (null));
            /**
             * Explanation of a failed merchandise disposition, when available. anyOf[1] (Value):
             * string. Explanation of a failed merchandise disposition, when available. anyOf[2]
             * (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. anyOf[1] (Value): string. ID of the Location whose stock the disposition
             * changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and
             * `lost`; rejected for the other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "inventory_location_id"?: ((string) | (null));
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * anyOf[1] (Value): Array of string. IDs of the inventory movements the disposition
             * wrote. Empty when it moved no stock. anyOf[1][] (Value): string. Example:
             * "invm_01KEZF7C00DYPFT9PS0NZY805Z". anyOf[2] (Value): null.
             */
            "inventory_movement_ids"?: ((Array<string>) | (null));
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * anyOf[1] (Value): string. ID of the inventory receipt the disposition recorded.
             * Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N". anyOf[2]
             * (Value): null.
             */
            "inventory_receipt_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "occurred_at"?: ((string) | (null));
            /**
             * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value):
             * integer. Whole-number quantity; fractional quantities are not supported. Format:
             * int64. anyOf[2] (Value): null.
             */
            "quantity"?: ((number) | (null));
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other". anyOf[1] (Value): string. Why
             * the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Optional detail about `reason`, kept with the record. anyOf[1] (Value): string.
             * Optional detail about `reason`, kept with the record. anyOf[2] (Value): null.
             */
            "reason_message"?: ((string) | (null));
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. anyOf[1] (Value): string. ID of the disposition that took over this one. Present
             * when a replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             * anyOf[2] (Value): null.
             */
            "replaced_by_return_disposition_id"?: ((string) | (null));
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. anyOf[1] (Value): string. ID of the `failed` or
             * `canceled` disposition this one replaces. It takes over that disposition's unused
             * capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "replaces_return_disposition_id"?: ((string) | (null));
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. anyOf[1] (Value):
             * string. Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_id"?: ((string) | (null));
            /**
             * ID of the Return the disposition belongs to. anyOf[1] (Value): string. ID of the
             * Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Inspection that owns return_inspection_line_item_id. `null` when
             * return_inspection_line_item_id is null. anyOf[1] (Value): string. Inspection that
             * owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is
             * null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. anyOf[1] (Value): string. ID of the inspection line the disposition covers.
             * Absent when it covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             * anyOf[2] (Value): null.
             */
            "return_inspection_line_item_id"?: ((string) | (null));
            /**
             * ID of the Return line the units belong to. anyOf[1] (Value): string. ID of the
             * Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
             * anyOf[2] (Value): null.
             */
            "return_line_item_id"?: ((string) | (null));
            /**
             * Receipt that owns return_receipt_line_item_id. `null` when
             * return_receipt_line_item_id is null. anyOf[1] (Value): string. Receipt that owns
             * return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. anyOf[1] (Value): string. ID of the receipt line the disposition covers.
             * Absent when it covers an inspection line. Example:
             * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
             */
            "return_receipt_line_item_id"?: ((string) | (null));
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled". anyOf[1] (Value): string. Whether inventory has applied the
             * disposition. Value enum: "pending", "succeeded", "failed", "canceled". anyOf[2]
             * (Value): null.
             */
            "status"?: (("pending" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1]
             * (Value): Array of string. Actions that can succeed now. Empty unless the parent
             * Return is open. cancel is listed only before the inventory effect starts. [] enum:
             * "cancel", "retry". anyOf[1][] (Value): string. Value enum: "cancel", "retry".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
});
export type ReturnDispositionsCancelParams = (InputValue<CancelReturnDispositionRequestInput>)
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
export type ReturnDispositionsCreateParams = (CreateReturnDispositionRequestInput)
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
export type ReturnDispositionsGetParams = DisputesAcceptParams;
export type ReturnDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by disposition type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "sellable", "quality_control", "damaged", "quarantined", "repair",
     * "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[1][] (Value): string.
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[2] (Value): string. Value
     * enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type"?: InputValue<("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")
        | readonly ("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength:
     * 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by inventory location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return disposition ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by replaces return disposition id. pattern: ^retdsp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: InputValue<string>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return inspection line item id. pattern: ^retinli_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by return receipt line item id. pattern: ^retrcli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "succeeded", "failed", "canceled". Value enum: "pending", "succeeded",
     * "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "succeeded", "failed", "canceled". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "failed", "canceled". anyOf[2] (Value): string. Value enum: "pending",
     * "succeeded", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type ReturnDispositionsRetryParams = (InputValue<RetryReturnDispositionRequestInput>)
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
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequest = {
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
/**
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequestModelInput = {
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
/**
 * The result of checking whether an order's items can be returned: overall status, per-line
 * eligibility, and the policy evaluation.
 */
export type ReturnEligibilityPreview = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link ReturnEligibilityPreviewLineItem}.
     * Return eligibility for one order line item, with the line's details, suggested return
     * reasons, and whether self-service returns are enabled.
     */
    "line_items": Array<ReturnEligibilityPreviewLineItem>;
    /** ID of the Order the units come from. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * How the active return policies judged the lines. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation": ReturnPolicyEvaluation;
    /**
     * Estimate for selected eligible quantities requested as refund, or with no requested
     * resolution when refund is allowed. Also includes explicitly requested eligible store credit.
     * Null when no selected line qualifies for refund or store credit. The store's inspection and
     * its final decision can change the refund. Nothing is reserved. anyOf[1] (Value): {@link
     * ReturnRefundEstimate}. Estimated refund for the selected eligible quantities. The store's
     * inspection and its final decision can change the refund. Nothing is reserved. anyOf[2]
     * (Value): null.
     */
    "refund_estimate": ((ReturnRefundEstimate) | (null));
    /**
     * The selection the preview was run for. Which order lines to check for return eligibility:
     * all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Return eligibility for one order line item, with the line's details, suggested return reasons,
 * and whether self-service returns are enabled.
 */
export type ReturnEligibilityPreviewLineItem = {
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Whether the buyer can request this line themselves, through a customer session, right now.
     * False when no policy covers the item, when it is not eligible, or when the store offers no
     * reason for it. Read eligibility.reason and ineligibility_reason to say why.
     */
    "can_buyer_request": boolean;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * How the policy judged this line. Whether a return line is eligible under policy, with the
     * eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then
     * reasons that apply to every item. Each group sorts by handle ascending, with
     * return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@link
     * ReturnReasonSummary}. A return reason a buyer can pick for a line, with its `handle` and
     * whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelection = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {});
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilled & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItems & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilled = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled" | (string & {});
})
    & (({
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": unknown;
}));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilledRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & (({
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & ({
    "line_items"?: never;
}));
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItems = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items" | (string & {});
})
    & ({
    /** The lines to check or return, each naming an order line item. minItems: 1. */
    "line_items": unknown;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": unknown;
});
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItemsRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items";
})
    & ({
    /** The lines to check or return, each naming an order line item. minItems: 1. */
    "line_items": unknown;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items";
});
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelectionRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items";
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItemsRequestInput & object, readonly unknown[]>));
/**
 * The money for a return: returned value, deductions, credits, replacement total, and amounts due
 * to or from the buyer.
 */
export type ReturnFinancialSummary = {
    /**
     * Balances collected from the buyer. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not
     * succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "due_from_buyer_money": MoneyValue;
    /**
     * Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "due_to_buyer_money": MoneyValue;
    /**
     * Refund amounts that succeeded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Sum of return_value.discount_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_discount_money": MoneyValue;
    /**
     * Sum of return_value.subtotal_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_subtotal_money": MoneyValue;
    /**
     * Sum of return_value.tax_money across the Return's line items. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "returned_tax_money": MoneyValue;
    /**
     * Sum of return_value.total_money across the Return's line items. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
export type ReturnFinancialSummaryPreviousAttributes = {
    /**
     * Balances collected from the buyer. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "collected_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Credits added by confirmed, non-canceled resolutions. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Fees withheld by confirmed, non-canceled resolutions. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not
     * succeeded. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "due_from_buyer_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "due_to_buyer_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Refund amounts that succeeded. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Value of replacement merchandise on confirmed, non-canceled resolutions. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Sum of return_value.discount_money across the Return's line items. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Sum of return_value.subtotal_money across the Return's line items. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Sum of return_value.tax_money across the Return's line items. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Sum of return_value.total_money across the Return's line items. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * Where the buyer sends returned merchandise: their own address, a merchant location, or an
 * external location.
 */
export type ReturnHandoffDestination = {
    /**
     * Postal address the buyer sends the merchandise to. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * What kind of place the destination is. Value enum: "buyer_address", "location",
     * "external_location".
     */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /**
     * ID of the Location that receives the merchandise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Name of the destination. */
    "name"?: string;
};
export type ReturnHandoffDestinationPreviousAttributes = {
    /**
     * Postal address the buyer sends the merchandise to. anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * What kind of place the destination is. Value enum: "buyer_address", "location",
     * "external_location". anyOf[1] (Value): string. What kind of place the destination is. Value
     * enum: "buyer_address", "location", "external_location". anyOf[2] (Value): null.
     */
    "destination_type"?: (("buyer_address" | "location" | "external_location" | (string & {})) | (null));
    /**
     * ID of the Location that receives the merchandise. anyOf[1] (Value): string. ID of the
     * Location that receives the merchandise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2]
     * (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Name of the destination. anyOf[1] (Value): string. Name of the destination. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
};
/**
 * What the buyer must do to hand merchandise back: the destination, instructions, line items, and
 * expiry.
 */
export type ReturnHandoffRequirement = {
    /**
     * Where the buyer sends the merchandise. Where the buyer sends returned merchandise: their own
     * address, a merchant location, or an external location.
     */
    "destination": ReturnHandoffDestination;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** Instructions for the buyer on sending the merchandise. */
    "instructions"?: string;
    /**
     * Return lines and the quantities still expected. [] (Value): {@link
     * ReturnHandoffRequirementLineItem}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnHandoffRequirementLineItem>;
    /** Reserved. Flint doesn't set it today, so it's always omitted. Format: int64. */
    "shipment_count"?: number;
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** A return line and the quantity the buyer must hand back. */
export type ReturnHandoffRequirementLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Return that owns return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** ID of the Return line the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id": string;
};
export type ReturnHandoffRequirementLineItemPreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns
     * return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the entry is about. anyOf[1] (Value): string. ID of the Return line
     * the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
};
export type ReturnHandoffRequirementPreviousAttributes = {
    /**
     * Where the buyer sends the merchandise. anyOf[1] (Value): {@link
     * ReturnHandoffDestinationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "destination"?: ((ReturnHandoffDestinationPreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Instructions for the buyer on sending the merchandise. anyOf[1] (Value): string.
     * Instructions for the buyer on sending the merchandise. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * Return lines and the quantities still expected. anyOf[1] (Value): Array of {@link
     * ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and the quantities still
     * expected. anyOf[1][] (Value): {@link ReturnHandoffRequirementLineItemPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<ReturnHandoffRequirementLineItemPreviousAttributes>) | (null));
    /**
     * Reserved. Flint doesn't set it today, so it's always omitted. anyOf[1] (Value): integer.
     * Reserved. Flint doesn't set it today, so it's always omitted. Format: int64. anyOf[2]
     * (Value): null.
     */
    "shipment_count"?: ((number) | (null));
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     * anyOf[1] (Value): string. Whether the buyer has started sending merchandise back. A
     * requirement leaves handoff_requirements entirely once it is satisfied, so there is no
     * terminal status and an empty array means nothing is waiting on the buyer. Value enum:
     * "pending", "in_progress". anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "in_progress" | (string & {})) | (null));
};
/** An assessment of the condition of returned items. */
export type ReturnInspection = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. */
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. [] (Value): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection result for
     * a returned item.
     */
    "line_items": Array<ReturnInspectionLineItem>;
    /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_id": string;
    /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a point of
     * sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded".
     */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "superseded_at"?: string;
    /**
     * ID of the inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "superseded_by_return_inspection_id"?: string;
    /** ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". */
    "supersedes_return_inspection_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
export type ReturnInspectionAcceptanceDecidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "inspected_at"?: ((string) | (null));
            "inspection_location_id"?: ((string) | (null));
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_inspection_id"?: ((string) | (null));
            "supersedes_return_inspection_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.acceptance_decided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "inspected_at"?: ((string) | (null));
            "inspection_location_id"?: ((string) | (null));
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_inspection_id"?: ((string) | (null));
            "supersedes_return_inspection_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.acceptance_decided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.acceptance_decided";
});
/**
 * The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnInspectionPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.correction_reason (Optional): string or
     * null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
     * or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.inspected_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.inspected_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.inspected_at.anyOf[2] (Value): null.
     * previous_attributes.inspection_location_id (Optional): string or null. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id.
     * previous_attributes.inspection_location_id.anyOf[1] (Value): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inspection_location_id.anyOf[2]
     * (Value): null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnInspectionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Unique identifier for
     * this return inspection, prefixed `retins_`.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Unique identifier for
     * this return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. ID of the receipt being
     * inspected. previous_attributes.return_receipt_id.anyOf[1] (Value): string. ID of the receipt
     * being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_inspection_id (Optional): string or null. ID of the
     * inspection that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
     * inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.superseded_by_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_inspection_id (Optional): string or null. ID of the
     * inspection this one corrects. previous_attributes.supersedes_return_inspection_id.anyOf[1]
     * (Value): string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.supersedes_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. inspected_at (Optional): string or null. RFC3339 timestamp. inspected_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * inspected_at.anyOf[2] (Value): null. inspection_location_id (Optional): string or null.
         * Location where the returned merchandise was inspected. Must match the receipt
         * receiving_location_id. inspection_location_id.anyOf[1] (Value): string. Location where
         * the returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inspection_location_id.anyOf[2] (Value):
         * null. line_items (Optional): Array of {@link ReturnInspectionLineItemPreviousAttributes}
         * or null. The lines recorded. line_items.anyOf[1] (Value): Array of {@link
         * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. line_items.anyOf[1][]
         * (Value): {@link ReturnInspectionLineItemPreviousAttributes}. line_items.anyOf[2]
         * (Value): null. return_id (Optional): string or null. ID of the Return the goods belong
         * to. return_id.anyOf[1] (Value): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_inspection_id
         * (Optional): string or null. Unique identifier for this return inspection, prefixed
         * `retins_`. return_inspection_id.anyOf[1] (Value): string. Unique identifier for this
         * return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_receipt_id (Optional): string or
         * null. ID of the receipt being inspected. return_receipt_id.anyOf[1] (Value): string. ID
         * of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipt_id.anyOf[2] (Value): null. source_system (Optional): {@link
         * ReturnSourceSystemPreviousAttributes} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystemPreviousAttributes}. source_system.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". status.anyOf[1] (Value):
         * string. Whether this is the current observation of these units or a correction replaced
         * it. Value enum: "current", "superseded". status.anyOf[2] (Value): null. superseded_at
         * (Optional): string or null. RFC3339 timestamp. superseded_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_at.anyOf[2] (Value): null. superseded_by_return_inspection_id (Optional):
         * string or null. ID of the inspection that corrected this one. Absent while it is
         * current. superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
         * inspection that corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". superseded_by_return_inspection_id.anyOf[2]
         * (Value): null. supersedes_return_inspection_id (Optional): string or null. ID of the
         * inspection this one corrects. supersedes_return_inspection_id.anyOf[1] (Value): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * supersedes_return_inspection_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "inspected_at"?: ((string) | (null));
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. anyOf[1] (Value): string. Location where the returned
             * merchandise was inspected. Must match the receipt receiving_location_id. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "inspection_location_id"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnInspectionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value):
             * string. Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being
             * inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the inspection that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the inspection that corrected this one. Absent while it is
             * current. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "superseded_by_return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the
             * inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "supersedes_return_inspection_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
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
 * The `return_inspection.acceptance_decided` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnInspectionPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.correction_reason (Optional): string or
     * null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
     * or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.inspected_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.inspected_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.inspected_at.anyOf[2] (Value): null.
     * previous_attributes.inspection_location_id (Optional): string or null. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id.
     * previous_attributes.inspection_location_id.anyOf[1] (Value): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inspection_location_id.anyOf[2]
     * (Value): null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnInspectionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Unique identifier for
     * this return inspection, prefixed `retins_`.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Unique identifier for
     * this return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. ID of the receipt being
     * inspected. previous_attributes.return_receipt_id.anyOf[1] (Value): string. ID of the receipt
     * being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_inspection_id (Optional): string or null. ID of the
     * inspection that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
     * inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.superseded_by_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_inspection_id (Optional): string or null. ID of the
     * inspection this one corrects. previous_attributes.supersedes_return_inspection_id.anyOf[1]
     * (Value): string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.supersedes_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. inspected_at (Optional): string or null. RFC3339 timestamp. inspected_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * inspected_at.anyOf[2] (Value): null. inspection_location_id (Optional): string or null.
         * Location where the returned merchandise was inspected. Must match the receipt
         * receiving_location_id. inspection_location_id.anyOf[1] (Value): string. Location where
         * the returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inspection_location_id.anyOf[2] (Value):
         * null. line_items (Optional): Array of {@link ReturnInspectionLineItemPreviousAttributes}
         * or null. The lines recorded. line_items.anyOf[1] (Value): Array of {@link
         * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. line_items.anyOf[1][]
         * (Value): {@link ReturnInspectionLineItemPreviousAttributes}. line_items.anyOf[2]
         * (Value): null. return_id (Optional): string or null. ID of the Return the goods belong
         * to. return_id.anyOf[1] (Value): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_inspection_id
         * (Optional): string or null. Unique identifier for this return inspection, prefixed
         * `retins_`. return_inspection_id.anyOf[1] (Value): string. Unique identifier for this
         * return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_receipt_id (Optional): string or
         * null. ID of the receipt being inspected. return_receipt_id.anyOf[1] (Value): string. ID
         * of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipt_id.anyOf[2] (Value): null. source_system (Optional): {@link
         * ReturnSourceSystemPreviousAttributes} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystemPreviousAttributes}. source_system.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". status.anyOf[1] (Value):
         * string. Whether this is the current observation of these units or a correction replaced
         * it. Value enum: "current", "superseded". status.anyOf[2] (Value): null. superseded_at
         * (Optional): string or null. RFC3339 timestamp. superseded_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_at.anyOf[2] (Value): null. superseded_by_return_inspection_id (Optional):
         * string or null. ID of the inspection that corrected this one. Absent while it is
         * current. superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
         * inspection that corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". superseded_by_return_inspection_id.anyOf[2]
         * (Value): null. supersedes_return_inspection_id (Optional): string or null. ID of the
         * inspection this one corrects. supersedes_return_inspection_id.anyOf[1] (Value): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * supersedes_return_inspection_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "inspected_at"?: ((string) | (null));
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. anyOf[1] (Value): string. Location where the returned
             * merchandise was inspected. Must match the receipt receiving_location_id. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "inspection_location_id"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnInspectionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value):
             * string. Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being
             * inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the inspection that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the inspection that corrected this one. Absent while it is
             * current. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "superseded_by_return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the
             * inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "supersedes_return_inspection_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
});
export type ReturnInspectionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.created";
});
/**
 * The `return_inspection.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
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
 * The `return_inspection.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnInspectionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
});
/** The inspection result for a returned item. */
export type ReturnInspectionLineItem = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "acceptance_decided_at"?: string;
    /**
     * Who made the acceptance decision. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "acceptance_decided_by"?: ReturnActor;
    /**
     * Why the units were accepted or rejected after review. Value enum: "inspection_result",
     * "return_policy", "manual_review", "other".
     */
    "acceptance_decision_reason"?: "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Detail about `acceptance_decision_reason`. */
    "acceptance_decision_reason_message"?: string;
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes": Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Note for your own team about this line. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
    /** ID of the inspection the line belongs to. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". */
    "return_inspection_id": string;
    /**
     * Unique identifier for this return inspection line item, prefixed `retinli_`. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /** ID of the Return line inspected. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /**
     * Receipt that owns return_receipt_line_item_id. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /** ID of the receipt line inspected. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". */
    "return_receipt_line_item_id": string;
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. `decide` is listed while the inspection is current and the line's
     * `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". [] (Value):
     * string. Value enum: "decide".
     */
    "supported_actions": Array<"decide" | (string & {})>;
};
export type ReturnInspectionLineItemPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "acceptance_decided_at"?: ((string) | (null));
    /**
     * Who made the acceptance decision. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "acceptance_decided_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the units were accepted or rejected after review. Value enum: "inspection_result",
     * "return_policy", "manual_review", "other". anyOf[1] (Value): string. Why the units were
     * accepted or rejected after review. Value enum: "inspection_result", "return_policy",
     * "manual_review", "other". anyOf[2] (Value): null.
     */
    "acceptance_decision_reason"?: (("inspection_result" | "return_policy" | "manual_review" | "other" | (string & {})) | (null));
    /**
     * Detail about `acceptance_decision_reason`. anyOf[1] (Value): string. Detail about
     * `acceptance_decision_reason`. anyOf[2] (Value): null.
     */
    "acceptance_decision_reason_message"?: ((string) | (null));
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required". anyOf[1] (Value): string. Whether the
     * inspected units were accepted, rejected, or need a merchant's decision. Value enum:
     * "accepted", "rejected", "review_required". anyOf[2] (Value): null.
     */
    "acceptance_status"?: (("accepted" | "rejected" | "review_required" | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "available_disposition_quantity"?: ((number) | (null));
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[1] (Value):
     * string. `undetermined`: The item's condition could not be assessed. Value enum: "new",
     * "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[2]
     * (Value): null.
     */
    "condition"?: (("new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {}))
        | (null));
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". anyOf[1] (Value): Array of string. What the inspection
     * found. Up to 50 values, none repeated. [] enum: "matches_expected_item", "wrong_item",
     * "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected",
     * "other". anyOf[1][] (Value): string. Value enum: "matches_expected_item", "wrong_item",
     * "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected",
     * "other". anyOf[2] (Value): null.
     */
    "finding_codes"?: ((Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>)
        | (null));
    /**
     * Note for your own team about this line. anyOf[1] (Value): string. Note for your own team
     * about this line. anyOf[2] (Value): null.
     */
    "internal_note"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1]
     * (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is
     * null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the inspection the line belongs to. anyOf[1] (Value): string. ID of the inspection the
     * line belongs to. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     */
    "return_inspection_id"?: ((string) | (null));
    /**
     * Unique identifier for this return inspection line item, prefixed `retinli_`. anyOf[1]
     * (Value): string. Unique identifier for this return inspection line item, prefixed
     * `retinli_`. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". anyOf[2] (Value): null.
     */
    "return_inspection_line_item_id"?: ((string) | (null));
    /**
     * ID of the Return line inspected. anyOf[1] (Value): string. ID of the Return line inspected.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * Receipt that owns return_receipt_line_item_id. anyOf[1] (Value): string. Receipt that owns
     * return_receipt_line_item_id. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value):
     * null.
     */
    "return_receipt_id"?: ((string) | (null));
    /**
     * ID of the receipt line inspected. anyOf[1] (Value): string. ID of the receipt line
     * inspected. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
     */
    "return_receipt_line_item_id"?: ((string) | (null));
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. `decide` is listed while the inspection is current and the line's
     * `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". anyOf[1]
     * (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't
     * have the scope for are left out. `decide` is listed while the inspection is current and the
     * line's `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide".
     * anyOf[1][] (Value): string. Value enum: "decide". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"decide" | (string & {})>) | (null));
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequest = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /**
     * Note for your own team about this line. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line inspected. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * ID of the receipt line inspected. minLength: 1. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
    /**
     * Why the receipt line was verified against the Return line. Value enum:
     * "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review",
     * "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequestInput = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /**
     * Note for your own team about this line. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line inspected. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * ID of the receipt line inspected. minLength: 1. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
    /**
     * Why the receipt line was verified against the Return line. Value enum:
     * "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review",
     * "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
export type ReturnInspectionPreviousAttributes = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". anyOf[1] (Value): string. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". anyOf[2] (Value): null.
     */
    "correction_reason"?: (("entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
     * `correction_reason`. anyOf[2] (Value): null.
     */
    "correction_reason_message"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_actor_id"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1][]
     * (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "inspected_at"?: ((string) | (null));
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. anyOf[1] (Value): string. Location where the returned merchandise was
     * inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "inspection_location_id"?: ((string) | (null));
    /**
     * The lines recorded. anyOf[1] (Value): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value): {@link
     * ReturnInspectionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
    /**
     * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the goods
     * belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value): string.
     * Unique identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     */
    "return_inspection_id"?: ((string) | (null));
    /**
     * ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being
     * inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     */
    "return_receipt_id"?: ((string) | (null));
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * anyOf[2] (Value): null.
     */
    "status"?: (("current" | "superseded" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "superseded_at"?: ((string) | (null));
    /**
     * ID of the inspection that corrected this one. Absent while it is current. anyOf[1] (Value):
     * string. ID of the inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     */
    "superseded_by_return_inspection_id"?: ((string) | (null));
    /**
     * ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the inspection this
     * one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     */
    "supersedes_return_inspection_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
export type ReturnInspectionSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "inspected_at"?: ((string) | (null));
            "inspection_location_id"?: ((string) | (null));
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_inspection_id"?: ((string) | (null));
            "supersedes_return_inspection_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "inspected_at"?: ((string) | (null));
            "inspection_location_id"?: ((string) | (null));
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_inspection_id"?: ((string) | (null));
            "supersedes_return_inspection_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.superseded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.superseded";
});
/**
 * The `return_inspection.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnInspectionPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.correction_reason (Optional): string or
     * null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
     * or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.inspected_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.inspected_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.inspected_at.anyOf[2] (Value): null.
     * previous_attributes.inspection_location_id (Optional): string or null. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id.
     * previous_attributes.inspection_location_id.anyOf[1] (Value): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inspection_location_id.anyOf[2]
     * (Value): null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnInspectionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Unique identifier for
     * this return inspection, prefixed `retins_`.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Unique identifier for
     * this return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. ID of the receipt being
     * inspected. previous_attributes.return_receipt_id.anyOf[1] (Value): string. ID of the receipt
     * being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_inspection_id (Optional): string or null. ID of the
     * inspection that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
     * inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.superseded_by_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_inspection_id (Optional): string or null. ID of the
     * inspection this one corrects. previous_attributes.supersedes_return_inspection_id.anyOf[1]
     * (Value): string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.supersedes_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. inspected_at (Optional): string or null. RFC3339 timestamp. inspected_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * inspected_at.anyOf[2] (Value): null. inspection_location_id (Optional): string or null.
         * Location where the returned merchandise was inspected. Must match the receipt
         * receiving_location_id. inspection_location_id.anyOf[1] (Value): string. Location where
         * the returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inspection_location_id.anyOf[2] (Value):
         * null. line_items (Optional): Array of {@link ReturnInspectionLineItemPreviousAttributes}
         * or null. The lines recorded. line_items.anyOf[1] (Value): Array of {@link
         * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. line_items.anyOf[1][]
         * (Value): {@link ReturnInspectionLineItemPreviousAttributes}. line_items.anyOf[2]
         * (Value): null. return_id (Optional): string or null. ID of the Return the goods belong
         * to. return_id.anyOf[1] (Value): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_inspection_id
         * (Optional): string or null. Unique identifier for this return inspection, prefixed
         * `retins_`. return_inspection_id.anyOf[1] (Value): string. Unique identifier for this
         * return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_receipt_id (Optional): string or
         * null. ID of the receipt being inspected. return_receipt_id.anyOf[1] (Value): string. ID
         * of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipt_id.anyOf[2] (Value): null. source_system (Optional): {@link
         * ReturnSourceSystemPreviousAttributes} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystemPreviousAttributes}. source_system.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". status.anyOf[1] (Value):
         * string. Whether this is the current observation of these units or a correction replaced
         * it. Value enum: "current", "superseded". status.anyOf[2] (Value): null. superseded_at
         * (Optional): string or null. RFC3339 timestamp. superseded_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_at.anyOf[2] (Value): null. superseded_by_return_inspection_id (Optional):
         * string or null. ID of the inspection that corrected this one. Absent while it is
         * current. superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
         * inspection that corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". superseded_by_return_inspection_id.anyOf[2]
         * (Value): null. supersedes_return_inspection_id (Optional): string or null. ID of the
         * inspection this one corrects. supersedes_return_inspection_id.anyOf[1] (Value): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * supersedes_return_inspection_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "inspected_at"?: ((string) | (null));
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. anyOf[1] (Value): string. Location where the returned
             * merchandise was inspected. Must match the receipt receiving_location_id. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "inspection_location_id"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnInspectionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value):
             * string. Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being
             * inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the inspection that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the inspection that corrected this one. Absent while it is
             * current. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "superseded_by_return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the
             * inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "supersedes_return_inspection_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
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
 * The `return_inspection.superseded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type ReturnInspectionSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnInspectionPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.correction_reason (Optional): string or
     * null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
     * or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.inspected_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.inspected_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.inspected_at.anyOf[2] (Value): null.
     * previous_attributes.inspection_location_id (Optional): string or null. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id.
     * previous_attributes.inspection_location_id.anyOf[1] (Value): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.inspection_location_id.anyOf[2]
     * (Value): null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnInspectionLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnInspectionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_id (Optional): string or null. Unique identifier for
     * this return inspection, prefixed `retins_`.
     * previous_attributes.return_inspection_id.anyOf[1] (Value): string. Unique identifier for
     * this return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.return_receipt_id (Optional): string or null. ID of the receipt being
     * inspected. previous_attributes.return_receipt_id.anyOf[1] (Value): string. ID of the receipt
     * being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_inspection_id (Optional): string or null. ID of the
     * inspection that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
     * inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.superseded_by_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_inspection_id (Optional): string or null. ID of the
     * inspection this one corrects. previous_attributes.supersedes_return_inspection_id.anyOf[1]
     * (Value): string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * previous_attributes.supersedes_return_inspection_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. inspected_at (Optional): string or null. RFC3339 timestamp. inspected_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * inspected_at.anyOf[2] (Value): null. inspection_location_id (Optional): string or null.
         * Location where the returned merchandise was inspected. Must match the receipt
         * receiving_location_id. inspection_location_id.anyOf[1] (Value): string. Location where
         * the returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inspection_location_id.anyOf[2] (Value):
         * null. line_items (Optional): Array of {@link ReturnInspectionLineItemPreviousAttributes}
         * or null. The lines recorded. line_items.anyOf[1] (Value): Array of {@link
         * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. line_items.anyOf[1][]
         * (Value): {@link ReturnInspectionLineItemPreviousAttributes}. line_items.anyOf[2]
         * (Value): null. return_id (Optional): string or null. ID of the Return the goods belong
         * to. return_id.anyOf[1] (Value): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_inspection_id
         * (Optional): string or null. Unique identifier for this return inspection, prefixed
         * `retins_`. return_inspection_id.anyOf[1] (Value): string. Unique identifier for this
         * return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * return_inspection_id.anyOf[2] (Value): null. return_receipt_id (Optional): string or
         * null. ID of the receipt being inspected. return_receipt_id.anyOf[1] (Value): string. ID
         * of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipt_id.anyOf[2] (Value): null. source_system (Optional): {@link
         * ReturnSourceSystemPreviousAttributes} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystemPreviousAttributes}. source_system.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". status.anyOf[1] (Value):
         * string. Whether this is the current observation of these units or a correction replaced
         * it. Value enum: "current", "superseded". status.anyOf[2] (Value): null. superseded_at
         * (Optional): string or null. RFC3339 timestamp. superseded_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_at.anyOf[2] (Value): null. superseded_by_return_inspection_id (Optional):
         * string or null. ID of the inspection that corrected this one. Absent while it is
         * current. superseded_by_return_inspection_id.anyOf[1] (Value): string. ID of the
         * inspection that corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". superseded_by_return_inspection_id.anyOf[2]
         * (Value): null. supersedes_return_inspection_id (Optional): string or null. ID of the
         * inspection this one corrects. supersedes_return_inspection_id.anyOf[1] (Value): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
         * supersedes_return_inspection_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "inspected_at"?: ((string) | (null));
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. anyOf[1] (Value): string. Location where the returned
             * merchandise was inspected. Must match the receipt receiving_location_id. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "inspection_location_id"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnInspectionLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnInspectionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnInspectionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value):
             * string. Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "return_inspection_id"?: ((string) | (null));
            /**
             * ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being
             * inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the inspection that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the inspection that corrected this one. Absent while it is
             * current. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
             */
            "superseded_by_return_inspection_id"?: ((string) | (null));
            /**
             * ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the
             * inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "supersedes_return_inspection_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
});
export type ReturnInspectionsCreateParams = (InputValue<CreateReturnInspectionRequestInput>)
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
export type ReturnInspectionsDecideLineItemParams = (InputValue<DecideReturnInspectionLineItemRequestInput>)
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
export type ReturnInspectionsGetParams = DisputesAcceptParams;
export type ReturnInspectionsListParams = {
    /**
     * Filter by acceptance status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "accepted", "rejected", "review_required". Value enum: "accepted",
     * "rejected", "review_required". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "accepted", "rejected", "review_required". anyOf[1][] (Value): string. Value enum:
     * "accepted", "rejected", "review_required". anyOf[2] (Value): string. Value enum: "accepted",
     * "rejected", "review_required".
     */
    "acceptance_status"?: InputValue<("accepted" | "rejected" | "review_required")
        | readonly ("accepted" | "rejected" | "review_required")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength:
     * 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Inclusive lower bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by inspection location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return inspection ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by return receipt id. pattern: ^retrc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id"?: InputValue<string>;
    /**
     * Filter by source system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "other", "flint". Value enum: "manual",
     * "pos", "wms", "erp", "other", "flint". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "other" | "flint")
        | readonly ("manual" | "pos" | "wms" | "erp" | "other" | "flint")[]>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "current", "superseded". Value enum: "current", "superseded". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "current", "superseded". anyOf[1][] (Value): string. Value
     * enum: "current", "superseded". anyOf[2] (Value): string. Value enum: "current",
     * "superseded".
     */
    "status"?: InputValue<("current" | "superseded") | readonly ("current" | "superseded")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
/** Puts in-transit stock back at the origin location. */
export type ReturnInventoryTransferToOriginRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_returned_quantity (Required): integer.
     * Cumulative quantity that should have returned to the origin. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Puts in-transit stock back at the origin location. */
export type ReturnInventoryTransferToOriginRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_returned_quantity (Required): integer.
     * Cumulative quantity that should have returned to the origin. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecision = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((unknown)
    | ({
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)))
    & (((unknown)
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)));
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecisionInput = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
})))
    & (((({
    "override_reason_message"?: never;
}))
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/** An item included in a return request. */
export type ReturnLineItem = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "accepted_quantity": number;
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Note the buyer gave about this line. Some return reasons require one. */
    "buyer_note"?: string;
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who recorded the decision on this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the decline. */
    "decline_reason_message"?: string;
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "declined_quantity": number;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "dispositioned_quantity": number;
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. Whether a return line is eligible under policy, with the eligible
     * quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link Fulfillment}. Work required to deliver
     * an order's items. anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. Format: int64.
     */
    "handed_off_quantity": number;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "inspected_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspection_waived_at"?: string;
    /**
     * Who waived inspection for this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Detail sent when inspection was waived. */
    "inspection_waiver_reason_message"?: string;
    /** Whether returned units of this line must be inspected. */
    "is_inspection_required"?: boolean;
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why.
     */
    "is_policy_overridden": boolean;
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {});
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "overridden_at"?: string;
    /**
     * Who recorded the override. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the override. */
    "override_reason_message"?: string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. Format:
     * int64.
     */
    "received_quantity": number;
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "requested_quantity": number;
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {});
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "resolved_quantity": number;
    /** ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReason}. A reason
     * customers can select when requesting a return. anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "review_required_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. For an open line with uncanceled approved quantity, `cancel` is listed while
     * approved quantity remains after accounting for handoff, receipt, inspection, disposition,
     * non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is
     * listed while inspection is required and no unit has been inspected. [] enum: "cancel",
     * "waive_inspection". [] (Value): string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * The pinned policy decision recomputed for based_on_quantity. A decide with only
 * approved_quantity commits these values. Policy automatic resolution selects the policy
 * automatic_resolution_type for policy_default or the line's requested_resolution_type for
 * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
 * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also
 * has no automatic_resolution_type. An unset release_timing is filled with after_inspection when
 * merchandise and inspection are required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required.
 */
export type ReturnLineItemDecisionProposal = {
    /**
     * Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". [] (Value): string. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * The refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically, using the policy default or buyer request according to the policy selection
     * mode. Absent for manual resolution, including buyer_requested when the line has no
     * requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity": number;
    /** Whether the proposal requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /**
     * ID of the Location the proposal sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * The policy timing, or after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when no
     * merchandise is required. This fill never counts as a policy deviation. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "return_required_quantity": number;
};
export type ReturnLineItemDecisionProposalPreviousAttributes = {
    /**
     * Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types
     * the proposal allows. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * The refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically, using the policy default or buyer request according to the policy selection
     * mode. Absent for manual resolution, including buyer_requested when the line has no
     * requested_resolution_type. Value enum: "refund", "store_credit", "no_monetary_action".
     * anyOf[1] (Value): string. The refund, store_credit, or no_monetary_action that Flint creates
     * and confirms automatically, using the policy default or buyer request according to the
     * policy selection mode. Absent for manual resolution, including buyer_requested when the line
     * has no requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action". anyOf[2] (Value): null.
     */
    "automatic_resolution_type"?: (("refund" | "store_credit" | "no_monetary_action" | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "based_on_quantity"?: ((number) | (null));
    /**
     * Whether the proposal requires inspection of the returned units. anyOf[1] (Value): boolean.
     * Whether the proposal requires inspection of the returned units. anyOf[2] (Value): null.
     */
    "is_inspection_required"?: ((boolean) | (null));
    /**
     * ID of the Location the proposal sends returned merchandise to. anyOf[1] (Value): string. ID
     * of the Location the proposal sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * The policy timing, or after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when no
     * merchandise is required. This fill never counts as a policy deviation. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. The policy timing,
     * or after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. This fill never counts as a policy deviation. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "return_required_quantity"?: ((number) | (null));
};
/**
 * Whether a return line is eligible under policy, with the eligible quantity, allowed resolution
 * types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
     * The pinned policy decision recomputed for based_on_quantity. A decide with only
     * approved_quantity commits these values. Policy automatic resolution selects the policy
     * automatic_resolution_type for policy_default or the line's requested_resolution_type for
     * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
     * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution
     * also has no automatic_resolution_type. An unset release_timing is filled with
     * after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the line. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the line. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null.
     */
    "return_shipping_payer": "merchant" | "buyer" | null | (string & {}) | null;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
export type ReturnLineItemEligibilityPreviousAttributes = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string.
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value):
     * null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
     * anyOf[1] (Value): {@link ReturnLineItemDecisionProposalPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "decision_proposal"?: ((ReturnLineItemDecisionProposalPreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "eligible_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "evaluated_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1]
     * (Value): string. The matched policy's declared exclusion reason. Present exactly when reason
     * is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2]
     * (Value): null.
     */
    "ineligibility_reason"?: (("final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments.
     * anyOf[1] (Value): Array of {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. Fees or
     * credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][]
     * (Value): {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. anyOf[2] (Value): null.
     */
    "policy_adjustment_proposals"?: ((Array<ReturnPolicyAdjustmentProposalPreviousAttributes>) | (null));
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy". anyOf[2] (Value): null.
     */
    "reason"?: (("eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {}))
        | (null));
    /**
     * Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2]
     * (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * ID of the policy that judged the line. Absent when none matched. anyOf[1] (Value): string.
     * ID of the policy that judged the line. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the policy revision that judged the line. Absent when none matched. anyOf[1] (Value):
     * string. ID of the policy revision that judged the line. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null. anyOf[1] (Value): string. Who pays
     * return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null. anyOf[2] (Value): null.
     */
    "return_shipping_payer"?: (("merchant" | "buyer" | null | (string & {})) | (null));
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether
     * the policy lets the buyer return this. `review_required` means the merchant decides. Value
     * enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     */
    "status"?: (("eligible" | "ineligible" | "review_required" | (string & {})) | (null));
};
export type ReturnLineItemPreviousAttributes = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Inspected units that were accepted. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "accepted_quantity"?: ((number) | (null));
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of
     * string. Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.
     * Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * anyOf[2] (Value): null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Units the decision approved. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "approved_quantity"?: ((number) | (null));
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Value enum: "refund",
     * "store_credit", "no_monetary_action". anyOf[1] (Value): string. The refund, store_credit, or
     * no_monetary_action resolution Flint creates and confirms automatically. Absent when the
     * merchant resolves manually. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action". anyOf[2] (Value): null.
     */
    "automatic_resolution_type"?: (("refund" | "store_credit" | "no_monetary_action" | (string & {})) | (null));
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Approved quantity that can still be assigned to a new resolution.
     * Every non-canceled resolution reserves its line quantity, including proposed, pending,
     * action-required, failed, and completed resolutions. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "available_resolution_quantity"?: ((number) | (null));
    /**
     * Components of the bundle the line was sold from. anyOf[1] (Value): Array of {@link
     * BundleComponentPreviousAttributes}. Components of the bundle the line was sold from.
     * anyOf[1][] (Value): {@link BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     */
    "bundle_components"?: ((Array<BundleComponentPreviousAttributes>) | (null));
    /**
     * ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line
     * was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Note the buyer gave about this line. Some return reasons require one. anyOf[1] (Value):
     * string. Note the buyer gave about this line. Some return reasons require one. anyOf[2]
     * (Value): null.
     */
    "buyer_note"?: ((string) | (null));
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Approved units canceled later. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "canceled_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Who recorded the decision on this line. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "decided_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "decision_at"?: ((string) | (null));
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other". anyOf[1] (Value): string. Why the line's declined quantity was declined. Value
     * enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other". anyOf[2] (Value): null.
     */
    "decline_reason"?: (("not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the decline. anyOf[1] (Value): string. Detail sent with the decline.
     * anyOf[2] (Value): null.
     */
    "decline_reason_message"?: ((string) | (null));
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Units the decision declined. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "declined_quantity"?: ((number) | (null));
    /**
     * Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold.
     * anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units with a successful disposition. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "dispositioned_quantity"?: ((number) | (null));
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. anyOf[1] (Value): {@link ReturnLineItemEligibilityPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "eligibility"?: ((ReturnLineItemEligibilityPreviousAttributes) | (null));
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link FulfillmentPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "fulfillment"?: ((FulfillmentPreviousAttributes) | (null));
    /**
     * ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the
     * fulfillment the units were delivered in. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2]
     * (Value): null.
     */
    "fulfillment_id"?: ((string) | (null));
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. anyOf[1] (Value): integer. Units the buyer handed off for the trip back.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "handed_off_quantity"?: ((number) | (null));
    /**
     * Image of the item as sold. anyOf[1] (Value): {@link ImagePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "image"?: ((ImagePreviousAttributes) | (null));
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units that have been inspected. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "inspected_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "inspection_waived_at"?: ((string) | (null));
    /**
     * Who waived inspection for this line. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "inspection_waived_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other". anyOf[1] (Value): string. Why
     * inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other". anyOf[2] (Value): null.
     */
    "inspection_waiver_reason"?: (("policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {}))
        | (null));
    /**
     * Detail sent when inspection was waived. anyOf[1] (Value): string. Detail sent when
     * inspection was waived. anyOf[2] (Value): null.
     */
    "inspection_waiver_reason_message"?: ((string) | (null));
    /**
     * Whether returned units of this line must be inspected. anyOf[1] (Value): boolean. Whether
     * returned units of this line must be inspected. anyOf[2] (Value): null.
     */
    "is_inspection_required"?: ((boolean) | (null));
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why. anyOf[1] (Value): boolean. Whether the decision overrode the pinned return policy's
     * proposal. `override_reason` says why. anyOf[2] (Value): null.
     */
    "is_policy_overridden"?: ((boolean) | (null));
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved". anyOf[1] (Value): string. Where this line's merchandise
     * stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved". anyOf[2] (Value): null.
     */
    "merchandise_status"?: (("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {}))
        | (null));
    /**
     * Modifiers selected on the order line, with their prices. anyOf[1] (Value): Array of {@link
     * OrderLineItemModifierPreviousAttributes}. Modifiers selected on the order line, with their
     * prices. anyOf[1][] (Value): {@link OrderLineItemModifierPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "modifiers"?: ((Array<OrderLineItemModifierPreviousAttributes>) | (null));
    /**
     * Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Order that owns order_line_item_id. anyOf[1] (Value): string. Order that owns
     * order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item the units come from. anyOf[1] (Value): string. ID of the order
     * line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "overridden_at"?: ((string) | (null));
    /**
     * Who recorded the override. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "overridden_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other". anyOf[1] (Value): string. Why the decision overrode the pinned return policy's
     * proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other". anyOf[2] (Value): null.
     */
    "override_reason"?: (("customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the override. anyOf[1] (Value): string. Detail sent with the override.
     * anyOf[2] (Value): null.
     */
    "override_reason_message"?: ((string) | (null));
    /**
     * ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog product the item was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. anyOf[1]
     * (Value): integer. Units that arrived. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. anyOf[2] (Value): null.
     */
    "received_quantity"?: ((number) | (null));
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * anyOf[1] (Value): string. ID of the Location the buyer sends the merchandise to. Absent when
     * none has to come back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Inspected units that were rejected. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "rejected_quantity"?: ((number) | (null));
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Committed
     * resolution execution gate, filled for every approved line: after_inspection when merchandise
     * and inspection are required, after_receipt when merchandise is required without inspection,
     * or after_approval when merchandise is not required, unless the policy or decision sets a
     * timing explicitly. Applies to every resolution type, including exchanges and replacements.
     * manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum:
     * "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2]
     * (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units the request asked to return. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "requested_quantity"?: ((number) | (null));
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1]
     * (Value): string. Outcome requested for this line when it was created. Absent when none was
     * requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". anyOf[2] (Value): null.
     */
    "requested_resolution_type"?: (("refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {}))
        | (null));
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value):
     * string. Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed". anyOf[2] (Value): null.
     */
    "resolution_status"?: (("not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {})) | (null));
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units whose resolution has finished. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "resolved_quantity"?: ((number) | (null));
    /**
     * ID of the Return this line belongs to. anyOf[1] (Value): string. ID of the Return this line
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Unique identifier for this return line item, prefixed `retli_`. anyOf[1] (Value): string.
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReasonPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReasonPreviousAttributes) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Handle of the
     * chosen reason, captured when the line is created or its reason changes. Later renames,
     * deactivation or archiving don't change it. anyOf[2] (Value): null.
     */
    "return_reason_handle"?: ((string) | (null));
    /**
     * ID of the reason chosen for this line. anyOf[1] (Value): string. ID of the reason chosen for
     * this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     */
    "return_reason_id"?: ((string) | (null));
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Name of the
     * chosen reason, captured when the line is created or its reason changes. Later renames,
     * deactivation or archiving don't change it. anyOf[2] (Value): null.
     */
    "return_reason_name"?: ((string) | (null));
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. anyOf[1] (Value): integer. How much of the approved
     * quantity the buyer must physically send back; fractional quantities are not supported. Set 0
     * for a returnless refund, where the buyer keeps the merchandise and the Return still settles
     * the money. Format: int64. anyOf[2] (Value): null.
     */
    "return_required_quantity"?: ((number) | (null));
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. anyOf[1] (Value): Array of string. IDs of the resolutions that include this
     * line, oldest first, including failed and canceled resolutions. anyOf[1][] (Value): string.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_ids"?: ((Array<string>) | (null));
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. anyOf[1] (Value): {@link
     * ReturnLineItemValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "return_value"?: ((ReturnLineItemValuePreviousAttributes) | (null));
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. anyOf[1] (Value): integer. Inspected units still waiting for
     * an acceptance decision. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. anyOf[2] (Value): null.
     */
    "review_required_quantity"?: ((number) | (null));
    /**
     * Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of
     * {@link SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such
     * as size and color. anyOf[1][] (Value): {@link SelectedProductOptionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "selected_options"?: ((Array<SelectedProductOptionPreviousAttributes>) | (null));
    /**
     * SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2]
     * (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1]
     * (Value): string. Where this line stands. Same values and meanings as the Return's `status`,
     * applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled".
     * anyOf[2] (Value): null.
     */
    "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. For an open line with uncanceled approved quantity, `cancel` is listed while
     * approved quantity remains after accounting for handoff, receipt, inspection, disposition,
     * non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is
     * listed while inspection is required and no unit has been inspected. [] enum: "cancel",
     * "waive_inspection". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions
     * the API key or token doesn't have the scope for are left out. For an open line with
     * uncanceled approved quantity, `cancel` is listed while approved quantity remains after
     * accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and
     * non-voided return shipment allocations. `waive_inspection` is listed while inspection is
     * required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1][]
     * (Value): string. Value enum: "cancel", "waive_inspection". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | "waive_inspection" | (string & {})>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /**
     * Note about this line. Some return reasons require one. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /**
     * Note about this line. Some return reasons require one. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/** The value of a return line: unit price, subtotal, discount, tax, and total. */
export type ReturnLineItemValue = {
    /**
     * Discount on the returned units. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Subtotal of the returned units, before discount and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the returned units. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one returned unit. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type ReturnLineItemValuePreviousAttributes = {
    /**
     * Discount on the returned units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal of the returned units, before discount and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax on the returned units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal minus discount, plus tax. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Price of one returned unit. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
};
export type ReturnPoliciesCreateParams = (InputValue<CreateReturnPolicyRequestInput>)
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
export type ReturnPoliciesCreateRevisionParams = (InputValue<PublishReturnPolicyRevisionRequestInput>)
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
export type ReturnPoliciesDeleteParams = {
    /**
     * Optional. The policy's current version. If it changed, the archive fails with 409
     * VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1. maximum: 9007199254740991.
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
export type ReturnPoliciesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: current_revision. Expanded
     * relationships are returned only when explicitly requested and authorized. Limits: at most 10
     * unique expand paths per request. [] enum: "current_revision". Value enum:
     * "current_revision". anyOf[1] (Value): Array of string. [] enum: "current_revision".
     * anyOf[1][] (Value): string. Value enum: "current_revision". anyOf[2] (Value): string. Value
     * enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
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
