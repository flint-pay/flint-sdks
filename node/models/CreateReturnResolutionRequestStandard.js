import { d360 as c0 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6575 as c1, d6576 as c2 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c4 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8412 as c5, d8413 as c6, d8404 as c9, d8405 as c10, d8406 as c11, d8407 as c12, d8408 as c13, d8414 as c14, d8415 as c15 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7524 as c7, d7525 as c20 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c8 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8416 as c16, d8417 as c17, d8418 as c18 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8538 as c19 } from '../descriptors/data/421.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d360 as d360 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["ReturnResolutionAdjustmentRequest"]:c6(),["ReturnResolutionLineItemRequest"]:c7(),["SharedCodec121"]:c8(),["SharedCodec1520"]:c9(),["SharedCodec1521"]:c10(),["SharedCodec1522"]:c11(),["SharedCodec1523"]:c12(),["SharedCodec1524"]:c13(),["SharedCodec1525"]:c14(),["SharedCodec1526"]:c15(),["SharedCodec1527"]:c16(),["SharedCodec404"]:c17(),["SharedCodec406"]:c18(),["SharedCodec410"]:c19(),["SharedCodec54"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
