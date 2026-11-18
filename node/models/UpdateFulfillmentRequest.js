import { d8114 as c0, d8112 as c3, d8113 as c4, d8111 as c6 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8426 as c1, d8427 as c2 } from '../descriptors/data/369.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8015 as c5 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8936 as c7, d8937 as c8, d8938 as c9, d8939 as c10, d8940 as c11, d8941 as c12, d8942 as c13, d8943 as c14, d8944 as c15, d8945 as c16 } from '../descriptors/data/398.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7741 as c17 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7741 as d7741 } from '../descriptors/data/324.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1715"]:c1(),["SharedCodec1716"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3072"]:c5(),["SharedCodec3075"]:c6(),["SharedCodec3091"]:c7(),["SharedCodec3092"]:c8(),["SharedCodec3093"]:c9(),["SharedCodec3094"]:c10(),["SharedCodec3095"]:c11(),["SharedCodec3096"]:c12(),["SharedCodec3097"]:c13(),["SharedCodec3098"]:c14(),["SharedCodec3099"]:c15(),["SharedCodec3100"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
