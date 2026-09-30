<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'application_method': array{'type'?: string, 'percent_off': mixed, ...}|object|array{'type'?: string, 'amount_off_money': mixed, ...}|object|array{'type'?: string, 'qualifying_item_rules': mixed, 'buy_min_quantity': mixed, 'discounted_item_rules': mixed, 'get_quantity': mixed, 'get_percent_off': mixed, ...}|object, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<mixed>}|object|array{'any': list<mixed>}|object, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'stacking_mode'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'application_method': array{'type'?: string, 'percent_off': mixed, ...}|object|array{'type'?: string, 'amount_off_money': mixed, ...}|object|array{'type'?: string, 'qualifying_item_rules': mixed, 'buy_min_quantity': mixed, 'discounted_item_rules': mixed, 'get_quantity': mixed, 'get_percent_off': mixed, ...}|object, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<mixed>}|object|array{'any': list<mixed>}|object, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'stacking_mode'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsCreateInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'application_method': array{'type'?: string, 'percent_off': mixed, ...}|object|array{'type'?: string, 'amount_off_money': mixed, ...}|object|array{'type'?: string, 'qualifying_item_rules': mixed, 'buy_min_quantity': mixed, 'discounted_item_rules': mixed, 'get_quantity': mixed, 'get_percent_off': mixed, ...}|object, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<mixed>}|object|array{'any': list<mixed>}|object, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'stacking_mode'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
