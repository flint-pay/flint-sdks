import { d6577 as c0, d6578 as c1 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c3 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8405 as c4, d8406 as c5, d8407 as c6 } from '../descriptors/data/411.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c7, d8409 as c8 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8445 as c9, d8446 as c10, d8447 as c11 } from '../descriptors/data/414.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8470 as c12 } from '../descriptors/data/415.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8470 as d8470 } from '../descriptors/data/415.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec116"]:c3(),["SharedCodec1508"]:c4(),["SharedCodec1509"]:c5(),["SharedCodec1510"]:c6(),["SharedCodec1511"]:c7(),["SharedCodec1512"]:c8(),["SharedCodec1778"]:c9(),["SharedCodec1779"]:c10(),["SharedCodec1780"]:c11(),["UpdateReturnReplacementLineItemRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
