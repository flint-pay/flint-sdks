<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_reference
 * @property-read string $type
 * @property-read string $unavailable_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CallerSuppliedDeliveryOutcomeRequestUnavailableInput extends Model {
    /** @param array{'merchant_reference'?: string, 'type': string, 'unavailable_reason': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CallerSuppliedDeliveryOutcomeRequestUnavailableInput')); }
    /** Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Whether the method has a rate, is unavailable, or could not be priced. Value enum: "unavailable".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     * @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
