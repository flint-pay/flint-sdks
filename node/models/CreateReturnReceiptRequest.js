import { d352 as c0 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8462 as c1, d8463 as c7, d8464 as c8, d8465 as c9, d8466 as c10, d8467 as c11, d8468 as c12 } from '../descriptors/data/415.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8372 as c2, d8375 as c4, d8376 as c5, d8377 as c6 } from '../descriptors/data/409.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8478 as c3 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7045 as c13 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d352 as d352 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1460"]:c4(),["SharedCodec1461"]:c5(),["SharedCodec1462"]:c6(),["SharedCodec1498"]:c7(),["SharedCodec1499"]:c8(),["SharedCodec1500"]:c9(),["SharedCodec1501"]:c10(),["SharedCodec1502"]:c11(),["SharedCodec1503"]:c12(),["SharedCodec298"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
