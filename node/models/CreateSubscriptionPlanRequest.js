import { d376 as c0 } from '../descriptors/data/23.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5903 as c1, d5904 as c2, d5893 as c5 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5910 as c3 } from '../descriptors/data/265.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6515 as c4, d6512 as c29, d6513 as c30, d6514 as c31 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c6 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6091 as c7 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6652 as c8, d6648 as c9 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8652 as c10, d8653 as c11, d8654 as c12, d8655 as c13, d8656 as c14, d8657 as c15, d8658 as c16, d8651 as c33 } from '../descriptors/data/422.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6539 as c17, d6540 as c18 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c19, d6542 as c20, d6543 as c21, d6544 as c22, d6545 as c23, d6546 as c24 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8667 as c25, d8668 as c26, d8669 as c27, d8670 as c28, d8672 as c32 } from '../descriptors/data/423.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8675 as c34, d8676 as c35 } from '../descriptors/data/424.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c36 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d376 as d376 } from '../descriptors/data/23.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d376;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec120"]:c8(),["SharedCodec121"]:c9(),["SharedCodec1625"]:c10(),["SharedCodec1626"]:c11(),["SharedCodec1627"]:c12(),["SharedCodec1628"]:c13(),["SharedCodec1629"]:c14(),["SharedCodec1630"]:c15(),["SharedCodec1631"]:c16(),["SharedCodec333"]:c17(),["SharedCodec334"]:c18(),["SharedCodec335"]:c19(),["SharedCodec336"]:c20(),["SharedCodec337"]:c21(),["SharedCodec349"]:c22(),["SharedCodec350"]:c23(),["SharedCodec351"]:c24(),["SharedCodec426"]:c25(),["SharedCodec427"]:c26(),["SharedCodec428"]:c27(),["SharedCodec429"]:c28(),["SharedCodec831"]:c29(),["SharedCodec832"]:c30(),["SharedCodec833"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
