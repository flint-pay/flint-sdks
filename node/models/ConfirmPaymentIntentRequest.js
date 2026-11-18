import { d229 as c0 } from '../descriptors/data/10.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9958 as c1, d9960 as c2, d9961 as c3, d9962 as c4, d9963 as c5, d9964 as c6, d9965 as c11, d9966 as c13 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10093 as c7, d10095 as c8, d10096 as c9, d10097 as c10, d10100 as c12 } from '../descriptors/data/464.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d229 as d229 } from '../descriptors/data/10.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2250"]:c3(),["SharedCodec2251"]:c4(),["SharedCodec2252"]:c5(),["SharedCodec2253"]:c6(),["SharedCodec327"]:c7(),["SharedCodec328"]:c8(),["SharedCodec329"]:c9(),["SharedCodec330"]:c10(),["SharedCodec331"]:c11(),["SharedCodec332"]:c12(),["SharedCodec333"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
