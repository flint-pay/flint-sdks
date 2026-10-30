<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'frozen_at'?: string|\DateTimeInterface, 'name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClocksCreateInput extends Model {
    /** @param array{'body'?: array{'frozen_at'?: string|\DateTimeInterface, 'name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClocksCreateInput')); }
    /** The request body for: Create a test clock. Example: {"frozen_at":"2026-11-01T00:00:00Z","name":"Annual renewal test"}.
     * @return array{'frozen_at'?: string|\DateTimeInterface, 'name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
