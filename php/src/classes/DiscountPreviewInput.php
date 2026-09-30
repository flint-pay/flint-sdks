<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PromotionCandidateInput|array<array-key, mixed>|\stdClass> $applied
 * @property-read list<PromotionCandidateInput|array<array-key, mixed>|\stdClass> $available
 * @property-read list<PromotionCandidateInput|array<array-key, mixed>|\stdClass> $skipped
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewInput extends Model {
    /** @param array{'applied': list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>, 'available': list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>, 'skipped': list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewInput')); }
    /** @return list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When applied is omitted; use hasApplied() or valueOrDefault().
     */
    public function getApplied(): array { return $this->get('applied'); }
    public function hasApplied(): bool { return $this->has('applied'); }
    /** @return list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When available is omitted; use hasAvailable() or valueOrDefault().
     */
    public function getAvailable(): array { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** @return list<PromotionCandidateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When skipped is omitted; use hasSkipped() or valueOrDefault().
     */
    public function getSkipped(): array { return $this->get('skipped'); }
    public function hasSkipped(): bool { return $this->has('skipped'); }
}
