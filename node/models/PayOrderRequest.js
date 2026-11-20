import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9912 as c1, d9916 as c2, d9919 as c5, d9923 as c10, d9924 as c11 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10005 as c4, d10006 as c6, d10007 as c9, d10008 as c13, d10009 as c14, d10010 as c15, d10011 as c16, d10012 as c38, d10013 as c39 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8262 as c7, d8261 as c8 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c12 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9931 as c17, d9932 as c18, d9933 as c19, d9934 as c20, d9935 as c21, d9936 as c22, d9937 as c23, d9938 as c24, d9939 as c25, d9940 as c26, d9941 as c27, d9942 as c28, d9943 as c29, d9944 as c30, d9945 as c31, d9946 as c32, d9947 as c33, d9948 as c34, d9949 as c35, d9950 as c36, d9951 as c37 } from '../descriptors/data/462.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1927"]:c10(),["SharedCodec1928"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2245"]:c13(),["SharedCodec2246"]:c14(),["SharedCodec2247"]:c15(),["SharedCodec2248"]:c16(),["SharedCodec2267"]:c17(),["SharedCodec2268"]:c18(),["SharedCodec2269"]:c19(),["SharedCodec2270"]:c20(),["SharedCodec2271"]:c21(),["SharedCodec2272"]:c22(),["SharedCodec2273"]:c23(),["SharedCodec2274"]:c24(),["SharedCodec2275"]:c25(),["SharedCodec2276"]:c26(),["SharedCodec2277"]:c27(),["SharedCodec2278"]:c28(),["SharedCodec2279"]:c29(),["SharedCodec2280"]:c30(),["SharedCodec2281"]:c31(),["SharedCodec2282"]:c32(),["SharedCodec2283"]:c33(),["SharedCodec2284"]:c34(),["SharedCodec2285"]:c35(),["SharedCodec2286"]:c36(),["SharedCodec2287"]:c37(),["SharedCodec332"]:c38(),["SharedCodec334"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
