<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_id
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsUpdateParams extends Model {
    /** @param array{'customer_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsUpdateParams')); }
    /** Omission preserves the association; null clears it. minLength: 1. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The gift card version last read. The command changes this card only when its current version matches. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
}
