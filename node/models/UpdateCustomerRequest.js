import { d8435 as c0, d8426 as c1, d8427 as c2, d8436 as c8, d8437 as c9 } from '../descriptors/data/369.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8112 as c3, d8113 as c4 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8016 as c5, d8017 as c6, d8015 as c7 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8394 as c10, d8395 as c11, d8396 as c12 } from '../descriptors/data/367.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7732 as c13 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7732 as d7732 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1715"]:c1(),["SharedCodec1716"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3070"]:c5(),["SharedCodec3071"]:c6(),["SharedCodec3072"]:c7(),["SharedCodec3077"]:c8(),["SharedCodec3078"]:c9(),["SharedCodec3079"]:c10(),["SharedCodec3080"]:c11(),["SharedCodec3081"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
