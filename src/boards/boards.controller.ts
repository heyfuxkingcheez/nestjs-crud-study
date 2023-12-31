import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    // 게시글 목록 조회
    @Get()
    getAllboard(): Board[] {
        return this.boardsService.getAllBoards();
    }
    // 게시글 생성
    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }
    // 게시글 상세 조회
    @Get(':id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }
    // 게시글 삭제
    @Delete(':id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }
    // 게시글 수정
    @Patch(':id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
