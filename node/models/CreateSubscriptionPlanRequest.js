import { d378 as c0 } from '../descriptors/data/23.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c1, d5952 as c2, d5941 as c5 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c3 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6585 as c4, d6582 as c29, d6583 as c30, d6584 as c31 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c6 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c7 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6727 as c8 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c9 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8723 as c10, d8724 as c11, d8725 as c12, d8726 as c13, d8727 as c14, d8728 as c15, d8729 as c16, d8722 as c33 } from '../descriptors/data/429.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c17, d6610 as c18, d6611 as c19, d6612 as c20, d6613 as c21, d6614 as c22, d6615 as c23, d6616 as c24 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8738 as c25, d8739 as c26, d8740 as c27, d8741 as c28, d8743 as c32, d8746 as c34, d8747 as c35 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c36 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d378 as d378 } from '../descriptors/data/23.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec115"]:c8(),["SharedCodec116"]:c9(),["SharedCodec1617"]:c10(),["SharedCodec1618"]:c11(),["SharedCodec1619"]:c12(),["SharedCodec1620"]:c13(),["SharedCodec1621"]:c14(),["SharedCodec1622"]:c15(),["SharedCodec1623"]:c16(),["SharedCodec327"]:c17(),["SharedCodec328"]:c18(),["SharedCodec329"]:c19(),["SharedCodec330"]:c20(),["SharedCodec331"]:c21(),["SharedCodec343"]:c22(),["SharedCodec344"]:c23(),["SharedCodec345"]:c24(),["SharedCodec426"]:c25(),["SharedCodec427"]:c26(),["SharedCodec428"]:c27(),["SharedCodec429"]:c28(),["SharedCodec834"]:c29(),["SharedCodec835"]:c30(),["SharedCodec836"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
