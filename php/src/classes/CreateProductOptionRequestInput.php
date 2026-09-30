<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_option_key
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $position
 * @property-read string $status
 * @property-read list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateProductOptionRequestInput extends Model {
    /** @param array{'client_option_key'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'position'?: int, 'status'?: string, 'values'?: list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateProductOptionRequestInput')); }
    /** @return string
     * @throws SdkError When client_option_key is omitted; use hasClientOptionKey() or valueOrDefault().
     */
    public function getClientOptionKey(): string { return $this->get('client_option_key'); }
    public function hasClientOptionKey(): bool { return $this->has('client_option_key'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
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
    /** @return list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
