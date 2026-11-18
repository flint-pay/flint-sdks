<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $message
 * @property-read string|\DateTimeInterface|null $started_at
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxAttentionPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'message'?: string|null, 'started_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxAttentionPreviousAttributesInput')); }
    /** tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Value enum: "tax_commitment_failed". anyOf[1] (Value): string. tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Value enum: "tax_commitment_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Merchant-facing explanation and next step. anyOf[1] (Value): string. Merchant-facing explanation and next step. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): mixed { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** When this outstanding tax issue was first recorded, in UTC. anyOf[1] (Value): string. When this outstanding tax issue was first recorded, in UTC. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): mixed { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
