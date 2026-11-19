import { d158 as c0 } from '../descriptors/data/8.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10114 as c1 } from '../descriptors/data/470.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c3, d8259 as c4 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9028 as c5 } from '../descriptors/data/408.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d158 as d158 } from '../descriptors/data/8.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d158;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentIntentRequest"]:c0(),["CapturePaymentSplitRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PlatformFeeRequest"]:c4(),["SharedCodec216"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
