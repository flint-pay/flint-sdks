<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $status
 * @property-read ?string $value
 * Presence-aware response; omitted optional fields return null. */
final class PayoutTraceID extends Model {
    /** @param array{'status': string, 'value'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutTraceID')); }
    /** Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The bank's trace number for the deposit, when Flint has it.
     * @return ?string
     */
    public function getValue(): ?string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
