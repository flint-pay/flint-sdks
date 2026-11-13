<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryAddressAdvisoryResourceInput|array<array-key, mixed>|\stdClass> $address_advisories
 * @property-read list<string> $allowed_types
 * @property-read string $availability_status
 * @property-read array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass $candidate_outcomes
 * @property-read string $delivery_choice_group_id
 * @property-read string $evaluation_status
 * @property-read list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass> $execution_legs
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<string> $method_types
 * @property-read list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_estimate'?: DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass, 'buyer_instructions': BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id': string, 'delivery_plan': DeliveryPlanInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'display_position': int, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'expires_at'?: string|\DateTimeInterface, 'local_delivery'?: DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass, 'name': string, 'offered_windows'?: list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>, 'pickup'?: DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'recommended': bool, 'shipment'?: DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string|\DateTimeInterface, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string|\DateTimeInterface, ...}|object> $options
 * @property-read string $previously_selected_delivery_method_id
 * @property-read string $stable_key
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteChoiceGroupResourceInput extends Model {
    /** @param array{'address_advisories'?: list<DeliveryAddressAdvisoryResourceInput|array<array-key, mixed>|\stdClass>, 'allowed_types'?: list<string>, 'availability_status': string, 'candidate_outcomes'?: array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass, 'delivery_choice_group_id': string, 'evaluation_status': string, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>, 'method_types': list<string>, 'options': list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_estimate'?: DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass, 'buyer_instructions': BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id': string, 'delivery_plan': DeliveryPlanInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'display_position': int, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'expires_at'?: string|\DateTimeInterface, 'local_delivery'?: DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass, 'name': string, 'offered_windows'?: list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>, 'pickup'?: DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'recommended': bool, 'shipment'?: DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string|\DateTimeInterface, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string|\DateTimeInterface, ...}|object>, 'previously_selected_delivery_method_id'?: string, 'stable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourceInput')); }
    /** Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. [] (Value): {@see DeliveryAddressAdvisoryResourceInput}. An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.
     * @return list<DeliveryAddressAdvisoryResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When address_advisories is omitted; use hasAddressAdvisories() or valueOrDefault().
     */
    public function getAddressAdvisories(): array { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** Delivery types permitted by this group's items. [] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Whether this group has a delivery option the buyer can choose. Value enum: "ready", "needs_input", "unavailable".
     * @return string
     * @throws SdkError When availability_status is omitted; use hasAvailabilityStatus() or valueOrDefault().
     */
    public function getAvailabilityStatus(): string { return $this->get('availability_status'); }
    public function hasAvailabilityStatus(): bool { return $this->has('availability_status'); }
    /** Evaluation result for each candidate delivery method, keyed by its method ID. * (Value): {@see DeliveryCandidateOutcomeResourceInput}. The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.
     * @return array<array-key, DeliveryCandidateOutcomeResourceInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When candidate_outcomes is omitted; use hasCandidateOutcomes() or valueOrDefault().
     */
    public function getCandidateOutcomes(): array|object { return $this->get('candidate_outcomes'); }
    public function hasCandidateOutcomes(): bool { return $this->has('candidate_outcomes'); }
    /** Identifier used to choose one option for this group. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** How completely Flint evaluated the group's candidate delivery methods. Value enum: "complete", "incomplete", "degraded".
     * @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. [] (Value): {@see DeliveryQuoteExecutionLegResourceInput}. One leg of a delivery choice group, identifying the origin Location the group's items leave from.
     * @return list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When execution_legs is omitted; use hasExecutionLegs() or valueOrDefault().
     */
    public function getExecutionLegs(): array { return $this->get('execution_legs'); }
    public function hasExecutionLegs(): bool { return $this->has('execution_legs'); }
    /** Inputs this group's delivery methods need before they can be priced or selected. [] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Order line items, or bundle components, this group covers, with the quantity covered. [] (Value): {@see DeliveryQuoteLineItemResourceInput}. An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.
     * @return list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string.  Value enum: "shipment", "pickup", "local_delivery".
     * @return list<string>
     * @throws SdkError When method_types is omitted; use hasMethodTypes() or valueOrDefault().
     */
    public function getMethodTypes(): array { return $this->get('method_types'); }
    public function hasMethodTypes(): bool { return $this->has('method_types'); }
    /** Delivery options the buyer can choose now. [] (Value): {@see DeliveryOptionProjectionInput}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. [].amount_money (Required): {@see MoneyValueInput}. Delivery charge for this option. Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].arrival_estimate (Optional): {@see DeliveryArrivalEstimateInput}. Estimated arrival dates. Omitted when the method makes no timing promise. The estimated arrival date range for a delivery option, as calendar dates in the option's timezone. [].buyer_instructions (Required): {@see BuyerInstructionsConfigInput}. The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. [].charge_tax_category (Optional): string. Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". [].consumed_by_delivery_selection_id (Optional): string. ID of the delivery selection that chose this option. Omitted until a selection does. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". [].delivery_method_id (Required): string. ID of the delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". [].delivery_method_revision_id (Optional): string. ID of the method revision this option was priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". [].delivery_option_id (Required): string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". [].delivery_plan (Required): {@see DeliveryPlanInput}. How the option divides the items into deliveries. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. [].description (Optional): string. Buyer-visible description of the option. Omitted when the method has none. [].display_position (Required): integer. Position in which this option displays among the others. Lower values display first. Format: int32. [].execution_legs (Optional): Array of {@see DeliveryQuoteExecutionLegResourceInput}. Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. [].execution_legs[] (Value): {@see DeliveryQuoteExecutionLegResourceInput}. One leg of a delivery choice group, identifying the origin Location the group's items leave from. [].expires_at (Optional): string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: date-time. Example: "2026-08-02T16:00:00Z". [].local_delivery (Optional): {@see DeliveryLocalDeliveryDetailsInput}. Local delivery details. Set only when `type` is `local_delivery`. Details of a local delivery option: instructions and service level. [].name (Required): string. Buyer-visible name of the option. [].offered_windows (Optional): Array of {@see DeliveryWindowResourceInput}. Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. [].offered_windows[] (Value): {@see DeliveryWindowResourceInput}. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen. [].pickup (Optional): {@see DeliveryPickupDetailsInput}. Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location. [].recipient_requirements (Optional): Array of {@see DeliveryRecipientRequirementInput}. Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. [].recipient_requirements[] (Value): {@see DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use. [].recommended (Required): boolean. Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. [].shipment (Optional): {@see DeliveryShipmentDetailsInput}. Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. [].taxable (Required): boolean. Whether tax applies to the delivery charge. [].timezone (Optional): string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: "America/New_York". [].type (Required): string. Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". [].window_end_at (Optional): string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z". [].window_pricing (Optional): string. Whether the offered windows cost the same. Value enum: "uniform", "varies". [].window_selection (Required): string. Whether the buyer chooses a delivery window. Value enum: "none", "offered". [].window_start_at (Optional): string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_estimate'?: DeliveryArrivalEstimateInput|array<array-key, mixed>|\stdClass, 'buyer_instructions': BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'consumed_by_delivery_selection_id'?: string, 'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_option_id': string, 'delivery_plan': DeliveryPlanInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'display_position': int, 'execution_legs'?: list<DeliveryQuoteExecutionLegResourceInput|array<array-key, mixed>|\stdClass>, 'expires_at'?: string|\DateTimeInterface, 'local_delivery'?: DeliveryLocalDeliveryDetailsInput|array<array-key, mixed>|\stdClass, 'name': string, 'offered_windows'?: list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>, 'pickup'?: DeliveryPickupDetailsInput|array<array-key, mixed>|\stdClass, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'recommended': bool, 'shipment'?: DeliveryShipmentDetailsInput|array<array-key, mixed>|\stdClass, 'taxable': bool, 'timezone'?: string, 'type': string, 'window_end_at'?: string|\DateTimeInterface, 'window_pricing'?: string, 'window_selection': string, 'window_start_at'?: string|\DateTimeInterface, ...}|object>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Method chosen for this group in the previous selection. Omitted when there is none. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When previously_selected_delivery_method_id is omitted; use hasPreviouslySelectedDeliveryMethodId() or valueOrDefault().
     */
    public function getPreviouslySelectedDeliveryMethodId(): string { return $this->get('previously_selected_delivery_method_id'); }
    public function hasPreviouslySelectedDeliveryMethodId(): bool { return $this->has('previously_selected_delivery_method_id'); }
    /** Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change.
     * @return string
     * @throws SdkError When stable_key is omitted; use hasStableKey() or valueOrDefault().
     */
    public function getStableKey(): string { return $this->get('stable_key'); }
    public function hasStableKey(): bool { return $this->has('stable_key'); }
}
