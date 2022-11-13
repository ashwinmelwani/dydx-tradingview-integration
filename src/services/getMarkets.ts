import DYDXConnector from './client';
import { MarketsResponseObject } from '@dydxprotocol/v3-client';
import config = require('config');
import 'dotenv/config';

export const getMarkets = async () => {
	try {
		const connector = await DYDXConnector.build();
		const markets: { markets: MarketsResponseObject } = await client.public.getMarkets(
  Market.ETH_USD,
);
		
		return markets;
	} catch (error) {
		console.error(error);
	}
};