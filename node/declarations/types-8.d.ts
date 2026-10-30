import type {
    CreateDeliveryFulfillmentDetails,
    CreateDigitalFulfillmentDetails,
    CreateDeliveryFulfillmentDetailsInput,
    CreateDigitalFulfillmentDetailsInput
} from './types-7.js';
import type {
    CreatePickupFulfillmentDetails,
    CreatePickupFulfillmentDetailsInput,
    CreateModifierRequestInput,
    CreateOrderDiscount,
    CreateOrderLineItem,
    CreateOrderTip,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput,
    CreateOrderTipInput,
    CreateModifierRequest
} from './types-9.js';
import type {
    CreateServiceFulfillmentDetails,
    CreateServiceFulfillmentDetailsInput,
    CreateSubscriptionPreviewRequestDeliveryOptions,
    CreateSubscriptionPreviewRequestNextRenewal
} from './types-11.js';
import type {
    FulfillmentLineItemRequest,
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-22.js';
import type { MetadataMap, MetadataRequestInput } from './types-34.js';
import type { GiftCardFundingSource, GiftCardFundingSourceInput, GiftCard, GiftCardLoad } from './types-23.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    GiftCardTransaction,
    GiftCardPurchaseRecipient,
    GiftCardNotificationRecipientInput,
    GiftCardNotification
} from './types-24.js';
import type { ResponseMeta } from './types-48.js';
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
import type { TextModifierConfigRequestInput, TextModifierConfigRequest } from './types-57.js';
import type {
    InventorySourceSystemRequest,
    InventorySourceSystemRequestInput,
    InventoryTransferLineRequest,
    InventoryTransferLineRequestInput
} from './types-28.js';
import type { InventoryReceiptLineRequest, InventoryReceiptLineRequestInput } from './types-26.js';
import type {
    InventoryReservationOwnerRequest,
    InventoryRoutingDemand,
    InventoryRoutingSourceRequest,
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSource
} from './types-27.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-29.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-30.js';
import type {
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-36.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-38.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput } from './types-31.js';
import type { LocationCoordinate } from './types-32.js';
import type { LocationCoordinateRequestInput } from './types-33.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './types-54.js';
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipment = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity
     * to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** minLength: 1. */
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
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
    /** Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipmentInput = ({
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1.
     */
    "device_id"?: string;
    /** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. [] (Value): {@link FulfillmentLineItemRequestInput}. An order line item and
     * quantity to include when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Local delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** minLength: 1. */
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
     * Pickup details you supply when creating a fulfillment: the pickup address, location, window,
     * instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
     * address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Service details you supply when creating a fulfillment: the scheduled start and end,
     * timezone, and notes.
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
    /** Value enum: "shipment". */
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
    /** Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value" | (string & {});
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$.
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
    /** Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value";
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$.
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
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. anyOf[2] (Value): null.
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
    "expected_version"?: number;
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it. funding_source_type (Required):
     * string. Value enum: "external_payment", "flint_payment", "import". customer_id (Optional):
     * string. minLength: 1. maxLength: 255. external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. order_id (Optional): string.
     * minLength: 1. maxLength: 255. order_manual_payment_id (Optional): string. minLength: 1.
     * maxLength: 255. payment_intent_id (Optional): string. The original payment for flint_payment
     * or store_credit value. For standalone paid funding, use a captured payment intent without an
     * order_id. Order-linked payments fund purchased cards or store credit through their order.
     * minLength: 1. maxLength: 255. refund_id (Optional): string. Refund that issued this value.
     * Present only when funding_source_type is store_credit. minLength: 1. oneOf[1] (Value):
     * {@link GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string;
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     *  anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
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
    "expected_version"?: number;
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it. funding_source_type (Required):
     * string. Value enum: "external_payment", "flint_payment", "import". customer_id (Optional):
     * string. minLength: 1. maxLength: 255. external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. order_id (Optional): string.
     * minLength: 1. maxLength: 255. payment_intent_id (Optional): string. The original payment for
     * flint_payment or store_credit value. For standalone paid funding, use a captured payment
     * intent without an order_id. Order-linked payments fund purchased cards or store credit
     * through their order. minLength: 1. maxLength: 255. oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPaymentInput}.
     * The `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImportInput}. The
     * `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string | globalThis.Date;
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Independent funding resource. Value and consideration are separate. External funding and
     * import provenance are merchant-attested; no payment is collected by recording them.
     * Replacement refund lots retain original funding provenance and do not represent new paid
     * funding.
     */
    "gift_card_load": GiftCardLoad;
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardLoadResult` data. */
export type CreateGiftCardLoadResultResponse = {
    /**
     * The result of loading a gift card: the updated gift card, the gift card load, and the
     * transactions it created.
     */
    "data": CreateGiftCardLoadResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequest = {
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /** minLength: 1. */
    "resend_of_notification_id"?: string;
};
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequestInput = {
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "recipient": GiftCardNotificationRecipientInput;
    /** minLength: 1. */
    "resend_of_notification_id"?: string;
};
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequest = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** minLength: 1. */
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
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Value enum: "automatic". */
    "capture_mode": "automatic" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Value enum: "automatic". */
    "capture_mode": unknown;
}));
/** The `automatic` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestAutomaticInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Value enum: "automatic". */
    "capture_mode": "automatic";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Value enum: "automatic". */
    "capture_mode": ("automatic") & ("automatic");
})
    & ({
    "expires_at"?: never;
}));
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequestInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
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
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Value enum: "manual". */
    "capture_mode": "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Value enum: "manual". */
    "capture_mode": unknown;
});
/** The `manual` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestManualInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Value enum: "manual". */
    "capture_mode": "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Value enum: "manual". */
    "capture_mode": ("manual") & ("manual");
});
/** The request body for: Create a gift card. */
export type CreateGiftCardRequest = {
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     *  anyOf[1] (Value): {@link InitialGiftCardFunding}. The initial funding for a new gift card:
     * the `source` of the value, the `value_money`, and optional consideration and source time.
     * anyOf[2] (Value): null.
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
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD";
    /** minLength: 1. */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     *  anyOf[1] (Value): {@link InitialGiftCardFundingInput}. The initial funding for a new gift
     * card: the `source` of the value, the `value_money`, and optional consideration and source
     * time. anyOf[2] (Value): null.
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
     * date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Independent funding resource. Value and consideration are separate. External funding and
     * import provenance are merchant-attested; no payment is collected by recording them.
     * Replacement refund lots retain original funding provenance and do not represent new paid
     * funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /** A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardResult` data. */
