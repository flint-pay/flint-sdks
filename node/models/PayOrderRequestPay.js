import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9909 as c1, d9920 as c8, d9921 as c9 } from '../descriptors/data/460.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1441 as c2 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10002 as c3, d10003 as c4, d10004 as c7, d10005 as c11, d10006 as c12, d10007 as c13, d10008 as c14, d10009 as c24, d10010 as c25 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c5, d8259 as c6 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c10 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9929 as c15, d9930 as c16, d9931 as c17, d9932 as c18, d9933 as c19, d9934 as c20, d9935 as c21, d9936 as c22, d9937 as c23 } from '../descriptors/data/461.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1441 as d1441 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1927"]:c8(),["SharedCodec1928"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2245"]:c11(),["SharedCodec2246"]:c12(),["SharedCodec2247"]:c13(),["SharedCodec2248"]:c14(),["SharedCodec2268"]:c15(),["SharedCodec2269"]:c16(),["SharedCodec2270"]:c17(),["SharedCodec2271"]:c18(),["SharedCodec2272"]:c19(),["SharedCodec2273"]:c20(),["SharedCodec2274"]:c21(),["SharedCodec2275"]:c22(),["SharedCodec2276"]:c23(),["SharedCodec332"]:c24(),["SharedCodec334"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
