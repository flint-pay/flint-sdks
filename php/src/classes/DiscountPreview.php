<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PromotionCandidate> $applied
 * @property-read list<PromotionCandidate> $available
 * @property-read list<PromotionCandidate> $skipped
 * Presence-aware response; omitted optional fields return null. */
final class DiscountPreview extends Model {
    /** @param array{'applied': list<mixed>, 'available': list<mixed>, 'skipped': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreview')); }
    /** Shape $ (Value): Array of {@see PromotionCandidate}. Shape $[] (Value): {@see PromotionCandidate}. A promotion considered for an order, with its discount amounts, its stacking rules, and why it was or was not applied.
     * @return list<PromotionCandidate>
     */
    public function getApplied(): array { return $this->get('applied'); }
    public function hasApplied(): bool { return $this->has('applied'); }
    /** Shape $ (Value): Array of {@see PromotionCandidate}. Shape $[] (Value): {@see PromotionCandidate}. A promotion considered for an order, with its discount amounts, its stacking rules, and why it was or was not applied.
     * @return list<PromotionCandidate>
     */
    public function getAvailable(): array { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Shape $ (Value): Array of {@see PromotionCandidate}. Shape $[] (Value): {@see PromotionCandidate}. A promotion considered for an order, with its discount amounts, its stacking rules, and why it was or was not applied.
     * @return list<PromotionCandidate>
     */
    public function getSkipped(): array { return $this->get('skipped'); }
    public function hasSkipped(): bool { return $this->has('skipped'); }
}
