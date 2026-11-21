import { d866 as c0 } from '../descriptors/data/47.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9074 as c1, d9075 as c2 } from '../descriptors/data/410.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d866 as d866 } from '../descriptors/data/47.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest"]:c0(),["SharedCodec440"]:c1(),["SharedCodec441"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
