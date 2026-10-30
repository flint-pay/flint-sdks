<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $promotion_id
 * @property-read array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsUpdateInput extends Model {
    /** @param array{'promotion_id': string, 'body': array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsUpdateInput')); }
    /** Flint promotion ID. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** The request body for: Update promotion.
     * @return array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
