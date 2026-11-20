import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9912 as c1, d9923 as c8, d9924 as c9 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1441 as c2 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10005 as c3, d10006 as c4, d10007 as c7, d10008 as c11, d10009 as c12, d10010 as c13, d10011 as c14, d10012 as c24, d10013 as c25 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c5, d8261 as c6 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c10 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9932 as c15, d9933 as c16, d9934 as c17, d9935 as c18, d9936 as c19, d9937 as c20, d9938 as c21, d9939 as c22, d9940 as c23 } from '../descriptors/data/462.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1441 as d1441 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1927"]:c8(),["SharedCodec1928"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2245"]:c11(),["SharedCodec2246"]:c12(),["SharedCodec2247"]:c13(),["SharedCodec2248"]:c14(),["SharedCodec2268"]:c15(),["SharedCodec2269"]:c16(),["SharedCodec2270"]:c17(),["SharedCodec2271"]:c18(),["SharedCodec2272"]:c19(),["SharedCodec2273"]:c20(),["SharedCodec2274"]:c21(),["SharedCodec2275"]:c22(),["SharedCodec2276"]:c23(),["SharedCodec332"]:c24(),["SharedCodec334"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
