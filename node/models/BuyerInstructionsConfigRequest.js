import { d8448 as c0 } from '../descriptors/data/370.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8448 as d8448 } from '../descriptors/data/370.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