export type CreateGiftCardResultResponse = {
    /**
     * The result of creating a gift card: the card, its transactions, any load and notification,
     * and the code while it can still be recovered.
     */
    "data": CreateGiftCardResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
     * 255.
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
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryAdjustmentConditionChangeLineRequest}. One line of an inventory condition change:
     * moves a `quantity` of an item at a Location from one condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequest>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Value enum: "condition_changed". */
    "reason": "condition_changed" | (string & {});
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryAdjustmentConditionChangeLineRequestInput}. One line of an inventory condition
     * change: moves a `quantity` of an item at a Location from one condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequestInput>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Value enum: "condition_changed". */
    "reason": "condition_changed";
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** minLength: 1. pattern: \S. */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Value enum: "correction". */
    "reason": "correction" | (string & {});
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**  type (Required): string.  Value enum: "pos", "wms", "erp", "other". */
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
    /**  [] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One
     * line of an inventory adjustment that sets absolute quantities for an item at a Location.
     * Omitted quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** minLength: 1. pattern: \S. */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Value enum: "correction". */
    "reason": "correction";
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**  type (Required): string.  Value enum: "pos", "wms", "erp", "other". */
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
    /**  [] (Value): any. */
    "lines"?: unknown;
}));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Value enum: "counted". */
    "reason": "counted" | (string & {});
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**  type (Required): string.  Value enum: "pos", "wms", "erp", "other". */
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
    /**  [] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One
     * line of an inventory adjustment that sets absolute quantities for an item at a Location.
     * Omitted quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Value enum: "counted". */
    "reason": "counted";
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**  type (Required): string.  Value enum: "pos", "wms", "erp", "other". */
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
    /**  [] (Value): any. */
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
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequest}. One
     * line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
     * given `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequest>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss" | (string & {});
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
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
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequestInput}.
     * One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
     * given `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequestInput>;
    /** minLength: 1. */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss";
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
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
     * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand
     * can be split, and how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory allocation policy. */
