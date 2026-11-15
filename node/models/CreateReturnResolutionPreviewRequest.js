import { d8387 as c0 } from '../descriptors/data/410.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6577 as c1, d6578 as c2 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c3 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8403 as c4, d8399 as c5, d8405 as c8, d8406 as c9, d8407 as c10, d8397 as c17, d8400 as c18, d8398 as c19, d8401 as c20, d8402 as c21 } from '../descriptors/data/411.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7515 as c6, d7516 as c22 } from '../descriptors/data/359.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c7 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c11, d8409 as c12, d8410 as c13, d8411 as c14, d8412 as c15, d8413 as c16 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8387 as d8387 } from '../descriptors/data/410.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec116"]:c7(),["SharedCodec1508"]:c8(),["SharedCodec1509"]:c9(),["SharedCodec1510"]:c10(),["SharedCodec1511"]:c11(),["SharedCodec1512"]:c12(),["SharedCodec1513"]:c13(),["SharedCodec1514"]:c14(),["SharedCodec1515"]:c15(),["SharedCodec398"]:c16(),["SharedCodec399"]:c17(),["SharedCodec400"]:c18(),["SharedCodec401"]:c19(),["SharedCodec402"]:c20(),["SharedCodec403"]:c21(),["SharedCodec54"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
