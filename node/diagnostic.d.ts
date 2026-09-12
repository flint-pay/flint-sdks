export declare class Diagnostic extends Error {
    location: string;
    detail: string;
    constructor(location: string, detail: string);
}
export declare class DiagnosticGroup extends Diagnostic {
    findings: Diagnostic[];
    constructor(findings: Diagnostic[]);
}
/** Collect only expected validation failures, never programming errors. */
export declare class DiagnosticCollector {
    private enabled;
    readonly findings: Diagnostic[];
    constructor(enabled: boolean);
    capture(error: unknown): void;
    check(validate: () => void): boolean;
    finish(): void;
}
/** Suggest nearby spellings, including an adjacent letter transposition. */
export declare function suggestion(value: string, candidates: readonly string[]): string;
