import { d6577 as c0, d6578 as c1 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c3 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8405 as c4, d8406 as c5, d8407 as c6 } from '../descriptors/data/411.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c7, d8409 as c8 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5912 as c9 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6008 as c10 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6252 as c11 } from '../descriptors/data/286.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8445 as c12, d8446 as c13, d8447 as c14, d8448 as c15, d8449 as c16 } from '../descriptors/data/414.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8470 as c17, d8471 as c18 } from '../descriptors/data/415.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8472 as c19 } from '../descriptors/data/416.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5692 as c20 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5692 as d5692 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec116"]:c3(),["SharedCodec1508"]:c4(),["SharedCodec1509"]:c5(),["SharedCodec1510"]:c6(),["SharedCodec1511"]:c7(),["SharedCodec1512"]:c8(),["SharedCodec1680"]:c9(),["SharedCodec1683"]:c10(),["SharedCodec1684"]:c11(),["SharedCodec1778"]:c12(),["SharedCodec1779"]:c13(),["SharedCodec1780"]:c14(),["SharedCodec1781"]:c15(),["SharedCodec1782"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
