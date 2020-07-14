/// <reference types="node" />
interface Network {
    wif: number;
    bip32: {
        public: number;
        private: number;
    };
    messagePrefix?: string;
    bech32?: string;
    pubKeyHash?: number;
    scriptHash?: number;
}
export interface BIP32Interface {
    chainCode: Buffer;
    network: Network;
    lowR: boolean;
    depth: number;
    index: number;
    parentFingerprint: number;
    publicKey: Buffer;
    privateKey?: Buffer;
    identifier: Buffer;
    fingerprint: Buffer;
    isNeutered(): boolean;
    neutered(): BIP32Interface;
    toBase58(): string;
    toWIF(): string;
    derive(index: number): BIP32Interface;
    deriveHardened(index: number): BIP32Interface;
    derivePath(path: string): BIP32Interface;
    sign(hash: Buffer, lowR?: boolean): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
}
declare class BIP32 implements BIP32Interface {
    private __D;
    private __Q;
    chainCode: Buffer;
    network: Network;
    private __DEPTH;
    private __INDEX;
    private __PARENT_FINGERPRINT;
    lowR: boolean;
    constructor(__D: Buffer | undefined, __Q: Buffer | undefined, chainCode: Buffer, network: Network, __DEPTH?: number, __INDEX?: number, __PARENT_FINGERPRINT?: number);
    toJsObject(): {
        privateKey: Buffer | undefined;
        publicKey: Buffer | undefined;
        chainCode: Buffer;
        network: Network;
        depth: number;
        index: number;
        parentFingerprint: number;
    };
    readonly depth: number;
    readonly index: number;
    readonly parentFingerprint: number;
    readonly publicKey: Buffer;
    readonly privateKey: Buffer | undefined;
    readonly identifier: Buffer;
    readonly fingerprint: Buffer;
    isNeutered(): boolean;
    neutered(): BIP32Interface;
    toBase58(): string;
    toWIF(): string;
    derive(index: number): BIP32Interface;
    deriveHardened(index: number): BIP32Interface;
    derivePath(path: string): BIP32Interface;
    sign(hash: Buffer, lowR?: boolean): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
}
export declare function fromBase58(inString: string, network?: Network): BIP32Interface;
export declare function fromPrivateKey(privateKey: Buffer, chainCode: Buffer, network?: Network): BIP32Interface;
export declare function fromPublicKey(publicKey: Buffer, chainCode: Buffer, network?: Network): BIP32Interface;
export declare function fromSeed(seed: Buffer, network?: Network): BIP32Interface;
export declare function fromJsObject(obj: any): BIP32;
export {};
