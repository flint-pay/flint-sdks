import { d393 as c0 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10606 as c2, d10621 as c3, d10608 as c4, d10609 as c5 } from '../descriptors/data/503.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9688 as c6 } from '../descriptors/data/448.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d393 as d393 } from '../descriptors/data/24.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d393;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestCorrection"]:c0(),["MoneyValue"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["SharedCodec553"]:c3(),["SharedCodec557"]:c4(),["SharedCodec558"]:c5(),["SharedCodec98"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
