import type {
    CreateDeliveryFulfillmentDetails,
    CreateDigitalFulfillmentDetails,
    CreateDeliveryFulfillmentDetailsInput,
    CreateDigitalFulfillmentDetailsInput
} from './types-8.js';
import type { CreatePickupFulfillmentDetails, CreatePickupFulfillmentDetailsInput } from './types-11.js';
import type { CreateServiceFulfillmentDetails, CreateServiceFulfillmentDetailsInput } from './types-12.js';
import type {
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-24.js';
import type { MetadataMap, MetadataRequestInput } from './types-36.js';
import type { OrderEditRemovalRequest } from './types-39.js';
import type {
    GiftCardFundingSource,
    GiftCardFundingSourceRequestInput,
    GiftCard,
    GiftCardLoad,
    GiftCardNotification
} from './types-25.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { GiftCardTransaction, GiftCardPurchaseRecipient, GiftCardNotificationRecipientInput } from './types-26.js';
import type { ResponseMeta } from './types-51.js';
import type {
    InitialGiftCardFunding,
    InitialGiftCardFundingInput,
    InventoryAdjustmentConditionChangeLineRequest,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentSetLineRequest,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAdjustmentQuantityLineRequest,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAllocationConfigurationValue,
    InventoryAllocationPolicyConfigurationRequestInput,
    InventoryBackorderPolicyRequest
} from './types-27.js';
import type {
    CreateModifierRequestInput,
    CreateOrderDiscount,
    CreateOrderLineItem,
    CreateOrderTip,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput,
    CreateOrderTipInput
} from './types-10.js';
import type { TextModifierConfigRequestInput } from './types-62.js';
import type {
    InventorySourceSystemRequest,
    InventorySourceSystemRequestInput,
    InventoryReservationOwnerRequest,
    InventoryRoutingDemand,
    InventoryRoutingSourceRequest,
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceRequestInput,
    InventoryTransferLineRequest,
    InventoryTransferLineRequestInput
} from './types-29.js';
import type { InventoryReceiptLineRequest, InventoryReceiptLineRequestInput } from './types-28.js';
import type { InvoiceLateFeePolicy, InvoiceLateFeePolicyRequestInput } from './types-31.js';
import type { InvoicePaymentTermCalculation, InvoicePaymentTermCalculationRequestInput } from './types-32.js';
import type { OrderDeliveryDestinationRequest, OrderDeliveryDestinationRequestInput } from './types-38.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-40.js';
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequest = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /**
     * The kind of fulfillment. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
})
    & ((Exclude<CreateFulfillmentRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickup & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigital & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestService & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigital = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "digital". */
    "type": "digital" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigitalInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "digital". */
    "type": "digital";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /**
     * The kind of fulfillment. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service";
})
    & ((Exclude<CreateFulfillmentRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickupInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigitalInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestServiceInput & object, readonly unknown[]>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDelivery = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDeliveryInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickup = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickupInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "pickup". */
    "type": "pickup";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestService = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "service". */
    "type": "service" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestServiceInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "service". */
    "type": "service";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipment = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link OrderEditRemovalRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<OrderEditRemovalRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipmentInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "shipment". */
    "type": "shipment";
})
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/** The request body for: Create a gift card funding disposition. */
export type CreateGiftCardFundingDispositionRequest = {
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Default: "honor_value". Value enum: "honor_value".
     */
    "disposition"?: "honor_value" | (string & {});
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * Your reason for honoring the gift card value despite the confirmed funding loss. minLength:
     * 1. maxLength: 200.
     */
    "reason_message": string;
};
/** The request body for: Create a gift card funding disposition. */
export type CreateGiftCardFundingDispositionRequestInput = {
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Default: "honor_value". Value enum: "honor_value".
     */
    "disposition"?: "honor_value";
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * Your reason for honoring the gift card value despite the confirmed funding loss. minLength:
     * 1. maxLength: 200.
     */
    "reason_message": string;
};
/** The request body for: Load a gift card. */
export type CreateGiftCardLoadRequest = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** The gift card to load. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * order_manual_payment_id (Optional): string. ID of the manual payment on the order that
     * funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". refund_id (Optional): string. Refund that issued this
     * value. Present only when funding_source_type is store_credit. minLength: 1. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPayment}. The
     * `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImport}. The `import`
     * variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/** The request body for: Load a gift card. */
export type CreateGiftCardLoadRequestInput = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** The gift card to load. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent_id
     * (Optional): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPaymentRequestInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentRequestInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentRequestInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImportRequestInput}.
     * The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentRequestInput}. The `adjustment` variant of
     * `GiftCardFundingSource`. oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefundRequestInput}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCreditRequestInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceRequestInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string | globalThis.Date;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * The result of loading a gift card: the updated gift card, the gift card load, and the
 * transactions it created.
 */
export type CreateGiftCardLoadResult = {
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The load the command created. Top-level child of a gift card. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load": GiftCardLoad;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardLoadResult` data. */
export type CreateGiftCardLoadResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of loading a
     * gift card: the updated gift card, the gift card load, and the transactions it created.
     */
    "data": CreateGiftCardLoadResult;
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
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequest = {
    /**
     * ID of the gift card the notification is about. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Who the notification is sent to. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /**
     * ID of the earlier notification this one sends again. minLength: 1. Example:
     * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
     */
    "resend_of_notification_id"?: string;
};
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequestInput = {
    /**
     * ID of the gift card the notification is about. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Who the notification is sent to. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardNotificationRecipientInput;
    /**
     * ID of the earlier notification this one sends again. minLength: 1. Example:
     * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
     */
    "resend_of_notification_id"?: string;
};
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequest = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic", "manual".
     */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomatic & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `automatic` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestAutomatic = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": "automatic" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": unknown;
}));
/** The `automatic` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestAutomaticInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": "automatic";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": ("automatic") & ("automatic");
})
    & ({
    "expires_at"?: never;
}));
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequestInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic", "manual".
     */
    "capture_mode": "automatic" | "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomaticInput & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManualInput & object, readonly unknown[]>));
