<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderChargeRequestInput|array<array-key, mixed>|\stdClass $charge
 * Presence-aware input; omitted fields throw when accessed. */
final class AddOrderChargeRequestInput extends Model {
    /** @param array{'charge': OrderChargeRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddOrderChargeRequestInput')); }
    /** @return OrderChargeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge is omitted; use hasCharge() or valueOrDefault().
     */
    public function getCharge(): mixed { return $this->get('charge'); }
    public function hasCharge(): bool { return $this->has('charge'); }
}
