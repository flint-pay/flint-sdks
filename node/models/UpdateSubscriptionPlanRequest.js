import { d5929 as c0, d5930 as c1, d5919 as c4, d5921 as c13, d5922 as c14, d5920 as c15 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c2, d5941 as c16 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6553 as c3, d6550 as c34, d6551 as c35, d6552 as c36 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c5 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c6 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6690 as c7, d6686 as c8 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8701 as c9, d8702 as c10, d8703 as c11, d8704 as c12, d8708 as c18, d8709 as c19, d8710 as c20, d8711 as c21, d8700 as c38 } from '../descriptors/data/429.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6256 as c17 } from '../descriptors/data/287.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6577 as c22, d6578 as c23, d6579 as c24, d6580 as c25, d6581 as c26, d6582 as c27 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6583 as c28, d6584 as c29 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8716 as c30, d8717 as c31, d8718 as c32, d8719 as c33, d8721 as c37 } from '../descriptors/data/430.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8724 as c39, d8726 as c41 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c40 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5711 as c42 } from '../descriptors/data/252.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5711 as d5711 } from '../descriptors/data/252.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec120"]:c7(),["SharedCodec121"]:c8(),["SharedCodec1622"]:c9(),["SharedCodec1623"]:c10(),["SharedCodec1624"]:c11(),["SharedCodec1625"]:c12(),["SharedCodec1690"]:c13(),["SharedCodec1691"]:c14(),["SharedCodec1692"]:c15(),["SharedCodec1694"]:c16(),["SharedCodec1696"]:c17(),["SharedCodec1821"]:c18(),["SharedCodec1822"]:c19(),["SharedCodec1823"]:c20(),["SharedCodec1824"]:c21(),["SharedCodec333"]:c22(),["SharedCodec334"]:c23(),["SharedCodec335"]:c24(),["SharedCodec336"]:c25(),["SharedCodec337"]:c26(),["SharedCodec349"]:c27(),["SharedCodec350"]:c28(),["SharedCodec351"]:c29(),["SharedCodec432"]:c30(),["SharedCodec433"]:c31(),["SharedCodec434"]:c32(),["SharedCodec435"]:c33(),["SharedCodec836"]:c34(),["SharedCodec837"]:c35(),["SharedCodec838"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
