import { d1230 as c0 } from '../descriptors/data/61.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1230 as d1230 } from '../descriptors/data/61.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackageDeliveredRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackageDeliveredRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
