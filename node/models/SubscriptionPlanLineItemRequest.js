import { d5941 as c0 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c2 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6727 as c3 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c4 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8723 as c5, d8724 as c6, d8725 as c7, d8726 as c8, d8727 as c9, d8728 as c10, d8729 as c11 } from '../descriptors/data/429.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c12, d6610 as c13, d6611 as c14, d6612 as c15, d6613 as c16, d6614 as c17, d6615 as c18, d6616 as c19 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8747 as c20 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c21 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8747 as d8747 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec115"]:c3(),["SharedCodec116"]:c4(),["SharedCodec1617"]:c5(),["SharedCodec1618"]:c6(),["SharedCodec1619"]:c7(),["SharedCodec1620"]:c8(),["SharedCodec1621"]:c9(),["SharedCodec1622"]:c10(),["SharedCodec1623"]:c11(),["SharedCodec327"]:c12(),["SharedCodec328"]:c13(),["SharedCodec329"]:c14(),["SharedCodec330"]:c15(),["SharedCodec331"]:c16(),["SharedCodec343"]:c17(),["SharedCodec344"]:c18(),["SharedCodec345"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
