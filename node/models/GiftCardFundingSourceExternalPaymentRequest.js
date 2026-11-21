import { d857 as c0 } from '../descriptors/data/46.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9062 as c1, d9063 as c2 } from '../descriptors/data/410.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d857 as d857 } from '../descriptors/data/46.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d857;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec428"]:c1(),["SharedCodec429"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
