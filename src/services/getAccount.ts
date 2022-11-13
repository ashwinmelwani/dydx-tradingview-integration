import DYDXConnector from './client';
import { AccountResponseObject } from '@dydxprotocol/v3-client';
import config = require('config');
import 'dotenv/config';

export const getAccount = async () => {
	try {
		const connector = await DYDXConnector.build();
		const account: { account: AccountResponseObject } =
			await connector.client.private.getAccount(process.env.ETH_ADDRESS);

		if (Number(account.account.freeCollateral) == 0) {
			throw new Error('No freeCollateral. Deposit collateral first.');
		}
		return account;
	} catch (error) {
		console.error(error);
	}
};


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

export const getPositions = async () => {
	try {
		const connector = await DYDXConnector.build();
		const positions: { positions: PositionResponseObject[] } = await client.private.getPositions(
  {
    market: Market.ETH_USD,
    status: PositionStatus.OPEN,
  },
);
		
		return positions;
	} catch (error) {
		console.error(error);
	}
};
