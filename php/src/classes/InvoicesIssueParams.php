<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_mode
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesIssueParams extends Model {
    /** @param array{'delivery_mode'?: string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesIssueParams')); }
    /** How the invoice reaches its recipient. Omit it to use merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     * @return string
     * @throws SdkError When delivery_mode is omitted; use hasDeliveryMode() or valueOrDefault().
     */
    public function getDeliveryMode(): string { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
    /** Invoice version last read. Optional; a stale version returns VERSION_CONFLICT. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
