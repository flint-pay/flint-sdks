import { d318 as c0 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7922 as c3, d7923 as c4 } from '../descriptors/data/382.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7816 as c5 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6130 as c6 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c7 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7959 as c8, d7960 as c9, d7961 as c10, d7962 as c11, d7963 as c12, d7964 as c13, d7965 as c14, d7966 as c15, d7967 as c16, d7968 as c17, d7969 as c18, d7970 as c19, d7971 as c20, d7972 as c21, d7973 as c22 } from '../descriptors/data/385.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d318 as d318 } from '../descriptors/data/19.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec141"]:c7(),["SharedCodec365"]:c8(),["SharedCodec366"]:c9(),["SharedCodec367"]:c10(),["SharedCodec368"]:c11(),["SharedCodec369"]:c12(),["SharedCodec370"]:c13(),["SharedCodec371"]:c14(),["SharedCodec372"]:c15(),["SharedCodec373"]:c16(),["SharedCodec374"]:c17(),["SharedCodec375"]:c18(),["SharedCodec376"]:c19(),["SharedCodec377"]:c20(),["SharedCodec378"]:c21(),["SharedCodec379"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
