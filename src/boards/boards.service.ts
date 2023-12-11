import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];
    // 게시글 목록 조회
    getAllBoards(): Board[] {
        return this.boards;
    }
    // 게시글 생성
    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
    // 게시글 상세 조회
    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }
    // 게시글 삭제
    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }
    // 게시글 수정
    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);

        board.status = status;
        return board;
    }
}
