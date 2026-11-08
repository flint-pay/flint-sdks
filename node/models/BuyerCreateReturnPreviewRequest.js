import { d38 as c0, d42 as c1 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d75 as c2 } from '../descriptors/data/3.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d285 as c3 } from '../descriptors/data/16.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5899 as c4, d5900 as c5, d5902 as c7, d5903 as c8, d5904 as c9, d5905 as c10 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1271 as c6 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2346 as c11 } from '../descriptors/data/102.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5912 as c12, d5913 as c14, d5919 as c15 } from '../descriptors/data/271.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d2559 as c13 } from '../descriptors/data/112.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5855 as c16, d5856 as c17, d5857 as c18, d5858 as c19 } from '../descriptors/data/268.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d38 as d38 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d38;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1171"]:c7(),["SharedCodec1172"]:c8(),["SharedCodec1173"]:c9(),["SharedCodec1174"]:c10(),["SharedCodec33"]:c11(),["SharedCodec34"]:c12(),["SharedCodec35"]:c13(),["SharedCodec36"]:c14(),["SharedCodec37"]:c15(),["SharedCodec72"]:c16(),["SharedCodec73"]:c17(),["SharedCodec74"]:c18(),["SharedCodec75"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
