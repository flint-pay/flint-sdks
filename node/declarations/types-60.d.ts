import type {
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary
} from './types-24.js';
import type { MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-38.js';
import type { PartnerWebhookEnvelope, PaymentErrorSummary } from './types-44.js';
import type { ReturnHandoffRequirementLineItem } from './types-55.js';
import type { Shipment } from './types-59.js';
import type { InputValue } from '../runtime.js';
import type { CreateShipmentRequestInput } from './types-13.js';
import type { UpdateShipmentRequestInput } from './types-68.js';
import type { VoidShipmentRequestInput } from './types-69.js';
import type { ResponseMeta } from './types-54.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { Dimensions, DimensionsRequestInput } from './types-23.js';
import type { Weight, WeightRequestInput } from './types-70.js';
import type { ConfigurationVersionRequestInput } from './types-7.js';
import type { AcceptFulfillmentRequestInput } from './types-0.js';
import type { BuyerAction } from './types-1.js';
import type {
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionEndAfter
} from './types-61.js';
import type {
    SubscriptionGiftRecipient,
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem
} from './types-62.js';
import type {
    SubscriptionPromotion,
    SubscriptionScheduledPlanChange,
    SubscriptionServiceLocation,
    SubscriptionTax,
    SubscriptionSnapshotMetrics
} from './types-63.js';
import type { SubscriptionUpcomingDeliveryHold, SubscriptionWindowMetrics } from './types-64.js';
/**
 * The `shipment.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Shipment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
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
 * The `shipment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Shipment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
});
export type ShipmentsCreateParams = (CreateShipmentRequestInput)
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
export type ShipmentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order, packages. Expansion
     * requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many
     * expansions are capped at 20 related objects per path. [] enum: "order", "packages". Value
     * enum: "order", "packages". anyOf[1] (Value): Array of string. [] enum: "order", "packages".
     * anyOf[1][] (Value): string. Value enum: "order", "packages". anyOf[2] (Value): string. Value
     * enum: "order", "packages".
     */
    "expand"?: InputValue<("order" | "packages") | readonly ("order" | "packages")[]>;
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
export type ShipmentsListParams = {
    /**
     * Optional order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact match on the shipment's `external_reference_id`. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across shipment ID and external reference ID. Text fields match any part of the
     * value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and
     * need the type prefix, such as shp_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package-derived shipment status. Values within this filter are combined with OR.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[1][] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[2] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Filter by shipment direction. Values within this filter are combined with OR. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "outbound", "return".
     * Value enum: "outbound", "return". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "outbound", "return". anyOf[1][] (Value): string. Value enum: "outbound", "return". anyOf[2]
     * (Value): string. Value enum: "outbound", "return".
     */
    "direction"?: InputValue<("outbound" | "return") | readonly ("outbound" | "return")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type ShipmentsUpdateParams = (InputValue<UpdateShipmentRequestInput>)
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
export type ShipmentsVoidParams = (InputValue<VoidShipmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequest = {
    /**
     * Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event
     * type. minLength: 1. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequestInput = SignWebhookEndpointDeliveryRequest;
/** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type SignedMoneyRequestInput = {
    /**
     * Signed amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "amount": `${bigint}` | bigint;
    /**
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
};
/**
 * A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers
 * unchanged; this is not a persisted delivery or HTTP dispatch.
 */
export type SignedWebhookEndpointDelivery = {
    /** Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding. */
    "body": string;
    /**
     * JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Application headers from the real sender, including Authorization and any configured HMAC
     * signature. Never log these credentials. * (Value): string.
     */
    "headers": Record<string, string>;
    /**
     * The authorized sandbox endpoint and JWT audience. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /**
     * The event ID, also sent as webhook-id for receiver deduplication. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** A response containing `SignedWebhookEndpointDelivery` data. */
export type SignedWebhookEndpointDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A transient signed
     * delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this
     * is not a persisted delivery or HTTP dispatch.
     */
    "data": SignedWebhookEndpointDelivery;
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
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequest = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated" | (string & {});
};
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequestInput = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated";
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequest = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover" | (string & {});
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds" | (string & {});
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequestInput = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover";
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds";
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
};
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/** The request body for: Skip subscription cycle. */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/**
 * A fixed allocation referencing a read-only reversal nested in a payment split. This reference
 * has no independent lifecycle or write routes.
 */
export type SplitReversalReference = {
    /**
     * The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The split whose seller share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". */
    "payment_split_id": string;
    /**
     * The reversal in PaymentSplit.reversals that records recovery status. Example:
     * "psrev_01KEZF7C00XC1HA7S8YCQJDBDM".
     */
    "payment_split_reversal_id": string;
};
/** The seller amount to take back from one eligible payment split when creating a refund. */
export type SplitReversalRequest = {
    /**
     * Positive seller amount to take back, in the payment's currency. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * An eligible split on a payment this refund covers. Each split may appear once. minLength: 1.
     * pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/** The seller amount to take back from one eligible payment split when creating a refund. */
export type SplitReversalRequestInput = {
    /**
     * Positive seller amount to take back, in the payment's currency. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * An eligible split on a payment this refund covers. Each split may appear once. minLength: 1.
     * pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/** Starts fulfillment work. */
export type StartFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/**
 * One-time client authority for the named Stripe object. This payload always names the Stripe.js
 * call and carries its client secret.
 */
export type StripeClientAuthority = {
    /** Stripe client secret for the named PaymentIntent or SetupIntent. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone
     * PaymentIntents use payment_collection plus server confirmation instead of initial
     * confirm_payment authority. Value enum: "confirm_payment", "confirm_setup".
     */
    "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {});
};
/**
 * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now.
 * setup_collection is guidance instead and never carries a secret.
 */
export type StripeClientSetup = {
    /** Stripe.js initialization context and SetupIntent setup authority. */
    "stripe"?: StripeClientSetupStripe;
};
/** Stripe.js initialization context and SetupIntent setup authority. */
export type StripeClientSetupStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example:
     * "acct_1234567890".
     */
    "account_id"?: string;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key"?: string;
    /**
     * One-time client authority for the named Stripe object. This payload always names the
     * Stripe.js call and carries its client secret.
     */
    "setup_intent"?: StripeClientAuthority;
};
/**
 * Stripe initialization context plus one flow-specific authority object. Exactly one of
 * payment_intent, setup_intent, or terminal_payment_intent is present.
 */
export type StripePaymentClientAction = ({
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits: initialize Stripe.js with publishable_key alone and omit
     * stripeAccount. The Terminal SDK ignores this field. Example: "acct_1234567890".
     */
    "account_id": string | null;
    /**
     * PaymentIntent authority for an order payment authentication action. The client action for a
     * Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "payment_intent"?: StripeSetupIntentClientAction;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js. The Terminal SDK ignores this field.
     */
    "publishable_key": string;
    /**
     * SetupIntent authority for a saved-payment-method authentication action. The client action
     * for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "setup_intent"?: StripeSetupIntentClientAction;
    /**
     * Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay
     * reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK
     * on the connected Tap to Pay reader.
     */
    "terminal_payment_intent"?: StripeTerminalPaymentIntentClientAction;
});
/**
 * The client action for a Stripe setup intent: the client secret to pass to Stripe.js
 * `handleNextAction`.
 */
export type StripeSetupIntentClientAction = {
    /** SetupIntent client secret to pass to Stripe.js handleNextAction. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform. Today this is handle_next_action. Value enum:
     * "handle_next_action".
     */
    "stripe_js_call": "handle_next_action" | (string & {});
};
/**
 * Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the
 * connected Tap to Pay reader.
 */
export type StripeTerminalPaymentIntentClientAction = {
    /**
     * Card-present PaymentIntent client secret to pass to the Terminal SDK's
     * retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader.
     */
    "client_secret": string;
    /**
     * Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves,
     * collects, and confirms the payment. Value enum: "collect_and_confirm_payment_intent".
     */
    "stripe_terminal_sdk_call": "collect_and_confirm_payment_intent" | (string & {});
};
/**
 * The subscription offer and billing interval an order line was bought under, with the recurring
 * amount.
 */
export type SubscribedLine = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * Line amount for the first renewal, including modifiers and recurring discounts, before
     * shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "recurring_amount_money"?: MoneyValue;
    /** Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA". */
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequest = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Active subscription offer for this catalog variant. minLength: 1. Example:
     * "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     */
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequestModelInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Active subscription offer for this catalog variant. minLength: 1. Example:
     * "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     */
    "subscription_offer_id": string;
};
/** A customer's recurring purchase. */
export type Subscription = {
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * How often the subscription bills now. Read with billing_interval_count: monthly with a count
     * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of billing_interval units between charges. Changes with billing_interval. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * Billing interval and count pairs the subscription can switch to. For a subscription on a
     * plan, they follow the plan's current billing_interval_options. A subscription that came from
     * an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
     * delivery. Each option charges for all deliveries in its period. Changing the interval does
     * not change the per-delivery price. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "billing_schedule_waiting_started_at"?: string;
    /**
     * What the buyer can do with the subscription, in this order: cancel, pause, resume,
     * reactivate, update_payment_method, retry_payment, update_delivery, skip,
     * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then
     * renew, under the store's buyer policy. The available cancel and pause actions carry the
     * choices they accept. A buyer's read or change through a customer session on /v1/me, or in
     * Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list.
     * update_payment_method is required while a payment is past due without an inventory_wait, due
     * by next_retry_at when a retry is scheduled, and when the card expires before
     * next_billing_at, due by then. Example: []. [] (Value): {@link BuyerAction}. One thing a
     * buyer can do with an order, subscription, invoice or return they read through /v1/me. Show
     * the actions with is_required as what needs the buyer's attention, and the first available
     * action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who asked to cancel, when, and why. Present once a cancellation is requested, whether it
     * takes effect at the end of the billing period or right away. Omitted when no one asked, and
     * removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and
     * payment-related cancellations. The cancellation request behind a scheduled or completed
     * cancellation.
     */
    "cancellation_details"?: SubscriptionCancellationDetails;
    /**
     * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an
     * automatic inventory refund fully refunds the signup order, end_after_reached when the
     * automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached",
     * "signup_order_refunded".
     */
    "cancellation_reason"?: "buyer"
        | "merchant"
        | "integration"
        | "payment_failed"
        | "other"
        | "end_after_reached"
        | "signup_order_refunded"
        | (string & {});
    /**
     * Billing cycles charged so far, including cycles imported with
     * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
     * number plus one. Format: uint64. minimum: 0.
     */
    "completed_cycles": number;
    /**
     * When the recorded contract term ends. Does not move when the subscription pauses or changes
     * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "contract_end_at"?: string;
    /**
     * When the recorded contract term started. Does not move when the subscription pauses or
     * changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "contract_start_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_start_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery
     * cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1.
     * maximum: 24.
     */
    "deliveries_per_period": number;
    /**
     * Saved delivery preference with the current delivery method display. Write responses use the
     * same display as GET: fixed shipping reflects the current method configuration, and quoted
     * shipping shows the last paid shipping amount when available. A subscription's saved delivery
     * preference: method, destination, recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one
     * delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly",
     * null.
     */
    "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
    /**
     * Number of delivery intervals between deliveries. Null when no separate delivery cadence is
     * set. Format: int32. minimum: 1.
     */
    "delivery_interval_count": number | null;
    /**
     * The fee in the recorded contract terms. Present whenever those terms include a fee. It
     * applies only to a cancellation before contract_end_at. Flint never charges it. Later plan
     * changes do not change this fee. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Recorded automatic end condition. Null when no automatic end is set. Cycles count charged
     * billing periods, including imported completed_cycles. Pauses and skips do not use cycles.
     * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date,
     * and cancellation waits for the last remaining delivery. Skipping defers a delivery without
     * consuming its entitlement. Ending never refunds. anyOf[1] (Value): {@link
     * SubscriptionEndAfter}. The subscription's automatic end condition, measured by charged
     * billing cycles or a saved local calendar date. anyOf[2] (Value): null.
     */
    "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
    /**
     * Projected end under the current schedule and committed plan changes, including an earlier
     * scheduled cancellation. A date limit preserves already-paid entitlement without requiring a
     * future charge schedule. A reached cycle limit uses the last paid period end, or
     * current_period_end_at when no paid history exists; that fallback includes any skip or pause
     * extension. A cycle limit with cycles left needs a future charge schedule unless a known
     * scheduled cancellation determines the end. Paid deliveries extend the end to the last paid
     * delivery when it is later. An indefinite pause with paid deliveries owed makes the end
     * unknown. Null when the end cannot be determined or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Who receives the gift, when this is a gift subscription. customer_id stays the purchaser.
     * Flint clears it when the subscription ends and when the purchaser's data is erased. Null
     * when the subscription isn't a gift. anyOf[1] (Value): {@link SubscriptionGiftRecipient}. Who
     * receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and
     * reminders, and manages the subscription. delivery.recipient stays the ship-to address.
     * anyOf[2] (Value): null.
     */
    "gift_recipient": ((SubscriptionGiftRecipient) | (null));
    /**
     * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription renewal
     * is waiting for inventory, with the order and invoice involved and when the wait started.
     */
    "inventory_wait"?: SubscriptionInventoryWait;
    /**
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date.
     */
    "is_awaiting_billing_schedule"?: boolean;
    /**
     * Latest renewal payment failure, present only while status is past_due and the latest payment
     * failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line
     * takes that variant's current catalog price, which then stays until the line changes again.
     * [] (Value): {@link SubscriptionLineItem}. An item included in a customer's recurring
     * purchase.
     */
    "line_items": Array<SubscriptionLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is
     * past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "missed_billing_at"?: string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "next_billing_at"?: string;
    /**
     * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
     * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
     * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "next_delivery_at": string | null;
    /**
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "next_retry_at": string | null;
    /**
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "open_renewal_order_id"?: string;
    /**
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Why the subscription is paused: merchant for a pause made with your API key or dashboard,
     * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
     * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
     * settings pause the subscription. Omitted when the subscription is not paused. Value enum:
     * "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "paused_at"?: string;
    /**
     * Present only when `expand` includes `payment_method`; `null` when expanded and there is no
     * related payment method. anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
     * method's summary fields, including type, status, and card details, returned when the payment
     * method is expanded. anyOf[2] (Value): null.
     */
    "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /**
     * First charge boundary while no card is bound: the later of trial_end_at and next_billing_at
     * during a trial, or the next billing date for an imported period, even when that cycle's
     * charge is zero. Recomputed when the schedule changes. A trial still without a card at its
     * boundary cancels without an order or payment attempt. At that boundary, an imported
     * subscription with a positive charge that still has no card enters its normal dunning
     * schedule without a payment attempt. For an imported subscription, a zero charge completes
     * the renewal without a card and the deadline advances to the following boundary. Null when a
     * card is bound, collection is not scheduled (paused, canceled, or set to cancel at period
     * end), an active or trialing subscription is in its final end_after cycle, or an external
     * schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "payment_method_due_at": string | null;
    /**
     * Saved payment method used for renewal charges. Null when no card is bound. Bind a card to
     * this subscription with PATCH; changing the customer's default alone does not bind it.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string | null;
    /**
     * Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. [] (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
     * subscription, including its recurrence and remaining discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * Whether this subscription was created to prorate its first anchored paid period. Set at
     * creation and never changes; starting on the anchor day still bills a normal full period.
     */
    "prorate_first_period": boolean;
    /**
     * How many of each line the subscription bills each period, as a whole number; fractional
     * quantities are not supported. A change applies from the next renewal that has not been paid.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A change
     * to quantity must send one of these values, and the request is refused otherwise. A buyer can
     * change quantity only when more than one is listed. For a subscription on a plan, the list
     * follows the plan's current quantity_options. A subscription that came from an offer keeps
     * the choices the offer had at signup. [1] when no other quantity is offered. maxItems: 10.
     * uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * What one billing period's items cost before discounts, shipping, and tax: each line's price
     * with modifiers, times quantity. It changes when items, quantity, or the plan change; editing
     * the plan doesn't change it. For the next charge, use a subscription preview in next_renewal
     * mode. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when
     * there is no cycle limit or the subscription is canceled. Format: uint64. minimum: 0.
     */
    "remaining_cycles": number | null;
    /**
     * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23.
     */
    "remaining_prepaid_deliveries": number;
    /**
     * When Flint accepted a pending resume request. Set only while paused with a resume Flint has
     * not applied yet. Clears when Flint resumes the subscription or refuses the request. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resume_requested_at": string | null;
    /**
     * When the scheduled cancellation takes effect: trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend
     * it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no
     * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_cancel_at": string | null;
    /**
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. anyOf[1]
     * (Value): {@link SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next
     * charged renewal. anyOf[2] (Value): null.
     */
    "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
    /**
     * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1.
     * Always present; empty when no promotions are scheduled. [] (Value): {@link
     * SubscriptionPromotion}. A recurring promotion applied to a subscription, including its
     * recurrence and remaining discounted cycles.
     */
    "scheduled_promotions": Array<SubscriptionPromotion>;
    /**
     * When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery
     * intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null
     * when the subscription is not paused or the pause has no length, such as a pause until you
     * resume it or the pause Flint starts when a delivery hold runs out. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_resume_at": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The address where a subscription's service is delivered, with the saved customer
     * address it came from.
     */
    "service_location"?: SubscriptionServiceLocation;
    /**
     * When a scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /**
     * Where the subscription is in its lifecycle. Each value says what it means. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id": string;
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". [] (Value): string. Value enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     */
    "supported_actions": Array<"cancel"
        | "pause"
        | "resume"
        | "skip_cycle"
        | "renew"
        | "retry_payment"
        | "change_plan"
        | "change_quantity"
        | (string & {})>;
    /**
     * The tax the subscription's renewal, setup fee and plan change orders use. `null` when they
     * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only
     * to merchant credentials; omitted for buyer credentials. anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. anyOf[2] (Value):
     * null.
     */
    "tax": ((SubscriptionTax) | (null));
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /**
     * ID of the test clock the subscription's customer was created on. The subscription bills at
     * the clock's time. Present only when the customer is on a test clock. Included only in
     * merchant responses and omitted from buyer responses. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "trial_end_at"?: string;
    /**
     * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
     * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
     * subscription's delivery, and who can fix it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Goes up with every change to the subscription, including renewals and other changes Flint
     * makes. Send it as `expected_version` to apply an update only if nothing changed. Format:
     * uint64. minimum: 0.
     */
    "version": number;
};
export type SubscriptionActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.activated";
});
/**
 * The `subscription.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
     * when an automatic inventory refund fully refunds the signup order, end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached",
     * "signup_order_refunded". object.completed_cycles (Required): integer. Billing cycles charged
     * so far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". supported_actions[] (Value): string. Value enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
         * "change_quantity". tax (Required): {@link SubscriptionTax} or null. The tax the
         * subscription's renewal, setup fee and plan change orders use. `null` when they follow
         * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
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
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
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
 * The `subscription.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
     * when an automatic inventory refund fully refunds the signup order, end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached",
     * "signup_order_refunded". object.completed_cycles (Required): integer. Billing cycles charged
     * so far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". supported_actions[] (Value): string. Value enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
         * "change_quantity". tax (Required): {@link SubscriptionTax} or null. The tax the
         * subscription's renewal, setup fee and plan change orders use. `null` when they follow
         * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
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
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
});
/**
 * The verification state of a subscription's delivery address: `verified`, `unverified`,
 * `needs_review`, or `unverifiable`.
 */
export type SubscriptionAddressVerification = {
    /** Value enum: "verified", "unverified", "needs_review", "unverifiable". */
    "state": "verified" | "unverified" | "needs_review" | "unverifiable" | (string & {});
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionAnalytics = {
    /**
     * Currencies of subscription payments selected by succeeded activity created_at in the period,
     * plus current active and past_due billing snapshots, regardless of the currency filter. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Current persisted subscription state at computation time, cached briefly. Independent of the
     * requested period end. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies.
     */
    "snapshot_metrics": SubscriptionSnapshotMetrics;
    /**
     * Subscription creation, cancellation, and payment success metrics selected within the
     * requested period. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "window_metrics": SubscriptionWindowMetrics;
};
/** A response containing `SubscriptionAnalytics` data. */
export type SubscriptionAnalyticsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "data": SubscriptionAnalytics;
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
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternal = {
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternalInput = {
    /** Value enum: "external". */
    "owner": "external";
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlint = {
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlintInput = {
    /** Value enum: "flint". */
    "owner": "flint";
};
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequest = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external" | (string & {});
})
    & ((Exclude<SubscriptionBillingScheduleInputFlint & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequestInput = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external";
})
    & ((Exclude<SubscriptionBillingScheduleInputFlintInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternalInput & object, readonly unknown[]>));
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternal = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "next_billing_at"?: string | null;
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternalInput = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Value enum: "external". */
    "owner": "external";
};
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlint = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Future date at which Flint attempts the next charge. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "next_billing_at": string;
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlintInput = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Future date at which Flint attempts the next charge. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "next_billing_at": string | globalThis.Date;
    /** Value enum: "flint". */
    "owner": "flint";
};
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequest = ((SubscriptionBillingScheduleUpdateInputFlint)
    | (SubscriptionBillingScheduleUpdateInputExternal)
    | (Record<string, unknown>));
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequestInput = ((SubscriptionBillingScheduleUpdateInputFlintInput)
    | (SubscriptionBillingScheduleUpdateInputExternalInput));
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediate = {
    /** Starts billing now, with the plan trial when configured. Value enum: "immediate". */
    "type": "immediate" | (string & {});
};
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediateInput = {
    /** Starts billing now, with the plan trial when configured. Value enum: "immediate". */
    "type": "immediate";
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImported = {
    /**
     * Billing cycles already charged on the previous billing system, including the current
     * imported period. Defaults to 1 and must be at least 1. The subscription starts with this
     * completed_cycles count; its next renewal has subscription_cycle one higher. minimum: 1.
     * Default: 1.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "period_started_at": string;
    /** Continues a billing period already paid for on another system. Value enum: "imported". */
    "type": "imported" | (string & {});
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImportedInput = {
    /**
     * Billing cycles already charged on the previous billing system, including the current
     * imported period. Defaults to 1 and must be at least 1. The subscription starts with this
     * completed_cycles count; its next renewal has subscription_cycle one higher. minimum: 1.
     * Default: 1.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "period_started_at": string | globalThis.Date;
    /** Continues a billing period already paid for on another system. Value enum: "imported". */
    "type": "imported";
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduled = {
    /**
     * Future instant when the first billing period starts. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "starts_at": string;
    /** Starts the first billing period at starts_at. Value enum: "scheduled". */
    "type": "scheduled" | (string & {});
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduledInput = {
    /**
     * Future instant when the first billing period starts. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "starts_at": string | globalThis.Date;
    /** Starts the first billing period at starts_at. Value enum: "scheduled". */
    "type": "scheduled";
};
/** How billing begins. Send exactly one closed tagged-union branch. */
export type SubscriptionBillingStartRequest = ((SubscriptionBillingStartInputImmediate)
    | (SubscriptionBillingStartInputScheduled)
    | (SubscriptionBillingStartInputImported)
    | (Record<string, unknown>));
