<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PromotionCandidate> $applied
 * @property-read list<PromotionCandidate> $available
 * @property-read list<PromotionCandidate> $skipped
 * Presence-aware response; omitted fields throw when accessed. */
final class DiscountPreview extends Model {
    /** @param array{'applied': list<mixed>, 'available': list<mixed>, 'skipped': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreview')); }
    /** @return list<PromotionCandidate>
     * @throws SdkError When applied is omitted; use hasApplied() or valueOrDefault().
     */
    public function getApplied(): array { return $this->get('applied'); }
    public function hasApplied(): bool { return $this->has('applied'); }
    /** @return list<PromotionCandidate>
     * @throws SdkError When available is omitted; use hasAvailable() or valueOrDefault().
     */
    public function getAvailable(): array { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** @return list<PromotionCandidate>
     * @throws SdkError When skipped is omitted; use hasSkipped() or valueOrDefault().
     */
    public function getSkipped(): array { return $this->get('skipped'); }
    public function hasSkipped(): bool { return $this->has('skipped'); }
}
