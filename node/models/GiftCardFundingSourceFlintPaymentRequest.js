import { d695 as c0 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6947 as c1 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d695 as d695 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceFlintPaymentRequest"]:c0(),["SharedCodec274"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceFlintPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
