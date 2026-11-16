import type {
    DeliveryChargeTaxCalculationRequest,
    DeliveryChargeTaxCalculationRequestPreviousAttributes,
    DeliveryChargeTaxCalculationRequestModelInput
} from './types-18.js';
import type { TaxBreakdown, TaxBreakdownPreviousAttributes } from './types-71.js';
import type { TaxReverseCharge, TaxJurisdiction, TaxReverseChargePreviousAttributes } from './types-72.js';
import type { MoneyValue, MoneyValueInput } from './types-42.js';
import type {
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageRequestInput,
    CustomerTaxExemptionCoveragePreviousAttributes
} from './types-16.js';
import type {
    Address,
    AddressPreviousAttributes,
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput
} from './types-0.js';
import type {
    OrderChargeTaxAssignment,
    OrderChargeTaxAssignmentInput,
    OrderAuthorizationAmountsPreviousAttributes,
    OrderChargePreviousAttributes
} from './types-43.js';
import type {
    OrderLineItemTaxAssignment,
    OrderLineItemTaxAssignmentInput,
    OrderLineItemPreviousAttributes,
    OrderReturnCreditSettlementPreviousAttributes,
    OrderSettlementAmountsPreviousAttributes
} from './types-45.js';
import type { CheckoutBuyerContactPreviousAttributes } from './types-5.js';
import type { CustomFieldAnswerPreviousAttributes } from './types-15.js';
import type { DeferredPromotionPreviousAttributes, CustomersListAddressesParams } from './types-17.js';
import type {
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedSubscriptionPlanSummaryPreviousAttributes,
    ExpandedSubscriptionSummaryPreviousAttributes
} from './types-26.js';
import type { FulfillmentPreviousAttributes, FilesCompleteParams } from './types-27.js';
import type { InventoryRoutingSourcePreviousAttributes } from './types-33.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-41.js';
import type {
    OrderDeliveryDestinationPreviousAttributes,
    OrderDeliverySummaryPreviousAttributes,
    OrderDiscountPreviousAttributes,
    OrderGiftCardEstimatePreviousAttributes,
    OrderGiftCardSelectionPreviousAttributes,
    OrderGiftCardSettlementPreviousAttributes,
    OrderHandoverPreviousAttributes
} from './types-44.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { PricingAmountsPreviousAttributes } from './types-55.js';
import type { TicketedEventPreviousAttributes, TipPreviousAttributes } from './types-73.js';
import type { WebhookOrder } from './types-77.js';
import type { InputValue } from '../runtime.js';
import type { CancelOrderEditRequestInput, CancelOrderPaymentAttemptRequestInput } from './types-4.js';
import type { CloseOrderRequestInput } from './types-7.js';
import type { CreateOrderEditRequestInput, CreateOrderRequestInput } from './types-11.js';
import type { DisputesAcceptParams } from './types-25.js';
/**
 * An order's tax state, including its mode, price mode, status, location, exemption, and tax
 * breakdowns.
 */
export type OrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**
     * How you can give Flint a tax location while `status` is `requires_location`. `provided`
     * means send `tax.location`. [] (Value): string.
     */
    "available_location_inputs"?: Array<string>;
    /**
     * The tax calculation callback evaluation whose components the order's tax uses. Returned only
     * on a `callback` order after your callback has answered; absent while tax is
     * `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation
     * callback evaluation an order's tax uses.
     */
    "callback_evaluation"?: OrderTaxCallbackEvaluation;
    /**
     * Where the order's external tax components come from: `provided` when you send them, or
     * `callback` when Flint asks your selected tax calculation callback. Returned only while tax
     * is enabled in external mode; absent for automatic tax and when tax is off. Value enum:
     * "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * The percentage tax template for checkout-generated delivery charges, including paid pickup.
     * Returned only when tax is enabled in external mode with `components_source` `provided` and a
     * template is set. Existing charges retain their own tax.calculation. A percentage tax
     * template for the delivery charges checkout generates, including paid pickup: whether the
     * charge includes the tax, and the tax components. Allowed only on orders that use external
     * tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. */
    "enabled": boolean;
    /**
     * The exemption assessment recorded for this sale, when one exists. Frozen when tax commits;
     * older snapshots omit details that were never recorded. The exemption assessment recorded for
     * an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay
     * omitted.
     */
    "exemption"?: OrderTaxExemption;
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. The location Flint uses to calculate tax on an order, with its address, address type,
     * and where the address came from.
     */
    "location"?: OrderTaxLocation;
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the
     * customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its
     * rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1]
     * (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse charge.
     * Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value):
     * null.
     */
    "reverse_charge"?: ((TaxReverseCharge) | (null));
    /**
     * Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or
     * `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt",
     * "incomplete".
     */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     * Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate
     * every taxable line. Present only when tax is enabled in automatic mode. US destinations are
     * covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods,
     * software and saas are covered; services, professional_services, physical goods and taxable
     * charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect
     * with delivery supported_countries when collecting a shipping address. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * One row per jurisdiction for each line item and charge, plus any flat order taxes. External
     * tax always produces rows. Automatic tax produces rows outside the US, one per national or
     * provincial tax; US automatic tax doesn't produce rows. [] (Value): {@link TaxBreakdown}. The
     * tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
     * amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomatic = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomaticInput = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternal = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternalInput = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/** The tax calculation callback evaluation an order's tax uses. */
export type OrderTaxCallbackEvaluation = {
    /**
     * When Flint saved your callback's answer for the order's current inputs. A change that
     * recalculates tax with identical inputs after the 15-minute cache updates it; a payment that
     * confirms an unchanged answer doesn't. Payment calls your callback again when it is more than
     * 24 hours old. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /**
     * The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id`
     * and `webhook-id`. Identical inputs keep the same ID. Example:
     * "tce_01KEZF7C00Z61NNPEAF0CNSXP4".
     */
    "tax_calculation_evaluation_id": string;
};
export type OrderTaxCallbackEvaluationPreviousAttributes = {
    /**
     * When Flint saved your callback's answer for the order's current inputs. A change that
     * recalculates tax with identical inputs after the 15-minute cache updates it; a payment that
     * confirms an unchanged answer doesn't. Payment calls your callback again when it is more than
     * 24 hours old. anyOf[1] (Value): string. When Flint saved your callback's answer for the
     * order's current inputs. A change that recalculates tax with identical inputs after the
     * 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment
     * calls your callback again when it is more than 24 hours old. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "evaluated_at"?: ((string) | (null));
    /**
     * The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id`
     * and `webhook-id`. Identical inputs keep the same ID. anyOf[1] (Value): string. The
     * evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and
     * `webhook-id`. Identical inputs keep the same ID. Example: "tce_01KEZF7C00Z61NNPEAF0CNSXP4".
     * anyOf[2] (Value): null.
     */
    "tax_calculation_evaluation_id"?: ((string) | (null));
};
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequest = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount";
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
/**
 * The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields
 * absent from historical snapshots stay omitted.
 */
