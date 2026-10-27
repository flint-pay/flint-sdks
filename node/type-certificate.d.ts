/** Executable subset of the finalized public TypeScript declaration plan. */
export type PublicType = {
    kind: 'unknown'
        | 'never'
        | 'null'
        | 'undefined'
        | 'string'
        | 'number'
        | 'boolean'
        | 'object'
        | 'nonnull'
        | 'integer-string'
        | 'function'
        | 'binary'
        | 'stream';
}
    | {
    kind: 'literal';
    value: string | number | boolean;
}
    | {
    kind: 'reference';
    name: string;
}
    | {
    kind: 'array';
    element: PublicType;
}
    | {
    kind: 'union' | 'intersection';
    members: PublicType[];
}
    | {
    kind: 'nonarray';
    value: PublicType;
}
    | {
    kind: 'record';
    fields: Record<string, {
        type: PublicType;
        optional: boolean;
    }>;
    extra?: PublicType;
};
export interface TypeCertificate {
    type: PublicType;
    definitions: Record<string, PublicType>;
}
export declare function assertTypeCertificate(value: unknown): asserts value is TypeCertificate;
/**
 * Structural unions certify every known key that could select another member.
 * Index signatures retain their declared uncertainty. A decode checks each
 * (value, type) pair once, even through recursive property unions.
 */
export declare function certifies(value: unknown, certificate: TypeCertificate): boolean;
/** Reattach shared declaration data to newly parsed, resource-owned operations. */
export declare function withTypeDefinitions<T extends {
    outputCertificate?: TypeCertificate;
    payloadCertificate?: TypeCertificate;
    itemCertificate?: TypeCertificate;
}>(operations: T[], definitions: Record<string, PublicType>): T[];
