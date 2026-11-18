import { d7807 as c0 } from '../descriptors/data/330.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7807 as d7807 } from '../descriptors/data/330.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateTicketRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTicketRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
