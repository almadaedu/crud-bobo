import { Module } from '@nestjs/common';
import { PrismaService } from './prisma_service/prisma_service';

@Module({
  providers: [PrismaService]
})
export class CommonModule {}
