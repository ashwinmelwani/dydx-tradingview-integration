import DYDXConnector from './client';
import { PositionResponseObject } from '@dydxprotocol/v3-client';
import config = require('config');
import 'dotenv/config';

export const getPositions = async () => {
	try {
		const connector = await DYDXConnector.build();
		const positions: { positions: PositionResponseObject[] } = await client.private.getPosition(
  {
    market: Market.ETH_USD,
    status: PositionStatus.OPEN,
  },
);
		
		return position;
	} catch (error) {
		console.error(error);
	}
};
