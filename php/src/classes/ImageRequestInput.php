<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alt
 * @property-read string $external_reference_id
 * @property-read string $source_url
 * Presence-aware input; omitted fields throw when accessed. */
final class ImageRequestInput extends Model {
    /** @param array{'alt'?: string, 'external_reference_id'?: string, 'source_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageRequestInput')); }
    /** @return string
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When source_url is omitted; use hasSourceUrl() or valueOrDefault().
     */
    public function getSourceUrl(): string { return $this->get('source_url'); }
    public function hasSourceUrl(): bool { return $this->has('source_url'); }
}
