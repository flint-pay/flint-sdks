<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextAddressAdvisoriesItem> $address_advisories
 * @property-read ?string $failure_category
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItem> $input_requirements
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOption $option
 * @property-read ?bool $retryable
 * @property-read string $type
 * @property-read ?string $unavailable_reason
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext extends Model {
    /** @param array{'address_advisories'?: list<mixed>, 'failure_category'?: string, 'input_requirements'?: list<mixed>, 'option'?: mixed, 'retryable'?: bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContext')); }
    /** Shape $ (Value): Array of ({@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextAddressAdvisoriesItem} and {@see DeliveryAddressAdvisoryResource}). Shape $[] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextAddressAdvisoriesItem}. An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextAddressAdvisoriesItem>
     */
    public function getAddressAdvisories(): ?array { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** Shape $ (Value): string. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Value enum: "dependency_failure", "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open", "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input", "address_verification_failed", "address_could_not_be_verified".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Shape $ (Value): Array of ({@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItem} and {@see DeliveryInputRequirement}). Shape $[] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItem}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItem>
     */
    public function getInputRequirements(): ?array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOption}. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOption
     */
    public function getOption(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOption { return $this->get('option'); }
    public function hasOption(): bool { return $this->has('option'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRetryable(): ?bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Shape $ (Value): string.  Value enum: "requires_checkout_context".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: Choose an origin or method backed by available inventory. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
