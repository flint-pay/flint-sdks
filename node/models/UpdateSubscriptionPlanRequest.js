import { d5921 as c0, d5922 as c1, d5911 as c4, d5913 as c13, d5914 as c14, d5912 as c15 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5928 as c2, d5933 as c16 } from '../descriptors/data/268.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6555 as c3, d6552 as c34, d6553 as c35, d6554 as c36 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c5 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6129 as c6 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6697 as c7 } from '../descriptors/data/311.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c8 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8689 as c9, d8690 as c10, d8691 as c11, d8692 as c12, d8688 as c38 } from '../descriptors/data/427.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6252 as c17 } from '../descriptors/data/286.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8696 as c18, d8697 as c19, d8698 as c20, d8699 as c21 } from '../descriptors/data/428.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6579 as c22, d6580 as c23, d6581 as c24, d6582 as c25, d6583 as c26, d6584 as c27, d6585 as c28, d6586 as c29 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8704 as c30, d8705 as c31, d8706 as c32, d8707 as c33, d8709 as c37, d8712 as c39, d8714 as c41 } from '../descriptors/data/429.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5842 as c40 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5705 as c42 } from '../descriptors/data/251.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5705 as d5705 } from '../descriptors/data/251.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec115"]:c7(),["SharedCodec116"]:c8(),["SharedCodec1610"]:c9(),["SharedCodec1611"]:c10(),["SharedCodec1612"]:c11(),["SharedCodec1613"]:c12(),["SharedCodec1678"]:c13(),["SharedCodec1679"]:c14(),["SharedCodec1680"]:c15(),["SharedCodec1682"]:c16(),["SharedCodec1684"]:c17(),["SharedCodec1809"]:c18(),["SharedCodec1810"]:c19(),["SharedCodec1811"]:c20(),["SharedCodec1812"]:c21(),["SharedCodec327"]:c22(),["SharedCodec328"]:c23(),["SharedCodec329"]:c24(),["SharedCodec330"]:c25(),["SharedCodec331"]:c26(),["SharedCodec343"]:c27(),["SharedCodec344"]:c28(),["SharedCodec345"]:c29(),["SharedCodec426"]:c30(),["SharedCodec427"]:c31(),["SharedCodec428"]:c32(),["SharedCodec429"]:c33(),["SharedCodec834"]:c34(),["SharedCodec835"]:c35(),["SharedCodec836"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
