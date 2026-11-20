import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9912 as c1, d9916 as c2, d9923 as c6, d9924 as c7 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1440 as c3 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10005 as c4, d10007 as c5, d10008 as c8, d10009 as c9, d10010 as c10, d10011 as c11, d10012 as c21, d10013 as c22 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9932 as c12, d9933 as c13, d9934 as c14, d9942 as c15, d9943 as c16, d9944 as c17, d9945 as c18, d9946 as c19, d9947 as c20 } from '../descriptors/data/462.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1440 as d1440 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1927"]:c6(),["SharedCodec1928"]:c7(),["SharedCodec2245"]:c8(),["SharedCodec2246"]:c9(),["SharedCodec2247"]:c10(),["SharedCodec2248"]:c11(),["SharedCodec2268"]:c12(),["SharedCodec2269"]:c13(),["SharedCodec2270"]:c14(),["SharedCodec2278"]:c15(),["SharedCodec2279"]:c16(),["SharedCodec2280"]:c17(),["SharedCodec2281"]:c18(),["SharedCodec2282"]:c19(),["SharedCodec2283"]:c20(),["SharedCodec332"]:c21(),["SharedCodec334"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
