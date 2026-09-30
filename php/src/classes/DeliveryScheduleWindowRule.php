<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailability $availability
 * @property-read bool $offer_windows
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryScheduleWindowRule extends Model {
    /** @param array{'availability': mixed, 'offer_windows': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRule')); }
    /** @return DeliveryAvailability
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): DeliveryAvailability { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** @return bool
     * @throws SdkError When offer_windows is omitted; use hasOfferWindows() or valueOrDefault().
     */
    public function getOfferWindows(): bool { return $this->get('offer_windows'); }
    public function hasOfferWindows(): bool { return $this->has('offer_windows'); }
}