/** The `manual` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestManual = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": unknown;
});
/** The `manual` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestManualInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": ("manual") & ("manual");
});
/** The request body for: Create a gift card. */
export type CreateGiftCardRequest = {
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /**
     * ID of the customer to associate with the card. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The card's initial value and where it came from. Omit it to create an unfunded `pending`
     * card. anyOf[1] (Value): {@link InitialGiftCardFunding}. The initial funding for a new gift
     * card: the `source` of the value, the `value_money`, and optional consideration and source
     * time. anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFunding) | (null));
    /**
     * Optional recipient notification recorded with issuance. Requires
     * commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift
     * card notification: their `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/** The request body for: Create a gift card. */
export type CreateGiftCardRequestInput = {
    /**
     * Existing gift card code, accepted only with funding.source.funding_source_type import. Must
     * contain 16 gift card alphabet characters after removing spaces and hyphens; O maps to 0 and
     * I/L to 1. The supplied code is never returned. minLength: 1. maxLength: 64.
     */
    "code"?: string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD";
    /**
     * ID of the customer to associate with the card. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The card's initial value and where it came from. Omit it to create an unfunded `pending`
     * card. anyOf[1] (Value): {@link InitialGiftCardFundingInput}. The initial funding for a new
     * gift card: the `source` of the value, the `value_money`, and optional consideration and
     * source time. anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFundingInput) | (null));
    /**
     * Optional recipient notification recorded with issuance. Requires
     * commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift
     * card notification: their `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * The result of creating a gift card: the card, its transactions, any load and notification, and
 * the code while it can still be recovered.
 */
export type CreateGiftCardResult = {
    /**
     * The full current code. Omitted after the 24-hour recovery window or when this code has been
     * replaced.
     */
    "code"?: string;
    /**
     * When recovery of this code expires. Omitted when the code cannot be recovered. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_recovery_expires_at"?: string;
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The load the command created. Top-level child of a gift card. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /**
     * The notification the command created because the request included `notification`. Omitted
     * otherwise. A message sent to a gift card recipient.
     */
    "gift_card_notification"?: GiftCardNotification;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardResult` data. */
export type CreateGiftCardResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of creating a
     * gift card: the card, its transactions, any load and notification, and the code while it can
     * still be recovered.
     */
    "data": CreateGiftCardResult;
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
 * A modifier group defined inline when creating a modifier set, with its selection limits,
 * modifiers or text rules, and display flags.
 */
export type CreateInlineModifierGroupRequestInput = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * CreateModifierRequestInput}. A modifier to create in a modifier group, with its name, price
     * change, tax category, and default selection.
     */
    "modifiers"?: Array<CreateModifierRequestInput>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * The `balance_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `gift_card_liability_v1` variant of `CreateReportRequest`. The `invoices_itemized_v1` variant of
 * `CreateReportRequest`. The `merchant_billing_itemized_v1` variant of `CreateReportRequest`. The
 * `orders_itemized_v1` variant of `CreateReportRequest`. The `orders_itemized_v2` variant of
 * `CreateReportRequest`. The `payments_itemized_v1` variant of `CreateReportRequest`. The
 * `payouts_itemized_v1` variant of `CreateReportRequest`. The `tax_itemized_v1` variant of
 * `CreateReportRequest`. The `tax_summarized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v2` variant of `CreateReportRequest`.
 */
export type CreateIntervalReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
});
/**
 * The `balance_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `gift_card_liability_v1` variant of `CreateReportRequest`. The `invoices_itemized_v1` variant of
 * `CreateReportRequest`. The `merchant_billing_itemized_v1` variant of `CreateReportRequest`. The
 * `orders_itemized_v1` variant of `CreateReportRequest`. The `orders_itemized_v2` variant of
 * `CreateReportRequest`. The `payments_itemized_v1` variant of `CreateReportRequest`. The
 * `payouts_itemized_v1` variant of `CreateReportRequest`. The `tax_itemized_v1` variant of
 * `CreateReportRequest`. The `tax_summarized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v2` variant of `CreateReportRequest`.
 */
export type CreateIntervalReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & (({
    "as_of_date"?: never;
}));
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentConditionChangeLineRequest}. One line
     * of an inventory condition change: moves a `quantity` of an item at a Location from one
     * condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum:
     * "condition_changed".
     */
    "reason": "condition_changed" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentConditionChangeLineRequestInput}. One
     * line of an inventory condition change: moves a `quantity` of an item at a Location from one
     * condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum:
     * "condition_changed".
     */
    "reason": "condition_changed";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     * pattern: \S.
     */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "correction". */
    "reason": "correction" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     * pattern: \S.
     */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "correction". */
    "reason": "correction";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
}));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "counted". */
    "reason": "counted" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "counted". */
    "reason": "counted";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
}));
/**
 * The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequest}. One line of an
     * inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum: "received",
     * "returned", "sold", "theft", "loss".
     */
    "reason": "received" | "returned" | "sold" | "theft" | "loss" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequestInput}. One line of
     * an inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum: "received",
     * "returned", "sold", "theft", "loss".
     */
    "reason": "received" | "returned" | "sold" | "theft" | "loss";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Create inventory adjustment. */
