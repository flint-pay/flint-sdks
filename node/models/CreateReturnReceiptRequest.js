import { d482 as c0, d2222 as c1, d2149 as c2, d2216 as c3, d2218 as c4, d2217 as c5, d2220 as c6, d2219 as c7, d2221 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d482 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d482;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["SharedCodec587"]:c6(),["SharedCodec588"]:c7(),["SharedCodec589"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
