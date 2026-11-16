import { d1439 as c0 } from '../descriptors/data/68.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7392 as c1 } from '../descriptors/data/353.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1439 as d1439 } from '../descriptors/data/68.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestRecipientAccess"]:c0(),["SharedCodec1539"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
