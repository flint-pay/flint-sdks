import { type CompiledOperation, type CompiledRuntimePlan } from './runtime-plan.js';
import { type CodecPlan } from './codec-plan.js';
type Loader = () => CompiledRuntimePlan;
/** Owns its data; callers cannot change a descriptor after validation. */
export declare class DescriptorSource {
    #private;
    private readonly routes;
    private readonly loadWebhook?;
    readonly settings: CompiledRuntimePlan;
    constructor(settings: CompiledRuntimePlan, routes?: Readonly<Record<string, Loader>>, loadWebhook?: Loader | undefined);
    operation(id: string): CompiledOperation | undefined;
    definitions(): Readonly<Record<string, CodecPlan>>;
    webhook(): CompiledRuntimePlan['webhook'];
}
/** JSON is private until parsed and validated; no caller-owned identity cache. */
export declare function lazyCodec(text: string): () => CodecPlan;
export declare function preparedCodec(codec: CodecPlan, definitions: Record<string, CodecPlan>): CodecPlan;
export {};
