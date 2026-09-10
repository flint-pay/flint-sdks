export const stable = (value) => JSON.stringify(value, (_k, v) => v && typeof v === 'object' && !Array.isArray(v)
    ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b, 'en')))
    : v, 2) + '\n';
//# sourceMappingURL=canonical.js.map