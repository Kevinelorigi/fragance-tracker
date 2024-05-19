export interface Fragance {
	categories: Category[];
	features: { [key: string]: boolean };
	keyword: string;
	products: Product[];
	refinements: Refinement[];
	responseSource: string;
	totalProducts: number;
	userSegment: string;
}

export interface Category {
	displayName: string;
	level: string;
	nodeStr: string;
	recordCount: string;
	isSelected: boolean;
	subCategories: SubCategory[];
}

export interface SubCategory {
	displayName: string;
	level: string;
	nodeStr: string;
	recordCount: string;
}

export interface Product {
	brandName: BrandName;
	currentSku: CurrentSku;
	displayName: string;
	heroImage: string;
	image135: string;
	image250: string;
	image450: string;
	altImage?: string;
	onSaleData: OnSaleData;
	pickupEligible: boolean;
	productId: string;
	productName: string;
	rating: string;
	reviews: string;
	sameDayEligible: boolean;
	shipToHomeEligible: boolean;
	targetUrl: string;
	sponsored: boolean;
}

export type BrandName = 'Versace' | 'Gisou' | 'CHANEL';

export interface CurrentSku {
	imageAltText: string;
	isAppExclusive: boolean;
	isBI: boolean;
	isBest: boolean;
	isFirstAccess: boolean;
	isLimitedEdition: boolean;
	isLimitedTimeOffer: boolean;
	isNatural: boolean;
	isNew?: boolean;
	isOnlineOnly: boolean;
	isOrganic: boolean;
	isSephoraExclusive: boolean;
	listPrice: string;
	skuId: string;
	skuType: SkuType;
	valuePrice?: string;
}

export type SkuType = 'Standard';

export type OnSaleData = 'NONE';

export interface Refinement {
	displayName: string;
	type: string;
	values: Value[];
}

export interface Value {
	refinementValue: string;
	refinementValueDisplayName: string;
	refinementValueStatus: number;
	count?: number;
}
