<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $status
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class PayoutTraceIDPreviousAttributes extends Model {
    /** @param array{'status'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutTraceIDPreviousAttributes')); }
    /** Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported". anyOf[1] (Value): string. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The bank's trace number for the deposit, when Flint has it. anyOf[1] (Value): string. The bank's trace number for the deposit, when Flint has it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
