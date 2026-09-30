<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $new_email
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateEmailChangeRequestInput extends Model {
    /** @param array{'new_email': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateEmailChangeRequestInput')); }
    /** @return string
     * @throws SdkError When new_email is omitted; use hasNewEmail() or valueOrDefault().
     */
    public function getNewEmail(): string { return $this->get('new_email'); }
    public function hasNewEmail(): bool { return $this->has('new_email'); }
}
