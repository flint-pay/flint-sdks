import { d6011 as c0, d6009 as c2, d6010 as c3 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6701 as c1 } from '../descriptors/data/311.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6120 as c4, d6121 as c5 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8761 as c6, d8762 as c7 } from '../descriptors/data/432.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7457 as c8, d7458 as c9, d7459 as c26 } from '../descriptors/data/356.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8738 as c10, d8739 as c11, d8742 as c21, d8743 as c22, d8744 as c23 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5913 as c12, d5914 as c13, d5912 as c14 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6130 as c15, d6131 as c16 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8767 as c17, d8768 as c18, d8769 as c19, d8770 as c20 } from '../descriptors/data/433.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7537 as c24, d7539 as c27 } from '../descriptors/data/360.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8795 as c25 } from '../descriptors/data/435.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5706 as c28 } from '../descriptors/data/252.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5706 as d5706 } from '../descriptors/data/252.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec145"]:c4(),["SharedCodec146"]:c5(),["SharedCodec1553"]:c6(),["SharedCodec1554"]:c7(),["SharedCodec1570"]:c8(),["SharedCodec1571"]:c9(),["SharedCodec1630"]:c10(),["SharedCodec1631"]:c11(),["SharedCodec1678"]:c12(),["SharedCodec1679"]:c13(),["SharedCodec1680"]:c14(),["SharedCodec169"]:c15(),["SharedCodec170"]:c16(),["SharedCodec1813"]:c17(),["SharedCodec1814"]:c18(),["SharedCodec1815"]:c19(),["SharedCodec1816"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec97"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
