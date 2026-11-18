import { d10496 as c0 } from '../descriptors/data/489.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c1 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10496 as d10496 } from '../descriptors/data/489.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10496;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequestReceiptLine"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequestReceiptLine(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
