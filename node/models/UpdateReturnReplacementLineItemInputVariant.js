import { d6577 as c0, d6578 as c1 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c3, d8409 as c4 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5690 as c5 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5690 as d5690 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec1511"]:c3(),["SharedCodec1512"]:c4(),["UpdateReturnReplacementLineItemInputVariant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
