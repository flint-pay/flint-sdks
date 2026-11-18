<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $message
 * @property-read string|null $started_at
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxAttentionPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'message'?: mixed, 'started_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxAttentionPreviousAttributes')); }
    /** tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Value enum: "tax_commitment_failed". anyOf[1] (Value): string. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Value enum: "tax_commitment_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Merchant-facing explanation and next step. anyOf[1] (Value): string. Merchant-facing explanation and next step. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** When this outstanding tax issue was first recorded, in UTC. anyOf[1] (Value): string. When this outstanding tax issue was first recorded, in UTC. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
