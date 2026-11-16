import { d1386 as c0 } from '../descriptors/data/66.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8478 as c1 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8463 as c2 } from '../descriptors/data/415.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1386 as d1386 } from '../descriptors/data/66.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemInputExcess"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1498"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemInputExcess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
