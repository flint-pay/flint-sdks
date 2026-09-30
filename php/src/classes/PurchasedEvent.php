<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location
 * @property-read string $name
 * @property-read string $starts_at
 * @property-read string $timezone
 * Presence-aware response; omitted fields throw when accessed. */
final class PurchasedEvent extends Model {
    /** @param array{'location'?: string, 'name': string, 'starts_at'?: string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PurchasedEvent')); }
    /** @return string
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): string { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
