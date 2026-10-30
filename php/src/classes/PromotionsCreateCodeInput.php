<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $promotion_id
 * @property-read array{'code': string, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: int, 'metadata'?: mixed, 'status'?: string, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsCreateCodeInput extends Model {
    /** @param array{'promotion_id': string, 'body': array{'code': string, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: int, 'metadata'?: mixed, 'status'?: string, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsCreateCodeInput')); }
    /** Flint promotion ID. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** The request body for: Create promotion code. Example: {"code":"VIP20","expires_at":"2026-04-01T00:00:00Z","max_uses":100,"metadata":{"audience":"vip"}}.
     * @return array{'code': string, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: int, 'metadata'?: mixed, 'status'?: string, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
