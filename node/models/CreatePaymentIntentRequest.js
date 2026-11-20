import { d357 as c0 } from '../descriptors/data/20.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c1 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10119 as c3, d10120 as c4 } from '../descriptors/data/471.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10006 as c5 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c6, d8261 as c7 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c8 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10161 as c9, d10162 as c10, d10163 as c11, d10164 as c12, d10165 as c13, d10166 as c14, d10167 as c15, d10168 as c16, d10169 as c17, d10170 as c18, d10171 as c19, d10172 as c20, d10173 as c21, d10174 as c22, d10175 as c23, d10176 as c24 } from '../descriptors/data/474.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d357 as d357 } from '../descriptors/data/20.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec513"]:c9(),["SharedCodec514"]:c10(),["SharedCodec515"]:c11(),["SharedCodec516"]:c12(),["SharedCodec517"]:c13(),["SharedCodec518"]:c14(),["SharedCodec519"]:c15(),["SharedCodec520"]:c16(),["SharedCodec521"]:c17(),["SharedCodec522"]:c18(),["SharedCodec523"]:c19(),["SharedCodec524"]:c20(),["SharedCodec525"]:c21(),["SharedCodec526"]:c22(),["SharedCodec527"]:c23(),["SharedCodec528"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
