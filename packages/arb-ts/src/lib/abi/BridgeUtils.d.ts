/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface BridgeUtilsInterface extends ethers.utils.Interface {
  functions: {
    'getCountsAndAccumulators(address,address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'getCountsAndAccumulators',
    values: [string, string]
  ): string

  decodeFunctionResult(
    functionFragment: 'getCountsAndAccumulators',
    data: BytesLike
  ): Result

  events: {}
}

export class BridgeUtils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: BridgeUtilsInterface

  functions: {
    getCountsAndAccumulators(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber], [string, string]] & {
        counts: [BigNumber, BigNumber]
        accs: [string, string]
      }
    >

    'getCountsAndAccumulators(address,address)'(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber], [string, string]] & {
        counts: [BigNumber, BigNumber]
        accs: [string, string]
      }
    >
  }

  getCountsAndAccumulators(
    delayedBridge: string,
    sequencerInbox: string,
    overrides?: CallOverrides
  ): Promise<
    [[BigNumber, BigNumber], [string, string]] & {
      counts: [BigNumber, BigNumber]
      accs: [string, string]
    }
  >

  'getCountsAndAccumulators(address,address)'(
    delayedBridge: string,
    sequencerInbox: string,
    overrides?: CallOverrides
  ): Promise<
    [[BigNumber, BigNumber], [string, string]] & {
      counts: [BigNumber, BigNumber]
      accs: [string, string]
    }
  >

  callStatic: {
    getCountsAndAccumulators(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber], [string, string]] & {
        counts: [BigNumber, BigNumber]
        accs: [string, string]
      }
    >

    'getCountsAndAccumulators(address,address)'(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber], [string, string]] & {
        counts: [BigNumber, BigNumber]
        accs: [string, string]
      }
    >
  }

  filters: {}

  estimateGas: {
    getCountsAndAccumulators(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getCountsAndAccumulators(address,address)'(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getCountsAndAccumulators(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getCountsAndAccumulators(address,address)'(
      delayedBridge: string,
      sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
