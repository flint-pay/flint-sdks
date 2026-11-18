import { d405 as c0 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7965 as c1, d7966 as c4, d7967 as c5 } from '../descriptors/data/342.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7941 as c2 } from '../descriptors/data/340.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10764 as c3, d10765 as c6, d10766 as c7 } from '../descriptors/data/505.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d405 as d405 } from '../descriptors/data/25.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec338"]:c1(),["SharedCodec5"]:c2(),["SharedCodec570"]:c3(),["SharedCodec571"]:c4(),["SharedCodec572"]:c5(),["SharedCodec573"]:c6(),["SharedCodec574"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
