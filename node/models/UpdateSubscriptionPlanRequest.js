import { d5903 as c0, d5904 as c1, d5893 as c4, d5895 as c13, d5896 as c14, d5894 as c15 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5910 as c2, d5915 as c16 } from '../descriptors/data/265.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6515 as c3, d6512 as c34, d6513 as c35, d6514 as c36 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c5 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6091 as c6 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6652 as c7, d6648 as c8 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8652 as c9, d8653 as c10, d8654 as c11, d8655 as c12, d8659 as c18, d8660 as c19, d8661 as c20, d8662 as c21, d8651 as c38 } from '../descriptors/data/422.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6222 as c17 } from '../descriptors/data/282.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6539 as c22, d6540 as c23 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c24, d6542 as c25, d6543 as c26, d6544 as c27, d6545 as c28, d6546 as c29 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8667 as c30, d8668 as c31, d8669 as c32, d8670 as c33, d8672 as c37 } from '../descriptors/data/423.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8675 as c39, d8677 as c41 } from '../descriptors/data/424.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c40 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5698 as c42 } from '../descriptors/data/251.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5698 as d5698 } from '../descriptors/data/251.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec120"]:c7(),["SharedCodec121"]:c8(),["SharedCodec1625"]:c9(),["SharedCodec1626"]:c10(),["SharedCodec1627"]:c11(),["SharedCodec1628"]:c12(),["SharedCodec1693"]:c13(),["SharedCodec1694"]:c14(),["SharedCodec1695"]:c15(),["SharedCodec1697"]:c16(),["SharedCodec1699"]:c17(),["SharedCodec1824"]:c18(),["SharedCodec1825"]:c19(),["SharedCodec1826"]:c20(),["SharedCodec1827"]:c21(),["SharedCodec333"]:c22(),["SharedCodec334"]:c23(),["SharedCodec335"]:c24(),["SharedCodec336"]:c25(),["SharedCodec337"]:c26(),["SharedCodec349"]:c27(),["SharedCodec350"]:c28(),["SharedCodec351"]:c29(),["SharedCodec426"]:c30(),["SharedCodec427"]:c31(),["SharedCodec428"]:c32(),["SharedCodec429"]:c33(),["SharedCodec831"]:c34(),["SharedCodec832"]:c35(),["SharedCodec833"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
