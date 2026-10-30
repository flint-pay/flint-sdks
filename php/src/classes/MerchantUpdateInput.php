<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'reporting_timezone'?: string, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'website_url'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantUpdateInput extends Model {
    /** @param array{'body': array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'reporting_timezone'?: string, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'website_url'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdateInput')); }
    /** The request body for: Update merchant. Example: {"business_name":"Flint Events LLC","metadata":{"segment":"festivals"},"phone":"+14155550000","support_email":"help@example.com"}.
     * @return array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'reporting_timezone'?: string, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'website_url'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
