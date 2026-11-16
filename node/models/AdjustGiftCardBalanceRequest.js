import { d14 as c0 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7014 as c1 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d14 as d14 } from '../descriptors/data/0.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d14;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustGiftCardBalanceRequest"]:c0(),["SignedMoneyRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
