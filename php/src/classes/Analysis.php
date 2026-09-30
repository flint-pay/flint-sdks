<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $applicability
 * @property-read list<string> $attributes_used
 * @property-read list<string> $list_aliases_used
 * @property-read string $stage
 * Presence-aware response; omitted fields throw when accessed. */
final class Analysis extends Model {
    /** @param array{'applicability': string, 'attributes_used': list<string>, 'list_aliases_used'?: list<string>, 'stage': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Analysis')); }
    /** @return string
     * @throws SdkError When applicability is omitted; use hasApplicability() or valueOrDefault().
     */
    public function getApplicability(): string { return $this->get('applicability'); }
    public function hasApplicability(): bool { return $this->has('applicability'); }
    /** @return list<string>
     * @throws SdkError When attributes_used is omitted; use hasAttributesUsed() or valueOrDefault().
     */
    public function getAttributesUsed(): array { return $this->get('attributes_used'); }
    public function hasAttributesUsed(): bool { return $this->has('attributes_used'); }
    /** @return list<string>
     * @throws SdkError When list_aliases_used is omitted; use hasListAliasesUsed() or valueOrDefault().
     */
    public function getListAliasesUsed(): array { return $this->get('list_aliases_used'); }
    public function hasListAliasesUsed(): bool { return $this->has('list_aliases_used'); }
    /** @return string
     * @throws SdkError When stage is omitted; use hasStage() or valueOrDefault().
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
}
