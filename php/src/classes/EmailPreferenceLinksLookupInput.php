<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'token': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailPreferenceLinksLookupInput extends Model {
    /** @param array{'body': array{'token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLinksLookupInput')); }
    /** The request body for: Look up an email preference link; Unsubscribe an email preference link. Example: {"token":"b3BlbmFwaS1maXh0dXJl.eyJ2IjoxLCJwIjoic2FuZGJveCIsImQiOiJlZGVsXzAxS0VaRjdDMDA4OU1SRThFRjc4SFIxRzI2In0.6c_I5nt_K3eTi7XxJJ95dXgQZjGlaY_lVlp64YJPxuo"}.
     * @return array{'token': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
