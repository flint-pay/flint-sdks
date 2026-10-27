import { type CodecPlan } from './codec-plan.js';
/** Owns extension names, target spellings and mandatory wire validation. */
export declare const REQUEST_OPTIONS: {
    readonly client_request_id: {
        readonly node: "clientRequestId";
        readonly php: "client_request_id";
        readonly codec: {
            readonly value: {
                readonly kind: "string";
            };
            readonly nullable: false;
            readonly checks: {
                readonly minLength: 1;
                readonly maxLength: 128;
                readonly pattern: "^[\\x21-\\x7E]+(?![\\s\\S])";
            };
            readonly phpPattern: "~^[\\x21-\\x7E]+(?![\\s\\S])~uD";
            readonly constraints: true;
            readonly objectOnlyAlternative?: boolean;
            readonly nullableAlternative?: 0 | 1;
            readonly modelObjectInput: boolean;
            readonly requiredInput: readonly string[];
            readonly requiredOutput: readonly string[];
            readonly rejectInput: boolean;
            readonly hiddenOutput: boolean;
            readonly sensitive: boolean;
            readonly fields?: Readonly<Record<string, CodecPlan>>;
            readonly element?: CodecPlan;
            readonly propertyNames?: CodecPlan;
            readonly extra?: boolean | CodecPlan;
            readonly members?: readonly import("./contract.js").Json[];
            readonly literal?: string;
            readonly range?: readonly [
                string,
                string
            ];
            readonly numberInput?: "explicit";
            readonly every?: readonly CodecPlan[];
            readonly some?: readonly CodecPlan[];
            readonly exactlyOne?: readonly CodecPlan[];
            readonly exclude?: CodecPlan;
            readonly includes?: CodecPlan;
            readonly when?: {
                readonly test: CodecPlan;
                readonly then?: CodecPlan;
                readonly else?: CodecPlan;
            };
            readonly tag?: string;
            readonly tagValues?: readonly string[];
            readonly reference?: string;
            readonly definitions?: Readonly<Record<string, CodecPlan>>;
        };
    };
};
export type RequestOptionName = keyof typeof REQUEST_OPTIONS;
export type RequestOptionValues = Partial<Record<(typeof REQUEST_OPTIONS)[RequestOptionName]['node'], string>>;
export declare function requestOption(value: unknown, path: string): {
    readonly node: "clientRequestId";
    readonly php: "client_request_id";
    readonly codec: {
        readonly value: {
            readonly kind: "string";
        };
        readonly nullable: false;
        readonly checks: {
            readonly minLength: 1;
            readonly maxLength: 128;
            readonly pattern: "^[\\x21-\\x7E]+(?![\\s\\S])";
        };
        readonly phpPattern: "~^[\\x21-\\x7E]+(?![\\s\\S])~uD";
        readonly constraints: true;
        readonly objectOnlyAlternative?: boolean;
        readonly nullableAlternative?: 0 | 1;
        readonly modelObjectInput: boolean;
        readonly requiredInput: readonly string[];
        readonly requiredOutput: readonly string[];
        readonly rejectInput: boolean;
        readonly hiddenOutput: boolean;
        readonly sensitive: boolean;
        readonly fields?: Readonly<Record<string, CodecPlan>>;
        readonly element?: CodecPlan;
        readonly propertyNames?: CodecPlan;
        readonly extra?: boolean | CodecPlan;
        readonly members?: readonly import("./contract.js").Json[];
        readonly literal?: string;
        readonly range?: readonly [
            string,
            string
        ];
        readonly numberInput?: "explicit";
        readonly every?: readonly CodecPlan[];
        readonly some?: readonly CodecPlan[];
        readonly exactlyOne?: readonly CodecPlan[];
        readonly exclude?: CodecPlan;
        readonly includes?: CodecPlan;
        readonly when?: {
            readonly test: CodecPlan;
            readonly then?: CodecPlan;
            readonly else?: CodecPlan;
        };
        readonly tag?: string;
        readonly tagValues?: readonly string[];
        readonly reference?: string;
        readonly definitions?: Readonly<Record<string, CodecPlan>>;
    };
};
