import { d6575 as c0, d6576 as c1 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c2 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8469 as c4 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1235 as c5 } from '../descriptors/data/60.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8477 as c6, d8478 as c7, d8479 as c8, d8480 as c9, d8481 as c10 } from '../descriptors/data/418.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8412 as c11, d8404 as c19, d8405 as c20, d8406 as c21, d8407 as c22, d8408 as c23, d8414 as c24, d8415 as c25 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8485 as c12, d8488 as c17, d8489 as c18 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c13 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8343 as c14, d8344 as c15, d8345 as c16 } from '../descriptors/data/408.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8416 as c26, d8417 as c28 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7016 as c27 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8538 as c29 } from '../descriptors/data/421.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1235 as d1235 } from '../descriptors/data/60.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec121"]:c13(),["SharedCodec1463"]:c14(),["SharedCodec1464"]:c15(),["SharedCodec1465"]:c16(),["SharedCodec1476"]:c17(),["SharedCodec1477"]:c18(),["SharedCodec1520"]:c19(),["SharedCodec1521"]:c20(),["SharedCodec1522"]:c21(),["SharedCodec1523"]:c22(),["SharedCodec1524"]:c23(),["SharedCodec1525"]:c24(),["SharedCodec1526"]:c25(),["SharedCodec1527"]:c26(),["SharedCodec304"]:c27(),["SharedCodec404"]:c28(),["SharedCodec410"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
