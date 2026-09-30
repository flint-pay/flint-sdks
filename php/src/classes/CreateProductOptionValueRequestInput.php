<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_value_key
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read int $position
 * @property-read string $status
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateProductOptionValueRequestInput extends Model {
    /** @param array{'client_value_key'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'position'?: int, 'status'?: string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateProductOptionValueRequestInput')); }
    /** @return string
     * @throws SdkError When client_value_key is omitted; use hasClientValueKey() or valueOrDefault().
     */
    public function getClientValueKey(): string { return $this->get('client_value_key'); }
    public function hasClientValueKey(): bool { return $this->has('client_value_key'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
