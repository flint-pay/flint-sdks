import { ANY_CODEC } from './codec-plan.js';
import { Diagnostic } from './diagnostic.js';
/** Owns extension names, target spellings and mandatory wire validation. */
export const REQUEST_OPTIONS = {
    client_request_id: {
        node: 'clientRequestId',
        php: 'clientRequestId',
        codec: {
            ...ANY_CODEC,
            value: { kind: 'string' },
            nullable: false,
            checks: { minLength: 1, maxLength: 128, pattern: '^[\\x21-\\x7E]+(?![\\s\\S])' },
            phpPattern: '~^[\\x21-\\x7E]+(?![\\s\\S])~uD',
            constraints: true,
        },
    },
};
export function requestOption(value, path) {
    if (typeof value !== 'string' || !Object.hasOwn(REQUEST_OPTIONS, value))
        throw new Diagnostic(path, 'Unknown x-flint-request-option; supported values: ' +
            Object.keys(REQUEST_OPTIONS).join(', '));
    // Own-key validation above restricts the external extension to this registry.
    return REQUEST_OPTIONS[value];
}
//# sourceMappingURL=request-options.js.map