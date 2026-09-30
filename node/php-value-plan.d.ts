export type PhpRepresentation = {
    kind: 'value';
    type: string;
} | {
    kind: 'entity';
    name: string;
} | {
    kind: 'nullable';
    value: PhpRepresentation;
} | {
    kind: 'list' | 'map';
    value: PhpRepresentation;
} | {
    kind: 'record';
    fields: Record<string, PhpRepresentation>;
    extra?: PhpRepresentation;
} | {
    kind: 'tagged';
    field: string;
    variants: Record<string, PhpRepresentation>;
};
export declare function assertPhpRepresentation(value: unknown, depth?: number): asserts value is PhpRepresentation;
