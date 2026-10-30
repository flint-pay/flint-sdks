import { d40 as c0, d42 as c1 } from '../descriptors/data/1.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d75 as c2 } from '../descriptors/data/3.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d280 as c3 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5868 as c4, d5869 as c5, d5871 as c7, d5872 as c8, d5873 as c9, d5874 as c10 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1258 as c6 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5882 as c11, d5888 as c12 } from '../descriptors/data/270.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5824 as c13, d5825 as c14, d5826 as c15, d5827 as c16 } from '../descriptors/data/267.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d40 as d40 } from '../descriptors/data/1.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d40;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1153"]:c7(),["SharedCodec1154"]:c8(),["SharedCodec1155"]:c9(),["SharedCodec1156"]:c10(),["SharedCodec36"]:c11(),["SharedCodec37"]:c12(),["SharedCodec72"]:c13(),["SharedCodec73"]:c14(),["SharedCodec74"]:c15(),["SharedCodec75"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
