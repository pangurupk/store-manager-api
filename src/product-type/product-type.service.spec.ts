import { Test, TestingModule } from '@nestjs/testing';
import { CatagoryTypeService } from './product-type.service';

describe('CatagoryTypeService', () => {
  let service: CatagoryTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatagoryTypeService],
    }).compile();

    service = module.get<CatagoryTypeService>(CatagoryTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
