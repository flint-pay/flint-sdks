<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $status
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutTraceIDInput extends Model {
    /** @param array{'status': string, 'value'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutTraceIDInput')); }
    /** Shape $ (Value): string. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. The bank's trace number for the deposit, when Flint has it.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
