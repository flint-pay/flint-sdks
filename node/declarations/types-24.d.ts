import type {
    DeliveryAvailability,
    DeliveryAvailabilityPreviousAttributes,
    DeliveryAvailabilityRequestInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourcePreviousAttributes,
    DeliveryBusinessDayRange,
    DeliveryBusinessDayRangePreviousAttributes,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCountryConditionRequestInput
} from './types-18.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type {
    DeliveryInputRequirement,
    DeliveryInputRequirementPreviousAttributes,
    DeliveryInventoryReservationSummary
} from './types-19.js';
import type { DeliveryRecipientResource, DeliveryRecipientResourcePreviousAttributes } from './types-23.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type {
    DeliveryPickupDetails,
    DeliveryPlan,
    DeliveryPickupDetailsPreviousAttributes,
    DeliveryPlanPreviousAttributes,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeConditionPreviousAttributes,
    DeliveryPostalCodeConditionRequestInput
} from './types-20.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { ResponseMeta } from './types-62.js';
import type { CheckoutSession } from './types-6.js';
import type { Order } from './types-45.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliverySelectionRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-26.js';
import type {
    DeliveryPricingTierBand,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingTierBandPreviousAttributes
} from './types-21.js';
import type {
    DeliveryRadiusCondition,
    DeliveryRadiusConditionPreviousAttributes,
    DeliveryRadiusConditionRequestInput
} from './types-22.js';
/** Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. */
export type DeliveryScheduleWindowRule = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
export type DeliveryScheduleWindowRulePreviousAttributes = {
    /**
     * When windows can be offered. anyOf[1] (Value): {@link
     * DeliveryAvailabilityPreviousAttributes}. anyOf[2] (Value): null.
     */
    "availability"?: ((DeliveryAvailabilityPreviousAttributes) | (null));
};
/**
 * Scheduled-window estimate rule you supply for a delivery method, defined by its `availability`
 * schedule.
 */
export type DeliveryScheduleWindowRuleRequestInput = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailabilityRequestInput;
};
/**
 * The delivery choice selected for a checkout or order. Poll GET
 * /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current
 * status.
 */
export type DeliverySelection = {
    /**
     * Delivery charge committed by this selection. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Deadline after which calculated pricing evidence is no longer valid. Always present with an
     * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "calculation_expires_at"?: string;
    /**
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * One chosen option for each required choice group. [] (Value): {@link
     * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
     * delivery selection, with its method, amounts, type-specific details, timezone, and any
     * chosen delivery window.
     */
    "choices": Array<DeliverySelectionChoiceResource>;
    /**
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /** Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
    "delivery_quote_id": string;
    /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
    "delivery_selection_id": string;
    /**
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Inputs this selection still needs before payment: each destination_address member a chosen
     * shipment or local delivery needs that the stored address lacks (line1, city, and country,
     * plus state and postal_code in the US), and each recipient field a chosen option requires
     * that the selection does not include. Each entry repeats the quote's requirement for that
     * option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED,
     * reason configuration_required, and the delivery_selection reference until a new delivery
     * selection includes them. Empty when nothing is missing, and always empty unless status is
     * selected. [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs,
     * such as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential. */
    "instructions"?: string;
    /**
     * Ordered lifecycle events recorded for this selection. [] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened.
     */
    "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
    /**
     * Time the selection lifecycle last changed. Always present with an API key or dashboard
     * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "lifecycle_updated_at"?: string;
    /**
     * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
     * calculation expiry, and the maximum selection lifetime. A tie between the calculation and
     * the guarantee reports calculation_expiry. Always present with an API key or dashboard
     * credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options
     * and delivery windows comes first. When the selection holds stock, the hold ends at this
     * deadline too. - `calculation_expiry`: The calculation the selection was priced against
     * expires first. It ends no later than the checkout session's expires_at, and earlier when an
     * applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the
     * longest a provisional selection can last, 24 hours after it was created. Value enum:
     * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
     */
    "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
    /**
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted".
     */
    "private_data_status"?: "available" | "redacted" | (string & {});
    /**
     * Recipient details captured with the selection. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. The person receiving a delivery
     * selection, with optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * Time merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "redacted_at"?: string;
    /**
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
    /**
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release". []
     * (Value): string. Value enum: "release".
     */
    "supported_actions": Array<"release" | (string & {})>;
};
/**
 * A delivery option chosen for one choice group in a delivery selection, with its method, amounts,
 * type-specific details, timezone, and any chosen delivery window.
 */
