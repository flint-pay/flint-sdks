<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'application_method': mixed, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: mixed, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'application_method': mixed, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: mixed, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create promotion.
     * @return array{'application_method': mixed, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: mixed, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
