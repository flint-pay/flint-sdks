import { d375 as c0 } from '../descriptors/data/23.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5921 as c1, d5922 as c2, d5911 as c5 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5928 as c3 } from '../descriptors/data/268.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6555 as c4, d6552 as c29, d6553 as c30, d6554 as c31 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c6 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6129 as c7 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6697 as c8 } from '../descriptors/data/311.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6693 as c9 } from '../descriptors/data/310.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8689 as c10, d8690 as c11, d8691 as c12, d8692 as c13, d8693 as c14, d8694 as c15, d8695 as c16, d8688 as c33 } from '../descriptors/data/427.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6579 as c17, d6580 as c18, d6581 as c19, d6582 as c20, d6583 as c21, d6584 as c22, d6585 as c23, d6586 as c24 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8704 as c25, d8705 as c26, d8706 as c27, d8707 as c28, d8709 as c32, d8712 as c34, d8713 as c35 } from '../descriptors/data/429.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5842 as c36 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d375 as d375 } from '../descriptors/data/23.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec115"]:c8(),["SharedCodec116"]:c9(),["SharedCodec1610"]:c10(),["SharedCodec1611"]:c11(),["SharedCodec1612"]:c12(),["SharedCodec1613"]:c13(),["SharedCodec1614"]:c14(),["SharedCodec1615"]:c15(),["SharedCodec1616"]:c16(),["SharedCodec327"]:c17(),["SharedCodec328"]:c18(),["SharedCodec329"]:c19(),["SharedCodec330"]:c20(),["SharedCodec331"]:c21(),["SharedCodec343"]:c22(),["SharedCodec344"]:c23(),["SharedCodec345"]:c24(),["SharedCodec426"]:c25(),["SharedCodec427"]:c26(),["SharedCodec428"]:c27(),["SharedCodec429"]:c28(),["SharedCodec834"]:c29(),["SharedCodec835"]:c30(),["SharedCodec836"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
