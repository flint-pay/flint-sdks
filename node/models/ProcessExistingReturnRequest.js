import { d6577 as c0, d6578 as c1 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c2 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c3 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8477 as c4, d8476 as c29 } from '../descriptors/data/416.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1229 as c5 } from '../descriptors/data/60.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8484 as c6, d8485 as c7, d8486 as c8, d8487 as c9, d8488 as c10 } from '../descriptors/data/417.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8403 as c11, d8405 as c19, d8406 as c20, d8407 as c21 } from '../descriptors/data/411.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8338 as c12, d8341 as c14, d8342 as c15, d8343 as c16 } from '../descriptors/data/407.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c13 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8493 as c17, d8494 as c18 } from '../descriptors/data/418.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c22, d8409 as c23, d8410 as c24, d8411 as c25, d8412 as c26, d8413 as c28 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7015 as c27 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1229 as d1229 } from '../descriptors/data/60.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec116"]:c13(),["SharedCodec1453"]:c14(),["SharedCodec1454"]:c15(),["SharedCodec1455"]:c16(),["SharedCodec1466"]:c17(),["SharedCodec1467"]:c18(),["SharedCodec1508"]:c19(),["SharedCodec1509"]:c20(),["SharedCodec1510"]:c21(),["SharedCodec1511"]:c22(),["SharedCodec1512"]:c23(),["SharedCodec1513"]:c24(),["SharedCodec1514"]:c25(),["SharedCodec1515"]:c26(),["SharedCodec298"]:c27(),["SharedCodec398"]:c28(),["SharedCodec404"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
