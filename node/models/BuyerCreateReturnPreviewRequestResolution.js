import { d40 as c0, d42 as c1 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d75 as c2 } from '../descriptors/data/3.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d285 as c3 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5899 as c4, d5900 as c5, d5902 as c7, d5903 as c8, d5904 as c9, d5905 as c10 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1271 as c6 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5913 as c11, d5919 as c12 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5855 as c13, d5856 as c14, d5857 as c15, d5858 as c16 } from '../descriptors/data/268.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d40 as d40 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d40;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1171"]:c7(),["SharedCodec1172"]:c8(),["SharedCodec1173"]:c9(),["SharedCodec1174"]:c10(),["SharedCodec36"]:c11(),["SharedCodec37"]:c12(),["SharedCodec72"]:c13(),["SharedCodec73"]:c14(),["SharedCodec74"]:c15(),["SharedCodec75"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