export type OrderTaxExemption = {
    /** Certificate number recorded at assessment. Omitted when none was recorded. */
    "certificate_number"?: string;
    /**
     * Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.
     * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit
     * list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * ID of the customer the exemption was assessed from, when one was linked. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Customer exemption record used for this assessment. Omitted for blanket flags, order
     * declarations, and older snapshots. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     */
    "customer_tax_exemption_id"?: string;
    /**
     * Last day of the selected record's exemption, inclusive. Omitted when no end date was
     * recorded. Format: date. Example: "2026-08-02".
     */
    "end_date"?: string;
    /**
     * Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it.
     * Never printed on buyer documents.
     */
    "evidence_reference"?: string;
    /**
     * Exemption reason recorded at assessment. Omitted when no reason was recorded. Value enum:
     * "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer", "order".
     */
    "source"?: "none" | "customer" | "order" | (string & {});
    /**
     * First day of the selected record's exemption, inclusive. Omitted when no date was recorded.
     * Format: date. Example: "2026-08-02".
     */
    "start_date"?: string;
    /**
     * Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason
     * customer_exempt.
     */
    "tax_exempt": boolean;
};
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputCustomer = ({}) & (({
    /** Value enum: "customer". */
    "type"?: "customer" | (string & {});
}));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputCustomerInput = ({
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "customer".
     */
    "type": "customer";
})
    & (({
    /** Value enum: "customer". */
    "type"?: "customer";
})
    & (({
    "reason"?: never;
})
    & ({
    "coverage"?: never;
})
    & ({
    "certificate_number"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "evidence_reference"?: never;
})));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputNone = ({}) & (({
    /** Value enum: "none". */
    "type"?: "none" | (string & {});
}));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputNoneInput = ({
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "none".
     */
    "type": "none";
})
    & (({
    /** Value enum: "none". */
    "type"?: "none";
})
    & (({
    "reason"?: never;
})
    & ({
    "coverage"?: never;
})
    & ({
    "certificate_number"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "evidence_reference"?: never;
})));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputOrder = ({}) & ({
    /** Value enum: "order". */
    "type"?: "order" | (string & {});
});
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputOrderInput = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "order".
     */
    "type": "order";
})
    & ({
    /** Value enum: "order". */
    "type"?: "order";
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
});
export type OrderTaxExemptionPreviousAttributes = {
    /**
     * Certificate number recorded at assessment. Omitted when none was recorded. anyOf[1] (Value):
     * string. Certificate number recorded at assessment. Omitted when none was recorded. anyOf[2]
     * (Value): null.
     */
    "certificate_number"?: ((string) | (null));
    /**
     * Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.
     * anyOf[1] (Value): {@link CustomerTaxExemptionCoveragePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "coverage"?: ((CustomerTaxExemptionCoveragePreviousAttributes) | (null) | (unknown));
    /**
     * ID of the customer the exemption was assessed from, when one was linked. anyOf[1] (Value):
     * string. ID of the customer the exemption was assessed from, when one was linked. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     */
    "customer_id"?: ((string) | (null));
    /**
     * Customer exemption record used for this assessment. Omitted for blanket flags, order
     * declarations, and older snapshots. anyOf[1] (Value): string. Customer exemption record used
     * for this assessment. Omitted for blanket flags, order declarations, and older snapshots.
     * Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW". anyOf[2] (Value): null.
     */
    "customer_tax_exemption_id"?: ((string) | (null));
    /**
     * Last day of the selected record's exemption, inclusive. Omitted when no end date was
     * recorded. anyOf[1] (Value): string. Last day of the selected record's exemption, inclusive.
     * Omitted when no end date was recorded. Format: date. Example: "2026-08-02". anyOf[2]
     * (Value): null.
     */
    "end_date"?: ((string) | (null));
    /**
     * Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it.
     * Never printed on buyer documents. anyOf[1] (Value): string. Merchant-only reference to
     * supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer
     * documents. anyOf[2] (Value): null.
     */
    "evidence_reference"?: ((string) | (null));
    /**
     * Exemption reason recorded at assessment. Omitted when no reason was recorded. Value enum:
     * "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other". anyOf[1] (Value): string. Exemption reason recorded at assessment. Omitted when no
     * reason was recorded. Value enum: "federal_government", "state_or_local_government",
     * "tribal_government", "foreign_diplomat", "charitable_organization",
     * "religious_organization", "educational_organization", "resale", "agricultural_production",
     * "industrial_production", "direct_pay_permit", "direct_mail", "other". anyOf[2] (Value):
     * null.
     */
    "reason"?: (("federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {}))
        | (null));
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer", "order". anyOf[1] (Value): string. The source
     * of the tax exemption assessment. Omitted when the source has not been established. Value
     * enum: "none", "customer", "order". anyOf[2] (Value): null.
     */
    "source"?: (("none" | "customer" | "order" | (string & {})) | (null));
    /**
     * First day of the selected record's exemption, inclusive. Omitted when no date was recorded.
     * anyOf[1] (Value): string. First day of the selected record's exemption, inclusive. Omitted
     * when no date was recorded. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     */
    "start_date"?: ((string) | (null));
    /**
     * Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason
     * customer_exempt. anyOf[1] (Value): boolean. Whether an exemption applied to this sale. An
     * exempt sale has zero tax and taxability_reason customer_exempt. anyOf[2] (Value): null.
     */
    "tax_exempt"?: ((boolean) | (null));
};
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionRequest = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
})
    & ((Exclude<OrderTaxExemptionInputCustomer & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputNone & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputOrder & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionRequestInput = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "customer", "none", "order".
     */
    "type": "customer" | "none" | "order";
})
    & ((Exclude<OrderTaxExemptionInputCustomerInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputNoneInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputOrderInput & object, readonly unknown[]>));
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequestInput = {
    /**
     * Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`,
     * starting with a letter or digit. Reports group tax by this code. minLength: 1. maxLength:
     * 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$.
     */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province".
     */
    "level": "state" | "county" | "city" | "district" | "country" | "province";
    /**
     * Name of the jurisdiction, up to 200 characters. minLength: 1. maxLength: 200. pattern:
     * ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$.
     */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     * maxLength: 3. pattern: ^[A-Z0-9]{1,3}$.
     */
    "state"?: string;
};
/**
 * The location Flint uses to calculate tax on an order, with its address, address type, and where
 * the address came from.
 */
