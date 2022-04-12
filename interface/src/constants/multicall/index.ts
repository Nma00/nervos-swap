import { ChainId } from 'nervoswap-sdk'
import MULTICALL_ABI from './abi.json'
import { multicall as gwMulticall } from '../../gw_address.json'
import { multicall as ropstenMulticall } from '../../ropsten_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.GW]: gwMulticall,
  [ChainId.ROPSTEN]: ropstenMulticall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
