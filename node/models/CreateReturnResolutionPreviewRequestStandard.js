import { d357 as c0 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6575 as c1, d6576 as c2 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8412 as c4, d8413 as c5, d8404 as c8, d8405 as c9, d8406 as c10, d8407 as c11, d8408 as c12, d8414 as c13, d8415 as c14 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7524 as c6, d7525 as c18 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c7 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8416 as c15, d8417 as c16, d8418 as c17 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d357 as d357 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec121"]:c7(),["SharedCodec1520"]:c8(),["SharedCodec1521"]:c9(),["SharedCodec1522"]:c10(),["SharedCodec1523"]:c11(),["SharedCodec1524"]:c12(),["SharedCodec1525"]:c13(),["SharedCodec1526"]:c14(),["SharedCodec1527"]:c15(),["SharedCodec404"]:c16(),["SharedCodec406"]:c17(),["SharedCodec54"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
