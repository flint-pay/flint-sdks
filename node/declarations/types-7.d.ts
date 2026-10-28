import type {
    CreateDeliveryFulfillmentDetails,
    CreateDigitalFulfillmentDetails,
    CreateDeliveryFulfillmentDetailsInput,
    CreateDigitalFulfillmentDetailsInput
} from './types-6.js';
import type { CreatePickupFulfillmentDetails, CreatePickupFulfillmentDetailsInput } from './types-9.js';
import type { CreateServiceFulfillmentDetails, CreateServiceFulfillmentDetailsInput } from './types-10.js';
import type {
    FulfillmentLineItemRequest,
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-19.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type {
    GiftCardFundingSource,
    GiftCardFundingSourceInput,
    GiftCard,
    GiftCardLoad,
    GiftCardNotificationRecipientInput,
    GiftCardNotification
} from './types-20.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { GiftCardTransaction, GiftCardPurchaseRecipient } from './types-21.js';
import type { ResponseMeta } from './types-42.js';
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
    InventoryAllocationConfigurationValueInput
} from './types-25.js';
import type {
    CreateModifierRequestInput,
    CreateOrderDiscount,
    CreateOrderLineItem,
    CreateOrderTip,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput,
    CreateOrderTipInput,
    CreateInvoiceRequestQuickPay,
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput
} from './types-8.js';
import type { TextModifierConfigRequestInput } from './types-50.js';
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
    InventoryTransferLineRequestInput,
    InventoryRoutingSource
} from './types-27.js';
import type { InventoryReceiptLineRequest, InventoryReceiptLineRequestInput } from './types-26.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-28.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoiceScheduleEntryWrite,
    InvoicePaymentDueRequestInput,
    InvoiceScheduleEntryWriteInput
} from './types-29.js';
import type {
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-34.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-35.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
/**
 * Shape $ (Value): {@link CreateFulfillmentRequest}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /**
     * Shape $ (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
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
 * Shape $ (Value): {@link CreateFulfillmentRequestDigital}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestDigital = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "digital". */
    "type": "digital" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestDigitalInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestDigitalInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "digital". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestInput}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
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
 * Shape $ (Value): {@link CreateFulfillmentRequestLocalDelivery}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestLocalDelivery = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestLocalDeliveryInput}. Provide at most one
 * fulfillment details object: pickup_details, local_delivery_details, digital_details, or
 * service_details. Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestLocalDeliveryInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestPickup}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestPickup = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestPickupInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestPickupInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "pickup". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestService}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestService = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "service". */
    "type": "service" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestServiceInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestServiceInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "service". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestShipment}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestShipment = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestShipmentInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestShipmentInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment and
     * packages atomically with a shipment fulfillment. single_package assigns every submitted line
     * quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a
     * package's status to shipped to report handoff in the same call. Creates an outbound shipment
     * with one package using `packaging: single_package`, or 1 to 20 packages with explicit items
     * using `packaging: itemized`. External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "shipment". */
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
/**
 * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequest}. The request body for: Create a
 * gift card funding disposition.
 */
export type CreateGiftCardFundingDispositionRequest = {
    /** Shape $ (Value): string. Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value" | (string & {});
    /**
     * Shape $ (Value): string. The lost dispute on the payment that funded the gift card value.
     * minLength: 1. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "dispute_id": string;
    /**
     * Shape $ (Value): string. Your reason for honoring the gift card value despite the confirmed
     * funding loss. minLength: 1. maxLength: 200.
     */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequestInput}. The request body for:
 * Create a gift card funding disposition.
 */
