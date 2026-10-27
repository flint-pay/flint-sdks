<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $promotion_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsGetInput extends Model {
    /** @param array{'promotion_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
