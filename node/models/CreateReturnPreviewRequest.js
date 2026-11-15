import { d7494 as c0, d7496 as c6, d7498 as c7, d7502 as c12, d7504 as c13, d7505 as c14 } from '../descriptors/data/358.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d343 as c1 } from '../descriptors/data/21.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8387 as c2 } from '../descriptors/data/410.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6577 as c3, d6578 as c4 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c5 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8403 as c8, d8399 as c9, d8405 as c16, d8406 as c17, d8407 as c18, d8395 as c24, d8396 as c25, d8397 as c27, d8400 as c28, d8398 as c29, d8401 as c30, d8402 as c31 } from '../descriptors/data/411.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7515 as c10, d7506 as c15, d7511 as c32, d7512 as c33, d7516 as c34 } from '../descriptors/data/359.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c11 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8408 as c19, d8409 as c20, d8410 as c21, d8411 as c22, d8412 as c23, d8413 as c26 } from '../descriptors/data/412.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d343 as d343 } from '../descriptors/data/21.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec116"]:c11(),["SharedCodec1446"]:c12(),["SharedCodec1448"]:c13(),["SharedCodec1449"]:c14(),["SharedCodec1450"]:c15(),["SharedCodec1508"]:c16(),["SharedCodec1509"]:c17(),["SharedCodec1510"]:c18(),["SharedCodec1511"]:c19(),["SharedCodec1512"]:c20(),["SharedCodec1513"]:c21(),["SharedCodec1514"]:c22(),["SharedCodec1515"]:c23(),["SharedCodec396"]:c24(),["SharedCodec397"]:c25(),["SharedCodec398"]:c26(),["SharedCodec399"]:c27(),["SharedCodec400"]:c28(),["SharedCodec401"]:c29(),["SharedCodec402"]:c30(),["SharedCodec403"]:c31(),["SharedCodec51"]:c32(),["SharedCodec53"]:c33(),["SharedCodec54"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
