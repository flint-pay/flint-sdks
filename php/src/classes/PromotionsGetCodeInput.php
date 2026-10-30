<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $promotion_id
 * @property-read string $promotion_code_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsGetCodeInput extends Model {
    /** @param array{'promotion_id': string, 'promotion_code_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsGetCodeInput')); }
    /** Flint promotion ID. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Flint promotion code ID. Example: "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
}
