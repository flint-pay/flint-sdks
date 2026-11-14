import { d7499 as c0, d7501 as c6, d7503 as c7, d7507 as c12, d7509 as c13, d7510 as c14, d7511 as c15, d7517 as c30 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d349 as c1 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8391 as c2 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6575 as c3, d6576 as c4 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c5 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8412 as c8, d8413 as c9, d8404 as c16, d8405 as c17, d8406 as c18, d8407 as c19, d8408 as c20, d8414 as c21, d8415 as c22 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7524 as c10, d7525 as c31 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c11 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8416 as c23, d8417 as c24, d8418 as c26, d8419 as c28, d8420 as c29 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8401 as c25, d8402 as c27 } from '../descriptors/data/412.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d349 as d349 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec121"]:c11(),["SharedCodec1456"]:c12(),["SharedCodec1458"]:c13(),["SharedCodec1459"]:c14(),["SharedCodec1460"]:c15(),["SharedCodec1520"]:c16(),["SharedCodec1521"]:c17(),["SharedCodec1522"]:c18(),["SharedCodec1523"]:c19(),["SharedCodec1524"]:c20(),["SharedCodec1525"]:c21(),["SharedCodec1526"]:c22(),["SharedCodec1527"]:c23(),["SharedCodec404"]:c24(),["SharedCodec405"]:c25(),["SharedCodec406"]:c26(),["SharedCodec407"]:c27(),["SharedCodec408"]:c28(),["SharedCodec409"]:c29(),["SharedCodec53"]:c30(),["SharedCodec54"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
