import { Test, TestingModule } from '@nestjs/testing';
import { CatagoryTypeController } from './product-type.controller';

describe('CatagoryTypeController', () => {
  let controller: CatagoryTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatagoryTypeController],
    }).compile();

    controller = module.get<CatagoryTypeController>(CatagoryTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