export type CreateGiftCardFundingDispositionRequestInput = {
    /** Shape $ (Value): string. Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value";
    /**
     * Shape $ (Value): string. The lost dispute on the payment that funded the gift card value.
     * minLength: 1. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "dispute_id": string;
    /**
     * Shape $ (Value): string. Your reason for honoring the gift card value despite the confirmed
     * funding loss. minLength: 1. maxLength: 200.
     */
    "reason_message": string;
};
/** Shape $ (Value): {@link CreateGiftCardLoadRequest}. The request body for: Load a gift card. */
export type CreateGiftCardLoadRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Amount in the currency's minor unit, such
     * as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required): string. ISO 4217 currency
     * code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2]
     * (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came
     * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.order_manual_payment_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The original
     * payment for flint_payment or store_credit value. For standalone paid funding, use a captured
     * payment intent without an order_id. Order-linked payments fund purchased cards or store
     * credit through their order. minLength: 1. maxLength: 255. Shape $.refund_id (Optional):
     * string. Refund that issued this value. Present only when funding_source_type is
     * store_credit. minLength: 1. Shape $.oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[3] (Value): {@link GiftCardFundingSourceFlintManualPayment}. The
     * `flint_manual_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link
     * GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. Shape
     * $.oneOf[5] (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link CreateGiftCardLoadRequestInput}. The request body for: Load a gift card.
 */
export type CreateGiftCardLoadRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Shape $.anyOf[1] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $.anyOf[1].amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link GiftCardFundingSourceInput}. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Shape $.oneOf[1] (Value):
     * {@link GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link GiftCardFundingSourceImportInput}.
     * The `import` variant of `GiftCardFundingSource`. Shape $.oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The
     * `gift_card_refund` variant of `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link CreateGiftCardLoadResult}. The result of loading a gift card: the
 * updated gift card, the gift card load, and the transactions it created.
 */
export type CreateGiftCardLoadResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load": GiftCardLoad;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CreateGiftCardLoadResultResponse}. A response containing
 * `CreateGiftCardLoadResult` data.
 */
export type CreateGiftCardLoadResultResponse = {
    /**
     * Shape $ (Value): {@link CreateGiftCardLoadResult}. The result of loading a gift card: the
     * updated gift card, the gift card load, and the transactions it created.
     */
    "data": CreateGiftCardLoadResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardNotificationRequest}. The request body for: Send a gift
 * card notification.
 */
export type CreateGiftCardNotificationRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Who receives a gift card notification:
     * their `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /** Shape $ (Value): string. minLength: 1. */
    "resend_of_notification_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardNotificationRequestInput}. The request body for: Send a
 * gift card notification.
 */
export type CreateGiftCardNotificationRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Who receives a gift card
     * notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardNotificationRecipientInput;
    /** Shape $ (Value): string. minLength: 1. */
    "resend_of_notification_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequest}. The request body for: Redeem gift card
 * value.
 */
export type CreateGiftCardRedemptionRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomatic & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestAutomatic}. The `automatic` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestAutomatic = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "capture_mode": "automatic" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "capture_mode": unknown;
}));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestAutomaticInput}. The `automatic` variant
 * of `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestAutomaticInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "capture_mode": "automatic";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "capture_mode": ("automatic") & ("automatic");
})
    & ({
    "expires_at"?: never;
}));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestInput}. The request body for: Redeem gift
 * card value.
 */
export type CreateGiftCardRedemptionRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomaticInput & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManualInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestManual}. The `manual` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestManual = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "manual". */
    "capture_mode": "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "capture_mode": unknown;
});
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestManualInput}. The `manual` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestManualInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "manual". */
    "capture_mode": "manual";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "capture_mode": ("manual") & ("manual");
});
/** Shape $ (Value): {@link CreateGiftCardRequest}. The request body for: Create a gift card. */
export type CreateGiftCardRequest = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InitialGiftCardFunding} or null. Shape $.anyOf[1] (Value): {@link
     * InitialGiftCardFunding}. The initial funding for a new gift card: the `source` of the value,
     * the `value_money`, and optional consideration and source time. Shape $.anyOf[2] (Value):
     * null.
     */
    "funding"?: ((InitialGiftCardFunding) | (null));
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Optional recipient notification recorded
     * with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority.
     * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/**
 * Shape $ (Value): {@link CreateGiftCardRequestInput}. The request body for: Create a gift card.
 */
export type CreateGiftCardRequestInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD";
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InitialGiftCardFundingInput} or null. Shape $.anyOf[1] (Value):
     * {@link InitialGiftCardFundingInput}. The initial funding for a new gift card: the `source`
     * of the value, the `value_money`, and optional consideration and source time. Shape
     * $.anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFundingInput) | (null));
    /**
     * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Optional recipient notification
     * recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance
     * authority. Who receives a gift card notification: their `email`, optional `name` and
     * `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * Shape $ (Value): {@link CreateGiftCardResult}. The result of creating a gift card: the card, its
 * transactions, any load and notification, and the code while it can still be recovered.
 */
