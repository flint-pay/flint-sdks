<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_id
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoriesRemoveInput extends Model {
    /** @param array{'category_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoriesRemoveInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
}
