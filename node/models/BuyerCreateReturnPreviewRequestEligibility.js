import { d51 as c0 } from '../descriptors/data/2.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7305 as c1 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7352 as c2 } from '../descriptors/data/349.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7525 as c3, d7527 as c4, d7529 as c5, d7533 as c7, d7535 as c8, d7536 as c9 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7546 as c6, d7537 as c10, d7542 as c11, d7547 as c12 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7472 as c13, d7473 as c14, d7474 as c15, d7475 as c16 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d51 as d51 } from '../descriptors/data/2.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d51;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestEligibility"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1453"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec1457"]:c10(),["SharedCodec51"]:c11(),["SharedCodec54"]:c12(),["SharedCodec91"]:c13(),["SharedCodec92"]:c14(),["SharedCodec93"]:c15(),["SharedCodec94"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