export type CreateGiftCardResult = {
    /**
     * Shape $ (Value): string. The full current code. Omitted after the 24-hour recovery window or
     * when this code has been replaced.
     */
    "code"?: string;
    /**
     * Shape $ (Value): string. When recovery of this code expires. Omitted when the code cannot be
     * recovered. Format: date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /** Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CreateGiftCardResultResponse}. A response containing
 * `CreateGiftCardResult` data.
 */
export type CreateGiftCardResultResponse = {
    /**
     * Shape $ (Value): {@link CreateGiftCardResult}. The result of creating a gift card: the card,
     * its transactions, any load and notification, and the code while it can still be recovered.
     */
    "data": CreateGiftCardResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. A modifier group defined inline
 * when creating a modifier set, with its selection limits, modifiers or text rules, and display
 * flags.
 */
export type CreateInlineModifierGroupRequestInput = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Shape $ (Value): Array of {@link CreateModifierRequestInput}. Choices in a list group. Only
     * active modifiers whose set override's available is not false are offered to buyers. Text
     * groups do not have choices. Shape $[] (Value): {@link CreateModifierRequestInput}. A
     * modifier to create in a modifier group, with its name, price change, tax category, and
     * default selection.
     */
    "modifiers"?: Array<CreateModifierRequestInput>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): {@link TextModifierConfigRequestInput}. Text entry rules for a text group.
     * Use text.required to require a value; list groups use min_selected instead. Settings for a
     * text modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentConditionChangeRequest}. The
 * `condition_changed` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentConditionChangeRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentConditionChangeLineRequest}. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentConditionChangeLineRequest}.
     * One line of an inventory condition change: moves a `quantity` of an item at a Location from
     * one condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "condition_changed". */
    "reason": "condition_changed" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentConditionChangeRequestInput}. The
 * `condition_changed` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentConditionChangeRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentConditionChangeLineRequestInput}.
     * minItems: 1. maxItems: 100. Shape $[] (Value): {@link
     * InventoryAdjustmentConditionChangeLineRequestInput}. One line of an inventory condition
     * change: moves a `quantity` of an item at a Location from one condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "condition_changed". */
    "reason": "condition_changed";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCorrectionRequest}. The `correction` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCorrectionRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequest}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an inventory
     * adjustment that sets absolute quantities for an item at a Location. Omitted quantities stay
     * unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "note": string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "reason": "correction" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCorrectionRequestInput}. The `correction`
 * variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCorrectionRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "note": string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "reason": "correction";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCountedRequest}. The `counted` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCountedRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequest}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an inventory
     * adjustment that sets absolute quantities for an item at a Location. Omitted quantities stay
     * unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "counted". */
    "reason": "counted" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCountedRequestInput}. The `counted` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCountedRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "counted". */
    "reason": "counted";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentQuantityRequest}. The `loss` variant of
 * `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentQuantityLineRequest}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentQuantityLineRequest}. One line
     * of an inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentQuantityRequestInput}. The `loss` variant of
 * `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentQuantityLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentQuantityLineRequestInput}. One
     * line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
     * given `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentRequest}. The request body for: Create
 * inventory adjustment.
 */
export type CreateInventoryAdjustmentRequest = ((CreateInventoryAdjustmentQuantityRequest)
    | (CreateInventoryAdjustmentConditionChangeRequest)
    | (CreateInventoryAdjustmentCountedRequest)
    | (CreateInventoryAdjustmentCorrectionRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentRequestInput}. The request body for: Create
 * inventory adjustment.
 */
export type CreateInventoryAdjustmentRequestInput = ((CreateInventoryAdjustmentQuantityRequestInput)
    | (CreateInventoryAdjustmentConditionChangeRequestInput)
    | (CreateInventoryAdjustmentCountedRequestInput)
    | (CreateInventoryAdjustmentCorrectionRequestInput));
/**
 * Shape $ (Value): {@link CreateInventoryAllocationPolicyRequest}. The request body for: Create
 * inventory allocation policy.
 */
export type CreateInventoryAllocationPolicyRequest = {
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValue}. Routing rules for an
     * inventory allocation policy: ranked groups of Locations, whether demand can be split, and
     * how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInventoryAllocationPolicyRequestInput}. The request body for:
 * Create inventory allocation policy.
 */
export type CreateInventoryAllocationPolicyRequestInput = {
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValueInput}. Routing rules for an
     * inventory allocation policy: ranked groups of Locations, whether demand can be split, and
     * how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValueInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateInventoryCountRequest}. The request body for: Create inventory
 * count.
 */
export type CreateInventoryCountRequest = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 100. Shape $[] (Value): string.
     * minLength: 1.
     */
    "inventory_item_ids": Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInventoryCountRequestInput}. The request body for: Create
 * inventory count.
 */
export type CreateInventoryCountRequestInput = CreateInventoryCountRequest;
/**
 * Shape $ (Value): {@link CreateInventoryItemRequest}. The request body for: Create inventory
 * item.
 */
export type CreateInventoryItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInventoryItemRequestInput}. The request body for: Create inventory
 * item.
 */
export type CreateInventoryItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateInventoryReceiptRequest}. The request body for: Create inventory
 * receipt.
 */
export type CreateInventoryReceiptRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryReceiptLineRequest}. Shape $[] (Value): {@link
     * InventoryReceiptLineRequest}. One line of an inventory receipt you supply: a quantity of an
     * item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequest>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link CreateInventoryReceiptRequestInput}. The request body for: Create
 * inventory receipt.
 */
export type CreateInventoryReceiptRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryReceiptLineRequestInput}. Shape $[] (Value):
     * {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you supply: a
     * quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequestInput>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link CreateInventoryReservationRequest}. The request body for: Create
 * inventory reservation.
 */
export type CreateInventoryReservationRequest = {
    /**
     * Shape $ (Value): Array of {@link InventoryRoutingDemand}. Shape $[] (Value): {@link
     * InventoryRoutingDemand}. Stock you ask to reserve for one item: the item and quantity, plus
     * optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemand>;
    /**
     * Shape $ (Value): string. Hold deadline, after now and at most 24 hours from now. Defaults to
     * 15 minutes after creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): {@link InventoryReservationOwnerRequest}. The owner of a merchant inventory
     * reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequest;
};
/**
 * Shape $ (Value): {@link CreateInventoryReservationRequestInput}. The request body for: Create
 * inventory reservation.
 */
export type CreateInventoryReservationRequestInput = {
    /**
     * Shape $ (Value): Array of {@link InventoryRoutingDemandInput}. Shape $[] (Value): {@link
     * InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity,
     * plus optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemandInput>;
    /**
     * Shape $ (Value): string. Hold deadline, after now and at most 24 hours from now. Defaults to
     * 15 minutes after creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): {@link InventoryReservationOwnerRequestInput}. The owner of a merchant
     * inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequestInput;
};
/**
 * Shape $ (Value): {@link CreateInventoryTransferRequest}. The request body for: Create inventory
 * transfer.
 */
export type CreateInventoryTransferRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "destination_location_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryTransferLineRequest}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link InventoryTransferLineRequest}. One line of an inventory transfer
     * you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInventoryTransferRequestInput}. The request body for: Create
 * inventory transfer.
 */
export type CreateInventoryTransferRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "destination_location_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryTransferLineRequestInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryTransferLineRequestInput}. One line of an inventory
     * transfer you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Options for issuing an invoice as you create
 * it. `delivery_mode` chooses how the invoice reaches its recipient.
 */
export type CreateInvoiceIssueRequest = {
    /**
     * Shape $ (Value): string. How the invoice reaches its recipient. Omit it to use
     * merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Options for issuing an invoice as you
 * create it. `delivery_mode` chooses how the invoice reaches its recipient.
 */
export type CreateInvoiceIssueRequestInput = {
    /**
     * Shape $ (Value): string. How the invoice reaches its recipient. Omit it to use
     * merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
};
/**
 * Shape $ (Value): {@link CreateInvoiceManualPaymentRequest}. The request body for: Create invoice
 * manual payment.
 */
export type CreateInvoiceManualPaymentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Shape $ (Value): string. Caller-owned check, wire, or bank reference, stored unmodified.
     * minLength: 1. maxLength: 255.
     */
    "payment_reference"?: string;
    /**
     * Shape $ (Value): string. When the payment was received. Defaults to now. Format: date-time.
     * minLength: 1.
     */
    "received_at"?: string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceManualPaymentRequestInput}. The request body for: Create
 * invoice manual payment.
 */
export type CreateInvoiceManualPaymentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Shape $ (Value): string. Caller-owned check, wire, or bank reference, stored unmodified.
     * minLength: 1. maxLength: 255.
     */
    "payment_reference"?: string;
    /**
     * Shape $ (Value): string. When the payment was received. Defaults to now. Format: date-time.
     * minLength: 1.
     */
    "received_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link CreateInvoicePaymentTermRequest}. The request body for: Create invoice
 * payment term.
 */
export type CreateInvoicePaymentTermRequest = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateInvoicePaymentTermRequestInput}. The request body for: Create
 * invoice payment term.
 */
export type CreateInvoicePaymentTermRequestInput = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculationInput}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicyInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Inline order details for creating an
 * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequest = {
    /**
     * Shape $ (Value): string. A note to the buyer on the backing order, captured in
     * snapshot.buyer_note. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): string. The customer to bill. The invoice shows their name and billing
     * details, and GET /v1/invoices?customer_id= finds it. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequest}. Where the backing order's items
     * are shipped or delivered, the same as order creation accepts. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscount}. Discounts to apply to the backing
     * order, in the shape order creation accepts. Shape $[] (Value): {@link CreateOrderDiscount}.
     * A discount to apply when creating an order: either a manual discount or a reference to a
     * promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Shape $ (Value): string. A note for your team on the backing order. Buyer reads leave it
     * out. minLength: 1.
     */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where this invoice backing order's tracked
     * demand is routed: a fixed Location, or an allocation policy. Required when any line tracks
     * inventory. Where inventory for an order is allocated from: a fixed location, an allocation
     * policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. The items to bill, at least one, in
     * the shape order creation accepts. A custom line without variant_id or bundle_id must set
     * fulfillment.requirement. minItems: 1. Shape $[] (Value): {@link CreateOrderLineItem}. A line
     * item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit
     * price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): {@link CreateOrderTip}. A tip to request from the buyer on the backing
     * order. Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Shape $ (Value): {@link OrderTaxRequest}. Tax inputs for the backing order, the same as
     * order creation accepts. Validation errors name fields under quick_pay.tax. Tax settings you
     * supply when creating an order: whether tax is enabled, how it is calculated, and the tax
     * location.
     */
    "tax"?: OrderTaxRequest;
};
/**
 * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Inline order details for creating an
 * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequestInput = {
    /**
     * Shape $ (Value): string. A note to the buyer on the backing order, captured in
     * snapshot.buyer_note. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): string. The customer to bill. The invoice shows their name and billing
     * details, and GET /v1/invoices?customer_id= finds it. minLength: 1.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput}. Where the backing order's
     * items are shipped or delivered, the same as order creation accepts. The delivery destination
     * you set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscountInput}. Discounts to apply to the
     * backing order, in the shape order creation accepts. Shape $[] (Value): {@link
     * CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Shape $ (Value): string. A note for your team on the backing order. Buyer reads leave it
     * out. minLength: 1.
     */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where this invoice backing
     * order's tracked demand is routed: a fixed Location, or an allocation policy. Required when
     * any line tracks inventory. Where inventory for an order is allocated from: a fixed location,
     * an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. The items to bill, at
     * least one, in the shape order creation accepts. A custom line without variant_id or
     * bundle_id must set fulfillment.requirement. minItems: 1. Shape $[] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateOrderTipInput}. A tip to request from the buyer on the backing
     * order. Requested tip expressed as either a flat amount or a percentage. Send exactly one of
     * amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Shape $ (Value): {@link OrderTaxRequestInput}. Tax inputs for the backing order, the same as
     * order creation accepts. Validation errors name fields under quick_pay.tax. Tax settings you
     * supply when creating an order: whether tax is enabled, how it is calculated, and the tax
     * location.
     */
    "tax"?: OrderTaxRequestInput;
};
/** Shape $ (Value): {@link CreateInvoiceRequest}. The request body for: Create invoice. */
export type CreateInvoiceRequest = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How the invoice is collected. Omit it to
     * use merchant_default. The invoice's collection object returns the resolved mode, and you can
     * send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When the invoice is due. Omit it to use
     * merchant_default. The invoice's payment_due object returns the resolved type, and you can
     * send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice is
     * due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or
     * a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Order details for an invoice with no
     * existing order. Flint creates the backing order from them. Send exactly one of order_id or
     * quick_pay. Inline order details for creating an invoice as `quick_pay`: line items,
     * discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Shape $ (Value): {@link AddressRequest}. Where the buyer sends offline payments, printed on
     * the invoice. Omit it to use the invoice settings remit-to address. A complete postal
     * address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWrite}. Complete draft payment schedule
     * with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWrite}. One payment schedule entry you supply when creating or
     * updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339
     * timestamp in the future. A scheduled issue delivers by email, so the draft needs
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay" | (string & {});
})
    & ((Exclude<CreateInvoiceRequestOrder & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPay & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateInvoiceRequestInput}. The request body for: Create invoice. */
export type CreateInvoiceRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How the invoice is collected. Omit
     * it to use merchant_default. The invoice's collection object returns the resolved mode, and
     * you can send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When the invoice is due. Omit it to
     * use merchant_default. The invoice's payment_due object returns the resolved type, and you
     * can send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice
     * is due, used when creating or updating an invoice: no due date, a fixed time, payment terms,
     * or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Order details for an invoice
     * with no existing order. Flint creates the backing order from them. Send exactly one of
     * order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line
     * items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. Where the buyer sends offline payments,
     * printed on the invoice. Omit it to use the invoice settings remit-to address. A complete
     * postal address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWriteInput}. Complete draft payment
     * schedule with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply when creating
     * or updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339
     * timestamp in the future. A scheduled issue delivers by email, so the draft needs
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay";
})
    & ((Exclude<CreateInvoiceRequestOrderInput & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPayInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateInvoiceRequestOrder}. The `order` variant of
 * `CreateInvoiceRequest`.
 */
export type CreateInvoiceRequestOrder = ({
    /**
     * Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every
     * reminder. Shape $[] (Value): string. minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How the invoice is collected. Omit it to
     * use merchant_default. The invoice's collection object returns the resolved mode, and you can
     * send it back unchanged on update. How an invoice is collected, used when creating or
     * updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it
     * by exact match. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Fine print at the bottom of the invoice and PDF. Omit it to use the
     * invoice settings default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Shape $ (Value): string. Message to the customer, printed on the invoice and PDF. Omit it to
     * use the invoice settings default_memo. minLength: 1.
     */
    "memo"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When the invoice is due. Omit it to use
     * merchant_default. The invoice's payment_due object returns the resolved type, and you can
     * send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice is
     * due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or
     * a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /**
     * Shape $ (Value): string. The buyer's purchase order number, printed on the invoice and PDF.
     * minLength: 1.
     */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Order details for an invoice with no
     * existing order. Flint creates the backing order from them. Send exactly one of order_id or
     * quick_pay. Inline order details for creating an invoice as `quick_pay`: line items,
     * discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Shape $ (Value): string. Where Flint emails the invoice and its reminders. Required at issue
     * when delivery resolves to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Shape $ (Value): string. Your reference for the invoice, printed on the invoice and PDF. Put
     * the buyer's purchase order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Shape $ (Value): {@link AddressRequest}. Where the buyer sends offline payments, printed on
     * the invoice. Omit it to use the invoice settings remit-to address. A complete postal
     * address. State and postal_code are required for US addresses and optional for other
     * countries. Send null or omit line2, state, and postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWrite}. Complete draft payment schedule
     * with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWrite}. One payment schedule entry you supply when creating or
     * updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339
     * timestamp in the future. A scheduled issue delivers by email, so the draft needs
     * recipient_email. Cannot be combined with issue. null is the same as omitting it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * Shape $ (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
     * invoice and PDF print it as written, without timezone conversion. Format: date. minLength:
     * 1.
     */
    "service_date"?: string;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "order". */
    "type": "order" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * Shape $ (Value): string. The open order to bill. It must have no payments, refunds, or other
     * active invoice. Send exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
}));
