import { d355 as c0 } from '../descriptors/data/20.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c1 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10071 as c3, d10072 as c4 } from '../descriptors/data/462.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9959 as c5 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8227 as c6, d8226 as c7 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8994 as c8 } from '../descriptors/data/402.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10114 as c9, d10115 as c10, d10116 as c11, d10117 as c12, d10118 as c13, d10119 as c14, d10120 as c15, d10121 as c16, d10122 as c17, d10123 as c18, d10124 as c19, d10125 as c20, d10126 as c21, d10127 as c22, d10128 as c23, d10129 as c24 } from '../descriptors/data/465.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d355 as d355 } from '../descriptors/data/20.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec511"]:c9(),["SharedCodec512"]:c10(),["SharedCodec513"]:c11(),["SharedCodec514"]:c12(),["SharedCodec515"]:c13(),["SharedCodec516"]:c14(),["SharedCodec517"]:c15(),["SharedCodec518"]:c16(),["SharedCodec519"]:c17(),["SharedCodec520"]:c18(),["SharedCodec521"]:c19(),["SharedCodec522"]:c20(),["SharedCodec523"]:c21(),["SharedCodec524"]:c22(),["SharedCodec525"]:c23(),["SharedCodec526"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
