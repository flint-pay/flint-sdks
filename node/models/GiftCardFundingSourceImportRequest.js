import { d701 as c0 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6945 as c1 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6951 as c2 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d701 as d701 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImportRequest"]:c0(),["SharedCodec272"]:c1(),["SharedCodec278"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