export type CreateInventoryAdjustmentRequest = ((CreateInventoryAdjustmentQuantityRequest)
    | (CreateInventoryAdjustmentConditionChangeRequest)
    | (CreateInventoryAdjustmentCountedRequest)
    | (CreateInventoryAdjustmentCorrectionRequest)
    | (Record<string, unknown>));
/** The request body for: Create inventory adjustment. */
export type CreateInventoryAdjustmentRequestInput = ((CreateInventoryAdjustmentQuantityRequestInput)
    | (CreateInventoryAdjustmentConditionChangeRequestInput)
    | (CreateInventoryAdjustmentCountedRequestInput)
    | (CreateInventoryAdjustmentCorrectionRequestInput));
/** The request body for: Create inventory allocation policy. */
export type CreateInventoryAllocationPolicyRequest = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. Routing rules for an inventory allocation policy: ranked
     * groups of Locations, whether demand can be split, and how many Locations one assignment may
     * use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing policy name. minLength: 1. */
    "name": string;
    /**
     * Status the allocation policy starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory allocation policy. */
export type CreateInventoryAllocationPolicyRequestInput = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. Routing rules for an inventory allocation policy: ranked
     * groups of Locations, whether demand can be split, and how many Locations one assignment may
     * use.
     */
    "configuration": InventoryAllocationPolicyConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing policy name. minLength: 1. */
    "name": string;
    /**
     * Status the allocation policy starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/** Patch object: fields you send are applied, fields you omit are unchanged. minProperties: 1. */
