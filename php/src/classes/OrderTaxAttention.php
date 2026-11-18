<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string $started_at
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxAttention extends Model {
    /** @param array{'code': string, 'message': string, 'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxAttention')); }
    /** tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Value enum: "tax_commitment_failed".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Merchant-facing explanation and next step.
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** When this outstanding tax issue was first recorded, in UTC. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
