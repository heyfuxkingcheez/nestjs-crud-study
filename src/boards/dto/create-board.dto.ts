import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
    // pipe validation
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}
