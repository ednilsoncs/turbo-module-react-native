import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;
  sub(a: number, b: number): Promise<number>;
}

export default TurboModuleRegistry.get<Spec>('RTNCalculator') as Spec | null;