export type CreateInventoryAllocationPolicyRequestInput = {
    /**
     * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand
     * can be split, and how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValueInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequest = {
    /** minItems: 1. maxItems: 100. [] (Value): string. minLength: 1. */
    "inventory_item_ids": Array<string>;
    /** minLength: 1. */
    "location_id": string;
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequestInput = CreateInventoryCountRequest;
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequest = {
    /** minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "sku"?: string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequestInput = {
    /** minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "sku"?: string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** The request body for: Create inventory receipt. */
export type CreateInventoryReceiptRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     *  [] (Value): {@link InventoryReceiptLineRequest}. One line of an inventory receipt you
     * supply: a quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** The request body for: Create inventory receipt. */
export type CreateInventoryReceiptRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     *  [] (Value): {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you
     * supply: a quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequest = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryRoutingDemand}. Stock you ask to
     * reserve for one item: the item and quantity, plus optional Location limits and splitting
     * behavior.
     */
    "demands": Array<InventoryRoutingDemand>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequest;
    /**
     * The owner of a merchant inventory reservation you create: your `key` for what holds the
     * stock.
     */
    "owner": InventoryReservationOwnerRequest;
};
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequestInput = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryRoutingDemandInput}. Stock you ask
     * to reserve for one item: the item and quantity, plus optional Location limits and splitting
     * behavior.
     */
    "demands": Array<InventoryRoutingDemandInput>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequestInput;
    /**
     * The owner of a merchant inventory reservation you create: your `key` for what holds the
     * stock.
     */
    "owner": InventoryReservationOwnerRequestInput;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequest = {
    /** minLength: 1. */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryTransferLineRequest}. One line of an
     * inventory transfer you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequest>;
    /** minLength: 1. */
    "note"?: string;
    /** minLength: 1. */
    "origin_location_id": string;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequestInput = {
    /** minLength: 1. */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link InventoryTransferLineRequestInput}. One line
     * of an inventory transfer you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequestInput>;
    /** minLength: 1. */
    "note"?: string;
    /** minLength: 1. */
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /** When the payment was received. Defaults to now. Format: date-time. minLength: 1. */
    "received_at"?: string;
};
/** The request body for: Create invoice manual payment. */
export type CreateInvoiceManualPaymentRequestInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /** When the payment was received. Defaults to now. Format: date-time. minLength: 1. */
    "received_at"?: string | globalThis.Date;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequest = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** minLength: 1. */
    "name": string;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequestInput = {
    /**
     * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a
     * day of the month.
     */
    "calculation": InvoicePaymentTermCalculationInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicyInput;
    /** minLength: 1. */
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
     * /v1/invoices?customer_id= finds it. minLength: 1.
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
     * Where this invoice backing order's tracked demand is routed: a fixed Location, or an
     * allocation policy. Required when any line tracks inventory. Where inventory for an order is
     * allocated from: a fixed location, an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
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
     * /v1/invoices?customer_id= finds it. minLength: 1.
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
     * Where this invoice backing order's tracked demand is routed: a fixed Location, or an
     * allocation policy. Required when any line tracks inventory. Where inventory for an order is
     * allocated from: a fixed location, an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
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
/** The request body for: Create invoice. */
export type CreateInvoiceRequest = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay" | (string & {});
})
    & ((Exclude<CreateInvoiceRequestOrder & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPay & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create invoice. */
export type CreateInvoiceRequestInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay";
})
    & ((Exclude<CreateInvoiceRequestOrderInput & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPayInput & object, readonly unknown[]>));
/** The `order` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestOrder = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order". */
    "type": "order" | (string & {});
})
    & (({
    /** Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
}));
/** The `order` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestOrderInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order". */
    "type": "order";
})
    & (({
    /** Value enum: "order". */
    "type": ("order") & ("order");
    /**
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id": string;
})
    & (({
    "quick_pay"?: never;
})));
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPay = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
}));
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPayInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1.
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Required at issue when delivery resolves
     * to email, and when you schedule the issue. minLength: 1.
     */
    "recipient_email"?: string;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1.
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay";
})
    & (({
    /** Value enum: "quick_pay". */
    "type": ("quick_pay") & ("quick_pay");
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
})
    & (({
    "order_id"?: never;
})));
/** The request body for: Create location. */
export type CreateLocationRequest = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequest;
    /** A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinate;
    /** Send null to clear it. Value enum: "merchant_supplied", "geocoded", null. */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** minLength: 1. */
    "timezone": string;
};
/** The request body for: Create location. */
export type CreateLocationRequestInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /** A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinateRequestInput;
    /** Send null to clear it. Value enum: "merchant_supplied", "geocoded", null. */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** minLength: 1. */
    "timezone": string;
};
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequest = ((CreateSubscriptionPreviewRequestDeliveryOptions)
    | (CreateSubscriptionPreviewRequestNextRenewal)
    | (Record<string, unknown>));
/** The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestDeliveryOptionsInput = {
    /** Where to deliver a subscription: a saved customer address by ID, or a new address. */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /** Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequestInput = ((CreateMeSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateMeSubscriptionPreviewRequestNextRenewalInput));
/** The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestNextRenewalInput = {
    /** Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequest = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
    "metadata"?: MetadataMap;
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
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * CreateModifierRequest}. A modifier to create in a modifier group, with its name, price
     * change, tax category, and default selection.
     */
    "modifiers"?: Array<CreateModifierRequest>;
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
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
