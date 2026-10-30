import { d38 as c0, d42 as c1 } from '../descriptors/data/1.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d75 as c2 } from '../descriptors/data/3.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d280 as c3 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5868 as c4, d5869 as c5, d5871 as c7, d5872 as c8, d5873 as c9, d5874 as c10 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1258 as c6 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2361 as c11 } from '../descriptors/data/103.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5881 as c12, d5882 as c14, d5888 as c15 } from '../descriptors/data/270.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d2574 as c13 } from '../descriptors/data/112.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5824 as c16, d5825 as c17, d5826 as c18, d5827 as c19 } from '../descriptors/data/267.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d38 as d38 } from '../descriptors/data/1.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d38;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1153"]:c7(),["SharedCodec1154"]:c8(),["SharedCodec1155"]:c9(),["SharedCodec1156"]:c10(),["SharedCodec33"]:c11(),["SharedCodec34"]:c12(),["SharedCodec35"]:c13(),["SharedCodec36"]:c14(),["SharedCodec37"]:c15(),["SharedCodec72"]:c16(),["SharedCodec73"]:c17(),["SharedCodec74"]:c18(),["SharedCodec75"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
