<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_id
 * @property-read int $quantity
 * @property-read PublicCatalogTextModifierRequestInput|array<array-key, mixed>|\stdClass $text
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicCatalogModifierInputCatalogInput extends Model {
    /** @param array{'modifier_id': string, 'quantity'?: int, 'text'?: PublicCatalogTextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicCatalogModifierInputCatalogInput')); }
    /** ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     * @return string
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group.
     * @return PublicCatalogTextModifierRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Selects a catalog modifier or a text modifier. Value enum: "catalog".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
