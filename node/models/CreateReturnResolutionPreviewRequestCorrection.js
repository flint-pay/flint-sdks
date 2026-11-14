import { d356 as c0 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8413 as c2 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8417 as c3, d8419 as c4, d8420 as c5 } from '../descriptors/data/414.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7525 as c6 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d356 as d356 } from '../descriptors/data/22.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestCorrection"]:c0(),["MoneyValue"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["SharedCodec404"]:c3(),["SharedCodec408"]:c4(),["SharedCodec409"]:c5(),["SharedCodec54"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