export type OrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Where the tax address came from. Value enum: "provided", "fulfillment", "customer",
     * "location", "merchant".
     */
    "address_source": "provided" | "fulfillment" | "customer" | "location" | "merchant" | (string & {});
    /**
     * The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address",
     * "billing_address", "shipping_address", "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    /**
     * ID of the customer whose saved address Flint used, when `address_source` is `customer`.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * ID of the fulfillment whose shipping address Flint used. Absent when the address is the
     * order's `delivery_destination`. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the pickup store whose address Flint used, when `address_source` is `location`.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequest = ({
    /** City. minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax
     * supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT,
     * LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** First line of the street address. minLength: 1. pattern: \S. */
    "line1": string;
    /** Second line of the street address, such as an apartment or suite. minLength: 1. */
    "line2"?: string;
    /**
     * Postal code. A full address in Ireland may omit it; every other address needs one.
     * minLength: 1. pattern: \S.
     */
    "postal_code"?: string;
    /**
     * State or province code, such as `WA` or `ON`. Required for US and Canadian full addresses;
     * omit it elsewhere when the address has none. minLength: 1. pattern: \S.
     */
    "state"?: string;
});
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
export type OrderTaxLocationPreviousAttributes = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. anyOf[1] (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
    /**
     * Where the tax address came from. Value enum: "provided", "fulfillment", "customer",
     * "location", "merchant". anyOf[1] (Value): string. Where the tax address came from. Value
     * enum: "provided", "fulfillment", "customer", "location", "merchant". anyOf[2] (Value): null.
     */
    "address_source"?: (("provided" | "fulfillment" | "customer" | "location" | "merchant" | (string & {})) | (null));
    /**
     * The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address",
     * "billing_address", "shipping_address", "business_address". anyOf[1] (Value): string. The
     * kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address",
     * "billing_address", "shipping_address", "business_address". anyOf[2] (Value): null.
     */
    "address_type"?: (("postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {}))
        | (null));
    /**
     * ID of the customer whose saved address Flint used, when `address_source` is `customer`.
     * anyOf[1] (Value): string. ID of the customer whose saved address Flint used, when
     * `address_source` is `customer`. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
     * null.
     */
    "customer_id"?: ((string) | (null));
    /**
     * ID of the fulfillment whose shipping address Flint used. Absent when the address is the
     * order's `delivery_destination`. anyOf[1] (Value): string. ID of the fulfillment whose
     * shipping address Flint used. Absent when the address is the order's `delivery_destination`.
     * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     */
    "fulfillment_id"?: ((string) | (null));
    /**
     * ID of the pickup store whose address Flint used, when `address_source` is `location`.
     * anyOf[1] (Value): string. ID of the pickup store whose address Flint used, when
     * `address_source` is `location`. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
     * null.
     */
    "location_id"?: ((string) | (null));
};
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
export type OrderTaxPreviousAttributes = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected". anyOf[1] (Value): string.
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected". anyOf[2] (Value): null.
     */
    "automatic_profile"?: (("standard" | "connected" | (string & {})) | (null));
    /**
     * How you can give Flint a tax location while `status` is `requires_location`. `provided`
     * means send `tax.location`. anyOf[1] (Value): Array of string. How you can give Flint a tax
     * location while `status` is `requires_location`. `provided` means send `tax.location`.
     * anyOf[1][] (Value): string. anyOf[2] (Value): null.
     */
    "available_location_inputs"?: ((Array<string>) | (null));
    /**
     * The tax calculation callback evaluation whose components the order's tax uses. Returned only
     * on a `callback` order after your callback has answered; absent while tax is
     * `requires_location` or `incomplete`, and on orders with nothing to tax. anyOf[1] (Value):
     * {@link OrderTaxCallbackEvaluationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback_evaluation"?: ((OrderTaxCallbackEvaluationPreviousAttributes) | (null) | (unknown));
    /**
     * Where the order's external tax components come from: `provided` when you send them, or
     * `callback` when Flint asks your selected tax calculation callback. Returned only while tax
     * is enabled in external mode; absent for automatic tax and when tax is off. Value enum:
     * "provided", "callback". anyOf[1] (Value): string. Where the order's external tax components
     * come from: `provided` when you send them, or `callback` when Flint asks your selected tax
     * calculation callback. Returned only while tax is enabled in external mode; absent for
     * automatic tax and when tax is off. Value enum: "provided", "callback". anyOf[2] (Value):
     * null.
     */
    "components_source"?: (("provided" | "callback" | (string & {})) | (null));
    /**
     * The percentage tax template for checkout-generated delivery charges, including paid pickup.
     * Returned only when tax is enabled in external mode with `components_source` `provided` and a
     * template is set. Existing charges retain their own tax.calculation. anyOf[1] (Value): {@link
     * DeliveryChargeTaxCalculationRequestPreviousAttributes}. anyOf[2] (Value): null.
     */
    "delivery_charge_calculation"?: ((DeliveryChargeTaxCalculationRequestPreviousAttributes) | (null) | (unknown));
    /**
     * Whether Flint calculates tax for the order. When `false`, `status` is `not_required`.
     * anyOf[1] (Value): boolean. Whether Flint calculates tax for the order. When `false`,
     * `status` is `not_required`. anyOf[2] (Value): null.
     */
    "enabled"?: ((boolean) | (null));
    /**
     * The exemption assessment recorded for this sale, when one exists. Frozen when tax commits;
     * older snapshots omit details that were never recorded. anyOf[1] (Value): {@link
     * OrderTaxExemptionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "exemption"?: ((OrderTaxExemptionPreviousAttributes) | (null) | (unknown));
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. anyOf[1] (Value): {@link OrderTaxLocationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "location"?: ((OrderTaxLocationPreviousAttributes) | (null) | (unknown));
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external". anyOf[1] (Value): string. Who supplies the tax: Flint's tax
     * connection (`automatic`) or you (`external`). Value enum: "automatic", "external". anyOf[2]
     * (Value): null.
     */
    "mode"?: (("automatic" | "external" | (string & {})) | (null));
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive". anyOf[1] (Value): string. Whether the order's prices include tax (`inclusive`)
     * or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20;
     * a response replayed for an idempotent retry of an earlier request omits it. Each line item
     * and charge also states its own mode in `tax.calculation.price_mode`, which decides that
     * item's tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     */
    "price_mode"?: (("additive" | "inclusive" | (string & {})) | (null));
    /**
     * Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the
     * customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its
     * rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1]
     * (Value): ({@link TaxReverseChargePreviousAttributes} or null). Set when the buyer accounts
     * for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an
     * external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax.
     * Invoices freeze it. `null` when no reverse charge applies. anyOf[1].anyOf[1] (Value): {@link
     * TaxReverseChargePreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value):
     * null.
     */
    "reverse_charge"?: (((((TaxReverseChargePreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
    /**
     * Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or
     * `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt",
     * "incomplete". anyOf[1] (Value): string. Whether the order's tax is ready. Payment requires
     * `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location",
     * "calculated", "exempt", "incomplete". anyOf[2] (Value): null.
     */
    "status"?: (("not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {}))
        | (null));
    /**
     * Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate
     * every taxable line. Present only when tax is enabled in automatic mode. US destinations are
     * covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods,
     * software and saas are covered; services, professional_services, physical goods and taxable
     * charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect
     * with delivery supported_countries when collecting a shipping address. anyOf[1] (Value):
     * Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic
     * tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US
     * destinations are covered for every category. In Canada, EU member states, GB, AU and NZ,
     * only digital_goods, software and saas are covered; services, professional_services, physical
     * goods and taxable charges are unsupported there. Read tax-connection.coverage for category
     * scopes. Intersect with delivery supported_countries when collecting a shipping address.
     * anyOf[1][] (Value): string. anyOf[2] (Value): null.
     */
    "supported_countries"?: ((Array<string>) | (null));
    /**
     * One row per jurisdiction for each line item and charge, plus any flat order taxes. External
     * tax always produces rows. Automatic tax produces rows outside the US, one per national or
     * provincial tax; US automatic tax doesn't produce rows. anyOf[1] (Value): Array of {@link
     * TaxBreakdownPreviousAttributes}. One row per jurisdiction for each line item and charge,
     * plus any flat order taxes. External tax always produces rows. Automatic tax produces rows
     * outside the US, one per national or provincial tax; US automatic tax doesn't produce rows.
     * anyOf[1][] (Value): {@link TaxBreakdownPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_breakdowns"?: ((Array<TaxBreakdownPreviousAttributes>) | (null));
};
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null) | (unknown));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null) | (unknown));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string | null) | (null) | (unknown));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: (((((ExpandedCustomerSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null) | (unknown));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null) | (unknown));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null) | (unknown));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null) | (unknown));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null) | (unknown));
            "invoice_id"?: ((string | null) | (null) | (unknown));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string | null) | (null) | (unknown));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null) | (unknown));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null) | (unknown));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: (((((ExpandedSubscriptionSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: (((((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null) | (unknown));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null) | (unknown));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null) | (unknown));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null) | (unknown));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string | null) | (null) | (unknown));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: (((((ExpandedCustomerSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null) | (unknown));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null) | (unknown));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null) | (unknown));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null) | (unknown));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null) | (unknown));
            "invoice_id"?: ((string | null) | (null) | (unknown));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string | null) | (null) | (unknown));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null) | (unknown));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null) | (unknown));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: (((((ExpandedSubscriptionSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: (((((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null) | (unknown));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null) | (unknown));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null or null. The
     * earliest open or resolving payment review on this order's counted payments. `null` when no
     * review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. previous_attributes.active_payment_review_id.anyOf[1] (Value):
     * string or null. The earliest open or resolving payment review on this order's counted
     * payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * previous_attributes.active_payment_review_id.anyOf[2] (Value): null.
     * previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): ({@link
     * ExpandedCustomerSummaryPreviousAttributes} or null) or null. Customer summary included when
     * `expand` names `customer`; `null` when expanded and no customer is linked. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): ({@link
     * ExpandedCustomerSummaryPreviousAttributes} or null). Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[1].anyOf[2]
     * (Value): null. previous_attributes.customer.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. ID of the customer this order
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer
     * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null or null. ID of the delivery selection that governs this order, including pickup choices
     * without a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of
     * the delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null or null. The invoice associated
     * with this order. Null when the order has no invoice. A replacement invoice replaces this ID;
     * voiding an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string or
     * null. The invoice associated with this order. Null when the order has no invoice. A
     * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null or null. When `payment_status`
     * became `paid`, including a final capture that releases the remaining balance. Set once and
     * never changed, including after refunds. `null` when `payment_status` isn't `paid`, including
     * an order whose balance was written off without being paid.
     * previous_attributes.paid_at.anyOf[1] (Value): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment
     * intents created to collect this order. previous_attributes.payment_intent_ids.anyOf[1][]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_ids.anyOf[2] (Value): null.
     * previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null or null.
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string or null. Order that paid
     * for this prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): ({@link ExpandedSubscriptionSummaryPreviousAttributes} or null) or null.
     * Subscription summary included when `expand` names `subscription`; `null` when expanded and
     * this order does not bill a subscription. Present only when `expand` includes `subscription`;
     * `null` when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): ({@link
     * ExpandedSubscriptionSummaryPreviousAttributes} or null). Subscription summary included when
     * `expand` names `subscription`; `null` when expanded and this order does not bill a
     * subscription. Present only when `expand` includes `subscription`; `null` when expanded and
     * there is no related subscription. previous_attributes.subscription.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}.
     * previous_attributes.subscription.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription.anyOf[2] (Value): null.
     * previous_attributes.subscription_cycle (Optional): integer or null. Charged subscription
     * cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
     * not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order.
     * previous_attributes.subscription_delivery_number.anyOf[1] (Value): integer or null. Position
     * of this delivery among the deliveries one charge paid for, starting at 2. Null when this is
     * not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): ({@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null) or null. Plan summary included
     * when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): ({@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null or null. The earliest open or resolving payment review on this order's counted
         * payments. `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string or null.
         * The earliest open or resolving payment review on this order's counted payments. `null`
         * when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null or null. The reference the payment
         * link URL or resolve request carried, such as your user ID. `null` when none was sent or
         * checkout did not start from a payment link. Returned only to merchant credentials;
         * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not
         * proof of identity. Always present with merchant credentials. client_reference.anyOf[1]
         * (Value): string or null. The reference the payment link URL or resolve request carried,
         * such as your user ID. `null` when none was sent or checkout did not start from a payment
         * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
         * buyer's browser, so treat it as a claim, not proof of identity. Always present with
         * merchant credentials. minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value):
         * null. closed_at (Optional): string or null. When the order closed. Present exactly when
         * status is closed. Set once at the transition and never changed. closed_at.anyOf[1]
         * (Value): string. When the order closed. Present exactly when status is closed. Set once
         * at the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): ({@link
         * ExpandedCustomerSummaryPreviousAttributes} or null) or null. Customer summary included
         * when `expand` names `customer`; `null` when expanded and no customer is linked. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): ({@link ExpandedCustomerSummaryPreviousAttributes}
         * or null). Customer summary included when `expand` names `customer`; `null` when expanded
         * and no customer is linked. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection.
         * governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null or null. The invoice associated with this
         * order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. invoice_id.anyOf[1] (Value): string or null. The
         * invoice associated with this order. Null when the order has no invoice. A replacement
         * invoice replaces this ID; voiding an invoice preserves it. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link OrderLineItemPreviousAttributes} or null. Items the order
         * sells, each with its pricing, tax, and fulfillment quantities. line_items.anyOf[1]
         * (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order sells, each
         * with its pricing, tax, and fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null or null. When `payment_status` became `paid`, including a final capture that
         * releases the remaining balance. Set once and never changed, including after refunds.
         * `null` when `payment_status` isn't `paid`, including an order whose balance was written
         * off without being paid. paid_at.anyOf[1] (Value): string or null. When `payment_status`
         * became `paid`, including a final capture that releases the remaining balance. Set once
         * and never changed, including after refunds. `null` when `payment_status` isn't `paid`,
         * including an order whose balance was written off without being paid. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids
         * (Optional): Array of string or null. IDs of the payment intents created to collect this
         * order. payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents
         * created to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null
         * or null. The order edit waiting for its balance payment. While it is set, the units that
         * edit removes can't join a fulfillment and the order refuses another edit. `null` when
         * there is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string or null. The order edit waiting for its
         * balance payment. While it is set, the units that edit removes can't join a fulfillment
         * and the order refuses another edit. `null` when there is none. Omitted for buyer
         * credentials. Always present with merchant credentials. Example:
         * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". pending_order_edit_id.anyOf[2] (Value): null.
         * prepayment_order_id (Optional): string or null or null. Order that paid for this prepaid
         * delivery. Null when this is not a prepaid delivery order. prepayment_order_id.anyOf[1]
         * (Value): string or null. Order that paid for this prepaid delivery. Null when this is
         * not a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * prepayment_order_id.anyOf[2] (Value): null. pricing_amounts (Optional): {@link
         * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal,
         * discounts, charges, tax, requested tip, and total. pricing_amounts.anyOf[1] (Value):
         * {@link PricingAmountsPreviousAttributes}. pricing_amounts.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the refunds that name this order.
         * This includes refunds Flint makes to return a payment it couldn't accept (`reason`
         * `payment_returned`), which never count toward `refund_status` or the order's refunded
         * amounts. refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that name this
         * order. This includes refunds Flint makes to return a payment it couldn't accept
         * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
         * refunded amounts. refund_ids.anyOf[1][] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. Refund progress for collected money. Refunds with `reason`
         * `payment_returned` return money the order never received and don't count. Value enum:
         * "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value): string. Refund
         * progress for collected money. Refunds with `reason` `payment_returned` return money the
         * order never received and don't count. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. return_credit_settlements (Optional):
         * Array of {@link OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to
         * this order from items the buyer returned, such as an exchange's replacement order.
         * Included in settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value):
         * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this
         * order from items the buyer returned, such as an exchange's replacement order. Included
         * in settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): ({@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null) or null. Subscription summary
         * included when `expand` names `subscription`; `null` when expanded and this order does
         * not bill a subscription. Present only when `expand` includes `subscription`; `null` when
         * expanded and there is no related subscription. subscription.anyOf[1] (Value): ({@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null). Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[1].anyOf[2] (Value):
         * null. subscription.anyOf[2] (Value): null. subscription_cycle (Optional): integer or
         * null. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
         * retries and skipped renewals do not advance the cycle. subscription_cycle.anyOf[1]
         * (Value): integer. Charged subscription cycle associated with this order. Signup is cycle
         * 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_cycle.anyOf[2] (Value): null. subscription_delivery_changed_at
         * (Optional): string or null. Time the subscriber changed delivery after this paid renewal
         * was prepared. The order keeps its committed destination until you correct it or refund
         * and replace it. subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
         * subscriber changed delivery after this paid renewal was prepared. The order keeps its
         * committed destination until you correct it or refund and replace it. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value):
         * null. subscription_delivery_number (Optional): integer or null or null. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. subscription_delivery_number.anyOf[1] (Value): integer or
         * null. Position of this delivery among the deliveries one charge paid for, starting at 2.
         * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): ({@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null) or null. Plan summary included when `expand` names `subscription_plan`; `null`
         * when expanded and this order does not bill a subscription plan. Present only when
         * `expand` includes `subscription_plan`; `null` when expanded and there is no related
         * subscription plan. subscription_plan.anyOf[1] (Value): ({@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included when
         * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
         * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
         * expanded and there is no related subscription plan. subscription_plan.anyOf[1].anyOf[1]
         * (Value): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}.
         * subscription_plan.anyOf[1].anyOf[2] (Value): null. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string or null. The earliest
             * open or resolving payment review on this order's counted payments. `null` when no
             * review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             * anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null) | (unknown));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The reference the payment link URL or
             * resolve request carried, such as your user ID. `null` when none was sent or checkout
             * did not start from a payment link. Returned only to merchant credentials; omitted
             * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
             * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string | null) | (null) | (unknown));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): ({@link
             * ExpandedCustomerSummaryPreviousAttributes} or null). Customer summary included when
             * `expand` names `customer`; `null` when expanded and no customer is linked. Present
             * only when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1].anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null.
             * anyOf[2] (Value): null.
             */
            "customer"?: (((((ExpandedCustomerSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null) | (unknown));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null) | (unknown));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null) | (unknown));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string or null. ID of the delivery selection that governs this order,
             * including pickup choices without a delivery destination: the checkout's provisional
             * selection before payment, and the selection a payment committed after. Read it with
             * GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs
             * the order. While set, change the destination through the delivery selection.
             * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null) | (unknown));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null) | (unknown));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string or null. The invoice associated with this order. Null when the order
             * has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves
             * it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string | null) | (null) | (unknown));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string or null. When `payment_status` became
             * `paid`, including a final capture that releases the remaining balance. Set once and
             * never changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string | null) | (null) | (unknown));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The order edit waiting for its
             * balance payment. While it is set, the units that edit removes can't join a
             * fulfillment and the order refuses another edit. `null` when there is none. Omitted
             * for buyer credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string or null. Order that paid for this prepaid delivery.
             * Null when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): ({@link ExpandedSubscriptionSummaryPreviousAttributes} or null).
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription"?: (((((ExpandedSubscriptionSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer or null.
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24. anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): ({@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included
             * when `expand` names `subscription_plan`; `null` when expanded and this order does
             * not bill a subscription plan. Present only when `expand` includes
             * `subscription_plan`; `null` when expanded and there is no related subscription plan.
             * anyOf[1].anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: (((((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null) | (unknown));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null) | (unknown));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null or null. The
     * earliest open or resolving payment review on this order's counted payments. `null` when no
     * review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. previous_attributes.active_payment_review_id.anyOf[1] (Value):
     * string or null. The earliest open or resolving payment review on this order's counted
     * payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * previous_attributes.active_payment_review_id.anyOf[2] (Value): null.
     * previous_attributes.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and still
     * capturable on the order's payments. previous_attributes.authorization_amounts.anyOf[1]
     * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}.
     * previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes}
     * or null. Email and phone saved when payment started, from the pay request's buyer_contact or
     * the paying checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link
     * CheckoutBuyerContactPreviousAttributes}. previous_attributes.buyer_contact.anyOf[2] (Value):
     * null. previous_attributes.buyer_note (Optional): string or null. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[1] (Value): string. A note to the buyer.
     * previous_attributes.buyer_note.anyOf[2] (Value): null. previous_attributes.charges
     * (Optional): Array of {@link OrderChargePreviousAttributes} or null. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
     * fees, each with its applied amount, tax, and refunded amount.
     * previous_attributes.charges.anyOf[1][] (Value): {@link OrderChargePreviousAttributes}.
     * previous_attributes.charges.anyOf[2] (Value): null. previous_attributes.checkout_session_ids
     * (Optional): Array of string or null. IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswerPreviousAttributes} or null. The buyer's answers to the payment link's
     * custom fields, recorded when checkout started, in the order the link showed the fields. Each
     * answer keeps the field's key, label, and type from that moment, so later changes to the link
     * don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when
     * the order didn't come from a payment link, the link had no custom fields, or the buyer
     * answered none. Orders created before Flint recorded answers here also return an empty list
     * and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
     * the answers. Returned only to merchant credentials; omitted for buyer credentials. Always
     * present with merchant credentials. previous_attributes.custom_field_answers.anyOf[1]
     * (Value): Array of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the
     * payment link's custom fields, recorded when checkout started, in the order the link showed
     * the fields. Each answer keeps the field's key, label, and type from that moment, so later
     * changes to the link don't change it. Optional fields the buyer left blank are left out.
     * Read-only. Empty when the order didn't come from a payment link, the link had no custom
     * fields, or the buyer answered none. Orders created before Flint recorded answers here also
     * return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
     * the customer removes the answers. Returned only to merchant credentials; omitted for buyer
     * credentials. Always present with merchant credentials. maxItems: 20.
     * previous_attributes.custom_field_answers.anyOf[1][] (Value): {@link
     * CustomFieldAnswerPreviousAttributes}. previous_attributes.custom_field_answers.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): ({@link
     * ExpandedCustomerSummaryPreviousAttributes} or null) or null. Customer summary included when
     * `expand` names `customer`; `null` when expanded and no customer is linked. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): ({@link
     * ExpandedCustomerSummaryPreviousAttributes} or null). Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[1].anyOf[2]
     * (Value): null. previous_attributes.customer.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. ID of the customer this order
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer
     * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link
     * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription signup.
     * They attach when the subscription is provisioned and first discount its first charged cycle.
     * They do not discount this order and are separate from discounts and order totals. Always
     * present; empty when no promotions are deferred.
     * previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
     * attach when the subscription is provisioned and first discount its first charged cycle. They
     * do not discount this order and are separate from discounts and order totals. Always present;
     * empty when no promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][]
     * (Value): {@link DeferredPromotionPreviousAttributes}.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * OrderDeliverySummaryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_destination (Optional): {@link
     * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. previous_attributes.delivery_destination.anyOf[1] (Value):
     * {@link OrderDeliveryDestinationPreviousAttributes}.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscountPreviousAttributes}
     * or null. Discounts applied to the order, each with its amount, status, and the line items
     * and charges it covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link
     * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
     * status, and the line items and charges it covers. previous_attributes.discounts.anyOf[1][]
     * (Value): {@link OrderDiscountPreviousAttributes}. previous_attributes.discounts.anyOf[2]
     * (Value): null. previous_attributes.dispute_status (Optional): string or null. Aggregate
     * dispute state across the order's counted payment intents, excluding payment_returned. Always
     * returned to merchant credentials and omitted from buyer reads. Open states take precedence
     * in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
     * other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed;
     * none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
     * or null. Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link
     * FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of
     * its line items. previous_attributes.fulfillments.anyOf[1][] (Value): {@link
     * FulfillmentPreviousAttributes}. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link
     * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
     * splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link
     * OrderGiftCardEstimatePreviousAttributes}. previous_attributes.gift_card_estimate.anyOf[2]
     * (Value): null. previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of
     * {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
     * order's payments. previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlementPreviousAttributes}.
     * previous_attributes.gift_card_settlements.anyOf[2] (Value): null.
     * previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Gift cards cannot fund gift card purchases; this is false when those
     * purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent
     * but open card still counts. previous_attributes.gift_card_tender_enabled.anyOf[1] (Value):
     * boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that
     * still accept changes, are not subscription purchases, and whose merchant has at least one
     * gift card that is not closed in this environment. Gift cards cannot fund gift card
     * purchases; this is false when those purchases leave no amount eligible for gift card tender.
     * Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link
     * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1] (Value): Array
     * of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order,
     * with each card's available balance. previous_attributes.gift_cards.anyOf[1][] (Value):
     * {@link OrderGiftCardSelectionPreviousAttributes}. previous_attributes.gift_cards.anyOf[2]
     * (Value): null. previous_attributes.governing_delivery_selection_id (Optional): string or
     * null or null. ID of the delivery selection that governs this order, including pickup choices
     * without a delivery destination: the checkout's provisional selection before payment, and the
     * selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection.
     * previous_attributes.governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of
     * the delivery selection that governs this order, including pickup choices without a delivery
     * destination: the checkout's provisional selection before payment, and the selection a
     * payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandoverPreviousAttributes} or null.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[1]
     * (Value): {@link OrderHandoverPreviousAttributes}. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null or null. The invoice associated
     * with this order. Null when the order has no invoice. A replacement invoice replaces this ID;
     * voiding an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string or
     * null. The invoice associated with this order. Null when the order has no invoice. A
     * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItemPreviousAttributes}
     * or null. Items the order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and
     * fulfillment quantities. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * OrderLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null or null. When `payment_status`
     * became `paid`, including a final capture that releases the remaining balance. Set once and
     * never changed, including after refunds. `null` when `payment_status` isn't `paid`, including
     * an order whose balance was written off without being paid.
     * previous_attributes.paid_at.anyOf[1] (Value): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment
     * intents created to collect this order. previous_attributes.payment_intent_ids.anyOf[1][]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_ids.anyOf[2] (Value): null.
     * previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
     * `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value):
     * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included
     * when `expand` names `payment_intents`. previous_attributes.payment_intents.anyOf[1][]
     * (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null or null.
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string or null. Order that paid
     * for this prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link
     * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal, discounts,
     * charges, tax, requested tip, and total. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
     * this order from items the buyer returned, such as an exchange's replacement order. Included
     * in settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlementPreviousAttributes}.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * OrderSettlementAmountsPreviousAttributes} or null. How much of the order has been paid,
     * refunded, credited, written off, and settled as tips, and what is still outstanding.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * OrderSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Whether the order
     * still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and
     * metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): ({@link ExpandedSubscriptionSummaryPreviousAttributes} or null) or null.
     * Subscription summary included when `expand` names `subscription`; `null` when expanded and
     * this order does not bill a subscription. Present only when `expand` includes `subscription`;
     * `null` when expanded and there is no related subscription.
     * previous_attributes.subscription.anyOf[1] (Value): ({@link
     * ExpandedSubscriptionSummaryPreviousAttributes} or null). Subscription summary included when
     * `expand` names `subscription`; `null` when expanded and this order does not bill a
     * subscription. Present only when `expand` includes `subscription`; `null` when expanded and
     * there is no related subscription. previous_attributes.subscription.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}.
     * previous_attributes.subscription.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription.anyOf[2] (Value): null.
     * previous_attributes.subscription_cycle (Optional): integer or null. Charged subscription
     * cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
     * not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order.
     * previous_attributes.subscription_delivery_number.anyOf[1] (Value): integer or null. Position
     * of this delivery among the deliveries one charge paid for, starting at 2. Null when this is
     * not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): ({@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null) or null. Plan summary included
     * when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1] (Value): ({@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included when
     * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
     * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
     * expanded and there is no related subscription plan.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTaxPreviousAttributes} or
     * null. The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. previous_attributes.tax.anyOf[1] (Value): {@link
     * OrderTaxPreviousAttributes}. previous_attributes.tax.anyOf[2] (Value): null.
     * previous_attributes.ticketed_event (Optional): {@link TicketedEventPreviousAttributes} or
     * null. Event and tickets this order sold through an event payment link. Absent on other
     * orders. previous_attributes.ticketed_event.anyOf[1] (Value): {@link
     * TicketedEventPreviousAttributes}. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link TipPreviousAttributes} or null. Tips on
     * the order, each with its requested, settled, and refunded amounts. A tip cleared before
     * payment stays listed as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link
     * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded
     * amounts. A tip cleared before payment stays listed as canceled.
     * previous_attributes.tips.anyOf[1][] (Value): {@link TipPreviousAttributes}.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null or null. The earliest open or resolving payment review on this order's counted
         * payments. `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string or null.
         * The earliest open or resolving payment review on this order's counted payments. `null`
         * when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmountsPreviousAttributes} or null. The amounts authorized and
         * still capturable on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmountsPreviousAttributes}. authorization_amounts.anyOf[2] (Value):
         * null. buyer_contact (Optional): {@link CheckoutBuyerContactPreviousAttributes} or null.
         * Email and phone saved when payment started, from the pay request's buyer_contact or the
         * paying checkout session's saved contact. It does not change the linked customer.
         * buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}.
         * buyer_contact.anyOf[2] (Value): null. buyer_note (Optional): string or null. A note to
         * the buyer. buyer_note.anyOf[1] (Value): string. A note to the buyer. buyer_note.anyOf[2]
         * (Value): null. charges (Optional): Array of {@link OrderChargePreviousAttributes} or
         * null. Charges added to the order, such as delivery or service fees, each with its
         * applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of {@link
         * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service
         * fees, each with its applied amount, tax, and refunded amount. charges.anyOf[1][]
         * (Value): {@link OrderChargePreviousAttributes}. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null or null. The reference the payment
         * link URL or resolve request carried, such as your user ID. `null` when none was sent or
         * checkout did not start from a payment link. Returned only to merchant credentials;
         * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not
         * proof of identity. Always present with merchant credentials. client_reference.anyOf[1]
         * (Value): string or null. The reference the payment link URL or resolve request carried,
         * such as your user ID. `null` when none was sent or checkout did not start from a payment
         * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
         * buyer's browser, so treat it as a claim, not proof of identity. Always present with
         * merchant credentials. minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value):
         * null. closed_at (Optional): string or null. When the order closed. Present exactly when
         * status is closed. Set once at the transition and never changed. closed_at.anyOf[1]
         * (Value): string. When the order closed. Present exactly when status is closed. Set once
         * at the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswerPreviousAttributes} or
         * null. The buyer's answers to the payment link's custom fields, recorded when checkout
         * started, in the order the link showed the fields. Each answer keeps the field's key,
         * label, and type from that moment, so later changes to the link don't change it. Optional
         * fields the buyer left blank are left out. Read-only. Empty when the order didn't come
         * from a payment link, the link had no custom fields, or the buyer answered none. Orders
         * created before Flint recorded answers here also return an empty list and keep their
         * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the
         * answers. Returned only to merchant credentials; omitted for buyer credentials. Always
         * present with merchant credentials. custom_field_answers.anyOf[1] (Value): Array of
         * {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's
         * custom fields, recorded when checkout started, in the order the link showed the fields.
         * Each answer keeps the field's key, label, and type from that moment, so later changes to
         * the link don't change it. Optional fields the buyer left blank are left out. Read-only.
         * Empty when the order didn't come from a payment link, the link had no custom fields, or
         * the buyer answered none. Orders created before Flint recorded answers here also return
         * an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the
         * customer removes the answers. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. maxItems: 20.
         * custom_field_answers.anyOf[1][] (Value): {@link CustomFieldAnswerPreviousAttributes}.
         * custom_field_answers.anyOf[2] (Value): null. customer (Optional): ({@link
         * ExpandedCustomerSummaryPreviousAttributes} or null) or null. Customer summary included
         * when `expand` names `customer`; `null` when expanded and no customer is linked. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): ({@link ExpandedCustomerSummaryPreviousAttributes}
         * or null). Customer summary included when `expand` names `customer`; `null` when expanded
         * and no customer is linked. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[1].anyOf[2] (Value): null.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer this order belongs to. customer_id.anyOf[1] (Value): string. ID of the customer
         * this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deferred_promotions (Optional): Array of {@link
         * DeferredPromotionPreviousAttributes} or null. Promotions accepted at subscription
         * signup. They attach when the subscription is provisioned and first discount its first
         * charged cycle. They do not discount this order and are separate from discounts and order
         * totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link
         * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They
         * attach when the subscription is provisioned and first discount its first charged cycle.
         * They do not discount this order and are separate from discounts and order totals. Always
         * present; empty when no promotions are deferred. deferred_promotions.anyOf[1][] (Value):
         * {@link DeferredPromotionPreviousAttributes}. deferred_promotions.anyOf[2] (Value): null.
         * delivery (Optional): {@link OrderDeliverySummaryPreviousAttributes} or null. Method,
         * type and recipient of governing_delivery_selection_id. The address remains in
         * delivery_destination. Omitted when no shipment or local-delivery selection governs the
         * order. delivery.anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
         * delivery.anyOf[2] (Value): null. delivery_destination (Optional): {@link
         * OrderDeliveryDestinationPreviousAttributes} or null. The shipment or local-delivery
         * destination committed for this order. Payment freezes this value; fulfillment recipient
         * changes do not replace it. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. delivery_destination.anyOf[1] (Value): {@link
         * OrderDeliveryDestinationPreviousAttributes}. delivery_destination.anyOf[2] (Value):
         * null. discounts (Optional): Array of {@link OrderDiscountPreviousAttributes} or null.
         * Discounts applied to the order, each with its amount, status, and the line items and
         * charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount,
         * status, and the line items and charges it covers. discounts.anyOf[1][] (Value): {@link
         * OrderDiscountPreviousAttributes}. discounts.anyOf[2] (Value): null. dispute_status
         * (Optional): string or null. Aggregate dispute state across the order's counted payment
         * intents, excluding payment_returned. Always returned to merchant credentials and omitted
         * from buyer reads. Open states take precedence in this order: needs_response,
         * under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most
         * severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
         * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present
         * with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link FulfillmentPreviousAttributes}
         * or null. Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link FulfillmentPreviousAttributes}.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1][] (Value): {@link FulfillmentPreviousAttributes}.
         * fulfillments.anyOf[2] (Value): null. gift_card_estimate (Optional): {@link
         * OrderGiftCardEstimatePreviousAttributes} or null. An estimate of how the order balance
         * splits between gift cards and the payment processor. gift_card_estimate.anyOf[1]
         * (Value): {@link OrderGiftCardEstimatePreviousAttributes}. gift_card_estimate.anyOf[2]
         * (Value): null. gift_card_settlements (Optional): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes} or null. The gift card redemptions applied to
         * the order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1][] (Value): {@link
         * OrderGiftCardSettlementPreviousAttributes}. gift_card_settlements.anyOf[2] (Value):
         * null. gift_card_tender_enabled (Optional): boolean or null. Whether gift cards can pay
         * for this order now. Gift cards pay only USD orders that still accept changes, are not
         * subscription purchases, and whose merchant has at least one gift card that is not closed
         * in this environment. Gift cards cannot fund gift card purchases; this is false when
         * those purchases leave no amount eligible for gift card tender. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
         * this is false when those purchases leave no amount eligible for gift card tender.
         * Recomputed on each read; a spent but open card still counts.
         * gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards (Optional): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes} or null. Gift cards available to pay the
         * order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with
         * each card's available balance. gift_cards.anyOf[1][] (Value): {@link
         * OrderGiftCardSelectionPreviousAttributes}. gift_cards.anyOf[2] (Value): null.
         * governing_delivery_selection_id (Optional): string or null or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection.
         * governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandoverPreviousAttributes} or null. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[1] (Value): {@link
         * OrderHandoverPreviousAttributes}. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSourcePreviousAttributes} or null. Where this order's tracked
         * demand is routed. Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. invoice_id (Optional): string or null or null. The invoice associated with this
         * order. Null when the order has no invoice. A replacement invoice replaces this ID;
         * voiding an invoice preserves it. invoice_id.anyOf[1] (Value): string or null. The
         * invoice associated with this order. Null when the order has no invoice. A replacement
         * invoice replaces this ID; voiding an invoice preserves it. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link OrderLineItemPreviousAttributes} or null. Items the order
         * sells, each with its pricing, tax, and fulfillment quantities. line_items.anyOf[1]
         * (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order sells, each
         * with its pricing, tax, and fulfillment quantities. line_items.anyOf[1][] (Value): {@link
         * OrderLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null or null. When `payment_status` became `paid`, including a final capture that
         * releases the remaining balance. Set once and never changed, including after refunds.
         * `null` when `payment_status` isn't `paid`, including an order whose balance was written
         * off without being paid. paid_at.anyOf[1] (Value): string or null. When `payment_status`
         * became `paid`, including a final capture that releases the remaining balance. Set once
         * and never changed, including after refunds. `null` when `payment_status` isn't `paid`,
         * including an order whose balance was written off without being paid. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids
         * (Optional): Array of string or null. IDs of the payment intents created to collect this
         * order. payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents
         * created to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand`
         * names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * payment_link_id (Optional): string or null. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. payment_link_id.anyOf[1] (Value): string.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null.
         * payment_status (Optional): string or null. Collection progress. An invoice write-off
         * also completes collection without receiving the written-off amount. Value enum:
         * "unpaid", "partially_paid", "paid". payment_status.anyOf[1] (Value): string. Collection
         * progress. An invoice write-off also completes collection without receiving the
         * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[2] (Value): null. pending_order_edit_id (Optional): string or null
         * or null. The order edit waiting for its balance payment. While it is set, the units that
         * edit removes can't join a fulfillment and the order refuses another edit. `null` when
         * there is none. Omitted for buyer credentials. Always present with merchant credentials.
         * pending_order_edit_id.anyOf[1] (Value): string or null. The order edit waiting for its
         * balance payment. While it is set, the units that edit removes can't join a fulfillment
         * and the order refuses another edit. `null` when there is none. Omitted for buyer
         * credentials. Always present with merchant credentials. Example:
         * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". pending_order_edit_id.anyOf[2] (Value): null.
         * prepayment_order_id (Optional): string or null or null. Order that paid for this prepaid
         * delivery. Null when this is not a prepaid delivery order. prepayment_order_id.anyOf[1]
         * (Value): string or null. Order that paid for this prepaid delivery. Null when this is
         * not a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * prepayment_order_id.anyOf[2] (Value): null. pricing_amounts (Optional): {@link
         * PricingAmountsPreviousAttributes} or null. The order's money totals: subtotal,
         * discounts, charges, tax, requested tip, and total. pricing_amounts.anyOf[1] (Value):
         * {@link PricingAmountsPreviousAttributes}. pricing_amounts.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the refunds that name this order.
         * This includes refunds Flint makes to return a payment it couldn't accept (`reason`
         * `payment_returned`), which never count toward `refund_status` or the order's refunded
         * amounts. refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that name this
         * order. This includes refunds Flint makes to return a payment it couldn't accept
         * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
         * refunded amounts. refund_ids.anyOf[1][] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. Refund progress for collected money. Refunds with `reason`
         * `payment_returned` return money the order never received and don't count. Value enum:
         * "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value): string. Refund
         * progress for collected money. Refunds with `reason` `payment_returned` return money the
         * order never received and don't count. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. return_credit_settlements (Optional):
         * Array of {@link OrderReturnCreditSettlementPreviousAttributes} or null. Value applied to
         * this order from items the buyer returned, such as an exchange's replacement order.
         * Included in settlement_amounts.paid_money. return_credit_settlements.anyOf[1] (Value):
         * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to this
         * order from items the buyer returned, such as an exchange's replacement order. Included
         * in settlement_amounts.paid_money. return_credit_settlements.anyOf[1][] (Value): {@link
         * OrderReturnCreditSettlementPreviousAttributes}. return_credit_settlements.anyOf[2]
         * (Value): null. return_resolution_id (Optional): string or null. ID of the return
         * resolution that created this order as a replacement. Omitted for orders a return did not
         * create. return_resolution_id.anyOf[1] (Value): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value):
         * null. settlement_amounts (Optional): {@link OrderSettlementAmountsPreviousAttributes} or
         * null. How much of the order has been paid, refunded, credited, written off, and settled
         * as tips, and what is still outstanding. settlement_amounts.anyOf[1] (Value): {@link
         * OrderSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2] (Value): null.
         * status (Optional): string or null. Whether the order still accepts changes and new
         * payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue
         * on a closed order. Value enum: "open", "closed". status.anyOf[1] (Value): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[2] (Value): null. subscription (Optional): ({@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null) or null. Subscription summary
         * included when `expand` names `subscription`; `null` when expanded and this order does
         * not bill a subscription. Present only when `expand` includes `subscription`; `null` when
         * expanded and there is no related subscription. subscription.anyOf[1] (Value): ({@link
         * ExpandedSubscriptionSummaryPreviousAttributes} or null). Subscription summary included
         * when `expand` names `subscription`; `null` when expanded and this order does not bill a
         * subscription. Present only when `expand` includes `subscription`; `null` when expanded
         * and there is no related subscription. subscription.anyOf[1].anyOf[1] (Value): {@link
         * ExpandedSubscriptionSummaryPreviousAttributes}. subscription.anyOf[1].anyOf[2] (Value):
         * null. subscription.anyOf[2] (Value): null. subscription_cycle (Optional): integer or
         * null. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
         * retries and skipped renewals do not advance the cycle. subscription_cycle.anyOf[1]
         * (Value): integer. Charged subscription cycle associated with this order. Signup is cycle
         * 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_cycle.anyOf[2] (Value): null. subscription_delivery_changed_at
         * (Optional): string or null. Time the subscriber changed delivery after this paid renewal
         * was prepared. The order keeps its committed destination until you correct it or refund
         * and replace it. subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
         * subscriber changed delivery after this paid renewal was prepared. The order keeps its
         * committed destination until you correct it or refund and replace it. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value):
         * null. subscription_delivery_number (Optional): integer or null or null. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. subscription_delivery_number.anyOf[1] (Value): integer or
         * null. Position of this delivery among the deliveries one charge paid for, starting at 2.
         * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): ({@link ExpandedSubscriptionPlanSummaryPreviousAttributes}
         * or null) or null. Plan summary included when `expand` names `subscription_plan`; `null`
         * when expanded and this order does not bill a subscription plan. Present only when
         * `expand` includes `subscription_plan`; `null` when expanded and there is no related
         * subscription plan. subscription_plan.anyOf[1] (Value): ({@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included when
         * `expand` names `subscription_plan`; `null` when expanded and this order does not bill a
         * subscription plan. Present only when `expand` includes `subscription_plan`; `null` when
         * expanded and there is no related subscription plan. subscription_plan.anyOf[1].anyOf[1]
         * (Value): {@link ExpandedSubscriptionPlanSummaryPreviousAttributes}.
         * subscription_plan.anyOf[1].anyOf[2] (Value): null. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. ID of the subscription plan this
         * order bills. Absent on an order that isn't from a subscription.
         * subscription_plan_id.anyOf[1] (Value): string. ID of the subscription plan this order
         * bills. Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * OrderTaxPreviousAttributes} or null. The order's tax state: whether tax is enabled, its
         * status, location, exemption, and per-jurisdiction rows. tax.anyOf[1] (Value): {@link
         * OrderTaxPreviousAttributes}. tax.anyOf[2] (Value): null. ticketed_event (Optional):
         * {@link TicketedEventPreviousAttributes} or null. Event and tickets this order sold
         * through an event payment link. Absent on other orders. ticketed_event.anyOf[1] (Value):
         * {@link TicketedEventPreviousAttributes}. ticketed_event.anyOf[2] (Value): null. tips
         * (Optional): Array of {@link TipPreviousAttributes} or null. Tips on the order, each with
         * its requested, settled, and refunded amounts. A tip cleared before payment stays listed
         * as canceled. tips.anyOf[1] (Value): Array of {@link TipPreviousAttributes}. Tips on the
         * order, each with its requested, settled, and refunded amounts. A tip cleared before
         * payment stays listed as canceled. tips.anyOf[1][] (Value): {@link
         * TipPreviousAttributes}. tips.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Order version for optimistic concurrency. Send this value
         * as the expected version when changing the order. Increases with every change to the
         * order. Ignore an order webhook snapshot whose version is lower than one you have already
         * applied. version.anyOf[1] (Value): integer. Order version for optimistic concurrency.
         * Send this value as the expected version when changing the order. Increases with every
         * change to the order. Ignore an order webhook snapshot whose version is lower than one
         * you have already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string or null. The earliest
             * open or resolving payment review on this order's counted payments. `null` when no
             * review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             * anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null) | (unknown));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link
             * OrderChargePreviousAttributes}. Charges added to the order, such as delivery or
             * service fees, each with its applied amount, tax, and refunded amount. anyOf[1][]
             * (Value): {@link OrderChargePreviousAttributes}. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The reference the payment link URL or
             * resolve request carried, such as your user ID. `null` when none was sent or checkout
             * did not start from a payment link. Returned only to merchant credentials; omitted
             * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
             * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string | null) | (null) | (unknown));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment
             * link's custom fields, recorded when checkout started, in the order the link showed
             * the fields. Each answer keeps the field's key, label, and type from that moment, so
             * later changes to the link don't change it. Optional fields the buyer left blank are
             * left out. Read-only. Empty when the order didn't come from a payment link, the link
             * had no custom fields, or the buyer answered none. Orders created before Flint
             * recorded answers here also return an empty list and keep their answers in `metadata`
             * as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link
             * CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): ({@link
             * ExpandedCustomerSummaryPreviousAttributes} or null). Customer summary included when
             * `expand` names `customer`; `null` when expanded and no customer is linked. Present
             * only when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1].anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null.
             * anyOf[2] (Value): null.
             */
            "customer"?: (((((ExpandedCustomerSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link
             * DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup.
             * They attach when the subscription is provisioned and first discount its first
             * charged cycle. They do not discount this order and are separate from discounts and
             * order totals. Always present; empty when no promotions are deferred. anyOf[1][]
             * (Value): {@link DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null) | (unknown));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null) | (unknown));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link
             * OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its
             * amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@link
             * OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link FulfillmentPreviousAttributes}. Fulfillments created for
             * the order, each covering a set of its line items. anyOf[1][] (Value): {@link
             * FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimatePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null) | (unknown));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions
             * applied to the order's payments. anyOf[1][] (Value): {@link
             * OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Gift cards cannot fund
             * gift card purchases; this is false when those purchases leave no amount eligible for
             * gift card tender. Recomputed on each read; a spent but open card still counts.
             * anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards
             * pay only USD orders that still accept changes, are not subscription purchases, and
             * whose merchant has at least one gift card that is not closed in this environment.
             * Gift cards cannot fund gift card purchases; this is false when those purchases leave
             * no amount eligible for gift card tender. Recomputed on each read; a spent but open
             * card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelectionPreviousAttributes}. Gift cards
             * available to pay the order, with each card's available balance. anyOf[1][] (Value):
             * {@link OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string or null. ID of the delivery selection that governs this order,
             * including pickup choices without a delivery destination: the checkout's provisional
             * selection before payment, and the selection a payment committed after. Read it with
             * GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs
             * the order. While set, change the destination through the delivery selection.
             * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandoverPreviousAttributes) | (null) | (unknown));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null) | (unknown));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string or null. The invoice associated with this order. Null when the order
             * has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves
             * it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string | null) | (null) | (unknown));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItemPreviousAttributes}. Items the order
             * sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value):
             * {@link OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string or null. When `payment_status` became
             * `paid`, including a final capture that releases the remaining balance. Set once and
             * never changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string | null) | (null) | (unknown));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents
             * included when `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The order edit waiting for its
             * balance payment. While it is set, the units that edit removes can't join a
             * fulfillment and the order refuses another edit. `null` when there is none. Omitted
             * for buyer credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string or null. Order that paid for this prepaid delivery.
             * Null when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlementPreviousAttributes}. Value applied to
             * this order from items the buyer returned, such as an exchange's replacement order.
             * Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null) | (unknown));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): ({@link ExpandedSubscriptionSummaryPreviousAttributes} or null).
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedSubscriptionSummaryPreviousAttributes}.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription"?: (((((ExpandedSubscriptionSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer or null.
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24. anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): ({@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included
             * when `expand` names `subscription_plan`; `null` when expanded and this order does
             * not bill a subscription plan. Present only when `expand` includes
             * `subscription_plan`; `null` when expanded and there is no related subscription plan.
             * anyOf[1].anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: (((((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTaxPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTaxPreviousAttributes) | (null) | (unknown));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEventPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null) | (unknown));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * TipPreviousAttributes}. Tips on the order, each with its requested, settled, and
             * refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][]
             * (Value): {@link TipPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
export type OrdersCancelEditParams = (InputValue<CancelOrderEditRequestInput> | {
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
    /**
     * Exact edit status. Values match any supplied status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "completed", "canceled". Value enum:
     * "pending", "completed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "completed", "canceled". anyOf[1][] (Value): string. Value enum: "pending",
     * "completed", "canceled". anyOf[2] (Value): string. Value enum: "pending", "completed",
     * "canceled".
     */
    "status"?: InputValue<("pending" | "completed" | "canceled") | readonly ("pending" | "completed" | "canceled")[]>;
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
