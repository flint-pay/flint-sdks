<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read MerchantUpdatedMerchantEventDataObject $object
 * @property-read ?MerchantUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class MerchantUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'address'?: mixed, 'api_version'?: mixed, 'api_version_changed_at'?: mixed, 'api_version_pinned_at'?: mixed, 'api_version_previous'?: mixed, 'api_version_rollback_expires_at'?: mixed, 'business_name'?: mixed, 'business_type'?: mixed, 'created_at'?: mixed, 'email'?: mixed, 'icon'?: mixed, 'logo'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'phone'?: mixed, 'readiness'?: mixed, 'status'?: mixed, 'support_email'?: mixed, 'support_phone'?: mixed, 'support_url'?: mixed, 'timezone'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'website_url'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`.
     * @return MerchantUpdatedMerchantEventDataObject
     */
    public function getObject(): MerchantUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?MerchantUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?MerchantUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
