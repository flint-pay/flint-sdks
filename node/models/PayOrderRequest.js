import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9909 as c1, d9913 as c2, d9916 as c5, d9920 as c10, d9921 as c11 } from '../descriptors/data/460.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10002 as c4, d10003 as c6, d10004 as c9, d10005 as c13, d10006 as c14, d10007 as c15, d10008 as c16, d10009 as c38, d10010 as c39 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c7, d8259 as c8 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c12 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9928 as c17, d9929 as c18, d9930 as c19, d9931 as c20, d9932 as c21, d9933 as c22, d9934 as c23, d9935 as c24, d9936 as c25, d9937 as c26, d9938 as c27, d9939 as c28, d9940 as c29, d9941 as c30, d9942 as c31, d9943 as c32, d9944 as c33, d9945 as c34, d9946 as c35, d9947 as c36, d9948 as c37 } from '../descriptors/data/461.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1927"]:c10(),["SharedCodec1928"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2245"]:c13(),["SharedCodec2246"]:c14(),["SharedCodec2247"]:c15(),["SharedCodec2248"]:c16(),["SharedCodec2267"]:c17(),["SharedCodec2268"]:c18(),["SharedCodec2269"]:c19(),["SharedCodec2270"]:c20(),["SharedCodec2271"]:c21(),["SharedCodec2272"]:c22(),["SharedCodec2273"]:c23(),["SharedCodec2274"]:c24(),["SharedCodec2275"]:c25(),["SharedCodec2276"]:c26(),["SharedCodec2277"]:c27(),["SharedCodec2278"]:c28(),["SharedCodec2279"]:c29(),["SharedCodec2280"]:c30(),["SharedCodec2281"]:c31(),["SharedCodec2282"]:c32(),["SharedCodec2283"]:c33(),["SharedCodec2284"]:c34(),["SharedCodec2285"]:c35(),["SharedCodec2286"]:c36(),["SharedCodec2287"]:c37(),["SharedCodec332"]:c38(),["SharedCodec334"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
