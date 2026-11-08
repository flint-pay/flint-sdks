import { d637 as c0 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5350 as c1, d5351 as c2 } from '../descriptors/data/240.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d637 as d637 } from '../descriptors/data/33.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d637;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardPurchaseRefundRecovery"]:c0(),["SharedCodec217"]:c1(),["SharedCodec218"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
