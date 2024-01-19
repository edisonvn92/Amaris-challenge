// Generate code from clean architecture template

import { HomeHttpRepository } from '../adapters/repositories';
import { QueryHomePayload } from '@domains/home/ports/payloads';
import { FindAllHomeUsecase } from '@domains/home/usecases';

export default function HomeViewModel() {
  const findAllUC = new FindAllHomeUsecase(new HomeHttpRepository());

  const actionGetAll = (payload?: QueryHomePayload) => {
    // todo
  };
}
