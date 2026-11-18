import { d10531 as c0 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10551 as c1, d10552 as c2, d10553 as c3, d10554 as c4 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10531 as d10531 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10531;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec2745"]:c1(),["SharedCodec2746"]:c2(),["SharedCodec2747"]:c3(),["SharedCodec2748"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
