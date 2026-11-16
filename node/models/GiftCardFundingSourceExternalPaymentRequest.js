import { d691 as c0 } from '../descriptors/data/37.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6944 as c1, d6945 as c2 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d691 as d691 } from '../descriptors/data/37.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec271"]:c1(),["SharedCodec272"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
