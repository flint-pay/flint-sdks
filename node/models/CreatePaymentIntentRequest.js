import { d357 as c0 } from '../descriptors/data/20.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10116 as c3, d10117 as c4 } from '../descriptors/data/470.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10003 as c5 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c6, d8259 as c7 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c8 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10158 as c9, d10159 as c10, d10160 as c11, d10161 as c12, d10162 as c13, d10163 as c14, d10164 as c15, d10165 as c16, d10166 as c17, d10167 as c18, d10168 as c19, d10169 as c20, d10170 as c21, d10171 as c22, d10172 as c23, d10173 as c24 } from '../descriptors/data/473.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d357 as d357 } from '../descriptors/data/20.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec513"]:c9(),["SharedCodec514"]:c10(),["SharedCodec515"]:c11(),["SharedCodec516"]:c12(),["SharedCodec517"]:c13(),["SharedCodec518"]:c14(),["SharedCodec519"]:c15(),["SharedCodec520"]:c16(),["SharedCodec521"]:c17(),["SharedCodec522"]:c18(),["SharedCodec523"]:c19(),["SharedCodec524"]:c20(),["SharedCodec525"]:c21(),["SharedCodec526"]:c22(),["SharedCodec527"]:c23(),["SharedCodec528"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
