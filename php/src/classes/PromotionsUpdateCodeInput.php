<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $promotion_id
 * @property-read string $promotion_code_id
 * @property-read array{'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'status'?: string, 'timezone'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsUpdateCodeInput extends Model {
    /** @param array{'promotion_id': string, 'promotion_code_id': string, 'body': array{'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'status'?: string, 'timezone'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsUpdateCodeInput')); }
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
    /** The request body for: Update promotion code. Example: {"expected_version":1,"max_uses":50,"status":"inactive"}.
     * @return array{'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'status'?: string, 'timezone'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
