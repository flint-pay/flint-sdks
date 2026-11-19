import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9909 as c1, d9913 as c2, d9920 as c6, d9921 as c7 } from '../descriptors/data/460.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1440 as c3 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10002 as c4, d10004 as c5, d10005 as c8, d10006 as c9, d10007 as c10, d10008 as c11, d10009 as c21, d10010 as c22 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9929 as c12, d9930 as c13, d9931 as c14, d9939 as c15, d9940 as c16, d9941 as c17, d9942 as c18, d9943 as c19, d9944 as c20 } from '../descriptors/data/461.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1440 as d1440 } from '../descriptors/data/71.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1927"]:c6(),["SharedCodec1928"]:c7(),["SharedCodec2245"]:c8(),["SharedCodec2246"]:c9(),["SharedCodec2247"]:c10(),["SharedCodec2248"]:c11(),["SharedCodec2268"]:c12(),["SharedCodec2269"]:c13(),["SharedCodec2270"]:c14(),["SharedCodec2278"]:c15(),["SharedCodec2279"]:c16(),["SharedCodec2280"]:c17(),["SharedCodec2281"]:c18(),["SharedCodec2282"]:c19(),["SharedCodec2283"]:c20(),["SharedCodec332"]:c21(),["SharedCodec334"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
