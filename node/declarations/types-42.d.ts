import type { MerchantWebhookEnvelope, MetadataMap, Modifier, ModifierGroup, MetadataRequestInput } from './types-41.js';
import type { TextModifierConfig, TextModifierConfigPreviousAttributes } from './types-72.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { ResponseMeta, ResponseWarning, ResourceReference, ResourceReferencePreviousAttributes } from './types-60.js';
import type { InputValue } from '../runtime.js';
import type { CreateModifierGroupRequestInput, CreateModifierSetRequestInput } from './types-11.js';
import type { DisputesAcceptParams } from './types-25.js';
import type { UpdateModifierGroupRequestInput, UpdateModifierSetRequestInput } from './types-74.js';
import type { InlineModifierGroupRequest, InlineModifierGroupRequestInput } from './types-31.js';
import type { ReadinessMerchantAccountSession, ReadinessMerchantAccountSessionPreviousAttributes } from './types-58.js';
import type { OAuthTokenRequestRefreshToken, OAuthTokenRequestTokenExchange } from './types-43.js';
/**
 * The `modifier_group.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object and {@link ModifierGroupPreviousAttributes}. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allow_quantities (Optional): boolean or null. Whether buyers can select
     * more than one unit of a list modifier. previous_attributes.allow_quantities.anyOf[1]
     * (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * previous_attributes.allow_quantities.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the modifier group was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the modifier group was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_quantity (Optional): integer or null. Maximum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. previous_attributes.max_quantity.anyOf[1] (Value): integer. Maximum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. previous_attributes.max_quantity.anyOf[2]
     * (Value): null. previous_attributes.max_selected (Optional): integer or null. Maximum number
     * of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier
     * set can override this value. previous_attributes.max_selected.anyOf[1] (Value): integer.
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     * previous_attributes.max_selected.anyOf[2] (Value): null.
     * previous_attributes.max_total_quantity (Optional): integer or null. Maximum combined
     * whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. previous_attributes.max_total_quantity.anyOf[1] (Value): integer. Maximum
     * combined whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. Format: int64. previous_attributes.max_total_quantity.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier group. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.min_quantity
     * (Optional): integer or null. Minimum whole-number quantity for each selected list modifier
     * when allow_quantities is true; fractional quantities are not supported.
     * previous_attributes.min_quantity.anyOf[1] (Value): integer. Minimum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. previous_attributes.min_quantity.anyOf[2] (Value): null.
     * previous_attributes.min_selected (Optional): integer or null. Minimum number of distinct
     * modifiers buyers must select from a list group. Omit it to require no selections. A modifier
     * set can override this value. previous_attributes.min_selected.anyOf[1] (Value): integer.
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     * previous_attributes.min_selected.anyOf[2] (Value): null.
     * previous_attributes.modifier_group_id (Optional): string or null. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
     * previous_attributes.modifier_group_id.anyOf[1] (Value): string. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". previous_attributes.modifier_group_id.anyOf[2] (Value):
     * null. previous_attributes.modifier_group_type (Optional): string or null. Whether buyers
     * choose from a list of modifiers or enter text. On create, inferred as text when text
     * configuration is supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[1] (Value): string. Whether buyers choose from
     * a list of modifiers or enter text. On create, inferred as text when text configuration is
     * supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[2] (Value): null.
     * previous_attributes.modifiers (Optional): Array of {@link ModifierPreviousAttributes} or
     * null. Choices in a list group. Only active modifiers whose set override's available is not
     * false are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1] (Value): Array of {@link ModifierPreviousAttributes}.
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
     * previous_attributes.modifiers.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name of the modifier group shown to buyers.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the modifier group shown to
     * buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.show_on_fulfillment (Optional): boolean or null. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[2] (Value): null.
     * previous_attributes.show_on_receipt (Optional): boolean or null. Whether selections from
     * this group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
     * group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status of the modifier group. Only active groups can
     * be offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.text
     * (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules for a
     * text group. Use text.required to require a value; list groups use min_selected instead.
     * previous_attributes.text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
     * previous_attributes.text.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. When the modifier group or its modifiers last changed, as an RFC3339
     * timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the modifier group
     * or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Version of the modifier group and
     * its modifiers. previous_attributes.version.anyOf[1] (Value): integer. Version of the
     * modifier group and its modifiers. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allow_quantities (Optional): boolean or null.
         * Whether buyers can select more than one unit of a list modifier.
         * allow_quantities.anyOf[1] (Value): boolean. Whether buyers can select more than one unit
         * of a list modifier. allow_quantities.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When the modifier group was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When the modifier group was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_quantity
         * (Optional): integer or null. Maximum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported.
         * max_quantity.anyOf[1] (Value): integer. Maximum whole-number quantity for each selected
         * list modifier when allow_quantities is true; fractional quantities are not supported.
         * Format: int64. max_quantity.anyOf[2] (Value): null. max_selected (Optional): integer or
         * null. Maximum number of distinct modifiers buyers can select from a list group. Omit it
         * for no limit. A modifier set can override this value. max_selected.anyOf[1] (Value):
         * integer. Maximum number of distinct modifiers buyers can select from a list group. Omit
         * it for no limit. A modifier set can override this value. Format: int32.
         * max_selected.anyOf[2] (Value): null. max_total_quantity (Optional): integer or null.
         * Maximum combined whole-number quantity across selected list modifiers; fractional
         * quantities are not supported. max_total_quantity.anyOf[1] (Value): integer. Maximum
         * combined whole-number quantity across selected list modifiers; fractional quantities are
         * not supported. Format: int64. max_total_quantity.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. Identifier of the merchant that owns this modifier group.
         * merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be
         * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
         * cannot be written through the public API. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. min_quantity (Optional): integer or null.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. min_quantity.anyOf[1] (Value): integer.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. Format: int64. min_quantity.anyOf[2]
         * (Value): null. min_selected (Optional): integer or null. Minimum number of distinct
         * modifiers buyers must select from a list group. Omit it to require no selections. A
         * modifier set can override this value. min_selected.anyOf[1] (Value): integer. Minimum
         * number of distinct modifiers buyers must select from a list group. Omit it to require no
         * selections. A modifier set can override this value. Format: int32. min_selected.anyOf[2]
         * (Value): null. modifier_group_id (Optional): string or null. Stable identifier of the
         * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
         * modifier_group_id.anyOf[1] (Value): string. Stable identifier of the modifier group. For
         * a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
         * "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_id.anyOf[2] (Value): null.
         * modifier_group_type (Optional): string or null. Whether buyers choose from a list of
         * modifiers or enter text. On create, inferred as text when text configuration is
         * supplied, otherwise list. Value enum: "list", "text". modifier_group_type.anyOf[1]
         * (Value): string. Whether buyers choose from a list of modifiers or enter text. On
         * create, inferred as text when text configuration is supplied, otherwise list. Value
         * enum: "list", "text". modifier_group_type.anyOf[2] (Value): null. modifiers (Optional):
         * Array of {@link ModifierPreviousAttributes} or null. Choices in a list group. Only
         * active modifiers whose set override's available is not false are offered to buyers. Text
         * groups do not have choices. modifiers.anyOf[1] (Value): Array of {@link
         * ModifierPreviousAttributes}. Choices in a list group. Only active modifiers whose set
         * override's available is not false are offered to buyers. Text groups do not have
         * choices. modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
         * modifiers.anyOf[2] (Value): null. name (Optional): string or null. Name of the modifier
         * group shown to buyers. name.anyOf[1] (Value): string. Name of the modifier group shown
         * to buyers. name.anyOf[2] (Value): null. show_on_fulfillment (Optional): boolean or null.
         * Whether selections from this group appear in fulfillment details unless overridden for a
         * modifier set. show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
         * this group appear in fulfillment details unless overridden for a modifier set.
         * show_on_fulfillment.anyOf[2] (Value): null. show_on_receipt (Optional): boolean or null.
         * Whether selections from this group appear on buyer receipts unless overridden for a
         * modifier set. show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
         * group appear on buyer receipts unless overridden for a modifier set.
         * show_on_receipt.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". status.anyOf[1] (Value): string. Lifecycle status of the modifier group.
         * Only active groups can be offered to buyers; archived groups remain readable and cannot
         * be edited. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null.
         * text (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules
         * for a text group. Use text.required to require a value; list groups use min_selected
         * instead. text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
         * text.anyOf[2] (Value): null. updated_at (Optional): string or null. When the modifier
         * group or its modifiers last changed, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the modifier group or its modifiers last changed, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Version of the modifier group and
         * its modifiers. version.anyOf[1] (Value): integer. Version of the modifier group and its
         * modifiers. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value):
             * boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2]
             * (Value): null.
             */
            "allow_quantities"?: ((boolean) | (null));
            /**
             * When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier group was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_quantity"?: ((number) | (null));
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. anyOf[1] (Value): integer.
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32. anyOf[2]
             * (Value): null.
             */
            "max_selected"?: ((number) | (null));
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. anyOf[1] (Value): integer. Maximum combined
             * whole-number quantity across selected list modifiers; fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_total_quantity"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "min_quantity"?: ((number) | (null));
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. anyOf[1] (Value):
             * integer. Minimum number of distinct modifiers buyers must select from a list group.
             * Omit it to require no selections. A modifier set can override this value. Format:
             * int32. anyOf[2] (Value): null.
             */
            "min_selected"?: ((number) | (null));
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier
             * of the modifier group. For a group a modifier set owns (`source: inline`), read it
             * through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
             * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
             */
            "modifier_group_id"?: ((string) | (null));
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or
             * enter text. On create, inferred as text when text configuration is supplied,
             * otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
             */
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. anyOf[1] (Value):
             * Array of {@link ModifierPreviousAttributes}. Choices in a list group. Only active
             * modifiers whose set override's available is not false are offered to buyers. Text
             * groups do not have choices. anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            /**
             * Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the
             * modifier group shown to buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group
             * appear in fulfillment details unless overridden for a modifier set. anyOf[2]
             * (Value): null.
             */
            "show_on_fulfillment"?: ((boolean) | (null));
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear
             * on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
             */
            "show_on_receipt"?: ((boolean) | (null));
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * group. Only active groups can be offered to buyers; archived groups remain readable
             * and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. anyOf[1] (Value): {@link
             * TextModifierConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as
             * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version
             * of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
});
export type ModifierGroupCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.created";
});
/**
 * The `modifier_group.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `modifier_group.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
});
/** A page of `ModifierGroup` objects. */
export type ModifierGroupListResponse = {
    /**
     * Modifier groups matching the request filters for this page. [] (Value): {@link
     * ModifierGroup}. A group of choices that customize an item.
     */
    "data": Array<ModifierGroup>;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Pass this token as page_token to read the next page with the same filters. Absent when there
     * are no more results.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierGroupPreviousAttributes = {
    /**
     * Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value): boolean.
     * Whether buyers can select more than one unit of a list modifier. anyOf[2] (Value): null.
     */
    "allow_quantities"?: ((boolean) | (null));
    /**
     * When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When
     * the modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. anyOf[1] (Value): integer. Maximum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. anyOf[1] (Value): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. anyOf[2] (Value): null.
     */
    "max_selected"?: ((number) | (null));
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. anyOf[1] (Value): integer. Maximum combined whole-number quantity across
     * selected list modifiers; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string.
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     */
    "merchant_id"?: ((string) | (null));
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value):
     * {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null) | (unknown));
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. anyOf[1] (Value): integer. Minimum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. anyOf[1] (Value): integer.
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_selected"?: ((number) | (null));
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it. anyOf[1] (Value): string. Stable identifier of the modifier group. For a group a
     * modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     */
    "modifier_group_id"?: ((string) | (null));
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text". anyOf[1]
     * (Value): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". anyOf[2] (Value): null.
     */
    "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. anyOf[1] (Value): Array of {@link
     * ModifierPreviousAttributes}. Choices in a list group. Only active modifiers whose set
     * override's available is not false are offered to buyers. Text groups do not have choices.
     * anyOf[1][] (Value): {@link ModifierPreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
    /**
     * Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the modifier
     * group shown to buyers. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear in
     * fulfillment details unless overridden for a modifier set. anyOf[2] (Value): null.
     */
    "show_on_fulfillment"?: ((boolean) | (null));
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set. anyOf[1] (Value): boolean. Whether selections from this group appear on buyer receipts
     * unless overridden for a modifier set. anyOf[2] (Value): null.
     */
    "show_on_receipt"?: ((boolean) | (null));
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived". anyOf[1] (Value): string. Lifecycle status of the modifier group. Only active
     * groups can be offered to buyers; archived groups remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
    /**
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. anyOf[1]
     * (Value): string. When the modifier group or its modifiers last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version of the
     * modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/** A response containing `ModifierGroup` data. */
export type ModifierGroupResponse = {
    /** The modifier group returned by this operation. A group of choices that customize an item. */
    "data": ModifierGroup;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierGroupUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allow_quantities"?: ((boolean) | (null));
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_quantity"?: ((number) | (null));
            "max_selected"?: ((number) | (null));
            "max_total_quantity"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "min_quantity"?: ((number) | (null));
            "min_selected"?: ((number) | (null));
            "modifier_group_id"?: ((string) | (null));
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            "name"?: ((string) | (null));
            "show_on_fulfillment"?: ((boolean) | (null));
            "show_on_receipt"?: ((boolean) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allow_quantities"?: ((boolean) | (null));
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_quantity"?: ((number) | (null));
            "max_selected"?: ((number) | (null));
            "max_total_quantity"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "min_quantity"?: ((number) | (null));
            "min_selected"?: ((number) | (null));
            "modifier_group_id"?: ((string) | (null));
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            "name"?: ((string) | (null));
            "show_on_fulfillment"?: ((boolean) | (null));
            "show_on_receipt"?: ((boolean) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.updated";
});
/**
 * The `modifier_group.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object and {@link ModifierGroupPreviousAttributes}. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allow_quantities (Optional): boolean or null. Whether buyers can select
     * more than one unit of a list modifier. previous_attributes.allow_quantities.anyOf[1]
     * (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * previous_attributes.allow_quantities.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the modifier group was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the modifier group was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_quantity (Optional): integer or null. Maximum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. previous_attributes.max_quantity.anyOf[1] (Value): integer. Maximum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. previous_attributes.max_quantity.anyOf[2]
     * (Value): null. previous_attributes.max_selected (Optional): integer or null. Maximum number
     * of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier
     * set can override this value. previous_attributes.max_selected.anyOf[1] (Value): integer.
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     * previous_attributes.max_selected.anyOf[2] (Value): null.
     * previous_attributes.max_total_quantity (Optional): integer or null. Maximum combined
     * whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. previous_attributes.max_total_quantity.anyOf[1] (Value): integer. Maximum
     * combined whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. Format: int64. previous_attributes.max_total_quantity.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier group. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.min_quantity
     * (Optional): integer or null. Minimum whole-number quantity for each selected list modifier
     * when allow_quantities is true; fractional quantities are not supported.
     * previous_attributes.min_quantity.anyOf[1] (Value): integer. Minimum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. previous_attributes.min_quantity.anyOf[2] (Value): null.
     * previous_attributes.min_selected (Optional): integer or null. Minimum number of distinct
     * modifiers buyers must select from a list group. Omit it to require no selections. A modifier
     * set can override this value. previous_attributes.min_selected.anyOf[1] (Value): integer.
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     * previous_attributes.min_selected.anyOf[2] (Value): null.
     * previous_attributes.modifier_group_id (Optional): string or null. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
     * previous_attributes.modifier_group_id.anyOf[1] (Value): string. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". previous_attributes.modifier_group_id.anyOf[2] (Value):
     * null. previous_attributes.modifier_group_type (Optional): string or null. Whether buyers
     * choose from a list of modifiers or enter text. On create, inferred as text when text
     * configuration is supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[1] (Value): string. Whether buyers choose from
     * a list of modifiers or enter text. On create, inferred as text when text configuration is
     * supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[2] (Value): null.
     * previous_attributes.modifiers (Optional): Array of {@link ModifierPreviousAttributes} or
     * null. Choices in a list group. Only active modifiers whose set override's available is not
     * false are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1] (Value): Array of {@link ModifierPreviousAttributes}.
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
     * previous_attributes.modifiers.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name of the modifier group shown to buyers.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the modifier group shown to
     * buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.show_on_fulfillment (Optional): boolean or null. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[2] (Value): null.
     * previous_attributes.show_on_receipt (Optional): boolean or null. Whether selections from
     * this group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
     * group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status of the modifier group. Only active groups can
     * be offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.text
     * (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules for a
     * text group. Use text.required to require a value; list groups use min_selected instead.
     * previous_attributes.text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
     * previous_attributes.text.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. When the modifier group or its modifiers last changed, as an RFC3339
     * timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the modifier group
     * or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Version of the modifier group and
     * its modifiers. previous_attributes.version.anyOf[1] (Value): integer. Version of the
     * modifier group and its modifiers. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allow_quantities (Optional): boolean or null.
         * Whether buyers can select more than one unit of a list modifier.
         * allow_quantities.anyOf[1] (Value): boolean. Whether buyers can select more than one unit
         * of a list modifier. allow_quantities.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When the modifier group was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When the modifier group was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_quantity
         * (Optional): integer or null. Maximum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported.
         * max_quantity.anyOf[1] (Value): integer. Maximum whole-number quantity for each selected
         * list modifier when allow_quantities is true; fractional quantities are not supported.
         * Format: int64. max_quantity.anyOf[2] (Value): null. max_selected (Optional): integer or
         * null. Maximum number of distinct modifiers buyers can select from a list group. Omit it
         * for no limit. A modifier set can override this value. max_selected.anyOf[1] (Value):
         * integer. Maximum number of distinct modifiers buyers can select from a list group. Omit
         * it for no limit. A modifier set can override this value. Format: int32.
         * max_selected.anyOf[2] (Value): null. max_total_quantity (Optional): integer or null.
         * Maximum combined whole-number quantity across selected list modifiers; fractional
         * quantities are not supported. max_total_quantity.anyOf[1] (Value): integer. Maximum
         * combined whole-number quantity across selected list modifiers; fractional quantities are
         * not supported. Format: int64. max_total_quantity.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. Identifier of the merchant that owns this modifier group.
         * merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be
         * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
         * cannot be written through the public API. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. min_quantity (Optional): integer or null.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. min_quantity.anyOf[1] (Value): integer.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. Format: int64. min_quantity.anyOf[2]
         * (Value): null. min_selected (Optional): integer or null. Minimum number of distinct
         * modifiers buyers must select from a list group. Omit it to require no selections. A
         * modifier set can override this value. min_selected.anyOf[1] (Value): integer. Minimum
         * number of distinct modifiers buyers must select from a list group. Omit it to require no
         * selections. A modifier set can override this value. Format: int32. min_selected.anyOf[2]
         * (Value): null. modifier_group_id (Optional): string or null. Stable identifier of the
         * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
         * modifier_group_id.anyOf[1] (Value): string. Stable identifier of the modifier group. For
         * a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
         * "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_id.anyOf[2] (Value): null.
         * modifier_group_type (Optional): string or null. Whether buyers choose from a list of
         * modifiers or enter text. On create, inferred as text when text configuration is
         * supplied, otherwise list. Value enum: "list", "text". modifier_group_type.anyOf[1]
         * (Value): string. Whether buyers choose from a list of modifiers or enter text. On
         * create, inferred as text when text configuration is supplied, otherwise list. Value
         * enum: "list", "text". modifier_group_type.anyOf[2] (Value): null. modifiers (Optional):
         * Array of {@link ModifierPreviousAttributes} or null. Choices in a list group. Only
         * active modifiers whose set override's available is not false are offered to buyers. Text
         * groups do not have choices. modifiers.anyOf[1] (Value): Array of {@link
         * ModifierPreviousAttributes}. Choices in a list group. Only active modifiers whose set
         * override's available is not false are offered to buyers. Text groups do not have
         * choices. modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
         * modifiers.anyOf[2] (Value): null. name (Optional): string or null. Name of the modifier
         * group shown to buyers. name.anyOf[1] (Value): string. Name of the modifier group shown
         * to buyers. name.anyOf[2] (Value): null. show_on_fulfillment (Optional): boolean or null.
         * Whether selections from this group appear in fulfillment details unless overridden for a
         * modifier set. show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
         * this group appear in fulfillment details unless overridden for a modifier set.
         * show_on_fulfillment.anyOf[2] (Value): null. show_on_receipt (Optional): boolean or null.
         * Whether selections from this group appear on buyer receipts unless overridden for a
         * modifier set. show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
         * group appear on buyer receipts unless overridden for a modifier set.
         * show_on_receipt.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". status.anyOf[1] (Value): string. Lifecycle status of the modifier group.
         * Only active groups can be offered to buyers; archived groups remain readable and cannot
         * be edited. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null.
         * text (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules
         * for a text group. Use text.required to require a value; list groups use min_selected
         * instead. text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
         * text.anyOf[2] (Value): null. updated_at (Optional): string or null. When the modifier
         * group or its modifiers last changed, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the modifier group or its modifiers last changed, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Version of the modifier group and
         * its modifiers. version.anyOf[1] (Value): integer. Version of the modifier group and its
         * modifiers. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value):
             * boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2]
             * (Value): null.
             */
            "allow_quantities"?: ((boolean) | (null));
            /**
             * When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier group was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_quantity"?: ((number) | (null));
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. anyOf[1] (Value): integer.
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32. anyOf[2]
             * (Value): null.
             */
            "max_selected"?: ((number) | (null));
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. anyOf[1] (Value): integer. Maximum combined
             * whole-number quantity across selected list modifiers; fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_total_quantity"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "min_quantity"?: ((number) | (null));
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. anyOf[1] (Value):
             * integer. Minimum number of distinct modifiers buyers must select from a list group.
             * Omit it to require no selections. A modifier set can override this value. Format:
             * int32. anyOf[2] (Value): null.
             */
            "min_selected"?: ((number) | (null));
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier
             * of the modifier group. For a group a modifier set owns (`source: inline`), read it
             * through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
             * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
             */
            "modifier_group_id"?: ((string) | (null));
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or
             * enter text. On create, inferred as text when text configuration is supplied,
             * otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
             */
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. anyOf[1] (Value):
             * Array of {@link ModifierPreviousAttributes}. Choices in a list group. Only active
             * modifiers whose set override's available is not false are offered to buyers. Text
             * groups do not have choices. anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            /**
             * Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the
             * modifier group shown to buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group
             * appear in fulfillment details unless overridden for a modifier set. anyOf[2]
             * (Value): null.
             */
            "show_on_fulfillment"?: ((boolean) | (null));
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear
             * on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
             */
            "show_on_receipt"?: ((boolean) | (null));
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * group. Only active groups can be offered to buyers; archived groups remain readable
             * and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. anyOf[1] (Value): {@link
             * TextModifierConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as
             * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version
             * of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `modifier_group.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object and {@link ModifierGroupPreviousAttributes}. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allow_quantities (Optional): boolean or null. Whether buyers can select
     * more than one unit of a list modifier. previous_attributes.allow_quantities.anyOf[1]
     * (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * previous_attributes.allow_quantities.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the modifier group was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the modifier group was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_quantity (Optional): integer or null. Maximum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. previous_attributes.max_quantity.anyOf[1] (Value): integer. Maximum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. previous_attributes.max_quantity.anyOf[2]
     * (Value): null. previous_attributes.max_selected (Optional): integer or null. Maximum number
     * of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier
     * set can override this value. previous_attributes.max_selected.anyOf[1] (Value): integer.
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     * previous_attributes.max_selected.anyOf[2] (Value): null.
     * previous_attributes.max_total_quantity (Optional): integer or null. Maximum combined
     * whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. previous_attributes.max_total_quantity.anyOf[1] (Value): integer. Maximum
     * combined whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. Format: int64. previous_attributes.max_total_quantity.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier group. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.min_quantity
     * (Optional): integer or null. Minimum whole-number quantity for each selected list modifier
     * when allow_quantities is true; fractional quantities are not supported.
     * previous_attributes.min_quantity.anyOf[1] (Value): integer. Minimum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. previous_attributes.min_quantity.anyOf[2] (Value): null.
     * previous_attributes.min_selected (Optional): integer or null. Minimum number of distinct
     * modifiers buyers must select from a list group. Omit it to require no selections. A modifier
     * set can override this value. previous_attributes.min_selected.anyOf[1] (Value): integer.
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     * previous_attributes.min_selected.anyOf[2] (Value): null.
     * previous_attributes.modifier_group_id (Optional): string or null. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
     * previous_attributes.modifier_group_id.anyOf[1] (Value): string. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". previous_attributes.modifier_group_id.anyOf[2] (Value):
     * null. previous_attributes.modifier_group_type (Optional): string or null. Whether buyers
     * choose from a list of modifiers or enter text. On create, inferred as text when text
     * configuration is supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[1] (Value): string. Whether buyers choose from
     * a list of modifiers or enter text. On create, inferred as text when text configuration is
     * supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[2] (Value): null.
     * previous_attributes.modifiers (Optional): Array of {@link ModifierPreviousAttributes} or
     * null. Choices in a list group. Only active modifiers whose set override's available is not
     * false are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1] (Value): Array of {@link ModifierPreviousAttributes}.
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
     * previous_attributes.modifiers.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name of the modifier group shown to buyers.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the modifier group shown to
     * buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.show_on_fulfillment (Optional): boolean or null. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[2] (Value): null.
     * previous_attributes.show_on_receipt (Optional): boolean or null. Whether selections from
     * this group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
     * group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status of the modifier group. Only active groups can
     * be offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.text
     * (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules for a
     * text group. Use text.required to require a value; list groups use min_selected instead.
     * previous_attributes.text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
     * previous_attributes.text.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. When the modifier group or its modifiers last changed, as an RFC3339
     * timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the modifier group
     * or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Version of the modifier group and
     * its modifiers. previous_attributes.version.anyOf[1] (Value): integer. Version of the
     * modifier group and its modifiers. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allow_quantities (Optional): boolean or null.
         * Whether buyers can select more than one unit of a list modifier.
         * allow_quantities.anyOf[1] (Value): boolean. Whether buyers can select more than one unit
         * of a list modifier. allow_quantities.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When the modifier group was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When the modifier group was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_quantity
         * (Optional): integer or null. Maximum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported.
         * max_quantity.anyOf[1] (Value): integer. Maximum whole-number quantity for each selected
         * list modifier when allow_quantities is true; fractional quantities are not supported.
         * Format: int64. max_quantity.anyOf[2] (Value): null. max_selected (Optional): integer or
         * null. Maximum number of distinct modifiers buyers can select from a list group. Omit it
         * for no limit. A modifier set can override this value. max_selected.anyOf[1] (Value):
         * integer. Maximum number of distinct modifiers buyers can select from a list group. Omit
         * it for no limit. A modifier set can override this value. Format: int32.
         * max_selected.anyOf[2] (Value): null. max_total_quantity (Optional): integer or null.
         * Maximum combined whole-number quantity across selected list modifiers; fractional
         * quantities are not supported. max_total_quantity.anyOf[1] (Value): integer. Maximum
         * combined whole-number quantity across selected list modifiers; fractional quantities are
         * not supported. Format: int64. max_total_quantity.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. Identifier of the merchant that owns this modifier group.
         * merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be
         * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
         * cannot be written through the public API. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. min_quantity (Optional): integer or null.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. min_quantity.anyOf[1] (Value): integer.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. Format: int64. min_quantity.anyOf[2]
         * (Value): null. min_selected (Optional): integer or null. Minimum number of distinct
         * modifiers buyers must select from a list group. Omit it to require no selections. A
         * modifier set can override this value. min_selected.anyOf[1] (Value): integer. Minimum
         * number of distinct modifiers buyers must select from a list group. Omit it to require no
         * selections. A modifier set can override this value. Format: int32. min_selected.anyOf[2]
         * (Value): null. modifier_group_id (Optional): string or null. Stable identifier of the
         * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
         * modifier_group_id.anyOf[1] (Value): string. Stable identifier of the modifier group. For
         * a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
         * "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_id.anyOf[2] (Value): null.
         * modifier_group_type (Optional): string or null. Whether buyers choose from a list of
         * modifiers or enter text. On create, inferred as text when text configuration is
         * supplied, otherwise list. Value enum: "list", "text". modifier_group_type.anyOf[1]
         * (Value): string. Whether buyers choose from a list of modifiers or enter text. On
         * create, inferred as text when text configuration is supplied, otherwise list. Value
         * enum: "list", "text". modifier_group_type.anyOf[2] (Value): null. modifiers (Optional):
         * Array of {@link ModifierPreviousAttributes} or null. Choices in a list group. Only
         * active modifiers whose set override's available is not false are offered to buyers. Text
         * groups do not have choices. modifiers.anyOf[1] (Value): Array of {@link
         * ModifierPreviousAttributes}. Choices in a list group. Only active modifiers whose set
         * override's available is not false are offered to buyers. Text groups do not have
         * choices. modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
         * modifiers.anyOf[2] (Value): null. name (Optional): string or null. Name of the modifier
         * group shown to buyers. name.anyOf[1] (Value): string. Name of the modifier group shown
         * to buyers. name.anyOf[2] (Value): null. show_on_fulfillment (Optional): boolean or null.
         * Whether selections from this group appear in fulfillment details unless overridden for a
         * modifier set. show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
         * this group appear in fulfillment details unless overridden for a modifier set.
         * show_on_fulfillment.anyOf[2] (Value): null. show_on_receipt (Optional): boolean or null.
         * Whether selections from this group appear on buyer receipts unless overridden for a
         * modifier set. show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
         * group appear on buyer receipts unless overridden for a modifier set.
         * show_on_receipt.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". status.anyOf[1] (Value): string. Lifecycle status of the modifier group.
         * Only active groups can be offered to buyers; archived groups remain readable and cannot
         * be edited. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null.
         * text (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules
         * for a text group. Use text.required to require a value; list groups use min_selected
         * instead. text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
         * text.anyOf[2] (Value): null. updated_at (Optional): string or null. When the modifier
         * group or its modifiers last changed, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the modifier group or its modifiers last changed, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Version of the modifier group and
         * its modifiers. version.anyOf[1] (Value): integer. Version of the modifier group and its
         * modifiers. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value):
             * boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2]
             * (Value): null.
             */
            "allow_quantities"?: ((boolean) | (null));
            /**
             * When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier group was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_quantity"?: ((number) | (null));
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. anyOf[1] (Value): integer.
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32. anyOf[2]
             * (Value): null.
             */
            "max_selected"?: ((number) | (null));
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. anyOf[1] (Value): integer. Maximum combined
             * whole-number quantity across selected list modifiers; fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_total_quantity"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "min_quantity"?: ((number) | (null));
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. anyOf[1] (Value):
             * integer. Minimum number of distinct modifiers buyers must select from a list group.
             * Omit it to require no selections. A modifier set can override this value. Format:
             * int32. anyOf[2] (Value): null.
             */
            "min_selected"?: ((number) | (null));
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier
             * of the modifier group. For a group a modifier set owns (`source: inline`), read it
             * through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
             * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
             */
            "modifier_group_id"?: ((string) | (null));
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or
             * enter text. On create, inferred as text when text configuration is supplied,
             * otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
             */
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. anyOf[1] (Value):
             * Array of {@link ModifierPreviousAttributes}. Choices in a list group. Only active
             * modifiers whose set override's available is not false are offered to buyers. Text
             * groups do not have choices. anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            /**
             * Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the
             * modifier group shown to buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group
             * appear in fulfillment details unless overridden for a modifier set. anyOf[2]
             * (Value): null.
             */
            "show_on_fulfillment"?: ((boolean) | (null));
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear
             * on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
             */
            "show_on_receipt"?: ((boolean) | (null));
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * group. Only active groups can be offered to buyers; archived groups remain readable
             * and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. anyOf[1] (Value): {@link
             * TextModifierConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as
             * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version
             * of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
});
export type ModifierGroupsCreateParams = (InputValue<CreateModifierGroupRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierGroupsDeleteParams = {
    /**
     * Optional modifier group version last read by the caller. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierGroupsGetParams = DisputesAcceptParams;
export type ModifierGroupsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by modifier group type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "list", "text". Value enum: "list", "text". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "list", "text". anyOf[1][] (Value): string. Value enum:
     * "list", "text". anyOf[2] (Value): string. Value enum: "list", "text".
     */
    "modifier_group_type"?: InputValue<("list" | "text") | readonly ("list" | "text")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier group ID, external reference ID, and name. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as mg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_group_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierGroupsUpdateParams = (InputValue<UpdateModifierGroupRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverride = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Identifier of the list modifier these overrides apply to. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
export type ModifierOverridePreviousAttributes = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. anyOf[1] (Value): boolean. Whether this modifier can be offered in this
     * set. Defaults to true; the modifier must also have status active. Default: true. anyOf[2]
     * (Value): null.
     */
    "available"?: ((boolean) | (null));
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. anyOf[1] (Value): integer. Overrides the modifier's default_quantity for
     * this set. Omit it to use the modifier's value. Ignored when the choice is unavailable.
     * Quantities are whole numbers; fractional quantities are not supported. Format: int64.
     * anyOf[2] (Value): null.
     */
    "default_quantity"?: ((number) | (null));
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission". anyOf[1] (Value): string. Overrides the modifier's line_item_tax_category for
     * this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods",
     * "digital_goods", "software", "saas", "services", "professional_services", "food",
     * "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     */
    "line_item_tax_category"?: (("general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {}))
        | (null));
    /**
     * Identifier of the list modifier these overrides apply to. anyOf[1] (Value): string.
     * Identifier of the list modifier these overrides apply to. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     */
    "modifier_id"?: ((string) | (null));
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable. anyOf[1] (Value): boolean. Overrides the
     * modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored
     * when the choice is unavailable. anyOf[2] (Value): null.
     */
    "selected_by_default"?: ((boolean) | (null));
    /**
     * Overrides the modifier's taxable for this set. Omit it to use the modifier's value. anyOf[1]
     * (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the
     * modifier's value. anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_delta_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
};
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverrideRequestInput = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Identifier of the list modifier these overrides apply to. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
export type ModifierPreviousAttributes = {
    /**
     * When the modifier was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the
     * modifier was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. anyOf[1] (Value): integer. Whole-number quantity selected by default.
     * Used only when the choice is available and selected_by_default is true. A modifier set can
     * override this value; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "default_quantity"?: ((number) | (null));
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint line-item tax
     * category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission". anyOf[2] (Value): null.
     */
    "line_item_tax_category"?: (("general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {}))
        | (null));
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value):
     * {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null) | (unknown));
    /**
     * Identifier of the group that owns this modifier. For an inline group, read the group through
     * its modifier set. anyOf[1] (Value): string. Identifier of the group that owns this modifier.
     * For an inline group, read the group through its modifier set. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     */
    "modifier_group_id"?: ((string) | (null));
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. anyOf[1] (Value): string. Stable identifier of the modifier. In a
     * replacement request, include it to retain a modifier or omit it to create one. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     */
    "modifier_id"?: ((string) | (null));
    /**
     * Name of the choice shown to buyers. anyOf[1] (Value): string. Name of the choice shown to
     * buyers. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Display position of the choice within its group; lower values appear first. anyOf[1]
     * (Value): integer. Display position of the choice within its group; lower values appear
     * first. Format: int32. anyOf[2] (Value): null.
     */
    "position"?: ((number) | (null));
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * anyOf[1] (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. anyOf[2] (Value): null.
     */
    "selected_by_default"?: ((boolean) | (null));
    /**
     * Whether this modifier appears in fulfillment details. anyOf[1] (Value): boolean. Whether
     * this modifier appears in fulfillment details. anyOf[2] (Value): null.
     */
    "show_on_fulfillment"?: ((boolean) | (null));
    /**
     * Whether this modifier appears on buyer receipts. anyOf[1] (Value): boolean. Whether this
     * modifier appears on buyer receipts. anyOf[2] (Value): null.
     */
    "show_on_receipt"?: ((boolean) | (null));
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the
     * modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
    /**
     * Whether this modifier's price is taxable. A modifier set can override this value. anyOf[1]
     * (Value): boolean. Whether this modifier's price is taxable. A modifier set can override this
     * value. anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "unit_price_delta_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
    /**
     * When the modifier last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the
     * modifier last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
};
/**
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequest = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequestInput = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** A reusable collection of customization groups. */
export type ModifierSet = {
    /**
     * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as it appears in a
     * modifier set, with its selection limits, display options, and per-modifier overrides.
     */
    "modifier_groups": Array<ModifierSetGroup>;
    /**
     * Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string;
    /** Name used to identify this modifier set. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When the modifier set or any group it contains last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ModifierSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.archived";
});
/**
 * The `modifier_set.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `modifier_set.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
});
export type ModifierSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.created";
});
/**
 * The `modifier_set.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `modifier_set.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
});
/**
 * A modifier group as it appears in a modifier set, with its selection limits, display options,
 * and per-modifier overrides.
 */
export type ModifierSetGroup = {
    /** Overrides the group's name for this set. Omit it to use the group's name. */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Full modifier group for this entry, with the same representation as GET
     * /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source,
     * including when the group is archived. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
    /**
     * Stable identifier of the group contained in this entry, for either source. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. Example: "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id": string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position": number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
};
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExisting = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
}));
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExistingInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing";
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInline = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInlineInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline";
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
export type ModifierSetGroupPreviousAttributes = {
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. anyOf[1] (Value):
     * string. Overrides the group's name for this set. Omit it to use the group's name. anyOf[2]
     * (Value): null.
     */
    "display_name"?: ((string) | (null));
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. anyOf[1] (Value): integer.
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_selected"?: ((number) | (null));
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. anyOf[1] (Value): integer. Overrides the group's min_selected for this
     * set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to
     * require a selection. If neither value is set, the minimum is 0. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_selected"?: ((number) | (null));
    /**
     * Full modifier group for this entry, with the same representation as GET
     * /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source,
     * including when the group is archived. anyOf[1] (Value): {@link
     * ModifierGroupPreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifier_group"?: ((ModifierGroupPreviousAttributes) | (null) | (unknown));
    /**
     * Stable identifier of the group contained in this entry, for either source. anyOf[1] (Value):
     * string. Stable identifier of the group contained in this entry, for either source. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     */
    "modifier_group_id"?: ((string) | (null));
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. anyOf[1] (Value): Array of
     * {@link ModifierOverridePreviousAttributes}. Overrides for individual list modifiers in this
     * set. A choice is offered only when its status is active and its override's available is not
     * false. anyOf[1][] (Value): {@link ModifierOverridePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "modifier_overrides"?: ((Array<ModifierOverridePreviousAttributes>) | (null));
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. anyOf[1] (Value): string. Stable identifier of
     * this group entry within the set. In a replacement request, include it to retain an entry or
     * omit it to create one. Example: "msg_01KEZF7C008GXTVA2AQ1SRFGFC". anyOf[2] (Value): null.
     */
    "modifier_set_group_id"?: ((string) | (null));
    /**
     * Display position of this group within the set; lower values appear first. anyOf[1] (Value):
     * integer. Display position of this group within the set; lower values appear first. Format:
     * int32. anyOf[2] (Value): null.
     */
    "position"?: ((number) | (null));
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[1]
     * (Value): boolean. Overrides the group's text.required for this set. Omit it to use the
     * group's value. Accepted only for text groups; for a list group, set min_selected: 1 to
     * require a selection. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
    /**
     * Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value.
     * anyOf[1] (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it
     * to use the group's value. anyOf[2] (Value): null.
     */
    "show_on_fulfillment"?: ((boolean) | (null));
    /**
     * Overrides the group's show_on_receipt for this set. Omit it to use the group's value.
     * anyOf[1] (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to
     * use the group's value. anyOf[2] (Value): null.
     */
    "show_on_receipt"?: ((boolean) | (null));
    /**
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing", "inline". anyOf[1] (Value): string. Inline
     * groups are owned by this modifier set. Existing groups are independent resources referenced
     * by this set. Value enum: "existing", "inline". anyOf[2] (Value): null.
     */
    "source"?: (("existing" | "inline" | (string & {})) | (null));
};
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequest = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequestInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<ModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** A page of `ModifierSet` objects. */
export type ModifierSetListResponse = {
    /**
     * Modifier sets matching the request filters for this page. [] (Value): {@link ModifierSet}. A
     * reusable collection of customization groups.
     */
    "data": Array<ModifierSet>;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Pass this token as page_token to read the next page with the same filters. Absent when there
     * are no more results.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetPreviousAttributes = {
    /**
     * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When
     * the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * anyOf[2] (Value): null.
     */
    "merchant_id"?: ((string) | (null));
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value):
     * {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null) | (unknown));
    /**
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. anyOf[1][] (Value): {@link ModifierSetGroupPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
    /**
     * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value): string.
     * Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
     */
    "modifier_set_id"?: ((string) | (null));
    /**
     * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to identify
     * this modifier set. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
    /**
     * When the modifier set or any group it contains last changed, as an RFC3339 timestamp.
     * anyOf[1] (Value): string. When the modifier set or any group it contains last changed, as an
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
     * null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Version of the modifier set, including the groups it contains. anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/** A response containing `ModifierSet` data. */
export type ModifierSetResponse = {
    /**
     * The modifier set returned by this operation. A reusable collection of customization groups.
     */
    "data": ModifierSet;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.updated";
});
/**
 * The `modifier_set.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `modifier_set.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object and {@link ModifierSetPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.created_at (Optional): string or null. When the
     * modifier set was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier set. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.modifier_groups (Optional): Array of {@link
     * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set, including
     * the full content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1] (Value): Array of {@link
     * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full
     * content of reusable groups and groups owned by the set.
     * previous_attributes.modifier_groups.anyOf[1][] (Value): {@link
     * ModifierSetGroupPreviousAttributes}. previous_attributes.modifier_groups.anyOf[2] (Value):
     * null. previous_attributes.modifier_set_id (Optional): string or null. Stable identifier of
     * the modifier set assigned to catalog items. previous_attributes.modifier_set_id.anyOf[1]
     * (Value): string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[1] (Value): string. Name used to identify this modifier
     * set. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status of the modifier set. Only active sets can be offered to
     * buyers; archived sets remain readable and cannot be edited. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status of the modifier set. Only active sets can be offered to buyers; archived sets remain
     * readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the modifier set or any group it contains last changed, as
     * an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Version of the modifier set,
     * including the groups it contains. previous_attributes.version.anyOf[1] (Value): integer.
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. When the
         * modifier set was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this modifier set. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this modifier set. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. metadata.anyOf[1] (Value): {@link MetadataMap}.
         * metadata.anyOf[2] (Value): null. modifier_groups (Optional): Array of {@link
         * ModifierSetGroupPreviousAttributes} or null. Ordered group entries in this set,
         * including the full content of reusable groups and groups owned by the set.
         * modifier_groups.anyOf[1] (Value): Array of {@link ModifierSetGroupPreviousAttributes}.
         * Ordered group entries in this set, including the full content of reusable groups and
         * groups owned by the set. modifier_groups.anyOf[1][] (Value): {@link
         * ModifierSetGroupPreviousAttributes}. modifier_groups.anyOf[2] (Value): null.
         * modifier_set_id (Optional): string or null. Stable identifier of the modifier set
         * assigned to catalog items. modifier_set_id.anyOf[1] (Value): string. Stable identifier
         * of the modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
         * modifier_set_id.anyOf[2] (Value): null. name (Optional): string or null. Name used to
         * identify this modifier set. name.anyOf[1] (Value): string. Name used to identify this
         * modifier set. name.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier set. Only active sets can be offered to buyers; archived sets
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets
         * can be offered to buyers; archived sets remain readable and cannot be edited. Value
         * enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the modifier set or any group it contains last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When the modifier set or
         * any group it contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Version of the modifier set, including the groups it contains. version.anyOf[1]
         * (Value): integer. Version of the modifier set, including the groups it contains. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier set was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. anyOf[1] (Value): Array of {@link
             * ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including
             * the full content of reusable groups and groups owned by the set. anyOf[1][] (Value):
             * {@link ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
             */
            "modifier_groups"?: ((Array<ModifierSetGroupPreviousAttributes>) | (null));
            /**
             * Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value):
             * string. Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Name used to identify this modifier set. anyOf[1] (Value): string. Name used to
             * identify this modifier set. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * set. Only active sets can be offered to buyers; archived sets remain readable and
             * cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value):
             * null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains
             * last changed, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier set, including the groups it contains. anyOf[1] (Value):
             * integer. Version of the modifier set, including the groups it contains. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
});
export type ModifierSetsCreateParams = (InputValue<CreateModifierSetRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsDeleteParams = {
    /**
     * Optional modifier set version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsGetParams = DisputesAcceptParams;
export type ModifierSetsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier set ID, external reference ID, and name. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ms_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_set_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type ModifierSetsUpdateParams = (InputValue<UpdateModifierSetRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Why a money movement action is blocked, with an error code, a message, next steps, and who can
 * resolve it.
 */
export type MoneyMovementBlockedReason = {
    /** Code of the error the blocked action would return. */
    "code": string;
    /** Why the action is blocked. */
    "message"?: string;
    /** What to do to unblock the action. */
    "next_steps"?: string;
    /** The request field the block concerns. */
    "param"?: string;
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". */
    "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {});
    /** Whether trying the action again after the block clears can succeed. */
    "retryable"?: boolean;
};
export type MoneyMovementBlockedReasonPreviousAttributes = {
    /**
     * Code of the error the blocked action would return. anyOf[1] (Value): string. Code of the
     * error the blocked action would return. anyOf[2] (Value): null.
     */
    "code"?: ((string) | (null));
    /**
     * Why the action is blocked. anyOf[1] (Value): string. Why the action is blocked. anyOf[2]
     * (Value): null.
     */
    "message"?: ((string) | (null));
    /**
     * What to do to unblock the action. anyOf[1] (Value): string. What to do to unblock the
     * action. anyOf[2] (Value): null.
     */
    "next_steps"?: ((string) | (null));
    /**
     * The request field the block concerns. anyOf[1] (Value): string. The request field the block
     * concerns. anyOf[2] (Value): null.
     */
    "param"?: ((string) | (null));
    /**
     * Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[1]
     * (Value): string. Who can resolve the block. Value enum: "merchant", "flint", "integrator",
     * "buyer". anyOf[2] (Value): null.
     */
    "resolution_owner"?: (("merchant" | "flint" | "integrator" | "buyer" | (string & {})) | (null));
    /**
     * Whether trying the action again after the block clears can succeed. anyOf[1] (Value):
     * boolean. Whether trying the action again after the block clears can succeed. anyOf[2]
     * (Value): null.
     */
    "retryable"?: ((boolean) | (null));
};
/** How complete the history in a money movement list is and when it was last reconciled. */
export type MoneyMovementHistoryMeta = {
    /**
     * When Flint last finished reconciling this list's history with your processor. Absent until a
     * reconciliation finishes. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "latest_reconciled_at"?: string;
    /**
     * Why the history may be incomplete: backfilling while Flint is still importing older history
     * from your processor, partial when Flint has records from your processor but hasn't imported
     * its full history, and unavailable when Flint can't say, such as before any import or after
     * one fails. The list still returns every record Flint has. Value enum: "backfilling",
     * "partial", "unavailable".
     */
    "status": "backfilling" | "partial" | "unavailable" | (string & {});
};
/**
 * Response metadata for money movement lists, including request and trace IDs, warnings, and the
 * state of the available history.
 */
export type MoneyMovementListMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /**
     * How complete Flint's history for this list is. history is omitted when Flint's history for
     * this list is complete. How complete the history in a money movement list is and when it was
     * last reconciled.
     */
    "history"?: MoneyMovementHistoryMeta;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /**
     * Trace identifier to include when contacting Flint about this request. Example:
     * "0123456789abcdef0123456789abcdef".
     */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValue = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}`;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
/** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type MoneyValueInput = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "amount": `${bigint}` | bigint;
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. */
    "currency": string;
};
export type MoneyValuePreviousAttributes = {
    /**
     * Amount in the currency's minor unit, such as cents for USD. anyOf[1] (Value): integer
     * string. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[2] (Value):
     * null.
     */
    "amount"?: ((`${bigint}`) | (null));
    /**
     * ISO 4217 currency code for this amount. anyOf[1] (Value): string. ISO 4217 currency code for
     * this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "currency"?: ((string) | (null));
};
/**
 * A follow-up action. When target_resource is present, send its resource_id in the target request
 * field named {resource_type}_id.
 */
export type NextAction = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "add_line_items", "cancel_order_edit", "cancel_payment_intent",
     * "capture_payment_intent", "close_checkout_session", "close_order", "collect_invoice",
     * "complete_gift_card_challenge", "confirm_payment_intent",
     * "create_checkout_session_customer_verification", "create_delivery_selection",
     * "create_dispute_response_session", "create_merchant_account_session", "create_refund",
     * "create_subscription_payment_retry", "get_api_key", "get_bundle", "get_category",
     * "get_checkout_session", "get_credit_note", "get_custom_domain", "get_customer",
     * "get_customer_address", "get_customer_deletion_request",
     * "get_customer_email_change_request", "get_customer_tax_exemption",
     * "get_customer_verification", "get_delivery_location_set", "get_delivery_method",
     * "get_delivery_profile", "get_delivery_rate_callback", "get_delivery_selection",
     * "get_delivery_zone", "get_device", "get_dispute", "get_file", "get_gift_card",
     * "get_gift_card_notification", "get_gift_card_redemption", "get_inventory_count",
     * "get_inventory_item", "get_inventory_level", "get_inventory_reservation",
     * "get_inventory_transfer", "get_invoice", "get_invoice_manual_payment",
     * "get_invoice_payment_term", "get_location", "get_me", "get_me_address",
     * "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method", "get_me_return",
     * "get_me_subscription", "get_merchant", "get_merchant_signup", "get_modifier_group",
     * "get_modifier_set", "get_onboarding_state", "get_operation", "get_order", "get_order_edit",
     * "get_order_payment_attempt", "get_partner_app", "get_partner_app_credential",
     * "get_partner_app_install", "get_payment_intent", "get_payment_link",
     * "get_payment_link_public", "get_payment_method", "get_payment_method_domain",
     * "get_payment_review", "get_payout", "get_payout_destination", "get_payout_settings",
     * "get_price_list", "get_price_list_price", "get_product", "get_product_variant",
     * "get_promotion", "get_promotion_code", "get_reader", "get_refund", "get_return",
     * "get_return_line_item", "get_return_policy", "get_return_resolution", "get_risk_list",
     * "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings", "get_shipment",
     * "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_me_gift_cards",
     * "list_me_remembered_buyers", "list_me_returns", "list_me_subscription_payment_retries",
     * "list_merchant_partner_app_installs", "list_order_charges", "list_order_edits",
     * "list_order_line_items", "list_order_payment_attempts", "list_package_items",
     * "list_packages", "list_payment_intent_activities", "list_payouts", "list_product_variants",
     * "list_refunds", "list_return_dispositions", "list_return_inspections",
     * "list_return_reasons", "list_return_receipts", "list_return_resolutions", "list_returns",
     * "list_shipments", "list_subscription_line_items", "list_subscription_payment_retries",
     * "list_subscriptions", "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings".
     */
    "action_type": "add_line_items"
        | "cancel_order_edit"
        | "cancel_payment_intent"
        | "capture_payment_intent"
        | "close_checkout_session"
        | "close_order"
        | "collect_invoice"
        | "complete_gift_card_challenge"
        | "confirm_payment_intent"
        | "create_checkout_session_customer_verification"
        | "create_delivery_selection"
        | "create_dispute_response_session"
        | "create_merchant_account_session"
        | "create_refund"
        | "create_subscription_payment_retry"
        | "get_api_key"
        | "get_bundle"
        | "get_category"
        | "get_checkout_session"
        | "get_credit_note"
        | "get_custom_domain"
        | "get_customer"
        | "get_customer_address"
        | "get_customer_deletion_request"
        | "get_customer_email_change_request"
        | "get_customer_tax_exemption"
        | "get_customer_verification"
        | "get_delivery_location_set"
        | "get_delivery_method"
        | "get_delivery_profile"
        | "get_delivery_rate_callback"
        | "get_delivery_selection"
        | "get_delivery_zone"
        | "get_device"
        | "get_dispute"
        | "get_file"
        | "get_gift_card"
        | "get_gift_card_notification"
        | "get_gift_card_redemption"
        | "get_inventory_count"
        | "get_inventory_item"
        | "get_inventory_level"
        | "get_inventory_reservation"
        | "get_inventory_transfer"
        | "get_invoice"
        | "get_invoice_manual_payment"
        | "get_invoice_payment_term"
        | "get_location"
        | "get_me"
        | "get_me_address"
        | "get_me_email_preferences"
        | "get_me_gift_card"
        | "get_me_payment_method"
        | "get_me_return"
        | "get_me_subscription"
        | "get_merchant"
        | "get_merchant_signup"
        | "get_modifier_group"
        | "get_modifier_set"
        | "get_onboarding_state"
        | "get_operation"
        | "get_order"
        | "get_order_edit"
        | "get_order_payment_attempt"
        | "get_partner_app"
        | "get_partner_app_credential"
        | "get_partner_app_install"
        | "get_payment_intent"
        | "get_payment_link"
        | "get_payment_link_public"
        | "get_payment_method"
        | "get_payment_method_domain"
        | "get_payment_review"
        | "get_payout"
        | "get_payout_destination"
        | "get_payout_settings"
        | "get_price_list"
        | "get_price_list_price"
        | "get_product"
        | "get_product_variant"
        | "get_promotion"
        | "get_promotion_code"
        | "get_reader"
        | "get_refund"
        | "get_return"
        | "get_return_line_item"
        | "get_return_policy"
        | "get_return_resolution"
        | "get_risk_list"
        | "get_risk_list_item"
        | "get_risk_rule"
        | "get_sandbox"
        | "get_settings"
        | "get_shipment"
        | "get_subscription"
        | "get_subscription_offer"
        | "get_subscription_plan"
        | "get_tax_calculation_callback"
        | "get_tax_connection"
        | "get_tax_registration"
        | "get_test_clock"
        | "get_ticket"
        | "get_webhook_delivery"
        | "get_webhook_endpoint"
        | "get_workload_identity"
        | "issue_developer_sandbox_test_key"
        | "list_credit_note_allocations"
        | "list_credit_notes"
        | "list_fulfillments"
        | "list_gift_card_funding_dispositions"
        | "list_gift_card_loads"
        | "list_gift_card_redemptions"
        | "list_gift_card_transactions"
        | "list_gift_cards"
        | "list_inventory_counts"
        | "list_inventory_movements"
        | "list_inventory_receipts"
        | "list_inventory_reservations"
        | "list_inventory_transfers"
        | "list_invoice_activities"
        | "list_invoice_late_fees"
        | "list_invoice_manual_payments"
        | "list_invoice_payment_attempts"
        | "list_invoices"
        | "list_me_gift_cards"
        | "list_me_remembered_buyers"
        | "list_me_returns"
        | "list_me_subscription_payment_retries"
        | "list_merchant_partner_app_installs"
        | "list_order_charges"
        | "list_order_edits"
        | "list_order_line_items"
        | "list_order_payment_attempts"
        | "list_package_items"
        | "list_packages"
        | "list_payment_intent_activities"
        | "list_payouts"
        | "list_product_variants"
        | "list_refunds"
        | "list_return_dispositions"
        | "list_return_inspections"
        | "list_return_reasons"
        | "list_return_receipts"
        | "list_return_resolutions"
        | "list_returns"
        | "list_shipments"
        | "list_subscription_line_items"
        | "list_subscription_payment_retries"
        | "list_subscriptions"
        | "pay_order"
        | "payment_authentication"
        | "recreate_delivery_quote"
        | "review_merchant_readiness"
        | "review_onboarding_state"
        | "start_new_image_ingestion"
        | "update_checkout_session"
        | "update_delivery_profile"
        | "update_inventory_allocation_policy"
        | "update_invoice"
        | "update_location"
        | "update_order"
        | "update_payment_link"
        | "update_settings"
        | (string & {});
    /**
     * When this suggested action expires, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is
     * create_merchant_account_session. When absent, GET merchant readiness and use its recommended
     * session body. Shared request body for `create_merchant_account_session` next actions in
     * readiness, onboarding, errors, and warnings. Send unchanged to POST
     * /v1/merchant-account-sessions; components and collection policy describe which requirements
     * to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** HTTP method for the recovery read. Value enum: "GET". */
    "method"?: "GET" | (string & {});
    /** Machine-readable reason this action is suggested. */
    "reason_code"?: string;
    /** Explanation of why this action is suggested. */
    "reason_message"?: string;
    /** Field names that must be supplied to perform this action. [] (Value): string. */
    "required_fields"?: Array<string>;
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "required_scope"?: "accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {});
    /** Whether a person must approve the action before it is performed. */
    "requires_human_confirmation"?: boolean;
    /** Suggested wait before performing the action, in milliseconds. Format: int32. */
    "suggested_delay_milliseconds"?: number;
    /**
     * Resource whose ID to send in the target request field named {resource_type}_id when url
     * cannot carry the target. A reference to another resource by `resource_type` and
     * `resource_id`.
     */
    "target_resource"?: ResourceReference;
    /** Public endpoint or launch URL for this remediation action, when applicable. */
    "url"?: string;
};
export type NextActionPreviousAttributes = {
    /**
     * Action to take next. Use its target resource and required_fields to prepare the request.
     * Value enum: "add_line_items", "cancel_order_edit", "cancel_payment_intent",
     * "capture_payment_intent", "close_checkout_session", "close_order", "collect_invoice",
     * "complete_gift_card_challenge", "confirm_payment_intent",
     * "create_checkout_session_customer_verification", "create_delivery_selection",
     * "create_dispute_response_session", "create_merchant_account_session", "create_refund",
     * "create_subscription_payment_retry", "get_api_key", "get_bundle", "get_category",
     * "get_checkout_session", "get_credit_note", "get_custom_domain", "get_customer",
     * "get_customer_address", "get_customer_deletion_request",
     * "get_customer_email_change_request", "get_customer_tax_exemption",
     * "get_customer_verification", "get_delivery_location_set", "get_delivery_method",
     * "get_delivery_profile", "get_delivery_rate_callback", "get_delivery_selection",
     * "get_delivery_zone", "get_device", "get_dispute", "get_file", "get_gift_card",
     * "get_gift_card_notification", "get_gift_card_redemption", "get_inventory_count",
     * "get_inventory_item", "get_inventory_level", "get_inventory_reservation",
     * "get_inventory_transfer", "get_invoice", "get_invoice_manual_payment",
     * "get_invoice_payment_term", "get_location", "get_me", "get_me_address",
     * "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method", "get_me_return",
     * "get_me_subscription", "get_merchant", "get_merchant_signup", "get_modifier_group",
     * "get_modifier_set", "get_onboarding_state", "get_operation", "get_order", "get_order_edit",
     * "get_order_payment_attempt", "get_partner_app", "get_partner_app_credential",
     * "get_partner_app_install", "get_payment_intent", "get_payment_link",
     * "get_payment_link_public", "get_payment_method", "get_payment_method_domain",
     * "get_payment_review", "get_payout", "get_payout_destination", "get_payout_settings",
     * "get_price_list", "get_price_list_price", "get_product", "get_product_variant",
     * "get_promotion", "get_promotion_code", "get_reader", "get_refund", "get_return",
     * "get_return_line_item", "get_return_policy", "get_return_resolution", "get_risk_list",
     * "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings", "get_shipment",
     * "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_me_gift_cards",
     * "list_me_remembered_buyers", "list_me_returns", "list_me_subscription_payment_retries",
     * "list_merchant_partner_app_installs", "list_order_charges", "list_order_edits",
     * "list_order_line_items", "list_order_payment_attempts", "list_package_items",
     * "list_packages", "list_payment_intent_activities", "list_payouts", "list_product_variants",
     * "list_refunds", "list_return_dispositions", "list_return_inspections",
     * "list_return_reasons", "list_return_receipts", "list_return_resolutions", "list_returns",
     * "list_shipments", "list_subscription_line_items", "list_subscription_payment_retries",
     * "list_subscriptions", "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings". anyOf[1] (Value): string. Action to take next. Use its target resource
     * and required_fields to prepare the request. Value enum: "add_line_items",
     * "cancel_order_edit", "cancel_payment_intent", "capture_payment_intent",
     * "close_checkout_session", "close_order", "collect_invoice", "complete_gift_card_challenge",
     * "confirm_payment_intent", "create_checkout_session_customer_verification",
     * "create_delivery_selection", "create_dispute_response_session",
     * "create_merchant_account_session", "create_refund", "create_subscription_payment_retry",
     * "get_api_key", "get_bundle", "get_category", "get_checkout_session", "get_credit_note",
     * "get_custom_domain", "get_customer", "get_customer_address",
     * "get_customer_deletion_request", "get_customer_email_change_request",
     * "get_customer_tax_exemption", "get_customer_verification", "get_delivery_location_set",
     * "get_delivery_method", "get_delivery_profile", "get_delivery_rate_callback",
     * "get_delivery_selection", "get_delivery_zone", "get_device", "get_dispute", "get_file",
     * "get_gift_card", "get_gift_card_notification", "get_gift_card_redemption",
     * "get_inventory_count", "get_inventory_item", "get_inventory_level",
     * "get_inventory_reservation", "get_inventory_transfer", "get_invoice",
     * "get_invoice_manual_payment", "get_invoice_payment_term", "get_location", "get_me",
     * "get_me_address", "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method",
     * "get_me_return", "get_me_subscription", "get_merchant", "get_merchant_signup",
     * "get_modifier_group", "get_modifier_set", "get_onboarding_state", "get_operation",
     * "get_order", "get_order_edit", "get_order_payment_attempt", "get_partner_app",
     * "get_partner_app_credential", "get_partner_app_install", "get_payment_intent",
     * "get_payment_link", "get_payment_link_public", "get_payment_method",
     * "get_payment_method_domain", "get_payment_review", "get_payout", "get_payout_destination",
     * "get_payout_settings", "get_price_list", "get_price_list_price", "get_product",
     * "get_product_variant", "get_promotion", "get_promotion_code", "get_reader", "get_refund",
     * "get_return", "get_return_line_item", "get_return_policy", "get_return_resolution",
     * "get_risk_list", "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings",
     * "get_shipment", "get_subscription", "get_subscription_offer", "get_subscription_plan",
     * "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration",
     * "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint",
     * "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations",
     * "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions",
     * "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions",
     * "list_gift_cards", "list_inventory_counts", "list_inventory_movements",
     * "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers",
     * "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments",
     * "list_invoice_payment_attempts", "list_invoices", "list_me_gift_cards",
     * "list_me_remembered_buyers", "list_me_returns", "list_me_subscription_payment_retries",
     * "list_merchant_partner_app_installs", "list_order_charges", "list_order_edits",
     * "list_order_line_items", "list_order_payment_attempts", "list_package_items",
     * "list_packages", "list_payment_intent_activities", "list_payouts", "list_product_variants",
     * "list_refunds", "list_return_dispositions", "list_return_inspections",
     * "list_return_reasons", "list_return_receipts", "list_return_resolutions", "list_returns",
     * "list_shipments", "list_subscription_line_items", "list_subscription_payment_retries",
     * "list_subscriptions", "pay_order", "payment_authentication", "recreate_delivery_quote",
     * "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion",
     * "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy",
     * "update_invoice", "update_location", "update_order", "update_payment_link",
     * "update_settings". anyOf[2] (Value): null.
     */
    "action_type"?: (("add_line_items"
        | "cancel_order_edit"
        | "cancel_payment_intent"
        | "capture_payment_intent"
        | "close_checkout_session"
        | "close_order"
        | "collect_invoice"
        | "complete_gift_card_challenge"
        | "confirm_payment_intent"
        | "create_checkout_session_customer_verification"
        | "create_delivery_selection"
        | "create_dispute_response_session"
        | "create_merchant_account_session"
        | "create_refund"
        | "create_subscription_payment_retry"
        | "get_api_key"
        | "get_bundle"
        | "get_category"
        | "get_checkout_session"
        | "get_credit_note"
        | "get_custom_domain"
        | "get_customer"
        | "get_customer_address"
        | "get_customer_deletion_request"
        | "get_customer_email_change_request"
        | "get_customer_tax_exemption"
        | "get_customer_verification"
        | "get_delivery_location_set"
        | "get_delivery_method"
        | "get_delivery_profile"
        | "get_delivery_rate_callback"
        | "get_delivery_selection"
        | "get_delivery_zone"
        | "get_device"
        | "get_dispute"
        | "get_file"
        | "get_gift_card"
        | "get_gift_card_notification"
        | "get_gift_card_redemption"
        | "get_inventory_count"
        | "get_inventory_item"
        | "get_inventory_level"
        | "get_inventory_reservation"
        | "get_inventory_transfer"
        | "get_invoice"
        | "get_invoice_manual_payment"
        | "get_invoice_payment_term"
        | "get_location"
        | "get_me"
        | "get_me_address"
        | "get_me_email_preferences"
        | "get_me_gift_card"
        | "get_me_payment_method"
        | "get_me_return"
        | "get_me_subscription"
        | "get_merchant"
        | "get_merchant_signup"
        | "get_modifier_group"
        | "get_modifier_set"
        | "get_onboarding_state"
        | "get_operation"
        | "get_order"
        | "get_order_edit"
        | "get_order_payment_attempt"
        | "get_partner_app"
        | "get_partner_app_credential"
        | "get_partner_app_install"
        | "get_payment_intent"
        | "get_payment_link"
        | "get_payment_link_public"
        | "get_payment_method"
        | "get_payment_method_domain"
        | "get_payment_review"
        | "get_payout"
        | "get_payout_destination"
        | "get_payout_settings"
        | "get_price_list"
        | "get_price_list_price"
        | "get_product"
        | "get_product_variant"
        | "get_promotion"
        | "get_promotion_code"
        | "get_reader"
        | "get_refund"
        | "get_return"
        | "get_return_line_item"
        | "get_return_policy"
        | "get_return_resolution"
        | "get_risk_list"
        | "get_risk_list_item"
        | "get_risk_rule"
        | "get_sandbox"
        | "get_settings"
        | "get_shipment"
        | "get_subscription"
        | "get_subscription_offer"
        | "get_subscription_plan"
        | "get_tax_calculation_callback"
        | "get_tax_connection"
        | "get_tax_registration"
        | "get_test_clock"
        | "get_ticket"
        | "get_webhook_delivery"
        | "get_webhook_endpoint"
        | "get_workload_identity"
        | "issue_developer_sandbox_test_key"
        | "list_credit_note_allocations"
        | "list_credit_notes"
        | "list_fulfillments"
        | "list_gift_card_funding_dispositions"
        | "list_gift_card_loads"
        | "list_gift_card_redemptions"
        | "list_gift_card_transactions"
        | "list_gift_cards"
        | "list_inventory_counts"
        | "list_inventory_movements"
        | "list_inventory_receipts"
        | "list_inventory_reservations"
        | "list_inventory_transfers"
        | "list_invoice_activities"
        | "list_invoice_late_fees"
        | "list_invoice_manual_payments"
        | "list_invoice_payment_attempts"
        | "list_invoices"
        | "list_me_gift_cards"
        | "list_me_remembered_buyers"
        | "list_me_returns"
        | "list_me_subscription_payment_retries"
        | "list_merchant_partner_app_installs"
        | "list_order_charges"
        | "list_order_edits"
        | "list_order_line_items"
        | "list_order_payment_attempts"
        | "list_package_items"
        | "list_packages"
        | "list_payment_intent_activities"
        | "list_payouts"
        | "list_product_variants"
        | "list_refunds"
        | "list_return_dispositions"
        | "list_return_inspections"
        | "list_return_reasons"
        | "list_return_receipts"
        | "list_return_resolutions"
        | "list_returns"
        | "list_shipments"
        | "list_subscription_line_items"
        | "list_subscription_payment_retries"
        | "list_subscriptions"
        | "pay_order"
        | "payment_authentication"
        | "recreate_delivery_quote"
        | "review_merchant_readiness"
        | "review_onboarding_state"
        | "start_new_image_ingestion"
        | "update_checkout_session"
        | "update_delivery_profile"
        | "update_inventory_allocation_policy"
        | "update_invoice"
        | "update_location"
        | "update_order"
        | "update_payment_link"
        | "update_settings"
        | (string & {}))
        | (null));
    /**
     * When this suggested action expires, in RFC3339 format. anyOf[1] (Value): string. When this
     * suggested action expires, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is
     * create_merchant_account_session. When absent, GET merchant readiness and use its recommended
     * session body. anyOf[1] (Value): {@link ReadinessMerchantAccountSessionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "merchant_account_session"?: ((ReadinessMerchantAccountSessionPreviousAttributes) | (null) | (unknown));
    /**
     * HTTP method for the recovery read. Value enum: "GET". anyOf[1] (Value): string. HTTP method
     * for the recovery read. Value enum: "GET". anyOf[2] (Value): null.
     */
    "method"?: (("GET" | (string & {})) | (null));
    /**
     * Machine-readable reason this action is suggested. anyOf[1] (Value): string. Machine-readable
     * reason this action is suggested. anyOf[2] (Value): null.
     */
    "reason_code"?: ((string) | (null));
    /**
     * Explanation of why this action is suggested. anyOf[1] (Value): string. Explanation of why
     * this action is suggested. anyOf[2] (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * Field names that must be supplied to perform this action. anyOf[1] (Value): Array of string.
     * Field names that must be supplied to perform this action. anyOf[1][] (Value): string.
     * anyOf[2] (Value): null.
     */
    "required_fields"?: ((Array<string>) | (null));
    /**
     * API key scope required to call the public endpoint in url, when the action points at another
     * Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". anyOf[1] (Value):
     * string. API key scope required to call the public endpoint in url, when the action points at
     * another Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". anyOf[2] (Value):
     * null.
     */
    "required_scope"?: (("accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {}))
        | (null));
    /**
     * Whether a person must approve the action before it is performed. anyOf[1] (Value): boolean.
     * Whether a person must approve the action before it is performed. anyOf[2] (Value): null.
     */
    "requires_human_confirmation"?: ((boolean) | (null));
    /**
     * Suggested wait before performing the action, in milliseconds. anyOf[1] (Value): integer.
     * Suggested wait before performing the action, in milliseconds. Format: int32. anyOf[2]
     * (Value): null.
     */
    "suggested_delay_milliseconds"?: ((number) | (null));
    /**
     * Resource whose ID to send in the target request field named {resource_type}_id when url
     * cannot carry the target. anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "target_resource"?: ((ResourceReferencePreviousAttributes) | (null) | (unknown));
    /**
     * Public endpoint or launch URL for this remediation action, when applicable. anyOf[1]
     * (Value): string. Public endpoint or launch URL for this remediation action, when applicable.
     * anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
};
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token" | (string & {});
});
/** The request body for: Revoke an OAuth token. */
export type OAuthRevokeRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never
     * sends a secret.
     */
    "client_secret"?: string;
    /** Partner app token, or flint-cli access or refresh token, to revoke. */
    "token": string;
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token". */
    "token_type_hint"?: "refresh_token" | "access_token";
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequest = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code", "client_credentials", "refresh_token",
     * "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "client_credentials"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange"
        | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestClientCredentials & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshToken & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCode & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchange & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: unknown;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "authorization_code".
     */
    "grant_type": "authorization_code";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: ("authorization_code") & ("authorization_code");
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentials = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: unknown;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live" | (string & {});
});
/** The `client_credentials` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestClientCredentialsInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "client_credentials".
     */
    "grant_type": "client_credentials";
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "client_credentials". */
    "grant_type"?: ("client_credentials") & ("client_credentials");
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode": "test" | "live";
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     * Example: "flint-cli".
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /**
     * flint-cli only. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use client_credentials or authorization_code;
     * flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value
     * enum: "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | (string & {});
    /**
     * Binds the minted partner app token to this merchant, for client_credentials. Omit for an
     * app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks
     * only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Mode of the partner app token to mint, test or live. Required for client_credentials. Each
     * token is for one mode. Value enum: "test", "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The redirect URI the authorization request used, character for character. Required for a
     * code from the consent screen. Omit it for a code from a merchant signup, which had no
     * authorization request: a signup code sent with one, or a consent-screen code sent without
     * one, returns invalid_grant.
     */
    "redirect_uri"?: string;
    /**
     * flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh
     * tokens; a partner client that sends this grant gets unauthorized_client.
     */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit. Partner app tokens carry each install's granted permissions, and
     * client_credentials refuses scope with invalid_scope.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: unknown;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
