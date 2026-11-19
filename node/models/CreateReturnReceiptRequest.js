import { d390 as c0 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10636 as c1, d10637 as c7, d10638 as c8, d10639 as c9, d10640 as c10, d10641 as c11, d10642 as c12 } from '../descriptors/data/505.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10543 as c2, d10546 as c4, d10547 as c5, d10548 as c6 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10652 as c3 } from '../descriptors/data/506.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9133 as c13 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d390 as d390 } from '../descriptors/data/23.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2673"]:c4(),["SharedCodec2674"]:c5(),["SharedCodec2675"]:c6(),["SharedCodec2747"]:c7(),["SharedCodec2748"]:c8(),["SharedCodec2749"]:c9(),["SharedCodec2754"]:c10(),["SharedCodec2755"]:c11(),["SharedCodec2756"]:c12(),["SharedCodec451"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
