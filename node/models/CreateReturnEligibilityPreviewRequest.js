import { d7494 as c0, d7496 as c1, d7498 as c2, d7502 as c3, d7504 as c4, d7505 as c5 } from '../descriptors/data/358.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7506 as c6 } from '../descriptors/data/359.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7494 as d7494 } from '../descriptors/data/358.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequestModel"]:c1(),["ReturnEligibilitySelectionRequest"]:c2(),["SharedCodec1446"]:c3(),["SharedCodec1448"]:c4(),["SharedCodec1449"]:c5(),["SharedCodec1450"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
