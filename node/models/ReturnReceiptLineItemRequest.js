import { d8462 as c0, d8463 as c2, d8464 as c3, d8465 as c4, d8466 as c5, d8467 as c6, d8468 as c7 } from '../descriptors/data/415.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8478 as c1 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8462 as d8462 } from '../descriptors/data/415.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1498"]:c2(),["SharedCodec1499"]:c3(),["SharedCodec1500"]:c4(),["SharedCodec1501"]:c5(),["SharedCodec1502"]:c6(),["SharedCodec1503"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
