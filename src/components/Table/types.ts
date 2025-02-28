enum Type {
	CLASSIC = 'CLASSIC',
	SERVER_SIDE = 'SERVER_SIDE',
	MVT = 'MVT',
}

export enum Status {
	DRAFT = 'DRAFT',
	ONLINE = 'ONLINE',
	PAUSED = 'PAUSED',
	STOPPED = 'STOPPED',
}

export interface Test {
	id: number
	name: string
	type: Type
	status: Status
	siteId: number
}

interface Site {
	id: number
	url: string
}

export interface EnrichedTest extends Test, Site {}

export type SortConfig = {
	key: keyof EnrichedTest
	direction: 'ASC' | 'DESC'
}
