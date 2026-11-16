import { d5951 as c0, d5952 as c1, d5941 as c4, d5943 as c13, d5944 as c14, d5942 as c15 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c2, d5963 as c16 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6585 as c3, d6582 as c34, d6583 as c35, d6584 as c36 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c5 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c6 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6727 as c7 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c8 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8723 as c9, d8724 as c10, d8725 as c11, d8726 as c12, d8722 as c38 } from '../descriptors/data/429.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6282 as c17 } from '../descriptors/data/287.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8730 as c18, d8731 as c19, d8732 as c20, d8733 as c21 } from '../descriptors/data/430.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c22, d6610 as c23, d6611 as c24, d6612 as c25, d6613 as c26, d6614 as c27, d6615 as c28, d6616 as c29 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8738 as c30, d8739 as c31, d8740 as c32, d8741 as c33, d8743 as c37, d8746 as c39, d8748 as c41 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c40 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5735 as c42 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5735 as d5735 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec115"]:c7(),["SharedCodec116"]:c8(),["SharedCodec1617"]:c9(),["SharedCodec1618"]:c10(),["SharedCodec1619"]:c11(),["SharedCodec1620"]:c12(),["SharedCodec1685"]:c13(),["SharedCodec1686"]:c14(),["SharedCodec1687"]:c15(),["SharedCodec1689"]:c16(),["SharedCodec1691"]:c17(),["SharedCodec1816"]:c18(),["SharedCodec1817"]:c19(),["SharedCodec1818"]:c20(),["SharedCodec1819"]:c21(),["SharedCodec327"]:c22(),["SharedCodec328"]:c23(),["SharedCodec329"]:c24(),["SharedCodec330"]:c25(),["SharedCodec331"]:c26(),["SharedCodec343"]:c27(),["SharedCodec344"]:c28(),["SharedCodec345"]:c29(),["SharedCodec426"]:c30(),["SharedCodec427"]:c31(),["SharedCodec428"]:c32(),["SharedCodec429"]:c33(),["SharedCodec834"]:c34(),["SharedCodec835"]:c35(),["SharedCodec836"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
