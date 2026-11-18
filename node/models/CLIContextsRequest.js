import { d127 as c0 } from '../descriptors/data/6.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d127 as d127 } from '../descriptors/data/6.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d127;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIContextsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIContextsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
