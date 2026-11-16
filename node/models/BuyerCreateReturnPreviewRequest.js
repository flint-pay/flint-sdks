import { d54 as c0 } from '../descriptors/data/2.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9131 as c1 } from '../descriptors/data/411.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9178 as c2 } from '../descriptors/data/417.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9351 as c3, d9353 as c4, d9355 as c5, d9372 as c6, d9361 as c11, d9363 as c12, d9364 as c13, d9365 as c14, d9370 as c16, d9371 as c18, d9373 as c19 } from '../descriptors/data/428.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9203 as c7, d9204 as c8, d9205 as c9, d9206 as c10 } from '../descriptors/data/420.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9300 as c15, d9301 as c17 } from '../descriptors/data/425.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d54 as d54 } from '../descriptors/data/2.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d54;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec160"]:c7(),["SharedCodec161"]:c8(),["SharedCodec162"]:c9(),["SharedCodec163"]:c10(),["SharedCodec2579"]:c11(),["SharedCodec2581"]:c12(),["SharedCodec2582"]:c13(),["SharedCodec2583"]:c14(),["SharedCodec91"]:c15(),["SharedCodec92"]:c16(),["SharedCodec93"]:c17(),["SharedCodec94"]:c18(),["SharedCodec95"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
