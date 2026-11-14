import { d6575 as c0, d6576 as c1 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c2 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8469 as c4 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8477 as c5, d8478 as c6, d8479 as c7, d8481 as c8 } from '../descriptors/data/418.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8412 as c9, d8404 as c13, d8405 as c14, d8406 as c15, d8407 as c16, d8408 as c17, d8414 as c18, d8415 as c19 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c10 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8488 as c11, d8489 as c12 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8416 as c20, d8417 as c21 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8538 as c22 } from '../descriptors/data/421.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8469 as d8469 } from '../descriptors/data/417.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ReturnProcessDecision"]:c5(),["ReturnProcessDispositionRequest"]:c6(),["ReturnProcessInspectionRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["SharedCodec121"]:c10(),["SharedCodec1476"]:c11(),["SharedCodec1477"]:c12(),["SharedCodec1520"]:c13(),["SharedCodec1521"]:c14(),["SharedCodec1522"]:c15(),["SharedCodec1523"]:c16(),["SharedCodec1524"]:c17(),["SharedCodec1525"]:c18(),["SharedCodec1526"]:c19(),["SharedCodec1527"]:c20(),["SharedCodec404"]:c21(),["SharedCodec410"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
