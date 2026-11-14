import { d5919 as c0 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c2 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6690 as c3, d6686 as c4 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8701 as c5, d8702 as c6, d8703 as c7, d8704 as c8, d8708 as c9, d8709 as c10, d8710 as c11 } from '../descriptors/data/429.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6577 as c12, d6578 as c13, d6579 as c14, d6580 as c15, d6581 as c16, d6582 as c17 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6583 as c18, d6584 as c19 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c20 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8726 as c21 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8726 as d8726 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec1622"]:c5(),["SharedCodec1623"]:c6(),["SharedCodec1624"]:c7(),["SharedCodec1625"]:c8(),["SharedCodec1821"]:c9(),["SharedCodec1822"]:c10(),["SharedCodec1823"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13(),["SharedCodec335"]:c14(),["SharedCodec336"]:c15(),["SharedCodec337"]:c16(),["SharedCodec349"]:c17(),["SharedCodec350"]:c18(),["SharedCodec351"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
