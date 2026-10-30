import { d5 as c0 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5565 as c1 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c2 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5033 as c3, d5034 as c4, d5035 as c5, d5036 as c6, d5037 as c7, d5038 as c11, d5039 as c12, d5040 as c13, d5041 as c14, d5051 as c19, d5052 as c21, d5053 as c22, d5042 as c23, d5043 as c24, d5044 as c25, d5045 as c26, d5046 as c27, d5047 as c28, d5048 as c29, d5049 as c30, d5050 as c35 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c8 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c9 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5027 as c10, d5028 as c15, d5029 as c16, d5030 as c17, d5031 as c18, d5032 as c20 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5607 as c31, d5608 as c32, d5609 as c33 } from '../descriptors/data/253.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c34 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c36, d4331 as c37 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5 as d5 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["Dimensions"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequest"]:c6(),["LineItemFulfillmentRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequest"]:c11(),["OrderDraftLineItemTaxRequest"]:c12(),["OrderDraftTaxComponentRequest"]:c13(),["OrderDraftTaxJurisdictionRequest"]:c14(),["SharedCodec250"]:c15(),["SharedCodec251"]:c16(),["SharedCodec252"]:c17(),["SharedCodec253"]:c18(),["SharedCodec254"]:c19(),["SharedCodec255"]:c20(),["SharedCodec256"]:c21(),["SharedCodec257"]:c22(),["SharedCodec259"]:c23(),["SharedCodec260"]:c24(),["SharedCodec261"]:c25(),["SharedCodec262"]:c26(),["SharedCodec264"]:c27(),["SharedCodec265"]:c28(),["SharedCodec267"]:c29(),["SharedCodec268"]:c30(),["SharedCodec269"]:c31(),["SharedCodec270"]:c32(),["SharedCodec271"]:c33(),["SharedCodec602"]:c34(),["SubscribedLineRequest"]:c35(),["TextModifierRequest"]:c36(),["Weight"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
