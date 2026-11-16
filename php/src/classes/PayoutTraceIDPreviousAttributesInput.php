<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $status
 * @property-read string|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutTraceIDPreviousAttributesInput extends Model {
    /** @param array{'status'?: string|null, 'value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutTraceIDPreviousAttributesInput')); }
    /** Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported". anyOf[1] (Value): string. Whether a bank trace ID is available. Unmapped trace states are returned as unsupported. Value enum: "pending", "available", "unsupported". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The bank's trace number for the deposit, when Flint has it. anyOf[1] (Value): string. The bank's trace number for the deposit, when Flint has it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
