import { d379 as c0 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c1, d5930 as c2, d5919 as c5 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c3 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6553 as c4, d6550 as c29, d6551 as c30, d6552 as c31 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c6 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c7 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6690 as c8, d6686 as c9 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8701 as c10, d8702 as c11, d8703 as c12, d8704 as c13, d8705 as c14, d8706 as c15, d8707 as c16, d8700 as c33 } from '../descriptors/data/429.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6577 as c17, d6578 as c18, d6579 as c19, d6580 as c20, d6581 as c21, d6582 as c22 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6583 as c23, d6584 as c24 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8716 as c25, d8717 as c26, d8718 as c27, d8719 as c28, d8721 as c32 } from '../descriptors/data/430.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8724 as c34, d8725 as c35 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c36 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d379 as d379 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec1622"]:c10(),["SharedCodec1623"]:c11(),["SharedCodec1624"]:c12(),["SharedCodec1625"]:c13(),["SharedCodec1626"]:c14(),["SharedCodec1627"]:c15(),["SharedCodec1628"]:c16(),["SharedCodec333"]:c17(),["SharedCodec334"]:c18(),["SharedCodec335"]:c19(),["SharedCodec336"]:c20(),["SharedCodec337"]:c21(),["SharedCodec349"]:c22(),["SharedCodec350"]:c23(),["SharedCodec351"]:c24(),["SharedCodec432"]:c25(),["SharedCodec433"]:c26(),["SharedCodec434"]:c27(),["SharedCodec435"]:c28(),["SharedCodec836"]:c29(),["SharedCodec837"]:c30(),["SharedCodec838"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