export type DeliverySelectionChoiceResource = {
    /**
     * Delivery price before discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the quote choice group these items belong to. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * ID of the delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /** ID of the option chosen from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
    "delivery_option_id": string;
    /**
     * Whether this choice delivers the items together or in separate shipments. Whether a delivery
     * option is fulfilled in one delivery or several, with the first arrival time, completion
     * time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /**
     * ID of the chosen offered window. Omitted when no offered window was chosen. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer-facing description captured from the chosen method. Omitted when the method had none.
     */
    "description"?: string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money"?: MoneyValue;
    /**
     * Window choice and buyer instructions stored with this selection. Omitted when neither was
     * supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the
     * option uses delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
    /**
     * Local delivery service details, present for local_delivery choices. Details of a local
     * delivery option: instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /**
     * Reference supplied by the merchant's rate service for this option. Omitted when none was
     * supplied.
     */
    "merchant_reference"?: string;
    /** Buyer-facing name captured from the chosen method. */
    "name": string;
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string | null;
    /**
     * ID of the order this delivery choice belongs to, including the parent of order_charge_id
     * when a charge applies. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Pickup Location and collection details, present for pickup choices. Pickup details of a
     * delivery option: the pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shipping service details, present for shipment choices. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Key identifying the same items and allowed delivery types across quotes. */
    "stable_key": string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     */
    "timezone"?: string;
    /**
     * Delivery price after discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
export type DeliverySelectionChoiceResourcePreviousAttributes = {
    /**
     * Delivery price before discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the quote choice group these items belong to. anyOf[1] (Value): string. ID of the
     * quote choice group these items belong to. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "delivery_choice_group_id"?: ((string) | (null));
    /**
     * ID of the delivery method providing this choice. anyOf[1] (Value): string. ID of the
     * delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
     * (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * ID of the option chosen from the quote. anyOf[1] (Value): string. ID of the option chosen
     * from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     */
    "delivery_option_id"?: ((string) | (null));
    /**
     * Whether this choice delivers the items together or in separate shipments. anyOf[1] (Value):
     * {@link DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     */
    "delivery_plan"?: ((DeliveryPlanPreviousAttributes) | (null));
    /**
     * ID of the chosen offered window. Omitted when no offered window was chosen. anyOf[1]
     * (Value): string. ID of the chosen offered window. Omitted when no offered window was chosen.
     * Example: "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2]
     * (Value): null.
     */
    "delivery_window_id"?: ((string) | (null));
    /**
     * Buyer-facing description captured from the chosen method. Omitted when the method had none.
     * anyOf[1] (Value): string. Buyer-facing description captured from the chosen method. Omitted
     * when the method had none. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Window choice and buyer instructions stored with this selection. Omitted when neither was
     * supplied. anyOf[1] (Value): {@link DeliverySelectionInstructionsRequestPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "input"?: ((DeliverySelectionInstructionsRequestPreviousAttributes) | (null));
    /**
     * Local delivery service details, present for local_delivery choices. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "local_delivery"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Reference supplied by the merchant's rate service for this option. Omitted when none was
     * supplied. anyOf[1] (Value): string. Reference supplied by the merchant's rate service for
     * this option. Omitted when none was supplied. anyOf[2] (Value): null.
     */
    "merchant_reference"?: ((string) | (null));
    /**
     * Buyer-facing name captured from the chosen method. anyOf[1] (Value): string. Buyer-facing
     * name captured from the chosen method. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge. anyOf[1] (Value): string. Always present with an API key or dashboard credential.
     * Null when the choice has no order charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order this delivery choice belongs to, including the parent of order_charge_id
     * when a charge applies. anyOf[1] (Value): string. ID of the order this delivery choice
     * belongs to, including the parent of order_charge_id when a charge applies. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Pickup Location and collection details, present for pickup choices. anyOf[1] (Value): {@link
     * DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pickup"?: ((DeliveryPickupDetailsPreviousAttributes) | (null));
    /**
     * Shipping service details, present for shipment choices. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "shipment"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Key identifying the same items and allowed delivery types across quotes. anyOf[1] (Value):
     * string. Key identifying the same items and allowed delivery types across quotes. anyOf[2]
     * (Value): null.
     */
    "stable_key"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * IANA timezone for displaying window_start_at and window_end_at. anyOf[1] (Value): string.
     * IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     * anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Delivery price after discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery".
     * anyOf[1] (Value): string. How this choice delivers the items. Value enum: "shipment",
     * "pickup", "local_delivery". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "pickup" | "local_delivery" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
export type DeliverySelectionCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            "calculation_expires_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "delivery_quote_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            "expires_at"?: ((string) | (null));
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            "instructions"?: ((string) | (null));
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            "lifecycle_updated_at"?: ((string) | (null));
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            "order_id"?: ((string) | (null));
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            "redacted_at"?: ((string) | (null));
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_selection.committed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            "calculation_expires_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "delivery_quote_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            "expires_at"?: ((string) | (null));
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            "instructions"?: ((string) | (null));
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            "lifecycle_updated_at"?: ((string) | (null));
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            "order_id"?: ((string) | (null));
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            "redacted_at"?: ((string) | (null));
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_selection.committed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_selection.committed";
});
/**
 * The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliverySelectionCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.amount_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Delivery charge committed by this
     * selection. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_location (Optional): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential.
     * previous_attributes.buyer_location.anyOf[1] (Value): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes}.
     * previous_attributes.buyer_location.anyOf[2] (Value): null.
     * previous_attributes.calculation_expires_at (Optional): string or null. Deadline after which
     * calculated pricing evidence is no longer valid. Always present with an API key or dashboard
     * credential. previous_attributes.calculation_expires_at.anyOf[1] (Value): string. Deadline
     * after which calculated pricing evidence is no longer valid. Always present with an API key
     * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.calculation_expires_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. Checkout session that
     * owns the selection. Always present with an API key or dashboard credential.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. Checkout session that owns
     * the selection. Always present with an API key or dashboard credential. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.choices (Optional): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes} or null. One chosen option for each
     * required choice group. previous_attributes.choices.anyOf[1] (Value): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each required
     * choice group. previous_attributes.choices.anyOf[1][] (Value): {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. previous_attributes.choices.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the selection
     * was created. Always present with an API key or dashboard credential.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the selection was created.
     * Always present with an API key or dashboard credential. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.delivery_quote_id (Optional): string or null. Quote from which this
     * selection was made. previous_attributes.delivery_quote_id.anyOf[1] (Value): string. Quote
     * from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * previous_attributes.delivery_quote_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Stable delivery
     * selection ID. previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Stable
     * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.destination_address (Optional): {@link AddressPreviousAttributes} or
     * null. Destination address snapshot used for delivery evaluation. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     * previous_attributes.destination_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.destination_address.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. Deadline after which this
     * provisional selection can no longer be committed. previous_attributes.expires_at.anyOf[1]
     * (Value): string. Deadline after which this provisional selection can no longer be committed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2]
     * (Value): null. previous_attributes.input_requirements (Optional): Array of {@link
     * DeliveryInputRequirementPreviousAttributes} or null. Inputs this selection still needs
     * before payment: each destination_address member a chosen shipment or local delivery needs
     * that the stored address lacks (line1, city, and country, plus state and postal_code in the
     * US), and each recipient field a chosen option requires that the selection does not include.
     * Each entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1] (Value): Array of {@link
     * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
     * payment: each destination_address member a chosen shipment or local delivery needs that the
     * stored address lacks (line1, city, and country, plus state and postal_code in the US), and
     * each recipient field a chosen option requires that the selection does not include. Each
     * entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1][] (Value): {@link
     * DeliveryInputRequirementPreviousAttributes}. previous_attributes.input_requirements.anyOf[2]
     * (Value): null. previous_attributes.instructions (Optional): string or null. Buyer-provided
     * delivery instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[1] (Value): string. Buyer-provided delivery
     * instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1] (Value): Array of
     * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1][] (Value): {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes}.
     * previous_attributes.lifecycle_events.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_updated_at (Optional): string or null. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential.
     * previous_attributes.lifecycle_updated_at.anyOf[1] (Value): string. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.lifecycle_updated_at.anyOf[2] (Value): null.
     * previous_attributes.limiting_deadline_reason (Optional): string or null. The deadline that
     * set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and
     * the maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set
     * expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the
     * maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order affected by the selection.
     * Always present with an API key or dashboard credential.
     * previous_attributes.order_id.anyOf[1] (Value): string. Order affected by the selection.
     * Always present with an API key or dashboard credential. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.private_data_status (Optional): string or null. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[1] (Value): string. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[2] (Value): null.
     * previous_attributes.recipient (Optional): {@link
     * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with the
     * selection. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. previous_attributes.recipient.anyOf[1] (Value): {@link
     * DeliveryRecipientResourcePreviousAttributes}. previous_attributes.recipient.anyOf[2]
     * (Value): null. previous_attributes.redacted_at (Optional): string or null. Time
     * merchant-private selection evidence was redacted. previous_attributes.redacted_at.anyOf[1]
     * (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.redacted_at.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current selection lifecycle status. -
     * `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". previous_attributes.status.anyOf[1] (Value): string.
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains release while status is selected and the
     * selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains release
     * while status is selected and the selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Delivery charge committed by this selection.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. buyer_location (Optional): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used
         * to evaluate pickup proximity. Returned with an API key or dashboard credential.
         * buyer_location.anyOf[1] (Value): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes}. buyer_location.anyOf[2] (Value): null.
         * calculation_expires_at (Optional): string or null. Deadline after which calculated
         * pricing evidence is no longer valid. Always present with an API key or dashboard
         * credential. calculation_expires_at.anyOf[1] (Value): string. Deadline after which
         * calculated pricing evidence is no longer valid. Always present with an API key or
         * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * calculation_expires_at.anyOf[2] (Value): null. checkout_session_id (Optional): string or
         * null. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. checkout_session_id.anyOf[1] (Value): string. Checkout session
         * that owns the selection. Always present with an API key or dashboard credential.
         * Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * choices (Optional): Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}
         * or null. One chosen option for each required choice group. choices.anyOf[1] (Value):
         * Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option
         * for each required choice group. choices.anyOf[1][] (Value): {@link
         * DeliverySelectionChoiceResourcePreviousAttributes}. choices.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the selection was created. Always present
         * with an API key or dashboard credential. created_at.anyOf[1] (Value): string. Time the
         * selection was created. Always present with an API key or dashboard credential. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * delivery_quote_id (Optional): string or null. Quote from which this selection was made.
         * delivery_quote_id.anyOf[1] (Value): string. Quote from which this selection was made.
         * Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_quote_id.anyOf[2] (Value): null.
         * delivery_selection_id (Optional): string or null. Stable delivery selection ID.
         * delivery_selection_id.anyOf[1] (Value): string. Stable delivery selection ID. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value): null.
         * destination_address (Optional): {@link AddressPreviousAttributes} or null. Destination
         * address snapshot used for delivery evaluation. Omitted for a checkout session credential
         * that doesn't act for the customer the buyer verified. destination_address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. destination_address.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. Deadline after which this provisional selection
         * can no longer be committed. expires_at.anyOf[1] (Value): string. Deadline after which
         * this provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. input_requirements
         * (Optional): Array of {@link DeliveryInputRequirementPreviousAttributes} or null. Inputs
         * this selection still needs before payment: each destination_address member a chosen
         * shipment or local delivery needs that the stored address lacks (line1, city, and
         * country, plus state and postal_code in the US), and each recipient field a chosen option
         * requires that the selection does not include. Each entry repeats the quote's requirement
         * for that option, with the same delivery_input_requirement_id. Payment fails with
         * ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference
         * until a new delivery selection includes them. Empty when nothing is missing, and always
         * empty unless status is selected. input_requirements.anyOf[1] (Value): Array of {@link
         * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
         * payment: each destination_address member a chosen shipment or local delivery needs that
         * the stored address lacks (line1, city, and country, plus state and postal_code in the
         * US), and each recipient field a chosen option requires that the selection does not
         * include. Each entry repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements.anyOf[1][] (Value): {@link
         * DeliveryInputRequirementPreviousAttributes}. input_requirements.anyOf[2] (Value): null.
         * instructions (Optional): string or null. Buyer-provided delivery instructions. Returned
         * with an API key or dashboard credential. instructions.anyOf[1] (Value): string.
         * Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
         * instructions.anyOf[2] (Value): null. lifecycle_events (Optional): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle
         * events recorded for this selection. lifecycle_events.anyOf[1] (Value): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
         * recorded for this selection. lifecycle_events.anyOf[1][] (Value): {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. lifecycle_events.anyOf[2]
         * (Value): null. lifecycle_updated_at (Optional): string or null. Time the selection
         * lifecycle last changed. Always present with an API key or dashboard credential.
         * lifecycle_updated_at.anyOf[1] (Value): string. Time the selection lifecycle last
         * changed. Always present with an API key or dashboard credential. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". lifecycle_updated_at.anyOf[2] (Value): null.
         * limiting_deadline_reason (Optional): string or null. The deadline that set expires_at:
         * the earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Order affected by the selection. Always present with an API key or dashboard credential.
         * order_id.anyOf[1] (Value): string. Order affected by the selection. Always present with
         * an API key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. private_data_status (Optional): string or null.
         * Availability state of merchant-private selection evidence. Value enum: "available",
         * "redacted". private_data_status.anyOf[1] (Value): string. Availability state of
         * merchant-private selection evidence. Value enum: "available", "redacted".
         * private_data_status.anyOf[2] (Value): null. recipient (Optional): {@link
         * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with
         * the selection. Omitted for a checkout session credential that doesn't act for the
         * customer the buyer verified. recipient.anyOf[1] (Value): {@link
         * DeliveryRecipientResourcePreviousAttributes}. recipient.anyOf[2] (Value): null.
         * redacted_at (Optional): string or null. Time merchant-private selection evidence was
         * redacted. redacted_at.anyOf[1] (Value): string. Time merchant-private selection evidence
         * was redacted. Format: date-time. Example: "2026-08-02T16:00:00Z". redacted_at.anyOf[2]
         * (Value): null. status (Optional): string or null. Current selection lifecycle status. -
         * `selected`: These choices are provisional and can be replaced before payment. -
         * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
         * payment finishes. - `committed`: Payment fixed these choices on the order. -
         * `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
         * longer usable because its deadline passed. - `released`: These choices were withdrawn.
         * Create a new selection before paying for delivery. Value enum: "selected",
         * "locked_for_payment", "committed", "superseded", "expired", "released". status.anyOf[1]
         * (Value): string. Current selection lifecycle status. - `selected`: These choices are
         * provisional and can be replaced before payment. - `locked_for_payment`: A payment
         * attempt owns these choices. They are frozen until payment finishes. - `committed`:
         * Payment fixed these choices on the order. - `superseded`: A newer selection replaced
         * these choices. - `expired`: The selection is no longer usable because its deadline
         * passed. - `released`: These choices were withdrawn. Create a new selection before paying
         * for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
         * "expired", "released". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Contains release while status is selected and the selection
         * belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Contains release while status is
         * selected and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "release".
         * supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Delivery charge committed by this selection. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. anyOf[1] (Value): {@link
             * DeliveryBuyerLocationResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. anyOf[1] (Value): string. Deadline after
             * which calculated pricing evidence is no longer valid. Always present with an API key
             * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "calculation_expires_at"?: ((string) | (null));
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Checkout session that owns the
             * selection. Always present with an API key or dashboard credential. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * One chosen option for each required choice group. anyOf[1] (Value): Array of {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each
             * required choice group. anyOf[1][] (Value): {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Time the selection was created. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Quote from which this selection was made. anyOf[1] (Value): string. Quote from which
             * this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". anyOf[2]
             * (Value): null.
             */
            "delivery_quote_id"?: ((string) | (null));
            /**
             * Stable delivery selection ID. anyOf[1] (Value): string. Stable delivery selection
             * ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * Deadline after which this provisional selection can no longer be committed. anyOf[1]
             * (Value): string. Deadline after which this provisional selection can no longer be
             * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1]
             * (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs this
             * selection still needs before payment: each destination_address member a chosen
             * shipment or local delivery needs that the stored address lacks (line1, city, and
             * country, plus state and postal_code in the US), and each recipient field a chosen
             * option requires that the selection does not include. Each entry repeats the quote's
             * requirement for that option, with the same delivery_input_requirement_id. Payment
             * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1][]
             * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential. anyOf[1] (Value): string. Buyer-provided delivery instructions. Returned
             * with an API key or dashboard credential. anyOf[2] (Value): null.
             */
            "instructions"?: ((string) | (null));
            /**
             * Ordered lifecycle events recorded for this selection. anyOf[1] (Value): Array of
             * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle
             * events recorded for this selection. anyOf[1][] (Value): {@link
             * DeliverySelectionLifecycleEventResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Time the selection lifecycle last
             * changed. Always present with an API key or dashboard credential. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "lifecycle_updated_at"?: ((string) | (null));
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             * anyOf[1] (Value): string. The deadline that set expires_at: the earliest of the
             * chosen options' guarantee, the calculation expiry, and the maximum selection
             * lifetime. A tie between the calculation and the guarantee reports
             * calculation_expiry. Always present with an API key or dashboard credential. -
             * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
             * delivery windows comes first. When the selection holds stock, the hold ends at this
             * deadline too. - `calculation_expiry`: The calculation the selection was priced
             * against expires first. It ends no later than the checkout session's expires_at, and
             * earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The
             * selection reaches the longest a provisional selection can last, 24 hours after it
             * was created. Value enum: "selection_guarantee_expiry", "calculation_expiry",
             * "selection_maximum_lifetime". anyOf[2] (Value): null.
             */
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Order affected by the selection. Always
             * present with an API key or dashboard credential. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted". anyOf[1] (Value): string. Availability state of merchant-private
             * selection evidence. Value enum: "available", "redacted". anyOf[2] (Value): null.
             */
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value):
             * {@link DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            /**
             * Time merchant-private selection evidence was redacted. anyOf[1] (Value): string.
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "redacted_at"?: ((string) | (null));
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released". anyOf[1] (Value): string. Current selection lifecycle status.
             * - `selected`: These choices are provisional and can be replaced before payment. -
             * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
             * payment finishes. - `committed`: Payment fixed these choices on the order. -
             * `superseded`: A newer selection replaced these choices. - `expired`: The selection
             * is no longer usable because its deadline passed. - `released`: These choices were
             * withdrawn. Create a new selection before paying for delivery. Value enum:
             * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
             * anyOf[2] (Value): null.
             */
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". anyOf[1] (Value): Array of string. Contains release while status is
             * selected and the selection belongs to a checkout session: POST
             * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
             * Empty in every other status. Independent of caller permissions. [] enum: "release".
             * anyOf[1][] (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
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
 * The `delivery_selection.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliverySelectionCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.amount_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Delivery charge committed by this
     * selection. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_location (Optional): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential.
     * previous_attributes.buyer_location.anyOf[1] (Value): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes}.
     * previous_attributes.buyer_location.anyOf[2] (Value): null.
     * previous_attributes.calculation_expires_at (Optional): string or null. Deadline after which
     * calculated pricing evidence is no longer valid. Always present with an API key or dashboard
     * credential. previous_attributes.calculation_expires_at.anyOf[1] (Value): string. Deadline
     * after which calculated pricing evidence is no longer valid. Always present with an API key
     * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.calculation_expires_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. Checkout session that
     * owns the selection. Always present with an API key or dashboard credential.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. Checkout session that owns
     * the selection. Always present with an API key or dashboard credential. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.choices (Optional): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes} or null. One chosen option for each
     * required choice group. previous_attributes.choices.anyOf[1] (Value): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each required
     * choice group. previous_attributes.choices.anyOf[1][] (Value): {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. previous_attributes.choices.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the selection
     * was created. Always present with an API key or dashboard credential.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the selection was created.
     * Always present with an API key or dashboard credential. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.delivery_quote_id (Optional): string or null. Quote from which this
     * selection was made. previous_attributes.delivery_quote_id.anyOf[1] (Value): string. Quote
     * from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * previous_attributes.delivery_quote_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Stable delivery
     * selection ID. previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Stable
     * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.destination_address (Optional): {@link AddressPreviousAttributes} or
     * null. Destination address snapshot used for delivery evaluation. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     * previous_attributes.destination_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.destination_address.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. Deadline after which this
     * provisional selection can no longer be committed. previous_attributes.expires_at.anyOf[1]
     * (Value): string. Deadline after which this provisional selection can no longer be committed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2]
     * (Value): null. previous_attributes.input_requirements (Optional): Array of {@link
     * DeliveryInputRequirementPreviousAttributes} or null. Inputs this selection still needs
     * before payment: each destination_address member a chosen shipment or local delivery needs
     * that the stored address lacks (line1, city, and country, plus state and postal_code in the
     * US), and each recipient field a chosen option requires that the selection does not include.
     * Each entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1] (Value): Array of {@link
     * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
     * payment: each destination_address member a chosen shipment or local delivery needs that the
     * stored address lacks (line1, city, and country, plus state and postal_code in the US), and
     * each recipient field a chosen option requires that the selection does not include. Each
     * entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1][] (Value): {@link
     * DeliveryInputRequirementPreviousAttributes}. previous_attributes.input_requirements.anyOf[2]
     * (Value): null. previous_attributes.instructions (Optional): string or null. Buyer-provided
     * delivery instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[1] (Value): string. Buyer-provided delivery
     * instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1] (Value): Array of
     * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1][] (Value): {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes}.
     * previous_attributes.lifecycle_events.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_updated_at (Optional): string or null. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential.
     * previous_attributes.lifecycle_updated_at.anyOf[1] (Value): string. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.lifecycle_updated_at.anyOf[2] (Value): null.
     * previous_attributes.limiting_deadline_reason (Optional): string or null. The deadline that
     * set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and
     * the maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set
     * expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the
     * maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order affected by the selection.
     * Always present with an API key or dashboard credential.
     * previous_attributes.order_id.anyOf[1] (Value): string. Order affected by the selection.
     * Always present with an API key or dashboard credential. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.private_data_status (Optional): string or null. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[1] (Value): string. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[2] (Value): null.
     * previous_attributes.recipient (Optional): {@link
     * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with the
     * selection. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. previous_attributes.recipient.anyOf[1] (Value): {@link
     * DeliveryRecipientResourcePreviousAttributes}. previous_attributes.recipient.anyOf[2]
     * (Value): null. previous_attributes.redacted_at (Optional): string or null. Time
     * merchant-private selection evidence was redacted. previous_attributes.redacted_at.anyOf[1]
     * (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.redacted_at.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current selection lifecycle status. -
     * `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". previous_attributes.status.anyOf[1] (Value): string.
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains release while status is selected and the
     * selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains release
     * while status is selected and the selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Delivery charge committed by this selection.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. buyer_location (Optional): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used
         * to evaluate pickup proximity. Returned with an API key or dashboard credential.
         * buyer_location.anyOf[1] (Value): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes}. buyer_location.anyOf[2] (Value): null.
         * calculation_expires_at (Optional): string or null. Deadline after which calculated
         * pricing evidence is no longer valid. Always present with an API key or dashboard
         * credential. calculation_expires_at.anyOf[1] (Value): string. Deadline after which
         * calculated pricing evidence is no longer valid. Always present with an API key or
         * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * calculation_expires_at.anyOf[2] (Value): null. checkout_session_id (Optional): string or
         * null. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. checkout_session_id.anyOf[1] (Value): string. Checkout session
         * that owns the selection. Always present with an API key or dashboard credential.
         * Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * choices (Optional): Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}
         * or null. One chosen option for each required choice group. choices.anyOf[1] (Value):
         * Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option
         * for each required choice group. choices.anyOf[1][] (Value): {@link
         * DeliverySelectionChoiceResourcePreviousAttributes}. choices.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the selection was created. Always present
         * with an API key or dashboard credential. created_at.anyOf[1] (Value): string. Time the
         * selection was created. Always present with an API key or dashboard credential. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * delivery_quote_id (Optional): string or null. Quote from which this selection was made.
         * delivery_quote_id.anyOf[1] (Value): string. Quote from which this selection was made.
         * Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_quote_id.anyOf[2] (Value): null.
         * delivery_selection_id (Optional): string or null. Stable delivery selection ID.
         * delivery_selection_id.anyOf[1] (Value): string. Stable delivery selection ID. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value): null.
         * destination_address (Optional): {@link AddressPreviousAttributes} or null. Destination
         * address snapshot used for delivery evaluation. Omitted for a checkout session credential
         * that doesn't act for the customer the buyer verified. destination_address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. destination_address.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. Deadline after which this provisional selection
         * can no longer be committed. expires_at.anyOf[1] (Value): string. Deadline after which
         * this provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. input_requirements
         * (Optional): Array of {@link DeliveryInputRequirementPreviousAttributes} or null. Inputs
         * this selection still needs before payment: each destination_address member a chosen
         * shipment or local delivery needs that the stored address lacks (line1, city, and
         * country, plus state and postal_code in the US), and each recipient field a chosen option
         * requires that the selection does not include. Each entry repeats the quote's requirement
         * for that option, with the same delivery_input_requirement_id. Payment fails with
         * ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference
         * until a new delivery selection includes them. Empty when nothing is missing, and always
         * empty unless status is selected. input_requirements.anyOf[1] (Value): Array of {@link
         * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
         * payment: each destination_address member a chosen shipment or local delivery needs that
         * the stored address lacks (line1, city, and country, plus state and postal_code in the
         * US), and each recipient field a chosen option requires that the selection does not
         * include. Each entry repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements.anyOf[1][] (Value): {@link
         * DeliveryInputRequirementPreviousAttributes}. input_requirements.anyOf[2] (Value): null.
         * instructions (Optional): string or null. Buyer-provided delivery instructions. Returned
         * with an API key or dashboard credential. instructions.anyOf[1] (Value): string.
         * Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
         * instructions.anyOf[2] (Value): null. lifecycle_events (Optional): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle
         * events recorded for this selection. lifecycle_events.anyOf[1] (Value): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
         * recorded for this selection. lifecycle_events.anyOf[1][] (Value): {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. lifecycle_events.anyOf[2]
         * (Value): null. lifecycle_updated_at (Optional): string or null. Time the selection
         * lifecycle last changed. Always present with an API key or dashboard credential.
         * lifecycle_updated_at.anyOf[1] (Value): string. Time the selection lifecycle last
         * changed. Always present with an API key or dashboard credential. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". lifecycle_updated_at.anyOf[2] (Value): null.
         * limiting_deadline_reason (Optional): string or null. The deadline that set expires_at:
         * the earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Order affected by the selection. Always present with an API key or dashboard credential.
         * order_id.anyOf[1] (Value): string. Order affected by the selection. Always present with
         * an API key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. private_data_status (Optional): string or null.
         * Availability state of merchant-private selection evidence. Value enum: "available",
         * "redacted". private_data_status.anyOf[1] (Value): string. Availability state of
         * merchant-private selection evidence. Value enum: "available", "redacted".
         * private_data_status.anyOf[2] (Value): null. recipient (Optional): {@link
         * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with
         * the selection. Omitted for a checkout session credential that doesn't act for the
         * customer the buyer verified. recipient.anyOf[1] (Value): {@link
         * DeliveryRecipientResourcePreviousAttributes}. recipient.anyOf[2] (Value): null.
         * redacted_at (Optional): string or null. Time merchant-private selection evidence was
         * redacted. redacted_at.anyOf[1] (Value): string. Time merchant-private selection evidence
         * was redacted. Format: date-time. Example: "2026-08-02T16:00:00Z". redacted_at.anyOf[2]
         * (Value): null. status (Optional): string or null. Current selection lifecycle status. -
         * `selected`: These choices are provisional and can be replaced before payment. -
         * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
         * payment finishes. - `committed`: Payment fixed these choices on the order. -
         * `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
         * longer usable because its deadline passed. - `released`: These choices were withdrawn.
         * Create a new selection before paying for delivery. Value enum: "selected",
         * "locked_for_payment", "committed", "superseded", "expired", "released". status.anyOf[1]
         * (Value): string. Current selection lifecycle status. - `selected`: These choices are
         * provisional and can be replaced before payment. - `locked_for_payment`: A payment
         * attempt owns these choices. They are frozen until payment finishes. - `committed`:
         * Payment fixed these choices on the order. - `superseded`: A newer selection replaced
         * these choices. - `expired`: The selection is no longer usable because its deadline
         * passed. - `released`: These choices were withdrawn. Create a new selection before paying
         * for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
         * "expired", "released". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Contains release while status is selected and the selection
         * belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Contains release while status is
         * selected and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "release".
         * supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Delivery charge committed by this selection. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. anyOf[1] (Value): {@link
             * DeliveryBuyerLocationResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. anyOf[1] (Value): string. Deadline after
             * which calculated pricing evidence is no longer valid. Always present with an API key
             * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "calculation_expires_at"?: ((string) | (null));
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Checkout session that owns the
             * selection. Always present with an API key or dashboard credential. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * One chosen option for each required choice group. anyOf[1] (Value): Array of {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each
             * required choice group. anyOf[1][] (Value): {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Time the selection was created. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Quote from which this selection was made. anyOf[1] (Value): string. Quote from which
             * this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". anyOf[2]
             * (Value): null.
             */
            "delivery_quote_id"?: ((string) | (null));
            /**
             * Stable delivery selection ID. anyOf[1] (Value): string. Stable delivery selection
             * ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * Deadline after which this provisional selection can no longer be committed. anyOf[1]
             * (Value): string. Deadline after which this provisional selection can no longer be
             * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1]
             * (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs this
             * selection still needs before payment: each destination_address member a chosen
             * shipment or local delivery needs that the stored address lacks (line1, city, and
             * country, plus state and postal_code in the US), and each recipient field a chosen
             * option requires that the selection does not include. Each entry repeats the quote's
             * requirement for that option, with the same delivery_input_requirement_id. Payment
             * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1][]
             * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential. anyOf[1] (Value): string. Buyer-provided delivery instructions. Returned
             * with an API key or dashboard credential. anyOf[2] (Value): null.
             */
            "instructions"?: ((string) | (null));
            /**
             * Ordered lifecycle events recorded for this selection. anyOf[1] (Value): Array of
             * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle
             * events recorded for this selection. anyOf[1][] (Value): {@link
             * DeliverySelectionLifecycleEventResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Time the selection lifecycle last
             * changed. Always present with an API key or dashboard credential. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "lifecycle_updated_at"?: ((string) | (null));
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             * anyOf[1] (Value): string. The deadline that set expires_at: the earliest of the
             * chosen options' guarantee, the calculation expiry, and the maximum selection
             * lifetime. A tie between the calculation and the guarantee reports
             * calculation_expiry. Always present with an API key or dashboard credential. -
             * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
             * delivery windows comes first. When the selection holds stock, the hold ends at this
             * deadline too. - `calculation_expiry`: The calculation the selection was priced
             * against expires first. It ends no later than the checkout session's expires_at, and
             * earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The
             * selection reaches the longest a provisional selection can last, 24 hours after it
             * was created. Value enum: "selection_guarantee_expiry", "calculation_expiry",
             * "selection_maximum_lifetime". anyOf[2] (Value): null.
             */
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Order affected by the selection. Always
             * present with an API key or dashboard credential. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted". anyOf[1] (Value): string. Availability state of merchant-private
             * selection evidence. Value enum: "available", "redacted". anyOf[2] (Value): null.
             */
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value):
             * {@link DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            /**
             * Time merchant-private selection evidence was redacted. anyOf[1] (Value): string.
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "redacted_at"?: ((string) | (null));
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released". anyOf[1] (Value): string. Current selection lifecycle status.
             * - `selected`: These choices are provisional and can be replaced before payment. -
             * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
             * payment finishes. - `committed`: Payment fixed these choices on the order. -
             * `superseded`: A newer selection replaced these choices. - `expired`: The selection
             * is no longer usable because its deadline passed. - `released`: These choices were
             * withdrawn. Create a new selection before paying for delivery. Value enum:
             * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
             * anyOf[2] (Value): null.
             */
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". anyOf[1] (Value): Array of string. Contains release while status is
             * selected and the selection belongs to a checkout session: POST
             * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
             * Empty in every other status. Independent of caller permissions. [] enum: "release".
             * anyOf[1][] (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
});
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequest = {
    /**
     * ID from the option's offered_windows. Required when window_selection is offered; omit it
     * otherwise. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength:
     * 2000.
     */
    "instructions"?: string;
};
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequestInput = DeliverySelectionInstructionsRequest;
export type DeliverySelectionInstructionsRequestPreviousAttributes = {
    /**
     * ID from the option's offered_windows. Required when window_selection is offered; omit it
     * otherwise. anyOf[1] (Value): string. ID from the option's offered_windows. Required when
     * window_selection is offered; omit it otherwise. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2] (Value):
     * null.
     */
    "delivery_window_id"?: ((string) | (null));
    /**
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string.
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength:
     * 2000. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
};
/**
 * A status change in a delivery selection's history, with the new `status`, the `reason`, and when
 * it happened.
 */
export type DeliverySelectionLifecycleEventResource = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the selection whose status changed. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
    "delivery_selection_id": string;
    /** ID of this recorded selection status change. Example: "dsle_01KEZF7C00FR4QPRPMM4T248FD". */
    "delivery_selection_lifecycle_event_id": string;
    /**
     * What caused this selection status change. Value enum: "replacement_selected",
     * "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled",
     * "payment_failed_selection_expired", "calculation_expired", "selection_expired",
     * "selection_not_current", "dependency_revoked", "buyer_cleared",
     * "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated",
     * "quote_basis_changed", "calculation_changed".
     */
    "reason": "replacement_selected"
        | "buyer_selected"
        | "payment_started"
        | "payment_failed_selection_restored"
        | "payment_settled"
        | "payment_failed_selection_expired"
        | "calculation_expired"
        | "selection_expired"
        | "selection_not_current"
        | "dependency_revoked"
        | "buyer_cleared"
        | "eligibility_context_refreshed"
        | "checkout_replaced"
        | "checkout_terminal"
        | "order_mutated"
        | "quote_basis_changed"
        | "calculation_changed"
        | (string & {});
    /**
     * Selection status after this change. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
};
export type DeliverySelectionLifecycleEventResourcePreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * ID of the selection whose status changed. anyOf[1] (Value): string. ID of the selection
     * whose status changed. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     */
    "delivery_selection_id"?: ((string) | (null));
    /**
     * ID of this recorded selection status change. anyOf[1] (Value): string. ID of this recorded
     * selection status change. Example: "dsle_01KEZF7C00FR4QPRPMM4T248FD". anyOf[2] (Value): null.
     */
    "delivery_selection_lifecycle_event_id"?: ((string) | (null));
    /**
     * What caused this selection status change. Value enum: "replacement_selected",
     * "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled",
     * "payment_failed_selection_expired", "calculation_expired", "selection_expired",
     * "selection_not_current", "dependency_revoked", "buyer_cleared",
     * "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated",
     * "quote_basis_changed", "calculation_changed". anyOf[1] (Value): string. What caused this
     * selection status change. Value enum: "replacement_selected", "buyer_selected",
     * "payment_started", "payment_failed_selection_restored", "payment_settled",
     * "payment_failed_selection_expired", "calculation_expired", "selection_expired",
     * "selection_not_current", "dependency_revoked", "buyer_cleared",
     * "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated",
     * "quote_basis_changed", "calculation_changed". anyOf[2] (Value): null.
     */
    "reason"?: (("replacement_selected"
        | "buyer_selected"
        | "payment_started"
        | "payment_failed_selection_restored"
        | "payment_settled"
        | "payment_failed_selection_expired"
        | "calculation_expired"
        | "selection_expired"
        | "selection_not_current"
        | "dependency_revoked"
        | "buyer_cleared"
        | "eligibility_context_refreshed"
        | "checkout_replaced"
        | "checkout_terminal"
        | "order_mutated"
        | "quote_basis_changed"
        | "calculation_changed"
        | (string & {}))
        | (null));
    /**
     * Selection status after this change. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1] (Value):
     * string. Selection status after this change. - `selected`: These choices are provisional and
     * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
     * choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices
     * on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
     * selection is no longer usable because its deadline passed. - `released`: These choices were
     * withdrawn. Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value):
     * null.
     */
    "status"?: (("selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {}))
        | (null));
};
/** A page of `DeliverySelection` objects. */
export type DeliverySelectionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliverySelection}. The delivery choice selected for a checkout or order. Poll GET
     * /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its
     * current status.
     */
    "data": Array<DeliverySelection>;
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
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequest = {
    /**
     * Recipient email address. Limited to 254 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. When the selected delivery option requires it, payment
     * needs it: send it with this selection or a later one. Send null to clear it. The local part
     * before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength:
     * 254. Example: "buyer@example.com".
     */
    "email"?: string | null;
    /**
     * Recipient name. Limited to 200 characters (Unicode code points), counted before surrounding
     * whitespace is trimmed. When the selected delivery option requires it, payment needs it: send
     * it with this selection or a later one. Send null to clear it. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 200.
     */
    "name"?: string | null;
    /**
     * Recipient phone number. After surrounding whitespace is trimmed, use + followed by 7 through
     * 15 ASCII digits, with a nonzero first digit. Limited to 16 characters (Unicode code points),
     * counted before trimming. When the selected delivery option requires it, payment needs it:
     * send it with this selection or a later one. Send null to clear it. minLength: 1. maxLength:
     * 16.
     */
    "phone"?: string | null;
};
/**
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequestInput = DeliverySelectionRecipientRequest;
/** A response containing `DeliverySelection` data. */
export type DeliverySelectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The delivery choice
     * selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id}
     * or list delivery selections to read its current status.
     */
    "data": DeliverySelection;
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
 * Result of a checkout delivery selection request, returning the checkout session, order, delivery
 * selection, and any inventory reservation summary.
 */
export type DeliverySelectionResult = {
    /**
     * The checkout session after the selection. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /**
     * The selection now on the checkout. The delivery choice selected for a checkout or order.
     * Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read
     * its current status.
     */
    "delivery_selection": DeliverySelection;
    /**
     * The stock held for this selection. Omitted when the order holds no stock reservation, and
     * for checkout credentials. The inventory reservation held for a delivery selection: its
     * owner, status, and expiry.
     */
    "inventory_reservation"?: DeliveryInventoryReservationSummary;
    /**
     * The order after the selection, with delivery charges applied and tax recalculated. Render
     * totals from it instead of reading the order again. When tax still needs input,
     * order.tax.status says so. The complete order returned with a delivery selection.
     * Credential-specific fields are omitted as annotated.
     */
    "order": Order;
};
/** A response containing `DeliverySelectionResult` data. */
export type DeliverySelectionResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of a checkout
     * delivery selection request, returning the checkout session, order, delivery selection, and
     * any inventory reservation summary.
     */
    "data": DeliverySelectionResult;
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
export type DeliverySelectionsCreateParams = (InputValue<CreateDeliverySelectionRequestInput>)
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
export type DeliverySelectionsGetParams = DisputesAcceptParams;
export type DeliverySelectionsListParams = {
    /**
     * List this checkout session's selections. Send this or order_id. Required with a checkout
     * credential, and must be the credential's own checkout session. pattern:
     * ^cs_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: InputValue<string>;
    /**
     * List this order's selections. Send this or checkout_session_id. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by current lifecycle status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "selected", "locked_for_payment", "committed", "superseded", "expired",
     * "released". Value enum: "selected", "locked_for_payment", "committed", "superseded",
     * "expired", "released". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1][] (Value):
     * string. Current selection lifecycle status. - `selected`: These choices are provisional and
     * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
     * choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices
     * on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
     * selection is no longer usable because its deadline passed. - `released`: These choices were
     * withdrawn. Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value):
     * string. Current selection lifecycle status. - `selected`: These choices are provisional and
     * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
     * choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices
     * on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
     * selection is no longer usable because its deadline passed. - `released`: These choices were
     * withdrawn. Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status"?: InputValue<("selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released")
        | readonly ("selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released")[]>;
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
export type DeliverySelectionsReleaseParams = DisputesAcceptParams;
/**
 * Shipment-specific details of a delivery option or choice: the `service_level` and buyer
 * `instructions`.
 */
export type DeliveryShipmentDetails = {
    /** Buyer-facing instructions for this delivery service. */
    "instructions"?: string;
    /** Merchant's service-level label. Flint does not enforce the timing implied by the label. */
    "service_level"?: string;
};
export type DeliveryShipmentDetailsPreviousAttributes = {
    /**
     * Buyer-facing instructions for this delivery service. anyOf[1] (Value): string. Buyer-facing
     * instructions for this delivery service. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * Merchant's service-level label. Flint does not enforce the timing implied by the label.
     * anyOf[1] (Value): string. Merchant's service-level label. Flint does not enforce the timing
     * implied by the label. anyOf[2] (Value): null.
     */
    "service_level"?: ((string) | (null));
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateCondition = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
export type DeliveryStateConditionPreviousAttributes = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Value enum:
     * "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by
     * this condition. destination_address is the shipping destination. buyer_location is the
     * buyer's current pickup or local-delivery location. Default: "destination_address". Value
     * enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "subject"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). anyOf[1] (Value): Array of
     * string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian
     * province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or
     * CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and
     * US-AP. An address matches when its state names one of these subdivisions of its country,
     * whether it was sent as NY, US-NY, or New York. If the address country is listed by the
     * condition but state names no subdivision of that country, the condition cannot be decided:
     * the method or rate is left out as cannot_calculate (invalid_buyer_input). anyOf[1][]
     * (Value): string. minLength: 1. anyOf[2] (Value): null.
     */
    "values"?: ((Array<string>) | (null));
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateConditionRequestInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
/**
 * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
 * selects a band, and `unit` applies to weight bases.
 */
export type DeliveryTieredPricingStrategy = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ((Exclude<DeliveryTieredPricingStrategyWeight & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoney & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The `caller.tier_key` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategyInput`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant
 * of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputQuantityOrMoneyInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & (({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
})
    & ({
    "unit"?: never;
}));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`. */
export type DeliveryTieredPricingStrategyInputWeightInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis"?: "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
});
export type DeliveryTieredPricingStrategyPreviousAttributes = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. anyOf[1]
     * (Value): Array of {@link DeliveryPricingTierBandPreviousAttributes}. One to 25 contiguous
     * bands in ascending order. The final band has no upper bound. minItems: 1. maxItems: 25.
     * anyOf[1][] (Value): {@link DeliveryPricingTierBandPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "bands"?: ((Array<DeliveryPricingTierBandPreviousAttributes>) | (null));
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[1] (Value):
     * string. Value matched against the numeric tier bands. Money subtotal bases use minor
     * currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the
     * checkout delivery quote. Value enum: "choice_group.total_weight",
     * "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[2] (Value):
     * null.
     */
    "basis"?: (("choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {}))
        | (null));
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Required only for
     * choice_group.total_weight and forbidden for every other basis. Value enum: "gram",
     * "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     */
    "unit"?: (("gram" | "kilogram" | "ounce" | "pound" | (string & {})) | (null));
})
    & (((Exclude<DeliveryTieredPricingStrategyWeightPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/**
 * The `caller.tier_key` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategy`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of
 * `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyQuantityOrMoney = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & (({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
}));
export type DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributes = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. anyOf[1]
     * (Value): Array of {@link DeliveryPricingTierBandPreviousAttributes}. One to 25 contiguous
     * bands in ascending order. The final band has no upper bound. minItems: 1. maxItems: 25.
     * anyOf[1][] (Value): {@link DeliveryPricingTierBandPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "bands"?: ((Array<DeliveryPricingTierBandPreviousAttributes>) | (null));
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[1] (Value):
     * string. Value matched against the numeric tier bands. Money subtotal bases use minor
     * currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the
     * checkout delivery quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[2] (Value):
     * null.
     */
    "basis"?: (("choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {}))
        | (null));
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Required only for
     * choice_group.total_weight and forbidden for every other basis. Value enum: "gram",
     * "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     */
    "unit"?: (("gram" | "kilogram" | "ounce" | "pound" | (string & {})) | (null));
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[1] (Value):
     * string. Value matched against the numeric tier bands. Money subtotal bases use minor
     * currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the
     * checkout delivery quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[2] (Value):
     * null.
     */
    "basis"?: (("choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {}))
        | (null));
});
/**
 * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
 * prices, and a weight `unit` when the basis is total weight.
 */
export type DeliveryTieredPricingStrategyRequestInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & ((Exclude<DeliveryTieredPricingStrategyInputWeightInput & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput & object, readonly unknown[]>));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. */
export type DeliveryTieredPricingStrategyWeight = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis"?: "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
});
export type DeliveryTieredPricingStrategyWeightPreviousAttributes = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. anyOf[1]
     * (Value): Array of {@link DeliveryPricingTierBandPreviousAttributes}. One to 25 contiguous
     * bands in ascending order. The final band has no upper bound. minItems: 1. maxItems: 25.
     * anyOf[1][] (Value): {@link DeliveryPricingTierBandPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "bands"?: ((Array<DeliveryPricingTierBandPreviousAttributes>) | (null));
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight". anyOf[1] (Value): string. Value matched
     * against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight". anyOf[2] (Value): null.
     */
    "basis"?: (("choice_group.total_weight" | (string & {})) | (null));
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Required only for
     * choice_group.total_weight and forbidden for every other basis. Value enum: "gram",
     * "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     */
    "unit"?: (("gram" | "kilogram" | "ounce" | "pound" | (string & {})) | (null));
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight". anyOf[1] (Value): string. Value matched
     * against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight". anyOf[2] (Value): null.
     */
    "basis"?: (("choice_group.total_weight" | (string & {})) | (null));
});
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRule = {
    /**
     * Business days the merchant needs to prepare the order. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRange;
    /**
     * Business days the order spends in transit. A minimum and maximum number of business days,
     * used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRange;
};
export type DeliveryTransitTimeRulePreviousAttributes = {
    /**
     * Business days the merchant needs to prepare the order. anyOf[1] (Value): {@link
     * DeliveryBusinessDayRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "handling_days"?: ((DeliveryBusinessDayRangePreviousAttributes) | (null));
    /**
     * Business days the order spends in transit. anyOf[1] (Value): {@link
     * DeliveryBusinessDayRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "transit_days"?: ((DeliveryBusinessDayRangePreviousAttributes) | (null));
};
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRuleRequestInput = {
    /**
     * Business days the merchant needs to prepare the order. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRangeRequestInput;
    /**
     * Business days the order spends in transit. A minimum and maximum number of business days,
     * used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRangeRequestInput;
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyInterval = {
    /** Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. */
    "end_minute": number;
    /** Weekday the span ends, from 0 for Sunday to 6 for Saturday. */
    "end_weekday": number;
    /** Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. */
    "start_minute": number;
    /** Weekday the span starts, from 0 for Sunday to 6 for Saturday. */
    "start_weekday": number;
};
export type DeliveryWeeklyIntervalPreviousAttributes = {
    /**
     * Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. anyOf[1]
     * (Value): integer. Minute of the day the span ends, from 0 to 1439, in the schedule's
     * timezone. anyOf[2] (Value): null.
     */
    "end_minute"?: ((number) | (null));
    /**
     * Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer.
     * Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     */
    "end_weekday"?: ((number) | (null));
    /**
     * Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. anyOf[1]
     * (Value): integer. Minute of the day the span starts, from 0 to 1439, in the schedule's
     * timezone. anyOf[2] (Value): null.
     */
    "start_minute"?: ((number) | (null));
    /**
     * Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer.
     * Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     */
    "start_weekday"?: ((number) | (null));
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyIntervalRequestInput = DeliveryWeeklyInterval;
/**
 * Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity`
 * of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPrice = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
export type DeliveryWeightUnitPricePreviousAttributes = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound".
     * anyOf[1] (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram",
     * "ounce", "pound". anyOf[2] (Value): null.
     */
    "unit"?: (("gram" | "kilogram" | "ounce" | "pound" | (string & {})) | (null));
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity of
     * the selected unit charged at each configured currency price; fractional quantities are not
     * supported. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "unit_quantity"?: ((number) | (null));
};
/**
 * Price per unit of weight you supply for calculated pricing: a price per currency for each
 * `unit_quantity` of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPriceRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequest = {
    /**
     * Price of delivery in this window. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of this window. The buyer sends it to choose the window. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id": string;
    /**
     * End of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "end_at": string;
    /**
     * Last moment a delivery selection can lock this window's price. It must be later than the
     * evaluation time and no later than the outcome's selection_guarantee_expires_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Start of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequestInput = {
    /**
     * Price of delivery in this window. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * ID of this window. The buyer sends it to choose the window. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id": string;
    /**
     * End of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "end_at": string | globalThis.Date;
    /**
     * Last moment a delivery selection can lock this window's price. It must be later than the
     * evaluation time and no later than the outcome's selection_guarantee_expires_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Start of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string | globalThis.Date;
};
export type DeliveryWindowResourcePreviousAttributes = {
    /**
     * Price of delivery in this window. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of this window. The buyer sends it to choose the window. anyOf[1] (Value): string. ID of
     * this window. The buyer sends it to choose the window. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2] (Value):
     * null.
     */
    "delivery_window_id"?: ((string) | (null));
    /**
     * End of this delivery window. anyOf[1] (Value): string. End of this delivery window. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "end_at"?: ((string) | (null));
    /**
     * Last moment the buyer can choose this window. For a schedule_window method it is the
     * preparation lead time before the window starts, or the same-day cutoff when that is earlier.
     * anyOf[1] (Value): string. Last moment the buyer can choose this window. For a
     * schedule_window method it is the preparation lead time before the window starts, or the
     * same-day cutoff when that is earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Start of this delivery window. anyOf[1] (Value): string. Start of this delivery window.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "start_at"?: ((string) | (null));
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeCondition = {
    /**
     * Minute of the day at which matching stops, counted from midnight in the window's timezone,
     * from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with
     * `start_minute`.
     */
    "end_minute"?: number;
    /**
     * First minute of the day that matches, counted from midnight in the window's timezone, from 0
     * to 1439. Send it with `end_minute`.
     */
    "start_minute"?: number;
    /**
     * Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every
     * weekday. [] (Value): string. minLength: 1.
     */
    "weekdays"?: Array<string>;
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeConditionInput = DeliveryWindowTimeCondition;
export type DeliveryWindowTimeConditionPreviousAttributes = {
    /**
     * Minute of the day at which matching stops, counted from midnight in the window's timezone,
     * from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with
     * `start_minute`. anyOf[1] (Value): integer. Minute of the day at which matching stops,
     * counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The
     * minute itself does not match. Send it with `start_minute`. anyOf[2] (Value): null.
     */
    "end_minute"?: ((number) | (null));
    /**
     * First minute of the day that matches, counted from midnight in the window's timezone, from 0
     * to 1439. Send it with `end_minute`. anyOf[1] (Value): integer. First minute of the day that
     * matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with
     * `end_minute`. anyOf[2] (Value): null.
     */
    "start_minute"?: ((number) | (null));
    /**
     * Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every
     * weekday. anyOf[1] (Value): Array of string. Lowercase weekday names, such as `monday`, with
     * no duplicates. Omit it to match every weekday. anyOf[1][] (Value): string. minLength: 1.
     * anyOf[2] (Value): null.
     */
    "weekdays"?: ((Array<string>) | (null));
};
/** A geographic area served by a delivery method. */
export type DeliveryZone = {
    /**
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Immutable revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". */
    "current_delivery_zone_revision_id": string;
    /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
    "delivery_zone_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing zone name. */
    "name": string;
    /** Current zone lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryZoneArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryZoneConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_zone_revision_id"?: ((string) | (null));
            "delivery_zone_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_zone.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryZoneConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_zone_revision_id"?: ((string) | (null));
            "delivery_zone_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_zone.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_zone.archived";
});
/**
 * The `delivery_zone.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryZoneConfigurationPreviousAttributes} or null. Current geographic eligibility
     * conditions. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryZoneConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the zone was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. Time the zone was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_zone_revision_id (Optional): string or
     * null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_zone_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6".
     * previous_attributes.current_delivery_zone_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_zone_id (Optional): string or null. Stable delivery zone ID.
     * previous_attributes.delivery_zone_id.anyOf[1] (Value): string. Stable delivery zone ID.
     * Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". previous_attributes.delivery_zone_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing zone name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing zone name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current zone lifecycle status. Value
     * enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string. Current
     * zone lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. Time the zone last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the zone last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for zone writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * zone writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryZoneConfigurationPreviousAttributes} or null. Current geographic eligibility
         * conditions. configuration.anyOf[1] (Value): {@link
         * DeliveryZoneConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the zone was created. created_at.anyOf[1]
         * (Value): string. Time the zone was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_zone_revision_id (Optional): string or null. Immutable revision used
         * for new quotes. current_delivery_zone_revision_id.anyOf[1] (Value): string. Immutable
         * revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6".
         * current_delivery_zone_revision_id.anyOf[2] (Value): null. delivery_zone_id (Optional):
         * string or null. Stable delivery zone ID. delivery_zone_id.anyOf[1] (Value): string.
         * Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * delivery_zone_id.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap}
         * or null. Caller-owned metadata. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. name (Optional): string or null. Merchant-facing zone
         * name. name.anyOf[1] (Value): string. Merchant-facing zone name. name.anyOf[2] (Value):
         * null. status (Optional): string or null. Current zone lifecycle status. Value enum:
         * "active", "archived". status.anyOf[1] (Value): string. Current zone lifecycle status.
         * Value enum: "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. Time the zone last changed. updated_at.anyOf[1] (Value): string. Time
         * the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for zone writes. version.anyOf[1] (Value): integer.
         * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current geographic eligibility conditions. anyOf[1] (Value): {@link
             * DeliveryZoneConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryZoneConfigurationPreviousAttributes) | (null));
            /**
             * Time the zone was created. anyOf[1] (Value): string. Time the zone was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". anyOf[2] (Value):
             * null.
             */
            "current_delivery_zone_revision_id"?: ((string) | (null));
            /**
             * Stable delivery zone ID. anyOf[1] (Value): string. Stable delivery zone ID. Example:
             * "dzone_01KEZF7C005RY7KGCN4M2CH5WP". anyOf[2] (Value): null.
             */
            "delivery_zone_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing zone name. anyOf[1] (Value): string. Merchant-facing zone name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current zone lifecycle status. Value enum: "active", "archived". anyOf[1] (Value):
             * string. Current zone lifecycle status. Value enum: "active", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the zone last changed. anyOf[1] (Value): string. Time the zone last changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for zone writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
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
 * The `delivery_zone.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryZoneConfigurationPreviousAttributes} or null. Current geographic eligibility
     * conditions. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryZoneConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the zone was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. Time the zone was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_zone_revision_id (Optional): string or
     * null. Immutable revision used for new quotes.
     * previous_attributes.current_delivery_zone_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6".
     * previous_attributes.current_delivery_zone_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_zone_id (Optional): string or null. Stable delivery zone ID.
     * previous_attributes.delivery_zone_id.anyOf[1] (Value): string. Stable delivery zone ID.
     * Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". previous_attributes.delivery_zone_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing zone name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing zone name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current zone lifecycle status. Value
     * enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string. Current
     * zone lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. Time the zone last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the zone last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for zone writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * zone writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryZoneConfigurationPreviousAttributes} or null. Current geographic eligibility
         * conditions. configuration.anyOf[1] (Value): {@link
         * DeliveryZoneConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the zone was created. created_at.anyOf[1]
         * (Value): string. Time the zone was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_zone_revision_id (Optional): string or null. Immutable revision used
         * for new quotes. current_delivery_zone_revision_id.anyOf[1] (Value): string. Immutable
         * revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6".
         * current_delivery_zone_revision_id.anyOf[2] (Value): null. delivery_zone_id (Optional):
         * string or null. Stable delivery zone ID. delivery_zone_id.anyOf[1] (Value): string.
         * Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * delivery_zone_id.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap}
         * or null. Caller-owned metadata. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. name (Optional): string or null. Merchant-facing zone
         * name. name.anyOf[1] (Value): string. Merchant-facing zone name. name.anyOf[2] (Value):
         * null. status (Optional): string or null. Current zone lifecycle status. Value enum:
         * "active", "archived". status.anyOf[1] (Value): string. Current zone lifecycle status.
         * Value enum: "active", "archived". status.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. Time the zone last changed. updated_at.anyOf[1] (Value): string. Time
         * the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null.
         * Optimistic-concurrency version for zone writes. version.anyOf[1] (Value): integer.
         * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current geographic eligibility conditions. anyOf[1] (Value): {@link
             * DeliveryZoneConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryZoneConfigurationPreviousAttributes) | (null));
            /**
             * Time the zone was created. anyOf[1] (Value): string. Time the zone was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision
             * used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". anyOf[2] (Value):
             * null.
             */
            "current_delivery_zone_revision_id"?: ((string) | (null));
            /**
             * Stable delivery zone ID. anyOf[1] (Value): string. Stable delivery zone ID. Example:
             * "dzone_01KEZF7C005RY7KGCN4M2CH5WP". anyOf[2] (Value): null.
             */
            "delivery_zone_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing zone name. anyOf[1] (Value): string. Merchant-facing zone name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current zone lifecycle status. Value enum: "active", "archived". anyOf[1] (Value):
             * string. Current zone lifecycle status. Value enum: "active", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the zone last changed. anyOf[1] (Value): string. Time the zone last changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for zone writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
});
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneCondition = {
    /**
     * ID of the delivery zone the address must be inside. minLength: 1. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
export type DeliveryZoneConditionPreviousAttributes = {
    /**
     * ID of the delivery zone the address must be inside. anyOf[1] (Value): string. ID of the
     * delivery zone the address must be inside. minLength: 1. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP". anyOf[2] (Value): null.
     */
    "delivery_zone_id"?: ((string) | (null));
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Value enum:
     * "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by
     * this condition. destination_address is the shipping destination. buyer_location is the
     * buyer's current pickup or local-delivery location. Default: "destination_address". Value
     * enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "subject"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
};
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneConditionRequestInput = {
    /**
     * ID of the delivery zone the address must be inside. minLength: 1. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfiguration = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfiguration}. A reusable geographic predicate containing only country, state,
     * postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfiguration>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfiguration>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfiguration;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfiguration}. A reusable geographic predicate containing only country, state,
     * postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
export type DeliveryZoneConfigurationPreviousAttributes = ({
    /**
     * Matches when every nested expression matches. anyOf[1] (Value): Array of {@link
     * DeliveryZoneConfigurationPreviousAttributes}. Matches when every nested expression matches.
     * minItems: 1. maxItems: 100. anyOf[1][] (Value): {@link
     * DeliveryZoneConfigurationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "all"?: ((Array<DeliveryZoneConfigurationPreviousAttributes>) | (null));
    /**
     * Matches when at least one nested expression matches. anyOf[1] (Value): Array of {@link
     * DeliveryZoneConfigurationPreviousAttributes}. Matches when at least one nested expression
     * matches. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@link
     * DeliveryZoneConfigurationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "any"?: ((Array<DeliveryZoneConfigurationPreviousAttributes>) | (null));
    /**
     * Matches when the address is in one of the listed countries. anyOf[1] (Value): {@link
     * DeliveryStateConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "country"?: ((DeliveryStateConditionPreviousAttributes) | (null));
    /**
     * Matches when the nested expression does not match. anyOf[1] (Value): {@link
     * DeliveryZoneConfigurationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "not"?: ((DeliveryZoneConfigurationPreviousAttributes) | (null));
    /**
     * Matches when the address postal code matches one of the listed codes. anyOf[1] (Value):
     * {@link DeliveryPostalCodeConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "postal_code"?: ((DeliveryPostalCodeConditionPreviousAttributes) | (null));
    /**
     * Matches when the address is within a set distance of an origin. anyOf[1] (Value): {@link
     * DeliveryRadiusConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "radius"?: ((DeliveryRadiusConditionPreviousAttributes) | (null));
    /**
     * Matches when the address is in one of the listed states or provinces. anyOf[1] (Value):
     * {@link DeliveryStateConditionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "state"?: ((DeliveryStateConditionPreviousAttributes) | (null));
})
    & (((unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (unknown)
    | (Record<string, unknown>)));
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfigurationRequest = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequest>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequest>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequest;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationRequest>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationRequest>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationRequest;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfigurationRequestInput = {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
};
