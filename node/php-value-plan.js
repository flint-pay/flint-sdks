export function assertPhpRepresentation(value, depth = 0) {
    if (depth > 256 || !value || typeof value !== 'object')
        throw new Error('Invalid PHP representation');
    const p = value; // Serialized descriptor boundary, validated below.
    switch (p.kind) {
        case 'value':
            if (typeof p.type === 'string' &&
                ['mixed', 'null', 'string', 'int', 'float', 'bool', '\\stdClass', 'array|object'].includes(p.type))
                return;
            break;
        case 'entity':
            if (typeof p.name === 'string' && /^[A-Za-z][A-Za-z0-9_]*$/.test(p.name))
                return;
            break;
        case 'nullable':
        case 'list':
        case 'map':
            assertPhpRepresentation(p.value, depth + 1);
            return;
        case 'record':
        case 'tagged': {
            const fields = p.kind === 'record' ? p.fields : p.variants;
            if (!fields ||
                typeof fields !== 'object' ||
                Array.isArray(fields) ||
                (p.kind === 'tagged' && typeof p.field !== 'string'))
                break;
            for (const child of Object.values(fields))
                assertPhpRepresentation(child, depth + 1);
            if (p.extra !== undefined)
                assertPhpRepresentation(p.extra, depth + 1);
            return;
        }
    }
    throw new Error('Invalid PHP representation');
}
//# sourceMappingURL=php-value-plan.js.map