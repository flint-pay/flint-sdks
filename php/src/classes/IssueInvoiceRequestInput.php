<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_mode
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class IssueInvoiceRequestInput extends Model {
    /** @param array{'delivery_mode'?: string, 'expected_version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueInvoiceRequestInput')); }
    /** @return string
     * @throws SdkError When delivery_mode is omitted; use hasDeliveryMode() or valueOrDefault().
     */
    public function getDeliveryMode(): string { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