export type CreateInventoryBackorderPolicyRequestInput = {
    /** Whether this inventory item allows backorders. Default: false. */
    "enabled"?: boolean;
    /**
     * Expected shipping date. Send null to clear it. Format: date. minLength: 1. pattern:
     * ^[0-9]{4}-[0-9]{2}-[0-9]{2}$. Example: "2026-08-02".
     */
    "expected_ship_date"?: string | null;
    /**
     * Maximum units on backorder across the item's levels. Send null for no cap. Format: int64.
     * minimum: 1. maximum: 9007199254740991.
     */
    "limit_quantity"?: number | null;
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequest = {
    /**
     * IDs of the inventory items to count at the Location, from 1 to 100. minItems: 1. maxItems:
     * 100. [] (Value): string. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_ids": Array<string>;
    /**
     * ID of the Location whose stock is counted. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequestInput = CreateInventoryCountRequest;
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequest = {
    /**
     * Backorder settings to apply to this inventory item. Patch object: fields you send are
     * applied, fields you omit are unchanged. minProperties: 1.
     */
    "backorder"?: InventoryBackorderPolicyRequest;
    /** Optional searchable barcode. minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing inventory item name. minLength: 1. */
    "name": string;
    /** Optional searchable stock-keeping unit. minLength: 1. */
    "sku"?: string;
    /**
     * Status the inventory item starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequestInput = {
    /**
     * Backorder settings to apply to this inventory item. Patch object: fields you send are
     * applied, fields you omit are unchanged. minProperties: 1.
     */
    "backorder"?: CreateInventoryBackorderPolicyRequestInput;
    /** Optional searchable barcode. minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing inventory item name. minLength: 1. */
    "name": string;
    /** Optional searchable stock-keeping unit. minLength: 1. */
    "sku"?: string;
    /**
     * Status the inventory item starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * Record returned stock against consumed inventory reservations. For supplier deliveries, use POST
 * /v1/inventory-adjustments with reason: received.
 */
export type CreateInventoryReceiptRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLineRequest}. One line of an inventory receipt you supply: a
     * quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Record returned stock against consumed inventory reservations. For supplier deliveries, use POST
 * /v1/inventory-adjustments with reason: received.
 */
export type CreateInventoryReceiptRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you
     * supply: a quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequest = {
    /**
     * Items and quantities to reserve. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryRoutingDemand}. Stock you ask to reserve for one item: the item and quantity, plus
     * optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemand>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. When omitted, the reservation uses and
     * stores `settings.inventory.default_routing_source`; without that default the request returns
     * `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The
     * owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequest;
};
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequestInput = {
    /**
     * Items and quantities to reserve. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity,
     * plus optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemandInput>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. When omitted, the reservation uses and
     * stores `settings.inventory.default_routing_source`; without that default the request returns
     * `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The
     * owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequestInput;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequest = {
    /**
     * ID of the Location the stock goes to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Items to transfer, from 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryTransferLineRequest}. One line of an inventory transfer you create: an item and the
     * requested quantity.
     */
    "lines": Array<InventoryTransferLineRequest>;
    /** Free-text note about the transfer. minLength: 1. */
    "note"?: string;
    /**
     * ID of the Location the stock leaves. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "origin_location_id": string;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequestInput = {
    /**
     * ID of the Location the stock goes to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Items to transfer, from 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryTransferLineRequestInput}. One line of an inventory transfer you create: an item
     * and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequestInput>;
    /** Free-text note about the transfer. minLength: 1. */
    "note"?: string;
    /**
     * ID of the Location the stock leaves. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "origin_location_id": string;
};
/**
 * Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches
 * its recipient.
 */
export type CreateInvoiceIssueRequest = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
};
/**
 * Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches
 * its recipient.
 */
export type CreateInvoiceIssueRequestInput = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
};
/** The request body for: Create invoice manual payment. */
export type CreateInvoiceManualPaymentRequest = {
    /**
     * Positive amount received outside Flint, in the invoice currency, no more than
     * outstanding_money for an open invoice or written_off_money for an uncollectible invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /**
     * When the payment was received. Defaults to now. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "received_at"?: string;
};
/** The request body for: Create invoice manual payment. */
export type CreateInvoiceManualPaymentRequestInput = {
    /**
     * Positive amount received outside Flint, in the invoice currency, no more than
     * outstanding_money for an open invoice or written_off_money for an uncollectible invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /**
     * When the payment was received. Defaults to now. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "received_at"?: string | globalThis.Date;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequest = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. A late
     * fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name": string;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequestInput = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. A late
     * fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicyRequestInput;
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name": string;
};
/**
 * Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes,
 * customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequest = {
    /** A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: 1. */
    "buyer_note"?: string;
    /**
     * The customer to bill. The invoice shows their name and billing details, and GET
     * /v1/invoices?customer_id= finds it. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Where the backing order's items are shipped or delivered, the same as order creation
     * accepts. The delivery destination you set when creating or updating an order, with an
     * address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Discounts to apply to the backing order, in the shape order creation accepts. [] (Value):
     * {@link CreateOrderDiscount}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /** A note for your team on the backing order. Buyer reads leave it out. minLength: 1. */
    "internal_note"?: string;
    /**
     * Where this invoice backing order's tracked demand is routed: a fixed Location, an allocation
     * policy, or an immutable policy revision. Required when any line tracks inventory. Where you
     * want inventory routed from: a fixed Location, an inventory allocation policy, or one policy
     * revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * The items to bill, at least one, in the shape order creation accepts. A custom line without
     * variant_id or bundle_id must set fulfillment.requirement. minItems: 1. [] (Value): {@link
     * CreateOrderLineItem}. A line item to add to an order: a catalog variant, a bundle, or a
     * custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * A tip to request from the buyer on the backing order. Requested tip expressed as either a
     * flat amount or a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Tax inputs for the backing order, the same as order creation accepts. Validation errors name
     * fields under quick_pay.tax. Tax settings you supply when creating an order: whether tax is
     * enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/**
 * Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes,
 * customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequestInput = {
    /** A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: 1. */
    "buyer_note"?: string;
    /**
     * The customer to bill. The invoice shows their name and billing details, and GET
     * /v1/invoices?customer_id= finds it. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Where the backing order's items are shipped or delivered, the same as order creation
     * accepts. The delivery destination you set when creating or updating an order, with an
     * address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Discounts to apply to the backing order, in the shape order creation accepts. [] (Value):
     * {@link CreateOrderDiscountInput}. A discount to apply when creating an order: either a
     * manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /** A note for your team on the backing order. Buyer reads leave it out. minLength: 1. */
    "internal_note"?: string;
    /**
     * Where this invoice backing order's tracked demand is routed: a fixed Location, an allocation
     * policy, or an immutable policy revision. Required when any line tracks inventory. Where you
     * want inventory routed from: a fixed Location, an inventory allocation policy, or one policy
     * revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * The items to bill, at least one, in the shape order creation accepts. A custom line without
     * variant_id or bundle_id must set fulfillment.requirement. minItems: 1. [] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * A tip to request from the buyer on the backing order. Requested tip expressed as either a
     * flat amount or a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Tax inputs for the backing order, the same as order creation accepts. Validation errors name
     * fields under quick_pay.tax. Tax settings you supply when creating an order: whether tax is
     * enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
