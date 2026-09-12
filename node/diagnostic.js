export class Diagnostic extends Error {
    location;
    detail;
    constructor(location, detail) {
        super(`${location}: ${detail}`);
        this.location = location;
        this.detail = detail;
        this.name = 'Diagnostic';
    }
}
export class DiagnosticGroup extends Diagnostic {
    findings;
    constructor(findings) {
        super(findings[0].location, findings[0].detail);
        this.findings = findings;
        this.message = findings.map((finding) => finding.message).join('\n');
    }
}
/** Collect only expected validation failures, never programming errors. */
export class DiagnosticCollector {
    enabled;
    findings = [];
    constructor(enabled) {
        this.enabled = enabled;
    }
    capture(error) {
        if (!this.enabled || !(error instanceof Diagnostic))
            throw error;
        for (const finding of error instanceof DiagnosticGroup ? error.findings : [error])
            if (!this.findings.some((existing) => existing.message === finding.message))
                this.findings.push(finding);
    }
    check(validate) {
        try {
            validate();
            return true;
        }
        catch (error) {
            this.capture(error);
            return false;
        }
    }
    finish() {
        if (this.findings.length)
            throw new DiagnosticGroup(this.findings);
    }
}
/** Suggest nearby spellings, including an adjacent letter transposition. */
export function suggestion(value, candidates) {
    const limit = value.length < 4 ? 1 : 2;
    let best;
    let distance = limit + 1;
    for (const candidate of [...candidates].sort()) {
        if (Math.abs(candidate.length - value.length) > limit)
            continue;
        const rows = Array.from({ length: value.length + 1 }, (_, i) => [i]);
        rows[0] = Array.from({ length: candidate.length + 1 }, (_, i) => i);
        for (let i = 1; i <= value.length; i++) {
            for (let j = 1; j <= candidate.length; j++) {
                rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + (value[i - 1] === candidate[j - 1] ? 0 : 1));
                if (i > 1 &&
                    j > 1 &&
                    value[i - 1] === candidate[j - 2] &&
                    value[i - 2] === candidate[j - 1])
                    rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1);
            }
        }
        const current = rows[value.length][candidate.length];
        if (current < distance) {
            best = candidate;
            distance = current;
        }
    }
    return best === undefined ? '' : ` Did you mean "${best}"?`;
}
//# sourceMappingURL=diagnostic.js.map