import { d8016 as c0, d8017 as c1, d8015 as c2 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7727 as c3 } from '../descriptors/data/323.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7727 as d7727 } from '../descriptors/data/323.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3070"]:c0(),["SharedCodec3071"]:c1(),["SharedCodec3072"]:c2(),["UpdateCategoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
