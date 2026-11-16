import { d5941 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c2 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8725 as c3, d8726 as c4 } from '../descriptors/data/429.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c5, d6610 as c6, d6611 as c7, d6612 as c8, d6613 as c9, d6614 as c10, d6615 as c11, d6616 as c12 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c13 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5734 as c14 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5734 as d5734 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec1619"]:c3(),["SharedCodec1620"]:c4(),["SharedCodec327"]:c5(),["SharedCodec328"]:c6(),["SharedCodec329"]:c7(),["SharedCodec330"]:c8(),["SharedCodec331"]:c9(),["SharedCodec343"]:c10(),["SharedCodec344"]:c11(),["SharedCodec345"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputVariant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
