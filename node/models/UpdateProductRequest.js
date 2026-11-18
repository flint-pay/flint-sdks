import { d8024 as c0, d8025 as c1, d8016 as c3, d8017 as c4, d8015 as c5 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8031 as c2, d8036 as c6 } from '../descriptors/data/347.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10326 as c7, d10327 as c8 } from '../descriptors/data/479.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10345 as c9, d10346 as c10 } from '../descriptors/data/480.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7774 as c11 } from '../descriptors/data/327.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7774 as d7774 } from '../descriptors/data/327.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec3070"]:c3(),["SharedCodec3071"]:c4(),["SharedCodec3072"]:c5(),["SharedCodec3074"]:c6(),["SharedCodec3161"]:c7(),["SharedCodec3162"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
