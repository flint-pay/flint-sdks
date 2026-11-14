import type {
    OrderTaxLocationFullAddressRequest,
    OrderTaxCalculationRequest,
    OrderTaxExemptionRequest,
    OrderTaxCalculationRequestInput,
    OrderTaxExemptionRequestInput,
    OrderLineItemTaxAssignment,
    OrderLineItemTaxAssignmentInput
} from './types-41.js';
import type { DeliveryChargeTaxCalculationRequest, DeliveryChargeTaxCalculationRequestModelInput } from './types-17.js';
import type { OrderChargeTaxAssignment, OrderChargeTaxAssignmentInput } from './types-40.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-38.js';
import type { PartnerWebhookEnvelope, PayOrderRequestInput } from './types-44.js';
import type { WebhookOrder } from './types-69.js';
import type { InputValue } from '../runtime.js';
import type {
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput
} from './types-0.js';
import type { CancelOrderPaymentAttemptRequestInput } from './types-4.js';
import type { CloseOrderRequestInput } from './types-7.js';
import type { FilesCompleteParams, ExpandedOrderSummary } from './types-24.js';
import type {
    CreateOrderEditRequestInput,
    CreateOrderRequestInput,
    CreatePackageItemRequest,
    CreatePackageItemRequestInput
} from './types-11.js';
import type { DisputesAcceptParams, Dimensions, DimensionsRequestInput } from './types-23.js';
import type { CustomersListAddressesParams } from './types-16.js';
import type { RemoveDiscountsRequestInput } from './types-53.js';
import type {
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    RetryOrderEditRefundRequestInput,
    ResponseMeta
} from './types-54.js';
import type { SendOrderReceiptRequestInput } from './types-59.js';
import type { UpdateOrderChargeRequestInput, UpdateLineItemRequestInput, UpdateOrderRequestInput } from './types-67.js';
import type { ReturnHandoffRequirementLineItem } from './types-55.js';
import type { Weight, WeightRequestInput } from './types-70.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-57.js';
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequestInput = OrderTaxLocationFullAddressRequest;
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddress = {
    /**
     * The address to calculate tax from. A full street address you supply as an order's tax
     * location.
     */
    "address": OrderTaxLocationFullAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /**
     * The kind of address you are sending. Value enum: "tax_address", "billing_address",
     * "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {});
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddressInput = {
    /**
     * The address to calculate tax from. A full street address you supply as an order's tax
     * location.
     */
    "address": OrderTaxLocationFullAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /**
     * The kind of address you are sending. Value enum: "tax_address", "billing_address",
     * "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address";
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCode = {
    /**
     * The address to calculate tax from. A postal code, with an optional country, you supply as an
     * order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** The kind of address you are sending. Value enum: "postal_code". */
    "address_type": "postal_code" | (string & {});
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCodeInput = {
    /**
     * The address to calculate tax from. A postal code, with an optional country, you supply as an
     * order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** The kind of address you are sending. Value enum: "postal_code". */
    "address_type": "postal_code";
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax
     * supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT,
     * LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Default: "US". Example: "US".
     */
    "country"?: string;
    /**
     * Postal code. A full address in Ireland may omit it; every other address needs one.
     * minLength: 1. pattern: \S.
     */
    "postal_code": string;
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequestInput = OrderTaxLocationPostalAddressRequest;
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequest = ((OrderTaxLocationInputPostalCode) | (OrderTaxLocationInputFullAddress) | (Record<string, unknown>));
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequestInput = ((OrderTaxLocationInputPostalCodeInput) | (OrderTaxLocationInputFullAddressInput));
/**
 * Tax settings for a new order: whether tax is enabled, its calculation, location, and exemption
 * selection.
 */
export type OrderTaxRequest = ({
    /**
     * How tax is calculated: automatically through Flint's tax connection, or from components you
     * supply. How tax is calculated on an order: automatically, or externally with the tax
     * components you supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Percentage tax template copied onto every positive delivery charge generated by checkout,
     * including paid pickup. Allowed only with external tax. Changing it leaves existing charges
     * unchanged; use tax.charge_calculations to override those. A new selection copies the
     * template again. Set it before issuing an invoice; the invoice freezes it with the order. A
     * percentage tax template for the delivery charges checkout generates, including paid pickup:
     * whether the charge includes the tax, and the tax components. Allowed only on orders that use
     * external tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /**
     * Whether Flint calculates tax. When exemption is the only tax field, omission uses the
     * merchant's tax defaults. Other tax inputs default to true. When false, calculation,
     * location, delivery_charge_calculation, and exemption must be omitted.
     */
    "enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Defaults to customer assessment on
     * create: the customer's blanket tax_exempt flag, then applicable exemption records. Cannot be
     * null. Replaced as a whole: send every field you want to keep. Choose customer assessment, no
     * exemption, or a one-off order declaration. Write-only: responses return the exemption that
     * applied in tax.exemption, not this selection. Cannot change after tax commits; a change
     * returns 409 ACTION_NOT_ALLOWED with reason payment_collected.
     */
    "exemption"?: OrderTaxExemptionRequest;
    /**
     * The address Flint calculates automatic tax at for items and charges without a fulfillment
     * destination of their own. The tax location you supply for an order, as a postal code or a
     * full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Tax settings for a new order: whether tax is enabled, its calculation, location, and exemption
 * selection.
 */
export type OrderTaxRequestInput = ({
    /**
     * How tax is calculated: automatically through Flint's tax connection, or from components you
     * supply. How tax is calculated on an order: automatically, or externally with the tax
     * components you supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /**
     * Percentage tax template copied onto every positive delivery charge generated by checkout,
     * including paid pickup. Allowed only with external tax. Changing it leaves existing charges
     * unchanged; use tax.charge_calculations to override those. A new selection copies the
     * template again. Set it before issuing an invoice; the invoice freezes it with the order. A
     * percentage tax template for the delivery charges checkout generates, including paid pickup:
     * whether the charge includes the tax, and the tax components. Allowed only on orders that use
     * external tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequestModelInput;
    /**
     * Whether Flint calculates tax. When exemption is the only tax field, omission uses the
     * merchant's tax defaults. Other tax inputs default to true. When false, calculation,
     * location, delivery_charge_calculation, and exemption must be omitted.
     */
    "enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Defaults to customer assessment on
     * create: the customer's blanket tax_exempt flag, then applicable exemption records. Cannot be
     * null. Replaced as a whole: send every field you want to keep. Choose customer assessment, no
     * exemption, or a one-off order declaration. Write-only: responses return the exemption that
     * applied in tax.exemption, not this selection. Cannot change after tax commits; a change
     * returns 409 ACTION_NOT_ALLOWED with reason payment_collected.
     */
    "exemption"?: OrderTaxExemptionRequestInput;
    /**
     * The address Flint calculates automatic tax at for items and charges without a fulfillment
     * destination of their own. The tax location you supply for an order, as a postal code or a
     * full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, the
 * exemption selection, and per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequest = ({
    /**
     * How tax is calculated: automatically through Flint's tax connection, or from components you
     * supply. How tax is calculated on an order: automatically, or externally with the tax
     * components you supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignment}. An externally calculated
     * tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignment>;
    /**
     * Percentage tax template copied onto every positive delivery charge generated by checkout,
     * including paid pickup. Allowed only with external tax. Changing it leaves existing charges
     * unchanged; use tax.charge_calculations to override those. A new selection copies the
     * template again. Set it before issuing an invoice; the invoice freezes it with the order.
     * Send null to clear it. anyOf[1] (Value): {@link DeliveryChargeTaxCalculationRequest}. A
     * percentage tax template for the delivery charges checkout generates, including paid pickup:
     * whether the charge includes the tax, and the tax components. Allowed only on orders that use
     * external tax. anyOf[2] (Value): null.
     */
    "delivery_charge_calculation"?: ((DeliveryChargeTaxCalculationRequest) | (null));
    /**
     * Whether Flint calculates tax. When exemption is the only tax field, omission keeps the
     * order's current value. Other tax inputs default to true. When you send false, calculation,
     * location, delivery_charge_calculation, exemption, and calculation assignments must be
     * omitted.
     */
    "enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omission preserves the prior
     * selection; null is rejected. Cannot change after tax commits; a change returns 409
     * ACTION_NOT_ALLOWED with reason payment_collected. Replaced as a whole: send every field you
     * want to keep. Choose customer assessment, no exemption, or a one-off order declaration.
     * Write-only: responses return the exemption that applied in tax.exemption, not this
     * selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with
     * reason payment_collected.
     */
    "exemption"?: OrderTaxExemptionRequest;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignment}. An externally calculated
     * tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignment>;
    /**
     * The address Flint calculates automatic tax at for items and charges without a fulfillment
     * destination of their own. The tax location you supply for an order, as a postal code or a
     * full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, the
 * exemption selection, and per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequestInput = ({
    /**
     * How tax is calculated: automatically through Flint's tax connection, or from components you
     * supply. How tax is calculated on an order: automatically, or externally with the tax
     * components you supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignmentInput}. An externally
     * calculated tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignmentInput>;
    /**
     * Percentage tax template copied onto every positive delivery charge generated by checkout,
     * including paid pickup. Allowed only with external tax. Changing it leaves existing charges
     * unchanged; use tax.charge_calculations to override those. A new selection copies the
     * template again. Set it before issuing an invoice; the invoice freezes it with the order.
     * Send null to clear it. anyOf[1] (Value): {@link
     * DeliveryChargeTaxCalculationRequestModelInput}. A percentage tax template for the delivery
     * charges checkout generates, including paid pickup: whether the charge includes the tax, and
     * the tax components. Allowed only on orders that use external tax. anyOf[2] (Value): null.
     */
    "delivery_charge_calculation"?: ((DeliveryChargeTaxCalculationRequestModelInput) | (null));
    /**
     * Whether Flint calculates tax. When exemption is the only tax field, omission keeps the
     * order's current value. Other tax inputs default to true. When you send false, calculation,
     * location, delivery_charge_calculation, exemption, and calculation assignments must be
     * omitted.
     */
    "enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omission preserves the prior
     * selection; null is rejected. Cannot change after tax commits; a change returns 409
     * ACTION_NOT_ALLOWED with reason payment_collected. Replaced as a whole: send every field you
     * want to keep. Choose customer assessment, no exemption, or a one-off order declaration.
     * Write-only: responses return the exemption that applied in tax.exemption, not this
     * selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with
     * reason payment_collected.
     */
    "exemption"?: OrderTaxExemptionRequestInput;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignmentInput}. An externally
     * calculated tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignmentInput>;
    /**
     * The address Flint calculates automatic tax at for items and charges without a fulfillment
     * destination of their own. The tax location you supply for an order, as a postal code or a
     * full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
export type OrderUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.updated";
});
/**
 * The `order.updated` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
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
 * The `order.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
});
export type OrdersApplyDiscountParams = (ApplyDiscountRequestInput)
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
export type OrdersApplyGiftCardParams = (InputValue<ApplyOrderGiftCardRequestInput>)
    & {
    /**
     * Single-use proof from the checkout's gift card challenge. Needed only after
     * GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof,
     * for up to an hour after the failures that triggered it. Ignored for API keys.
     */
    "Flint-Gift-Card-Challenge"?: InputValue<string>;
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
export type OrdersCancelPaymentAttemptParams = (InputValue<CancelOrderPaymentAttemptRequestInput> | {
    "cancellation_reason"?: never;
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
export type OrdersCloseParams = (InputValue<CloseOrderRequestInput>
    | {
    "collected_money_behavior"?: never;
    "expected_version"?: never;
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
export type OrdersCreateAccessLinkParams = FilesCompleteParams;
export type OrdersCreateChargeParams = (InputValue<AddOrderChargeRequestInput>)
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
export type OrdersCreateEditParams = (CreateOrderEditRequestInput)
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
export type OrdersCreateLineItemsParams = (InputValue<AddLineItemsRequestInput>)
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
export type OrdersCreateParams = (InputValue<CreateOrderRequestInput>)
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
export type OrdersDeleteChargeParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1. maximum: 9007199254740991.
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
export type OrdersDeleteLineItemParams = OrdersDeleteChargeParams;
export type OrdersGetEditParams = DisputesAcceptParams;
export type OrdersGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer,
     * fulfillments.packages, fulfillments.shipments, payment_intents, subscription,
     * subscription_plan. Expansion requires the base order read scope plus the read scope for each
     * expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions
     * are capped at 20 related objects per path. [] enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". Value
     * enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan".
     */
    "expand"?: InputValue<("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")
        | readonly ("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")[]>;
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
export type OrdersGetPaymentAttemptParams = DisputesAcceptParams;
export type OrdersGetReceiptPDFParams = DisputesAcceptParams;
export type OrdersGetReceiptPDFResponse = Uint8Array;
export type OrdersListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "created", "dispute_opened", "dispute_closed", "line_item_added",
     * "line_item_updated", "line_item_removed", "discount_applied", "discount_removed",
     * "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed",
     * "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated",
     * "order_edited", "payment_review_opened", "payment_review_closed", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". Value enum:
     * "created", "dispute_opened", "dispute_closed", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited",
     * "payment_review_opened", "payment_review_closed", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "created", "dispute_opened", "dispute_closed", "line_item_added",
     * "line_item_updated", "line_item_removed", "discount_applied", "discount_removed",
     * "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed",
     * "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated",
     * "order_edited", "payment_review_opened", "payment_review_closed", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". anyOf[1][]
     * (Value): string. Value enum: "created", "dispute_opened", "dispute_closed",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "payment_review_opened",
     * "payment_review_closed", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[2] (Value): string. Value enum:
     * "created", "dispute_opened", "dispute_closed", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited",
     * "payment_review_opened", "payment_review_closed", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: InputValue<("created"
        | "dispute_opened"
        | "dispute_closed"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "payment_review_opened"
        | "payment_review_closed"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")
        | readonly ("created"
        | "dispute_opened"
        | "dispute_closed"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "payment_review_opened"
        | "payment_review_closed"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")[]>;
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
export type OrdersListChargesParams = CustomersListAddressesParams;
export type OrdersListEditsParams = {
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
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
export type OrdersListLineItemsParams = CustomersListAddressesParams;
export type OrdersListParams = {
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
     * Filter by customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter to orders with any line item referencing this product ID. Bundle lines don't match
     * their component products. An unknown product ID returns an empty page. pattern:
     * ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Filter to orders with any line item referencing this variant ID. Bundle lines don't match
     * their component variants. An unknown variant ID returns an empty page. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Filter to orders whose buyer_email or linked customer's email equals this address, compared
     * case-insensitively after trimming, with accents preserved. Requires a bare email address.
     * Format: email. Example: "buyer@example.com".
     */
    "email"?: InputValue<string>;
    /**
     * Exact-match filter on order IDs. Matches any of up to 100 distinct IDs. Unknown IDs and
     * orders outside your merchant or environment are absent. Other filters still apply, and
     * results keep the list's ordering and pagination. Keep the same ID set on subsequent pages.
     * anyOf[1] (Value): Array of string. minItems: 1. maxItems: 100. Example:
     * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". anyOf[1][] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_id"?: InputValue<(string) | readonly (string)[]>;
    /**
     * Why a closed order closed. Matches orders closed for any reason given. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "invoice_voided", "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". Value enum: "invoice_voided", "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other". anyOf[1][] (Value): string. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): string. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<("invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")
        | readonly ("invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")[]>;
    /**
     * Order status: open or closed. Selecting open and closed includes both statuses. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "open", "closed". Value
     * enum: "open", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open",
     * "closed". anyOf[1][] (Value): string. Value enum: "open", "closed". anyOf[2] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<("open" | "closed") | readonly ("open" | "closed")[]>;
    /**
     * Filter by settled collection status. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "unpaid", "partially_paid", "paid". Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "unpaid",
     * "partially_paid", "paid". anyOf[1][] (Value): string. Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[2] (Value): string. Value enum: "unpaid", "partially_paid",
     * "paid".
     */
    "payment_status"?: InputValue<("unpaid" | "partially_paid" | "paid") | readonly ("unpaid" | "partially_paid" | "paid")[]>;
    /**
     * Filter by refund progress. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Filter by aggregate order fulfillment status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed". Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled",
     * "not_applicable", "closed". anyOf[1][] (Value): string. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")
        | readonly ("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")[]>;
    /** Filter by merchant-visible order number. */
    "order_number"?: InputValue<string>;
    /**
     * Filter by whether any tracked line has units waiting for stock. False includes orders with
     * no backordered units.
     */
    "has_backordered_quantity"?: InputValue<boolean>;
    /**
     * Filter by whether any required fulfillment quantity is unassigned. True includes orders with
     * a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders
     * with no unassigned quantity, including orders that need no fulfillment.
     */
    "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
    /**
     * Filter by whether invoice_id is set, including a voided invoice. False includes orders with
     * no invoice.
     */
    "has_invoice"?: InputValue<boolean>;
    /**
     * Filter by whether the order has an open fulfillment. A fulfillment remains open until it
     * completes, is canceled, fails, or is marked as a no-show. False includes orders with no
     * fulfillments.
     */
    "has_open_fulfillment"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by order origin. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription",
     * "invoice". Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice". anyOf[1][]
     * (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". anyOf[2] (Value): string. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | "invoice")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | "invoice")[]>;
    /**
     * Search across order_id, order number, external_reference_id, fulfillment
     * external_reference_id, buyer_email, notes, and line item names. The linked customer's name
     * and email aren't searched; use email or customer_id to find a customer's orders. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by subscription ID. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Filter by the Return that created a replacement order. pattern:
     * ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the ReturnResolution that created a replacement order. pattern:
     * ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Filter by the payment link whose checkout created the order. pattern:
     * ^pl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by order_id. Default:
     * "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer, subscription,
     * subscription_plan. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "subscription", "subscription_plan". Value enum:
     * "customer", "subscription", "subscription_plan". anyOf[1] (Value): Array of string. [] enum:
     * "customer", "subscription", "subscription_plan". anyOf[1][] (Value): string. Value enum:
     * "customer", "subscription", "subscription_plan". anyOf[2] (Value): string. Value enum:
     * "customer", "subscription", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "subscription" | "subscription_plan")
        | readonly ("customer" | "subscription" | "subscription_plan")[]>;
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
export type OrdersListPaymentAttemptsParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
export type OrdersPayParams = (PayOrderRequestInput)
    & {
    /**
     * A stable random device identifier, independent of the order or checkout session. Required
     * for checkout-session gift card purchases. Keep it for subsequent purchases from the same
     * device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
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
export type OrdersRemoveDiscountsParams = (RemoveDiscountsRequestInput)
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
export type OrdersRemoveGiftCardParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version": InputValue<number>;
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
export type OrdersRepriceDiscountsParams = (InputValue<RepriceDiscountsRequestInput> | {
    "expected_version"?: never;
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
export type OrdersResolveInventoryExceptionParams = (InputValue<ResolveOrderInventoryExceptionRequestInput> | {
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
export type OrdersRetryEditRefundParams = (InputValue<RetryOrderEditRefundRequestInput> | {
    "destinations"?: never;
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
export type OrdersSendReceiptParams = (InputValue<SendOrderReceiptRequestInput> | {
    "email"?: never;
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
export type OrdersUpdateChargeParams = (InputValue<UpdateOrderChargeRequestInput>)
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
export type OrdersUpdateLineItemParams = (InputValue<UpdateLineItemRequestInput>)
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
export type OrdersUpdateParams = (InputValue<UpdateOrderRequestInput>)
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
/** A package within a shipment. */
export type Package = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     */
    "label_url"?: string;
    /**
     * Caller-owned key-value metadata associated with the package. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /**
     * Return this package belongs to. Present only on packages of return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. Package states are the source used to derive shipment
     * status. - `created`: The package record exists but has not been packed or handed off. -
     * `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was
     * handed to the carrier. - `in_transit`: The carrier is moving the package through its
     * network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The package was returned toward or to its origin. - `voided`: The
     * package was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
    /** Additional explanation of the package's current status. */
    "status_reason"?: string;
    /**
     * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh
     * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
     * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
     * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | "void"
        | (string & {})>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
    /**
     * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
};
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputCreated = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
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
    /**
     * Explanation of the package's status, kept as the package's `status_reason`. At most 500
     * characters. `null` is the same as omitting the field. minLength: 1.
     */
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
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputCreatedInput = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
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
    /**
     * Explanation of the package's status, kept as the package's `status_reason`. At most 500
     * characters. `null` is the same as omitting the field. minLength: 1.
     */
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
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputShipped = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
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
    /**
     * Explanation of the package's status, kept as the package's `status_reason` and recorded as
     * the reason on the shipped status change. At most 500 characters. `null` is the same as
     * omitting the field. minLength: 1.
     */
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
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputShippedInput = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
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
    /**
     * Explanation of the package's status, kept as the package's `status_reason` and recorded as
     * the reason on the shipped status change. At most 500 characters. `null` is the same as
     * omitting the field. minLength: 1.
     */
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
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateRequest = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
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
    & ((Exclude<PackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateRequestInput = ({
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
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
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
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
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
    & ((Exclude<PackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShippedInput & object, readonly unknown[]>));
export type PackageCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
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
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
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
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.created";
});
/**
 * The `package.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
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
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
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
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
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
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
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
 * The `package.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
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
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
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
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
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
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
});
/** An order item assigned to a package. */
export type PackageItem = {
    /**
     * Bundle component this item counts, in component units. `null` when the line isn't a bundle
     * component or a legacy allocation has no component recorded. Look the component up in the
     * order line's bundle_components. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string | null;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Fulfillment containing this package item. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Caller-owned metadata for this package item. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order containing the allocated line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Order line whose quantity this package item allocates. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Package containing this item. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Unique identifier for this package allocation. Example: "pki_01KEZF7C00CEFTYV5RD7XVYQ7B". */
    "package_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
    /** Shipment containing the package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted item version, independent of package shipment and capacity guards. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A page of `PackageItem` objects. */
export type PackageItemListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PackageItem}. An order item assigned to a package.
     */
    "data": Array<PackageItem>;
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
/** A response containing `PackageItem` data. */
export type PackageItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An order item assigned
     * to a package.
     */
    "data": PackageItem;
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
/** A page of `Package` objects. */
export type PackageListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Package}. A package within a shipment.
     */
    "data": Array<Package>;
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
/** A response containing `Package` data. */
export type PackageResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A package within a
     * shipment.
     */
    "data": Package;
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
export type PackageUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
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
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
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
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.updated";
});
