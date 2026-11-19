import { d231 as c0 } from '../descriptors/data/10.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10002 as c1, d10004 as c2, d10005 as c3, d10006 as c4, d10007 as c5, d10008 as c6, d10009 as c11, d10010 as c13 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10135 as c7, d10138 as c8, d10140 as c9, d10141 as c10, d10142 as c12 } from '../descriptors/data/472.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d231 as d231 } from '../descriptors/data/10.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2245"]:c3(),["SharedCodec2246"]:c4(),["SharedCodec2247"]:c5(),["SharedCodec2248"]:c6(),["SharedCodec328"]:c7(),["SharedCodec329"]:c8(),["SharedCodec330"]:c9(),["SharedCodec331"]:c10(),["SharedCodec332"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
