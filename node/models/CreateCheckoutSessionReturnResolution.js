import { d8222 as c0, d8219 as c2, d8220 as c3, d8221 as c4 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d251 as c1 } from '../descriptors/data/12.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8067 as c5, d8068 as c6, d8069 as c7 } from '../descriptors/data/349.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8083 as c8, d8084 as c9 } from '../descriptors/data/351.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d251 as d251 } from '../descriptors/data/12.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec347"]:c2(),["SharedCodec348"]:c3(),["SharedCodec349"]:c4(),["SharedCodec350"]:c5(),["SharedCodec351"]:c6(),["SharedCodec352"]:c7(),["SharedCodec365"]:c8(),["SharedCodec366"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
